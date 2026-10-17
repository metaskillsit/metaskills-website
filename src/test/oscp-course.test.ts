import { describe, expect, it } from "vitest";
import { courses, getCourseBySlug } from "@/data/courses";
import { cloudGroupedCourses } from "@/data/programmesCloudGroups";

const slug = "oscp-offsec-certified-professional";
const course = getCourseBySlug(slug);

describe("Supplied OSCP requirements", () => {
  it("charges SGD 7800 for training", () => expect(course?.feeBreakdown?.training).toBe(7800));
  it("charges SGD 3250 for the OffSec bundle", () => expect(course?.feeBreakdown?.exam).toBe(3250));
  it("totals SGD 11050 before GST", () => {
    expect(course?.feeBreakdown?.total).toBe(11050);
    expect((course?.feeBreakdown?.training || 0) + (course?.feeBreakdown?.exam || 0)).toBe(11050);
  });
  it("adds prevailing 9% GST", () => expect(course?.gstNote).toContain("exclude GST, which is charged in addition at the prevailing rate (currently 9%)"));
  it("provides five days and 40 hours", () => {
    expect(course?.schedule).toHaveLength(5);
    expect(course?.duration).toBe("5 days (40 hours)");
    expect(course?.dailySchedule).toBe("9:00am – 5:00pm (8 hours per day, including breaks)");
  });
  it("does not invent dates or change cancellation fees", () => {
    expect(course?.nextRunDate).toBe("");
    expect(course?.trainingDates).toBeUndefined();
    expect(course?.cancellationProcessingFee).toBeUndefined();
    expect(course?.fundingStatus).toBeUndefined();
  });
  it("uses one Cloud and DevOps record and the requested URL", () => {
    expect(courses.filter(item => item.slug === slug)).toHaveLength(1);
    expect(course?.category).toBe("Cloud and DevOps");
    expect(course?.routePath).toBe(`/courses/${slug}`);
    expect(cloudGroupedCourses.filter(item => item.slug === course?.routePath)).toHaveLength(1);
  });
});