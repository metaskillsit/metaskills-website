import { useEffect, useRef } from "react";

const vertexShader = `#version 300 es
void main() {
  vec2 point = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(point * 2.0 - 1.0, 0.0, 1.0);
}`;

const fragmentShader = `#version 300 es
precision highp float;

out vec4 fragColor;
uniform vec2 uResolution;
uniform float uTime;

float hash(vec2 point) {
  point = fract(point * vec2(123.34, 456.21));
  point += dot(point, point + 45.32);
  return fract(point.x * point.y);
}

float noise(vec2 point) {
  vec2 cell = floor(point);
  vec2 fraction = fract(point);
  fraction = fraction * fraction * (3.0 - 2.0 * fraction);
  return mix(
    mix(hash(cell), hash(cell + vec2(1.0, 0.0)), fraction.x),
    mix(hash(cell + vec2(0.0, 1.0)), hash(cell + vec2(1.0)), fraction.x),
    fraction.y
  );
}

float field(vec2 point) {
  float value = 0.0;
  float strength = 0.52;
  for (int index = 0; index < 4; index++) {
    value += noise(point) * strength;
    point = mat2(1.58, -1.21, 1.21, 1.58) * point + 2.7;
    strength *= 0.48;
  }
  return value;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float time = uTime * 0.028;

  vec2 drift = vec2(field(uv * 1.15 + vec2(time, -time * 0.65)),
                    field(uv * 1.15 + vec2(4.7 - time * 0.55, 1.8 + time)));
  float cloud = field(uv * 2.05 + drift * 1.7);
  float veil = smoothstep(0.43, 0.84, cloud);

  vec2 galaxyPoint = uv;
  galaxyPoint.x *= 0.72;
  float radius = length(galaxyPoint - vec2(0.17, 0.05));
  float angle = atan(galaxyPoint.y - 0.05, galaxyPoint.x - 0.17);
  float arm = 0.5 + 0.5 * sin(angle * 3.0 - radius * 14.0 + time * 7.0 + cloud * 4.0);
  float galaxy = arm * exp(-radius * 2.1) * veil;

  vec2 starGrid = gl_FragCoord.xy / 5.0;
  float starSeed = hash(floor(starGrid));
  float stars = step(0.984, starSeed) * pow(hash(floor(starGrid) + 7.3), 6.0);
  stars *= 0.55 + 0.45 * sin(uTime * 0.45 + starSeed * 28.0);

  vec3 navy = vec3(0.012, 0.020, 0.040);
  vec3 darkGold = vec3(0.38, 0.24, 0.05);
  vec3 editorialGold = vec3(0.88, 0.61, 0.12);
  vec3 colour = mix(navy, darkGold, veil * 0.58);
  colour = mix(colour, editorialGold, galaxy * 0.72 + stars * 0.76);

  float alpha = veil * 0.3 + galaxy * 0.72 + stars * 0.82;
  alpha *= smoothstep(1.15, 0.25, radius);
  fragColor = vec4(colour, alpha);
}`;

function compileShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function HeroGalaxyShimmer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });
    if (!canvas || !gl) return;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    gl.bindVertexArray(gl.createVertexArray());

    const resolution = gl.getUniformLocation(program, "uResolution");
    const time = gl.getUniformLocation(program, "uTime");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let visible = true;
    let previous = performance.now();
    let clock = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolution, width, height);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    observer.observe(canvas);

    const render = (now: number) => {
      frameId = requestAnimationFrame(render);
      if (!visible || document.hidden) return;
      const delta = Math.min(now - previous, 50);
      previous = now;
      if (!reducedMotion) clock += delta * 0.001;
      resize();
      gl.uniform1f(time, reducedMotion ? 12 : clock);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    frameId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-galaxy-shimmer" aria-hidden="true" />;
}