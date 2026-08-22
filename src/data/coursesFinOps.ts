import type { Course } from "./courses";

// ── FinOps ──
// Cloud financial management, technology value and cost optimisation programmes.
// Additional FinOps programmes can be appended to this array; every surface
// (programmes page, category page, navigation, course page) reads from here.
export const FINOPS_CATEGORY = "FinOps";

export const finOpsCourses: Course[] = [
  {
    slug: "finops-foundation-full-catalog",
    title: "FinOps Foundation™ Full Catalog Access",
    category: FINOPS_CATEGORY,
    tagline:
      "A comprehensive self-paced FinOps learning and certification package covering FinOps practice, engineering, FOCUS, AI value, technology value, containers and advanced professional certification.",
    heroImage: "/src/assets/programmes-finops.jpg",
    duration: "Up to 12 Months Access",
    deliveryMode: "Online Self-Paced",
    fundingStatus: "Non-SSG-Funded",
    certificationStatus: "Professional Learning & Certification Access",
    level: "Online self-paced learning",
    courseDateStatus: "Enrol Anytime — Online Self-Paced",
    whatsappMessage:
      "Hello Metaskills Institute, I would like to enquire about the FinOps Foundation Full Catalog Access programme.",
    seoTitle: "FinOps Foundation Full Catalog Access Singapore | Metaskills",
    seoDescription:
      "Self-paced FinOps learning and certification access across Practitioner, Engineer, FOCUS, AI Value, Technology Value, Containers and Professional pathways. S$4,800 per participant.",
    whyAttend:
      "Build comprehensive FinOps knowledge through access to the FinOps Foundation™ Full Catalog.\n\nThe Full Catalog brings together multiple FinOps learning and certification pathways covering cloud financial management, engineering, technology value, AI, FOCUS, containers and advanced FinOps practice.\n\nThe learning experience is delivered online through the FinOps Foundation learning platform and is designed for professionals who want the flexibility to progress through multiple FinOps learning pathways at their own pace.\n\nMetaskills Institute provides registration, commercial and administrative coordination for participants enrolled through this programme listing.",
    objectives: [
      "Comprehensive FinOps coverage — access multiple FinOps learning pathways through a single package.",
      "Flexible self-paced learning — complete the learning online according to your own schedule within the applicable access period.",
      "Cross-functional capability — suitable for professionals across technology, engineering, finance, procurement and management.",
      "Progressive certification pathway — progress from foundational FinOps knowledge toward specialist and professional-level credentials.",
      "Modern technology value skills — build capabilities covering public cloud, AI, data platforms, SaaS, containers and broader technology value management.",
    ],
    whoShouldAttend: [
      "FinOps",
      "Cloud Computing",
      "Cloud Architecture",
      "DevOps",
      "Engineering",
      "IT Operations",
      "IT Finance",
      "Finance",
      "Procurement",
      "Technology Management",
      "SaaS Management",
      "Cloud Cost Optimisation",
      "AI Infrastructure",
      "Data Platforms",
      "Digital Transformation",
      "Technology Governance",
      "Organisations developing FinOps capabilities across multidisciplinary teams",
    ],
    courseDesign:
      "The Full Catalog is accessed through the FinOps Foundation learning environment. Participants complete the applicable modules, learning pathways and certification requirements through the online platform. No classroom attendance at Metaskills Institute is required for this programme.",
    schedule: [
      {
        day: "FinOps Certified Practitioner",
        items: [
          "Build foundational knowledge of FinOps principles, capabilities, personas and practices and understand how engineering, finance and business teams collaborate to maximise the value of technology.",
        ],
      },
      {
        day: "FinOps Certified Engineer",
        items: [
          "Develop the technical knowledge required to apply FinOps practices within engineering and technology environments, including cost visibility, optimisation and operational efficiency.",
        ],
      },
      {
        day: "FinOps Certified: AI Value",
        items: [
          "Understand how FinOps practices apply to AI technologies and workloads, with emphasis on technology consumption, cost, business value and accountability.",
        ],
      },
      {
        day: "FinOps Certified: Technology Value",
        items: [
          "Develop knowledge of technology value management across modern technology environments.",
          "Learning areas include Public Cloud, Data Centres, SaaS and Licensing, Data Cloud Platforms and FinOps Scopes.",
        ],
      },
      {
        day: "FinOps Certified FOCUS Analyst",
        items: [
          "Develop practical knowledge of the FinOps Open Cost and Usage Specification — FOCUS — and understand how standardised technology cost and usage data can support analysis and decision-making.",
        ],
      },
      {
        day: "FinOps Certified Professional",
        items: [
          "Advance towards the professional-level FinOps certification pathway covering FinOps strategy, leadership, implementation, organisational adoption and cross-functional collaboration.",
          "Prerequisites and programme completion requirements apply.",
        ],
      },
      {
        day: "FinOps for Containers",
        items: [
          "Learn how FinOps practices can be applied to Kubernetes and containerised environments, including cost allocation, visibility, optimisation and accountability.",
        ],
      },
    ],
    learningFormat: {
      mode: "Online Self-Paced",
      body: [
        "The Full Catalog is accessed through the FinOps Foundation learning environment.",
        "Participants complete the applicable modules, learning pathways and certification requirements through the online platform.",
        "No classroom attendance at Metaskills Institute is required for this programme.",
      ],
      accessPeriod: "Up to 12 months",
      accessNote:
        "Access periods, examination attempts, certification prerequisites and programme requirements are subject to the prevailing terms of the FinOps Foundation.",
    },
    registrationAdmin: {
      intro: [
        "Metaskills Institute coordinates participant registration and programme administration for this offering.",
        "Following successful registration and processing, participants will receive the applicable access information for the FinOps Foundation learning environment.",
      ],
      items: [
        "Participant registration coordination",
        "SGD billing and payment administration",
        "Access coordination",
        "Learner onboarding guidance",
        "Programme-related administrative assistance",
      ],
    },
    importantInfo: [
      "FinOps Foundation™, FinOps Framework™ and related certification names and trademarks belong to their respective rights holders.",
      "The applicable FinOps learning materials, examinations and certification credentials are administered through the FinOps Foundation and/or its designated learning platform.",
      "Metaskills Institute provides registration, commercial and administrative coordination in connection with this programme listing.",
      "This listing does not represent or imply Certified Training Provider status, authorised reseller status, sponsorship, endorsement or partnership by the FinOps Foundation unless expressly stated otherwise.",
      "Programme content, availability, certification requirements, examination policies, prerequisites and access conditions are subject to change by the programme owner.",
    ],
    externalReference: {
      label: "View FinOps Foundation Full Catalog Programme Information",
      href: "https://learn.finops.org/plan/full-catalog",
    },
    feeNotes: [
      "The programme fee covers online programme access for one participant.",
      "Registration coordination, SGD billing administration and learner access coordination are included.",
      "Onboarding guidance and administrative support relating to programme access are included.",
      "This is a non-SSG-funded programme.",
    ],
    nextRunDate: "Enrol anytime — online self-paced",
    fees: {
      selfSponsored: "S$4,800 per participant",
      corporateSmall:
        "Contact Metaskills Institute for team or organisation-wide enrolment arrangements.",
      corporateLarge:
        "Contact Metaskills Institute for team or organisation-wide enrolment arrangements.",
    },
  },
];
