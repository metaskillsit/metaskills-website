import { describe, it, expect } from "vitest";
import { courses } from "@/data/courses";

const repriced = [
  "ai-strategy-roadmap-leaders",
  "ai-accountability-when-ai-decides",
  "governing-ai-agents-trust-boundaries",
];

describe("AI Leadership and Governance pricing", () => {
  it.each(repriced)("%s is S$15,000 per corporate run and S$1,500 per pax per day", (slug) => {
    const c = courses.find((x) => x.slug === slug)!;
    expect(c.fees.selfSponsored).toBe("S$1,500 per pax per day");
    expect(c.fees.corporateSmall).toBe("S$15,000/run");
    expect(c.fees.corporateLarge).toBe("S$15,000/run");
  });

  it("AI Wargaming keeps its existing price after moving to Offensive & Advanced Cyber", () => {
    const c = courses.find((x) => x.slug === "ai-wargaming-test-decisions")!;
    expect(c.fees.corporateSmall).toBe("S$10,000/run");
  });
});
