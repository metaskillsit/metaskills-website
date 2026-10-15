import { describe, expect, it } from "vitest";
import { courses, getCourseBySlug } from "@/data/courses";
import { applyCancellationProcessingFee } from "@/lib/coursePolicies";

const aws = getCourseBySlug("aws-certified-solutions-architect-associate");
const redHat = getCourseBySlug("red-hat-enterprise-linux-rhcsa-preparation");

describe("Cloud certification course requirements", () => {
  it("keeps one AWS course and resolves the old inbound slug to it", () => {
    expect(courses.filter(course => course.slug === "aws-certified-solutions-architect-associate")).toHaveLength(1);
    expect(courses.filter(course => course.slug === "aws-solutions-architect-associate-preparation")).toHaveLength(0);
    expect(getCourseBySlug("aws-solutions-architect-associate-preparation")).toBe(aws);
  });
  it("keeps AWS in Cloud and DevOps", () => expect(aws?.category).toBe("Cloud and DevOps"));
  it("sets the training fee to SGD 2700", () => expect(aws?.feeBreakdown?.training).toBe(2700));
  it("includes one official exam attempt at SGD 250", () => expect(aws?.feeBreakdown?.exam).toBe(250));
  it("sets the offer total to SGD 2950", () => {
    expect(aws?.feeBreakdown?.total).toBe(2950);
    expect((aws?.feeBreakdown?.training || 0) + (aws?.feeBreakdown?.exam || 0)).toBe(2950);
  });
  it("applies the supplied 9% GST as additional, not an exemption", () => expect(aws?.gstNote).toContain("exclude GST, which is charged in addition at the prevailing rate (currently 9%)"));
  it("sets the course duration to three days and 24 hours", () => expect(aws?.duration).toBe("3 days (24 hours)"));
  it("uses the supplied daily hours including breaks", () => expect(aws?.dailySchedule).toBe("9:00am – 5:00pm (8 hours per day, including breaks)"));
  it("offers both personalised coaching formats", () => expect(aws?.deliveryMode).toBe("1-to-1 or small-group coaching"));
  it("keeps unknown dates out", () => { expect(aws?.trainingDates).toBeUndefined(); expect(aws?.nextRunDate).toBe(""); });
  it("preserves existing cancellation processing for AWS and Red Hat", () => {
    expect(aws?.cancellationProcessingFee).toBeUndefined();
    expect(redHat?.cancellationProcessingFee).toBeUndefined();
    expect(applyCancellationProcessingFee("SGD 900 processing fee", aws?.cancellationProcessingFee)).toBe("SGD 900 processing fee");
  });
  it("sets RHCSA training to SGD 3000", () => expect(redHat?.fees.selfSponsored).toBe("S$3,000 per participant"));
  it("sets RHCSA exam to SGD 820", () => expect(redHat?.optionalAddOns?.[0].price).toBe("S$820 per participant"));
  it("updates CKA training and exam rates from the new brief", () => {
    const cka = getCourseBySlug("certified-kubernetes-administrator-preparation");
    expect(cka?.feeBreakdown?.training).toBe(3600);
    expect(cka?.feeBreakdown?.exam).toBe(730);
  });
});