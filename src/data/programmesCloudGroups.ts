import { kubernetesCoachingCourses } from "@/data/coursesKubernetes";

export type CloudCourseGroup = "aws" | "kubernetes" | "linux";

export type CloudGroupedCourse = {
  group: CloudCourseGroup;
  name: string;
  slug: string;
  isExternal?: boolean;
  /** Optional courses.* locale key used instead of the literal name. */
  titleKey?: string;
};

/** Subgroup order and label keys for the Cloud and DevOps track. */
export const cloudCourseGroups: { id: CloudCourseGroup; labelKey: string }[] = [
  { id: "aws", labelKey: "programmes.cloudGroupAws" },
  { id: "kubernetes", labelKey: "programmes.cloudGroupKubernetes" },
  { id: "linux", labelKey: "programmes.cloudGroupLinux" },
];

/** Cloud and DevOps courses, grouped so related offerings sit together. */
export const cloudGroupedCourses: CloudGroupedCourse[] = [
  {
    group: "aws",
    name: "AWS Certified Solutions Architect – Associate",
    slug: "aws-certified-solutions-architect-associate",
  },
  {
    group: "aws",
    name: "Advanced Certificate in AWS Cloud Solutions Architecture and DevOps Engineering",
    slug: "aws-cloud-solutions-architecture-devops",
    titleKey: "awsCloudDevOps",
  },
  ...kubernetesCoachingCourses.map(
    (course): CloudGroupedCourse => ({
      group: "kubernetes",
      name: course.title,
      slug: course.routePath || `/courses/${course.slug}`,
      isExternal: true,
    })
  ),
  {
    group: "linux",
    name: "Red Hat Enterprise Linux Administration – RHCSA Preparation",
    slug: "red-hat-enterprise-linux-rhcsa-preparation",
  },
  {
    group: "linux",
    name: "Red Hat Learning Subscription – Standard & Premium",
    slug: "/programmes/cloud-devops-ai/red-hat-learning-subscription",
    isExternal: true,
  },
];

export const cloudGroupLabelKey = (group: CloudCourseGroup) =>
  cloudCourseGroups.find((entry) => entry.id === group)?.labelKey ?? "";
