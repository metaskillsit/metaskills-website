import { describe, expect, it } from "vitest";
import { courses, getCourseBySlug } from "@/data/courses";
import { octoberCourses } from "@/data/coursesOctober";
import { getCourseSchedule } from "@/data/courseSchedule";
import { applyCancellationProcessingFee } from "@/lib/coursePolicies";

describe("October programme requirements", () => {
 it("preserves the existing AI course slug with no duplicate", () => {
   expect(courses.filter(c => c.slug === "build-operational-tools-ai-coding-agents")).toHaveLength(1);
 });
 it("moves AI to the existing Vibe Coding track", () => {
   expect(getCourseBySlug("build-operational-tools-ai-coding-agents")?.category).toBe("Vibe Coding");
   expect(getCourseBySlug("build-operational-tools-ai-coding-agents")?.categoryAnchor).toBe("vibe-coding");
 });
 it("sets AI fee to S$600 per participant", () => expect(octoberCourses[0].fees.selfSponsored).toBe("S$600 per participant"));
 it("sets AI run to 6 November 2026", () => expect(octoberCourses[0].trainingDates).toEqual(["2026-11-06"]));
 it("sets AI duration to one day", () => expect(octoberCourses[0].duration).toBe("1 day"));
 for (const slug of ["comptia-a-plus-certification-preparation", "comptia-cysa-plus-certification-preparation"]) {
  it(`${slug} belongs to Track 10`, () => expect(getCourseBySlug(slug)?.categoryAnchor).toBe("mcc-foundations"));
  it(`${slug} costs S$2,500 training only`, () => expect(getCourseBySlug(slug)?.fees.selfSponsored).toBe("S$2,500 per participant — training fee only"));
  it(`${slug} is five training days`, () => expect(getCourseBySlug(slug)?.duration).toBe("5 training days"));
  it(`${slug} has no cancellation override`, () => expect(getCourseBySlug(slug)?.cancellationProcessingFee).toBeUndefined());
 }
 it("preserves the existing distinct MCC+ elective", () => expect(getCourseBySlug("mcc-plus-threat-hunting-blue-team")?.duration).toBe("1 Day Add-On"));
 it("keeps A+ dates non-consecutive", () => expect(octoberCourses[1].trainingDates).toEqual(["2027-01-22", "2027-01-26", "2027-01-27", "2027-01-28", "2027-01-29"]));
 it("sets CySA+ to 8–12 February", () => expect(octoberCourses[2].trainingDates).toEqual(["2027-02-08", "2027-02-09", "2027-02-10", "2027-02-11", "2027-02-12"]));
 it("makes the supplied upcoming schedule available", () => expect(getCourseSchedule(octoberCourses[1].slug)[0].dates).toBe("22, 26, 27, 28 and 29 January 2027 — 5 training days"));
 it("overrides only AI processing fee to SGD 200", () => {
   const text = "Up to 30 days before: Full refund minus SGD 900 processing fee. 30 days or less: No refund.";
   expect(applyCancellationProcessingFee(text, octoberCourses[0].cancellationProcessingFee)).toBe("Up to 30 days before: Full refund minus SGD 200 processing fee. 30 days or less: No refund.");
   expect(applyCancellationProcessingFee(text)).toBe(text);
 });
 it("keeps registration preview-only", () => expect(octoberCourses.every(course => course.reviewPreview)).toBe(true));
});
