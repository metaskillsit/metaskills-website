import type { Course } from "./courses";
import { kubernetesCoachingCourses } from "./coursesKubernetes";

// ── Cloud and DevOps — certification-preparation programmes ──
// All three programmes follow one house standard: same fee model, same section
// depth (6 objectives, 6 audience lines, 4 prerequisites, 5 module-level topics
// per day, 5 practical activities) so the pages read consistently.
export const CLOUD_CERT_SHARED = {
  fee: "S$3,000 per participant",
  courseDateStatus: "WhatsApp Us to Check",
  deliveryMode: "Instructor-Led and Hands-On",
  fundingStatus: "Non-SSG-Funded",
  certificationStatus: "Certification Preparation",
  level: "Small-group technical training",
  certificate: "Metaskills Institute Certificate of Completion",
  corporateFee: "Contact Metaskills Institute for dedicated or customised corporate training arrangements.",
};

const sharedFeeNotes = (examName: string, extraCostNote: string): string[] => [
  "The course fee covers instructor-led training, guided practical exercises and Metaskills Institute course materials.",
  `The official ${examName} examination and examination voucher are not included unless expressly stated in a formal quotation.`,
  extraCostNote,
  "This is a non-SSG-funded programme.",
];

const certificationNote = (certName: string, awardingBody: string): string[] => [
  "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion.",
  `The ${certName} certification is separately awarded by ${awardingBody} after a candidate registers for and passes the applicable official examination.`,
  "Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass.",
];

