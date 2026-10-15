import { describe, expect, it } from "vitest";
import { courses, getCourseBySlug } from "@/data/courses";
import { kubernetesCoachingCourses } from "@/data/coursesKubernetes";

const expected = [
  ["cka-certified-kubernetes-administrator", 3600, 730, 4330, 4],
  ["ckad-certified-kubernetes-application-developer", 2200, 730, 2930, 3],
  ["kubestronaut-programme", 4400, 2680, 7080, 4],
  ["red-hat-certified-openshift-administrator", 5500, 820, 6320, 4],
] as const;

describe("Kubernetes coaching requirements", () => {
  for (const [slug, training, exam, total, days] of expected) {
    const course = getCourseBySlug(slug);
    it(`${slug} has the supplied training fee`, () => expect(course?.feeBreakdown?.training).toBe(training));
    it(`${slug} has the supplied exam fee`, () => expect(course?.feeBreakdown?.exam).toBe(exam));
    it(`${slug} has the supplied total`, () => {
      expect(course?.feeBreakdown?.total).toBe(total);
      expect((course?.feeBreakdown?.training || 0) + (course?.feeBreakdown?.exam || 0)).toBe(total);
    });
    it(`${slug} has the supplied training days`, () => expect(course?.schedule).toHaveLength(days));
    it(`${slug} excludes additional 9% GST`, () => expect(course?.gstNote).toContain("exclude GST, which is charged in addition at the prevailing rate (currently 9%)"));
    it(`${slug} keeps unknown dates and cancellation overrides unset`, () => {
      expect(course?.nextRunDate).toBe("");
      expect(course?.trainingDates).toBeUndefined();
      expect(course?.cancellationProcessingFee).toBeUndefined();
    });
    it(`${slug} is a single Cloud and DevOps course`, () => {
      expect(courses.filter(c => c.slug === slug)).toHaveLength(1);
      expect(course?.category).toBe("Cloud and DevOps");
      expect(course?.routePath).toBe(`/courses/${slug}`);
    });
  }
  it("preserves the old CKA link without duplicate records", () => {
    expect(getCourseBySlug("certified-kubernetes-administrator-preparation")).toBe(getCourseBySlug("cka-certified-kubernetes-administrator"));
    expect(courses.filter(c => c.slug === "certified-kubernetes-administrator-preparation")).toHaveLength(0);
  });
  it("limits Kubestronaut training to CKS and highlights CKA before CKS", () => {
    const course = getCourseBySlug("kubestronaut-programme");
    expect(course?.importantInfo?.[0]).toContain("KCNA, KCSA, CKA and CKAD are exam vouchers only, with no classroom training included");
    expect(course?.prerequisitesNote).toContain("You must pass the CKA exam (using the CKA voucher included in your bundle) before you sit the CKS exam");
  });
  it("provides Singapore personalised coaching and the supplied daily hours", () => {
    for (const course of kubernetesCoachingCourses) {
      expect(course.deliveryMode).toBe("1-to-1 or small-group coaching");
      expect(course.dailySchedule).toBe("9:00am – 5:00pm (8 hours per day, including breaks)");
      expect(course.learningFormat?.mode).toContain("In-person, instructor-led training in Singapore");
    }
  });
});