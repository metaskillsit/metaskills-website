import { describe, expect, it } from "vitest";
import {
  cloudCourseGroups,
  cloudGroupLabelKey,
  cloudGroupedCourses,
  type CloudCourseGroup,
} from "@/data/programmesCloudGroups";
import en from "@/i18n/locales/en.json";
import zh from "@/i18n/locales/zh.json";
import vi from "@/i18n/locales/vi.json";

const slugsInGroup = (group: CloudCourseGroup) =>
  cloudGroupedCourses.filter((course) => course.group === group).map((course) => course.slug);

describe("Cloud and DevOps programme grouping", () => {
  it("keeps established subgroups in order with offensive security last", () => {
    expect(cloudCourseGroups.map((group) => group.id)).toEqual(["aws", "kubernetes", "linux", "security"]);
  });

  it("keeps both AWS architecture courses together", () => {
    expect(slugsInGroup("aws")).toEqual([
      "aws-certified-solutions-architect-associate",
      "aws-cloud-solutions-architecture-devops",
    ]);
  });

  it("keeps the four container platform courses together", () => {
    expect(slugsInGroup("kubernetes")).toEqual([
      "/courses/cka-certified-kubernetes-administrator",
      "/courses/ckad-certified-kubernetes-application-developer",
      "/courses/kubestronaut-programme",
      "/courses/red-hat-certified-openshift-administrator",
    ]);
  });

  it("keeps both Red Hat administration and learning courses together", () => {
    expect(slugsInGroup("linux")).toEqual([
      "red-hat-enterprise-linux-rhcsa-preparation",
      "/programmes/cloud-devops-ai/red-hat-learning-subscription",
    ]);
  });

  it("shows each subgroup once and never repeats a course", () => {
    const order = cloudGroupedCourses.map((course) => course.group);
    const blocks = order.filter((group, index) => group !== order[index - 1]);
    expect(blocks).toEqual(["aws", "kubernetes", "linux", "security"]);
    expect(new Set(cloudGroupedCourses.map((course) => course.slug)).size).toBe(
      cloudGroupedCourses.length
    );
  });

  it("supplies a subgroup label in every supported language", () => {
    for (const group of cloudCourseGroups) {
      expect(cloudGroupLabelKey(group.id)).toBe(group.labelKey);
      const key = group.labelKey.replace("programmes.", "");
      for (const locale of [en, zh, vi] as { programmes: Record<string, string> }[]) {
        expect(locale.programmes[key]).toBeTruthy();
      }
    }
  });
});