export const cloudCertCourses: Course[] = [
  {
    slug: "aws-certified-solutions-architect-associate",
    title: "AWS Certified Solutions Architect – Associate",
    category: "Cloud and DevOps",
    tagline: "Design secure, resilient, high-performing and cost-optimised architectures on AWS – and prepare for the SAA-C03 exam.",
    heroImage: "/src/assets/courses/aws-saa-1.jpg",
    heroAlt: "Illustrative AWS cloud architecture training image",
    generatedHero: true,
    duration: "3 days (24 hours)",
    deliveryMode: "1-to-1 or small-group coaching",
    dailySchedule: "9:00am – 5:00pm (8 hours per day, including breaks)",
    whatsappMessage: "Hello Metaskills Institute, I would like to enquire / register for AWS Certified Solutions Architect – Associate (1-to-1 or small-group coaching).",
    seoTitle: "AWS Certified Solutions Architect – Associate | Metaskills Institute Singapore",
    seoDescription: "Design secure, resilient and cost-optimised AWS architectures with 3-day personalised coaching in Singapore. Prepare for the SAA-C03 exam.",
    whyAttend: "The AWS Certified Solutions Architect – Associate (SAA-C03) validates your ability to design solutions on AWS that are secure, resilient, high-performing and cost-optimised. This 3-day, instructor-led classroom course in Singapore equips you with the architectural judgement AWS tests – choosing the right services and design patterns for real business requirements. Training is delivered as personalised 1-to-1 coaching or small-group coaching, with small class sizes so each participant gets individual attention.\n\nThe course is structured around the four official SAA-C03 exam domains and their weightings, from securing access, workloads and data to designing scalable, highly available, high-performing and cost-effective architectures. Hands-on labs, architecture design scenarios and timed practice questions in the SAA-C03 style help you translate knowledge into exam-ready decision making. The S$250 exam fee covers one attempt at the official SAA-C03 exam.",
    learningFormat: {
      mode: "In-person, instructor-led training in Singapore, offered in two personalised coaching formats:",
      body: [
        "1-to-1 coaching – a dedicated trainer works with you alone, pacing the 3-day course around your experience, goals and questions",
        "Small-group coaching – a small class so every participant gets individual attention, hands-on help in labs and direct feedback from the trainer",
        "Both formats cover the same syllabus, labs and exam preparation.",
      ],
    },
    whoShouldAttend: [
      "Solutions architects and cloud architects designing workloads on AWS",
      "Cloud, infrastructure and DevOps engineers",
      "Developers and technical leads who make architecture decisions",
      "IT professionals preparing for the AWS Certified Solutions Architect – Associate (SAA-C03) exam",
    ],
    prerequisites: [
      "Official: AWS sets no mandatory prerequisites. AWS recommends at least 1 year of hands-on experience designing cloud solutions that use AWS services.",
      "Recommended by Metaskills: familiarity with core IT concepts (networking, storage, databases, security) and basic hands-on use of the AWS Management Console.",
    ],
    objectives: [
      "Design secure access to AWS resources and secure workloads, applications and data",
      "Design scalable, loosely coupled architectures",
      "Design highly available and fault-tolerant architectures",
      "Select high-performing storage, compute, database, network and data-ingestion solutions",
      "Design cost-optimised storage, compute, database and network architectures",
      "Analyse scenario-based questions and select the best-fit AWS solution under exam conditions",
    ],
    courseDesign: "Percentages are the official SAA-C03 exam-domain weightings published by AWS.",
    schedule: [
      { day: "Day 1 – Design Secure Architectures (30%)", items: ["Secure access to AWS resources, secure workloads and applications, appropriate data security controls"] },
      { day: "Day 2 – Design Resilient Architectures (26%)", items: ["Scalable and loosely coupled architectures, highly available and/or fault-tolerant architectures", "Design High-Performing Architectures (24%), part 1: high-performing storage and elastic compute solutions"] },
      { day: "Day 3 – Design High-Performing Architectures (24%), part 2", items: ["High-performing database, network architecture, and data ingestion and transformation solutions", "Design Cost-Optimized Architectures (20%): cost-optimised storage, compute, database and network architectures", "Timed practice exam, review and exam-day strategy"] },
    ],
    practicalActivities: [
      "Instructor-led hands-on labs on AWS",
      "Architecture design workshops based on real-world scenarios",
      "Whiteboard trade-off discussions (security, resilience, performance and cost)",
      "Domain-by-domain scenario-based practice questions",
      "Timed, full-length practice exam in the SAA-C03 format (65 questions, 130 minutes) with instructor review",
      "Guidance on AWS Skill Builder exam-preparation resources and on scheduling the exam through the AWS Certification account",
    ],
    feeBreakdown: { training: 2700, exam: 250, total: 2950, examLabel: "Exam fee (official SAA-C03 exam, one attempt)" },
    gstNote: "Prices are in Singapore dollars (SGD) per participant and exclude GST, which is charged in addition at the prevailing rate (currently 9%).",
    certificationNote: [
      "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion. The AWS Certified Solutions Architect – Associate certification is separately awarded by Amazon Web Services (AWS) after a candidate registers for and passes the applicable official examination. Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass.",
      "EXAM FORMAT: SAA-C03; 65 questions (50 scored and 15 unscored), multiple choice and multiple response; taken at a Pearson VUE test centre or online proctored.",
      "DURATION: 130 minutes",
      "PASS MARK: Scaled score of 720 (on a scale of 100–1,000)",
      "VALIDITY: 3 years",
      "RETAKE POLICY: Candidates who do not pass must wait 14 calendar days before retaking. There is no limit on attempts, but the full exam fee is payable for each attempt.",
      "WHAT THE EXAM FEE INCLUDES (S$250): One attempt at the official AWS Certified Solutions Architect – Associate (SAA-C03) exam. Retakes are not included.",
      "DISCOUNT NOTE: AWS offers holders of an active AWS Certification a 50% discount on their next AWS certification exam.",
    ],
    nextRunDate: "",
    fees: { selfSponsored: "S$2,950 per participant", corporateSmall: "S$2,950 per participant", corporateLarge: "S$2,950 per participant" },
  },
  ...kubernetesCoachingCourses,
  {
    slug: "red-hat-enterprise-linux-rhcsa-preparation",
    title: "Red Hat Enterprise Linux Administration – RHCSA Preparation",
    category: "Cloud and DevOps",
    tagline:
      "Build practical enterprise Linux administration capabilities across command-line operations, users, services, storage, networking and security.",
    heroImage: "/src/assets/courses/rhcsa-1.jpg",
    duration: "4 Days",
    deliveryMode: CLOUD_CERT_SHARED.deliveryMode,
    fundingStatus: CLOUD_CERT_SHARED.fundingStatus,
    certificationStatus: CLOUD_CERT_SHARED.certificationStatus,
    level: CLOUD_CERT_SHARED.level,
    courseDateStatus: CLOUD_CERT_SHARED.courseDateStatus,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to check the next available date for the Red Hat Enterprise Linux Administration – RHCSA Preparation programme.",
    seoTitle: "RHCSA Linux Administration Training Singapore | Metaskills",
    seoDescription:
      "Develop practical Red Hat Enterprise Linux administration capabilities through a four-day instructor-led RHCSA preparation programme in Singapore.",
    whyAttend:
      "Linux underpins enterprise servers, cloud platforms, DevOps pipelines, container platforms and AI infrastructure.\n\nThis four-day accelerated programme builds the practical skills required to administer Red Hat Enterprise Linux systems, with guided exercises and operational scenarios aligned with RHCSA practical requirements.",
    objectives: [
      "Work efficiently from the Linux command line and manage files and permissions.",
      "Install software and manage processes, services and logs.",
      "Administer users, groups and privileged access.",
      "Configure storage, logical volumes and file systems.",
      "Configure networking, secure remote access and firewall rules.",
      "Troubleshoot systems and validate configurations after reboot.",
    ],
    whoShouldAttend: [
      "Linux systems administrators",
      "Infrastructure and platform engineers",
      "Cloud and DevOps engineers",
      "Technical support personnel",
      "Network and security professionals expanding into Linux",
      "Professionals preparing for the RHCSA examination",
    ],
    prerequisites: [
      "Basic computer-system knowledge",
      "Some command-line exposure",
      "Basic understanding of networking and storage",
      "Experience supporting IT infrastructure",
    ],
    prerequisitesNote:
      "This is an accelerated four-day course. Participants who are completely new to Linux should complete the recommended pre-course materials before attending.",
    courseDesign:
      "A four-day instructor-led programme combining technical instruction, guided hands-on laboratories, troubleshooting scenarios and timed practical tasks aligned with RHCSA practical requirements.",
    schedule: [
      {
        day: "Day 1 — Command Line and File Administration",
        items: [
          "Red Hat Enterprise Linux overview and command-line essentials",
          "Files, directories, redirection and pipelines",
          "Text-processing and search tools",
          "Ownership, permissions and links",
          "Command-line administration laboratory",
        ],
      },
      {
        day: "Day 2 — Software, Services and Users",
        items: [
          "Package management and software updates",
          "Process control and resource monitoring",
          "systemd services, boot targets and logs",
          "Users, groups, sudo and SSH access",
          "System administration laboratory",
        ],
      },
      {
        day: "Day 3 — Storage and Networking",
        items: [
          "Disks, partitions and logical volume management",
          "File systems, swap and persistent mounting",
          "Network interface and name-resolution configuration",
          "Storage and network troubleshooting",
          "Storage and networking laboratory",
        ],
      },
      {
        day: "Day 4 — Security, Scripting and Simulation",
        items: [
          "Firewall configuration and service access",
          "SELinux modes, contexts and troubleshooting",
          "Basic shell scripting for administration",
          "Timed tasks, reboot and persistence testing",
          "Mock RHCSA-style assessment and revision planning",
        ],
      },
    ],
    practicalActivities: [
      "Managing files, permissions, users and sudo access",
      "Installing software and administering system services",
      "Creating logical volumes and persistent file systems",
      "Configuring networking, SSH and firewall rules",
      "Resolving SELinux issues and validating after reboot",
    ],
    feeNotes: sharedFeeNotes(
      "RHCSA",
      "Any external laboratory or software-licensing cost will be communicated before the programme."
    ),
    certificationNote: certificationNote("Red Hat Certified System Administrator", "Red Hat"),
    optionalAddOns: [
      { label: "EX200K exam", price: "S$820 per participant" },
    ],
    nextRunDate: "WhatsApp Us to Check",
    fees: {
      selfSponsored: CLOUD_CERT_SHARED.fee,
      corporateSmall: CLOUD_CERT_SHARED.corporateFee,
      corporateLarge: CLOUD_CERT_SHARED.corporateFee,
    },
  },
];
