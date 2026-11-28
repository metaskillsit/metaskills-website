import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { phanPhiLong } from "@/data/facultyPhanPhiLong";

const locales = ["en", "zh", "vi"] as const;

describe("Phan Phi Long faculty profile", () => {
  it("shows the supplied title", () => {
    expect(phanPhiLong.role).toBe("CTO & Lead Technical Faculty, Metaskills Institute");
  });

  it("shows the supplied expertise line", () => {
    expect(phanPhiLong.expertise).toBe(
      "CLOUD & DEVOPS ENGINEERING | ENTERPRISE LINUX (RHCSA) | GENERATIVE & AGENTIC AI | IT TRANSFORMATION | ACLP 2.0",
    );
  });

  it("carries the supplied biography facts", () => {
    expect(phanPhiLong.bio).toContain("cloud lab architecture");
    expect(phanPhiLong.bio).toContain("AWS DevOps engineering");
    expect(phanPhiLong.bio).toContain("Red Hat Enterprise Linux (RHEL 9 & RHEL 10) administration");
    expect(phanPhiLong.bio).toContain("Way4SME Pte Ltd and VASSS Pte Ltd");
    expect(phanPhiLong.bio).toContain("Tetra Pak Singapore and Saigon Co.op");
    expect(phanPhiLong.bio).toContain(
      "Co-Founder and Deputy President of the Singapore-Vietnam Chamber of Commerce (VietCham Singapore)",
    );
    expect(phanPhiLong.bio).toContain("Nanyang Technological University");
    expect(phanPhiLong.bio).toContain("WSQ ACLP 2.0, PMP, ITIL Advanced, and CEH credentials");
  });

  it("drops the retired biography claims", () => {
    for (const stale of [
      "Claude, ChatGPT",
      "Regulus Investment",
      "Ho Chi Minh City Banking Institute",
      "multi-asset trading",
      "Vietnamese Association in Singapore",
    ]) {
      expect(phanPhiLong.bio).not.toContain(stale);
    }
  });

  it("is translated in every locale with the same four paragraphs", () => {
    for (const loc of locales) {
      const raw = readFileSync(`src/i18n/locales/${loc}.json`, "utf-8");
      const entry = JSON.parse(raw).facultyProfiles.phanPhiLong;
      expect(entry.role.length).toBeGreaterThan(0);
      expect(entry.expertise.length).toBeGreaterThan(0);
      expect(entry.bio.split("\n")).toHaveLength(4);
    }
  });

  it("is listed in both the executive and Cybersecurity and DevOps team sections", () => {
    const page = readFileSync("src/pages/FacultyPage.tsx", "utf-8");
    const cyberTeam = page.slice(
      page.indexOf("const cyberTeam: FacultyMember[] = ["),
      page.indexOf("const useFacultyTranslation"),
    );
    expect(cyberTeam).toContain("...phanPhiLong");
    expect(page.slice(0, page.indexOf("const advisoryTeam"))).toContain("...phanPhiLong");
    expect(cyberTeam).toContain('anchorKey: "Phan Phi Long Cybersecurity and DevOps"');
  });
});
