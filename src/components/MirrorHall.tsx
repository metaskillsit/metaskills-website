import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

/**
 * Mirror Hall (GetLayers) — rotunda of glowing, cylinder-bowed cards standing on a
 * near-black reflective pool. Drag to spin with inertia; pointer leaves ripples on the water.
 * Re-skinned to the Metaskills navy / gold palette.
 */

export type MirrorCard = { name: string; image: string; objectTop?: boolean };

type Props = {
  cards: MirrorCard[];
  index: number;
  onIndexChange: (i: number) => void;
  onOpen: (i: number) => void;
};

// Scene palette (WebGL can't read Tailwind tokens; mirrors --primary gold & navy)
const NAVY = 0xfaf8f5;
const GOLD = new THREE.Color("#ffb81c");
const WATER_TINT = new THREE.Color("#efe8dc");

const CARD_W = 1.2;
const CARD_H = 1.6;
const GAP = 0.32;

function curvedCardGeo(w: number, h: number, r: number) {
  const g = new THREE.PlaneGeometry(w, h, 32, 1);
  const p = g.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i);
    const u = x / r;
    p.setX(i, Math.sin(u) * r);
    p.setZ(i, r * (1 - Math.cos(u)));
  }
  g.computeVertexNormals();
  return g;
}

function drawCard(img: HTMLImageElement | null, name: string, top: boolean) {
  const c = document.createElement("canvas");
  c.width = 600;
  c.height = 800;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#0b1426";
  ctx.fillRect(0, 0, c.width, c.height);
  if (img && img.naturalWidth) {
    const s = Math.max(c.width / img.naturalWidth, c.height / img.naturalHeight);
    const w = img.naturalWidth * s;
    const h = img.naturalHeight * s;
    ctx.drawImage(img, (c.width - w) / 2, top ? 0 : (c.height - h) / 2, w, h);
  }
  const grad = ctx.createLinearGradient(0, c.height * 0.55, 0, c.height);
  grad.addColorStop(0, "rgba(5,10,22,0)");
  grad.addColorStop(1, "rgba(5,10,22,0.85)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  let size = 50;
  ctx.font = `500 ${size}px "Playfair Display", Georgia, serif`;
  while (ctx.measureText(name).width > c.width - 60 && size > 28) {
    size -= 2;
    ctx.font = `500 ${size}px "Playfair Display", Georgia, serif`;
  }
  ctx.shadowColor = "rgba(0,0,0,0.6)";
  ctx.shadowBlur = 12;
  ctx.fillText(name, c.width / 2, c.height - 50);
  // gold hairline frame
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(255,184,28,0.55)";
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, c.width - 4, c.height - 4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

const waterShader = {
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
    uTime: { value: 0 },
    uRipple: { value: new THREE.Vector3(0, 0, -10) },
    uTint: { value: WATER_TINT },
    uGold: { value: GOLD },
  },
  vertexShader: /* glsl */ `
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec3 uRipple;
    uniform vec3 uTint;
    uniform vec3 uGold;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 p = vWorld.xz;
      float w = sin(p.x * 3.1 + uTime * 0.9) * 0.5 + sin(p.y * 4.3 - uTime * 0.7) * 0.5;
      float age = uTime - uRipple.z;
      float d = distance(p, uRipple.xy);
      float ring = sin(d * 18.0 - age * 7.0) * exp(-d * 1.4) * exp(-age * 1.3) * step(0.0, age);
      vec4 uv = vUv;
      uv.xy += (w * 0.012 + ring * 0.05) * uv.w;
      vec3 refl = texture2DProj(tDiffuse, uv).rgb;
      float dist = length(p);
      float fres = clamp(0.35 + 0.65 * (1.0 - exp(-dist * 0.12)), 0.0, 1.0);
      float fade = smoothstep(0.0, 1.0, clamp(dist * 0.18, 0.0, 1.0));
      vec3 col = mix(refl * 0.55 + uTint * 0.45, uTint, 0.35 + fade * 0.4);
      col += uGold * max(ring, 0.0) * 0.18;
      col -= vec3(0.05, 0.045, 0.03) * abs(w) * 0.4;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
};

const MirrorHall = ({ cards, index, onIndexChange, onOpen }: Props) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const api = useRef<{ goTo: (i: number) => void } | null>(null);
  const cbs = useRef({ onIndexChange, onOpen });
  cbs.current = { onIndexChange, onOpen };
  const lastReported = useRef(index);

  useEffect(() => {
    const mount = mountRef.current!;
    const N = cards.length;
    const step = (Math.PI * 2) / N;
    const R = (N * (CARD_W + GAP)) / (Math.PI * 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(NAVY, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "pan-y";

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(NAVY, R * 1.0, R * 2.4);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.05, 100);
    camera.position.set(0, 0.45, -R * 0.42);
    camera.lookAt(0, 0.25, -R);

    const ring = new THREE.Group();
    scene.add(ring);
    const geo = curvedCardGeo(CARD_W, CARD_H, R);
    const meshes: THREE.Mesh[] = [];
    const mats: THREE.MeshBasicMaterial[] = [];
    const placeholder = drawCard(null, "", false);

    cards.forEach((card, i) => {
      const mat = new THREE.MeshBasicMaterial({ map: placeholder, side: THREE.FrontSide, fog: true });
      const mesh = new THREE.Mesh(geo, mat);
      const a = i * step;
      mesh.position.set(Math.sin(a) * R, CARD_H / 2 - 0.35, -Math.cos(a) * R);
      mesh.rotation.y = -a;
      mesh.userData.i = i;
      ring.add(mesh);
      meshes.push(mesh);
      mats.push(mat);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const tex = drawCard(img, card.name, !!card.objectTop);
        mat.map = tex;
        mat.needsUpdate = true;
      };
      img.onerror = () => {
        if (img.src.includes(".webp")) img.src = img.src.replace(".webp", ".jpg");
        else { mat.map = drawCard(null, card.name, false); mat.needsUpdate = true; }
      };
      img.src = card.image;
    });

    const water = new Reflector(new THREE.PlaneGeometry(R * 4, R * 4), {
      shader: waterShader,
      textureWidth: 1024,
      textureHeight: 1024,
      clipBias: 0.003,
    });
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.36;
    scene.add(water);
    const wu = (water.material as THREE.ShaderMaterial).uniforms;

    // ---- interaction ----
    let theta = index * step;
    let target = theta;
    let vel = 0;
    let dragging = false;
    let lastX = 0;
    let downX = 0;
    let lastT = 0;
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const waterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.36);
    const clock = new THREE.Clock();

    const setNdc = (e: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
    };
    const DRAG = 0.0045;
    const down = (e: PointerEvent) => {
      dragging = true;
      downX = lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
      renderer.domElement.setPointerCapture(e.pointerId);
      renderer.domElement.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      setNdc(e);
      const hit = new THREE.Vector3();
      if (ray.ray.intersectPlane(waterPlane, hit) && !reduced) {
        const t = clock.getElapsedTime();
        if (t - wu.uRipple.value.z > 0.6) wu.uRipple.value.set(hit.x, hit.z, t);
      }
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      theta -= dx * DRAG;
      target = theta;
      vel = (-dx * DRAG) / Math.max(1, now - lastT) * 16;
      lastX = e.clientX;
      lastT = now;
    };
    const up = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      renderer.domElement.style.cursor = "grab";
      if (Math.abs(e.clientX - downX) < 6) {
        setNdc(e);
        const hit = ray.intersectObjects(meshes)[0];
        if (hit) {
          const i = hit.object.userData.i as number;
          const front = ((Math.round(theta / step) % N) + N) % N;
          if (i === front) cbs.current.onOpen(i);
          else api.current?.goTo(i);
        }
        return;
      }
      // inertia → snap
      const projected = theta + vel * 18;
      target = Math.round(projected / step) * step;
    };
    renderer.domElement.addEventListener("pointerdown", down);
    renderer.domElement.addEventListener("pointermove", move);
    renderer.domElement.addEventListener("pointerup", up);
    renderer.domElement.addEventListener("pointercancel", up);
    renderer.domElement.style.cursor = "grab";

    api.current = {
      goTo: (i: number) => {
        const cur = Math.round(target / step);
        let diff = (((i - cur) % N) + N) % N;
        if (diff > N / 2) diff -= N;
        target = (cur + diff) * step;
      },
    };

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.fov = w < 640 ? 70 : 55;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(mount);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!dragging) theta += (target - theta) * (1 - Math.exp(-(reduced ? 20 : 5) * dt));
      ring.rotation.y = theta;
      wu.uTime.value = reduced ? 0 : clock.elapsedTime;
      const front = ((Math.round(theta / step) % N) + N) % N;
      meshes.forEach((m, i) => {
        let d = Math.abs(i - front);
        d = Math.min(d, N - d);
        const s = i === front ? 1.06 : 1;
        m.scale.x += (s - m.scale.x) * 0.12;
        m.scale.y = m.scale.x;
        const c = d === 0 ? 1 : Math.max(0.35, 1 - d * 0.2);
        mats[i].color.setScalar(c);
      });
      if (front !== lastReported.current) {
        lastReported.current = front;
        cbs.current.onIndexChange(front);
      }
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      api.current = null;
      renderer.domElement.removeEventListener("pointerdown", down);
      renderer.domElement.removeEventListener("pointermove", move);
      renderer.domElement.removeEventListener("pointerup", up);
      renderer.domElement.removeEventListener("pointercancel", up);
      geo.dispose();
      mats.forEach((m) => { m.map?.dispose(); m.dispose(); });
      water.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  useEffect(() => {
    if (index !== lastReported.current) {
      lastReported.current = index;
      api.current?.goTo(index);
    }
  }, [index]);

  return <div ref={mountRef} className="absolute inset-0 overflow-hidden rounded-sm" aria-hidden="true" />;
};

export default MirrorHall;
