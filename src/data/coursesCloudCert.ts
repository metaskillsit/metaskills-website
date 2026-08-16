import type { Course } from "./courses";

// ── Cloud, DevOps & AI Stack — certification-preparation programmes ──
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
    slug: "aws-solutions-architect-associate-preparation",
    title: "AWS Solutions Architect – Associate Preparation",
    category: "Cloud, DevOps & AI Stack",
    tagline: "Design secure, resilient, high-performing and cost-conscious solutions using Amazon Web Services.",
    heroImage: "/src/assets/courses/aws-saa-1.jpg",
    duration: "3 Days",
    deliveryMode: CLOUD_CERT_SHARED.deliveryMode,
    fundingStatus: CLOUD_CERT_SHARED.fundingStatus,
    certificationStatus: CLOUD_CERT_SHARED.certificationStatus,
    level: CLOUD_CERT_SHARED.level,
    courseDateStatus: CLOUD_CERT_SHARED.courseDateStatus,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to check the next available date for the AWS Solutions Architect – Associate Preparation programme.",
    seoTitle: "AWS Solutions Architect Associate Training Singapore | Metaskills",
    seoDescription:
      "Prepare for the AWS Certified Solutions Architect – Associate examination through a three-day instructor-led programme covering cloud architecture, security, resilience, performance and cost optimisation.",
    whyAttend:
      "Cloud professionals are expected to interpret business requirements, weigh technical trade-offs and design environments that balance security, resilience, performance and cost.\n\nThis three-day programme builds that architectural judgement through guided laboratories and scenario work, while preparing participants for the AWS Certified Solutions Architect – Associate examination.",
    objectives: [
      "Apply core AWS architecture and shared-responsibility principles.",
      "Select suitable compute, storage, database and networking services.",
      "Design secure identity, access and network arrangements.",
      "Design highly available, resilient and scalable environments.",
      "Evaluate architectural decisions against cost and operational needs.",
      "Prepare for scenario-based certification questions.",
    ],
    whoShouldAttend: [
      "Cloud and infrastructure engineers",
      "Solution architects and technical consultants",
      "DevOps and platform engineers",
      "Systems administrators moving into cloud roles",
      "Software engineers working with cloud services",
      "Professionals preparing for the AWS Solutions Architect – Associate examination",
    ],
    prerequisites: [
      "Basic understanding of networking, servers and applications",
      "Familiarity with cloud-computing concepts",
      "Basic exposure to AWS services",
      "Some experience supporting or deploying IT systems",
    ],
    prerequisitesNote:
      "This is an accelerated three-day programme. Participants without prior AWS exposure should complete the recommended pre-course materials before attending.",
    courseDesign:
      "A three-day instructor-led programme combining technical instruction, guided hands-on laboratories and scenario-based architecture exercises aligned with the AWS Certified Solutions Architect – Associate examination.",
    schedule: [
      {
        day: "Day 1 — Foundations, Security and Networking",
        items: [
          "AWS global infrastructure and architecture principles",
          "Shared responsibility and cloud security fundamentals",
          "Identity and access management",
          "Virtual private cloud, subnets and connectivity",
          "Guided security and networking laboratory",
        ],
      },
      {
        day: "Day 2 — Compute, Storage, Databases and Resilience",
        items: [
          "Compute options, scaling and serverless considerations",
          "Object, block and file storage strategies",
          "Relational, NoSQL and caching options",
          "High availability, backup and disaster recovery",
          "Guided architecture laboratory",
        ],
      },
      {
        day: "Day 3 — Performance, Cost and Architecture Challenge",
        items: [
          "Performance, monitoring and decoupled design",
          "Cost optimisation and governance",
          "End-to-end architecture case study",
          "Scenario-based examination preparation",
          "Mock assessment and revision planning",
        ],
      },
    ],
    practicalActivities: [
      "Designing a secure AWS network and access model",
      "Selecting compute, storage and database services for a workload",
      "Designing a resilient, highly available environment",
      "Reviewing and optimising estimated cloud costs",
      "Presenting and defending an AWS solution design",
    ],
    feeNotes: sharedFeeNotes(
      "AWS certification",
      "Additional cloud-consumption costs, if required, will be communicated before the programme."
    ),
    certificationNote: certificationNote("AWS Certified Solutions Architect – Associate", "AWS"),
    nextRunDate: "WhatsApp Us to Check",
    fees: {
      selfSponsored: CLOUD_CERT_SHARED.fee,
      corporateSmall: CLOUD_CERT_SHARED.corporateFee,
      corporateLarge: CLOUD_CERT_SHARED.corporateFee,
    },
  },
  {
    slug: "certified-kubernetes-administrator-preparation",
    title: "Certified Kubernetes Administrator Preparation",
    category: "Cloud, DevOps & AI Stack",
    tagline:
      "Develop the practical command-line, cluster-management and troubleshooting skills required to administer Kubernetes environments.",
    heroImage: "/src/assets/courses/cka-1.jpg",
    duration: "4 Days",
    deliveryMode: CLOUD_CERT_SHARED.deliveryMode,
    fundingStatus: CLOUD_CERT_SHARED.fundingStatus,
    certificationStatus: CLOUD_CERT_SHARED.certificationStatus,
    level: CLOUD_CERT_SHARED.level,
    courseDateStatus: CLOUD_CERT_SHARED.courseDateStatus,
    whatsappMessage:
      "Hello Metaskills Institute, I would like to check the next available date for the Certified Kubernetes Administrator Preparation programme.",
    seoTitle: "Certified Kubernetes Administrator Training Singapore | Metaskills",
    seoDescription:
      "Build practical Kubernetes cluster-administration and troubleshooting capabilities through a four-day instructor-led CKA preparation programme in Singapore.",
    whyAttend:
      "Kubernetes administrators are judged on what they can do in a live cluster, not on what they can describe.\n\nThis four-day intensive programme builds the hands-on skills required to configure, manage, maintain and troubleshoot Kubernetes environments, working primarily through the command line and aligned with the performance-based CKA examination.",
    objectives: [
      "Explain Kubernetes architecture and component responsibilities.",
      "Install, configure and access a Kubernetes cluster.",
      "Deploy, scale and maintain Kubernetes workloads.",
      "Configure networking, services and persistent storage.",
      "Apply access controls and perform cluster maintenance.",
      "Troubleshoot cluster issues under time constraints.",
    ],
    whoShouldAttend: [
      "Kubernetes and systems administrators",
      "DevOps and platform engineers",
      "Cloud and infrastructure engineers",
      "Site reliability engineers",
      "Application engineers supporting containerised environments",
      "Professionals preparing for the CKA examination",
    ],
    prerequisites: [
      "Linux command-line experience",
      "Basic container and networking knowledge",
      "Familiarity with YAML",
      "Exposure to Docker, containerd or Kubernetes",
    ],
    prerequisitesNote:
      "Participants with limited Linux command-line experience are encouraged to complete Linux administration training before attending.",
    courseDesign:
      "A four-day instructor-led programme combining technical instruction, command-line laboratories, troubleshooting exercises and timed practical tasks aligned with the performance-based Certified Kubernetes Administrator examination.",
    schedule: [
      {
        day: "Day 1 — Architecture and Cluster Configuration",
        items: [
          "Container orchestration and Kubernetes architecture",
          "Control-plane and worker-node components",
          "Cluster installation and node joining",
          "Cluster access and node administration",
          "Cluster setup laboratory",
        ],
      },
      {
        day: "Day 2 — Workloads, Configuration and Scheduling",
        items: [
          "Pods, deployments and workload controllers",
          "Rolling updates and rollbacks",
          "Application configuration and secrets",
          "Scheduling, resource limits and placement controls",
          "Workload administration laboratory",
        ],
      },
      {
        day: "Day 3 — Networking, Storage and Security",
        items: [
          "Kubernetes networking model and services",
          "Service discovery, ingress and network policies",
          "Volumes and persistent storage",
          "Authentication, RBAC and security contexts",
          "Networking, storage and security laboratory",
        ],
      },
      {
        day: "Day 4 — Maintenance, Troubleshooting and Simulation",
        items: [
          "Cluster upgrades and node maintenance",
          "Backup and restoration concepts",
          "Troubleshooting workloads, services and nodes",
          "Command-line efficiency and documentation navigation",
          "Mock practical assessment and trainer feedback",
        ],
      },
    ],
    practicalActivities: [
      "Building and accessing a Kubernetes cluster",
      "Deploying, scaling and configuring applications",
      "Exposing services and applying network policies",
      "Configuring persistent storage and access controls",
      "Diagnosing and repairing broken cluster resources",
    ],
    feeNotes: sharedFeeNotes(
      "CKA",
      "Any external cloud, laboratory or software cost will be communicated before the programme."
    ),
    certificationNote: certificationNote("Certified Kubernetes Administrator", "the certifying body"),
    nextRunDate: "WhatsApp Us to Check",
    fees: {
      selfSponsored: CLOUD_CERT_SHARED.fee,
      corporateSmall: CLOUD_CERT_SHARED.corporateFee,
      corporateLarge: CLOUD_CERT_SHARED.corporateFee,
    },
  },
  {
    slug: "red-hat-enterprise-linux-rhcsa-preparation",
    title: "Red Hat Enterprise Linux Administration – RHCSA Preparation",
    category: "Cloud, DevOps & AI Stack",
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
      { label: "RH199LS 1-year learning subscription plan", price: "S$8,450 per participant" },
      { label: "EX200K exam", price: "S$745 per participant" },
    ],
    nextRunDate: "WhatsApp Us to Check",
    fees: {
      selfSponsored: CLOUD_CERT_SHARED.fee,
      corporateSmall: CLOUD_CERT_SHARED.corporateFee,
      corporateLarge: CLOUD_CERT_SHARED.corporateFee,
    },
  },
];
