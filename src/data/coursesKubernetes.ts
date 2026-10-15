import type { Course } from "./courses";
import hero0 from "@/assets/courses/cka-coaching-hero.jpg";
import hero1 from "@/assets/courses/ckad-coaching-hero.jpg";
import hero2 from "@/assets/courses/kubestronaut-hero.jpg";
import hero3 from "@/assets/courses/openshift-hero.jpg";

export const kubernetesCoachingCourses: Course[] = [
{
  "slug": "cka-certified-kubernetes-administrator",
  "routePath": "/courses/cka-certified-kubernetes-administrator",
  "title": "CKA – Certified Kubernetes Administrator",
  "category": "Cloud and DevOps",
  "tagline": "Build, run and troubleshoot production Kubernetes clusters – and walk into the CKA exam ready.",
  "heroImage": hero0,
  "heroAlt": "Illustrative CKA – Certified Kubernetes Administrator engineering scene",
  "generatedHero": true,
  "duration": "4 days (32 hours)",
  "dailySchedule": "9:00am – 5:00pm (8 hours per day, including breaks)",
  "deliveryMode": "1-to-1 or small-group coaching",
  "learningFormat": {
    "mode": "In-person, instructor-led training in Singapore, offered in two personalised coaching formats:",
    "body": [
      "1-to-1 coaching – a dedicated trainer works with you alone, pacing the 4-day course around your experience, goals and questions",
      "Small-group coaching – a small class so every participant gets individual attention, hands-on help in labs and direct feedback from the trainer",
      "Both formats cover the same syllabus, labs and exam preparation."
    ]
  },
  "whyAttend": "The Certified Kubernetes Administrator (CKA) is one of the most recognised credentials in cloud native infrastructure, demonstrating that you can install, configure, operate and troubleshoot Kubernetes clusters. This 4-day, instructor-led classroom course in Singapore gives you the practical depth to do exactly that – and the speed and confidence to prove it in a hands-on, performance-based exam. Training is delivered as personalised 1-to-1 coaching or small-group coaching, with small class sizes so each participant gets individual attention.\n\nThe course is mapped day by day to the five official CKA exam domains published by The Linux Foundation, with the heaviest weighting – Troubleshooting at 30% – given a full day of break-fix practice. You will build clusters with kubeadm, manage RBAC, workloads, storage, Services, Gateway API and Ingress, and finish with a timed mock exam and a guided Killer.sh simulator debrief. The S$730 exam fee covers the official CKA voucher with one free retake.",
  "whoShouldAttend": [
    "System administrators and infrastructure engineers responsible for Kubernetes clusters",
    "DevOps, platform and site reliability engineers (SREs)",
    "Cloud engineers running managed or self-managed Kubernetes",
    "IT professionals preparing for the CKA certification or for the Kubestronaut pathway (CKA is required before CKS)"
  ],
  "prerequisites": [
    "Official: none – The Linux Foundation sets no formal prerequisites for the CKA exam (intermediate level).",
    "Recommended by Metaskills: comfort with the Linux command line and a text editor such as vi/vim, basic networking (IP, DNS, ports) and familiarity with containers. Some exposure to Kubernetes objects such as Pods and Deployments is helpful."
  ],
  "objectives": [
    "Prepare infrastructure and create, upgrade and manage Kubernetes clusters with kubeadm, including a highly available control plane",
    "Configure role-based access control (RBAC) and use Helm, Kustomize, CRDs and operators",
    "Deploy and manage workloads with rolling updates, rollbacks, ConfigMaps, Secrets, autoscaling and scheduling controls",
    "Provision and manage persistent storage with storage classes, PersistentVolumes and PersistentVolumeClaims",
    "Configure Pod connectivity, Network Policies, Services, Gateway API, Ingress and CoreDNS",
    "Systematically troubleshoot clusters, nodes, control-plane components, applications and networking",
    "Complete performance-based tasks efficiently under exam conditions"
  ],
  "courseDesign": "Percentages are the official CKA exam-domain weightings published by The Linux Foundation.",
  "schedule": [
    {
      "day": "Day 1 – Cluster Architecture, Installation & Configuration (25%)",
      "items": [
        "Kubernetes architecture, preparing infrastructure, creating and managing clusters with kubeadm, cluster lifecycle and upgrades, highly available control plane, RBAC, Helm and Kustomize, extension interfaces (CNI, CSI, CRI), CRDs and operators"
      ]
    },
    {
      "day": "Day 2 – Workloads & Scheduling (15%)",
      "items": [
        "Deployments, rolling updates and rollbacks, ConfigMaps and Secrets, workload autoscaling, self-healing primitives, Pod admission and scheduling (resource limits, node affinity)",
        "Storage (10%): storage classes and dynamic provisioning, volume types, access modes and reclaim policies, PVs and PVCs"
      ]
    },
    {
      "day": "Day 3 – Services & Networking (20%)",
      "items": [
        "Pod-to-Pod connectivity, Network Policies, ClusterIP/NodePort/LoadBalancer Services and endpoints, Gateway API, Ingress controllers and resources, CoreDNS"
      ]
    },
    {
      "day": "Day 4 – Troubleshooting (30%)",
      "items": [
        "troubleshooting clusters and nodes, cluster components, monitoring cluster and application resource usage, container output streams, Services and networking",
        "Timed CKA mock exam, Killer.sh debrief and exam-day strategy"
      ]
    }
  ],
  "practicalActivities": [
    "Hands-on labs on live Kubernetes clusters throughout every day",
    "Build and upgrade a cluster with kubeadm",
    "RBAC, workload, storage and networking configuration labs",
    "Break-fix troubleshooting scenarios covering nodes, control-plane components and networking",
    "Timed, performance-based CKA mock exam with instructor review",
    "Guided debrief of the Killer.sh CKA exam simulator (two sessions included with the exam voucher)",
    "kubectl speed drills, imperative commands, documentation navigation and time-management coaching"
  ],
  "certificationNote": [
    "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion. The Certified Kubernetes Administrator (CKA) certification is separately awarded by The Linux Foundation / Cloud Native Computing Foundation (CNCF) after a candidate registers for and passes the applicable official examination. Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass.",
    "EXAM FORMAT: Online, remotely proctored, performance-based exam – candidates solve hands-on, command-line tasks on live Kubernetes clusters.\nDURATION: 2 hours\nPASS MARK: 66% or above\nVALIDITY: 2 years\nRETAKE POLICY: One free retake (two attempts in total) within the 12-month eligibility period.\nWHAT THE EXAM FEE INCLUDES (S$730): The official CKA exam voucher from The Linux Foundation, with 12 months to schedule and sit the exam, one free retake, and two Killer.sh exam-simulator sessions.\nPATHWAY NOTE: Passing CKA renews an active KCNA certification under The Linux Foundation's CARE programme, and CKA must be passed before attempting CKS."
  ],
  "feeBreakdown": {
    "training": 3600,
    "exam": 730,
    "total": 4330,
    "examLabel": "Exam fee (official CKA exam voucher)"
  },
  "gstNote": "Prices are in Singapore dollars (SGD) per participant and exclude GST, which is charged in addition at the prevailing rate (currently 9%).",
  "fees": {
    "selfSponsored": "S$4,330 per participant",
    "corporateSmall": "S$4,330 per participant",
    "corporateLarge": "S$4,330 per participant"
  },
  "nextRunDate": "",
  "seoTitle": "CKA – Certified Kubernetes Administrator | Metaskills Institute Singapore",
  "seoDescription": "Build, run and troubleshoot Kubernetes clusters with 4-day personalised CKA coaching in Singapore, hands-on labs and an official exam voucher.",
  "whatsappMessage": "Hello Metaskills Institute, I would like to enquire / register for CKA – Certified Kubernetes Administrator (1-to-1 or small-group coaching)."
},
{
  "slug": "ckad-certified-kubernetes-application-developer",
  "routePath": "/courses/ckad-certified-kubernetes-application-developer",
  "title": "CKAD – Certified Kubernetes Application Developer",
  "category": "Cloud and DevOps",
  "tagline": "Design, build and ship cloud native applications on Kubernetes with confidence – and earn the CKAD.",
  "heroImage": hero1,
  "heroAlt": "Illustrative CKAD – Certified Kubernetes Application Developer engineering scene",
  "generatedHero": true,
  "duration": "3 days (24 hours)",
  "dailySchedule": "9:00am – 5:00pm (8 hours per day, including breaks)",
  "deliveryMode": "1-to-1 or small-group coaching",
  "learningFormat": {
    "mode": "In-person, instructor-led training in Singapore, offered in two personalised coaching formats:",
    "body": [
      "1-to-1 coaching – a dedicated trainer works with you alone, pacing the 3-day course around your experience, goals and questions",
      "Small-group coaching – a small class so every participant gets individual attention, hands-on help in labs and direct feedback from the trainer",
      "Both formats cover the same syllabus, labs and exam preparation."
    ]
  },
  "whyAttend": "The Certified Kubernetes Application Developer (CKAD) certification shows that you can design, build, configure and expose cloud native applications for Kubernetes. This 3-day, instructor-led classroom course in Singapore focuses on what developers actually do with Kubernetes every day – and on the speed and precision needed to succeed in a hands-on, performance-based exam. Training is delivered as personalised 1-to-1 coaching or small-group coaching, with small class sizes so each participant gets individual attention.\n\nEach day is aligned to the five official CKAD exam domains published by The Linux Foundation, from container images and multi-container Pod patterns to deployment strategies with Helm and Kustomize, configuration and security, networking and observability. Intensive labs on live clusters, a timed mock exam and a guided Killer.sh simulator debrief prepare you to perform on exam day. The S$730 exam fee covers the official CKAD voucher with one free retake.",
  "whoShouldAttend": [
    "Software developers and engineers who build or deploy applications on Kubernetes",
    "DevOps and platform engineers supporting development teams",
    "Solution and application architects designing cloud native systems",
    "Professionals preparing for the CKAD certification or the Kubestronaut pathway"
  ],
  "prerequisites": [
    "Official: none – The Linux Foundation sets no formal prerequisites for the CKAD exam (intermediate level).",
    "Recommended by Metaskills: comfort with the Linux command line and a text editor such as vi/vim, basic understanding of containers and container images, and familiarity with at least one programming language or application stack."
  ],
  "objectives": [
    "Define, build and modify container images and choose the right workload resource (Deployment, DaemonSet, CronJob and others)",
    "Implement multi-container Pod patterns such as sidecar and init containers, and use persistent and ephemeral volumes",
    "Deploy applications using rolling updates, blue/green and canary strategies, Helm and Kustomize",
    "Configure applications securely with ConfigMaps, Secrets, ServiceAccounts, SecurityContexts, resource requests, limits and quotas",
    "Expose and troubleshoot applications with Services, Ingress and NetworkPolicies",
    "Observe, debug and maintain applications using probes, logs, CLI monitoring and API-deprecation awareness",
    "Complete performance-based tasks efficiently under exam conditions"
  ],
  "courseDesign": "Percentages are the official CKAD exam-domain weightings published by The Linux Foundation.",
  "schedule": [
    {
      "day": "Day 1 – Application Design and Build (20%)",
      "items": [
        "defining, building and modifying container images, choosing workload resources (Deployment, DaemonSet, CronJob, etc.), multi-container Pod patterns (sidecar, init), persistent and ephemeral volumes",
        "Application Deployment (20%): deployment strategies (blue/green, canary), Deployments and rolling updates, Helm, Kustomize"
      ]
    },
    {
      "day": "Day 2 – Application Environment, Configuration and Security (25%)",
      "items": [
        "CRDs and operators, authentication, authorization and admission control, resource requests, limits and quotas, ConfigMaps, Secrets, ServiceAccounts, SecurityContexts and capabilities"
      ]
    },
    {
      "day": "Day 3 – Services and Networking (20%)",
      "items": [
        "NetworkPolicies, providing and troubleshooting access via Services, Ingress rules",
        "Application Observability and Maintenance (15%): API deprecations, probes and health checks, built-in CLI monitoring, container logs, debugging",
        "Timed CKAD mock exam, Killer.sh debrief and exam-day strategy"
      ]
    }
  ],
  "practicalActivities": [
    "Hands-on labs on live Kubernetes clusters throughout every day",
    "Container image build-and-deploy exercises",
    "Multi-container Pod, configuration and security labs",
    "Helm and Kustomize deployment labs, including blue/green and canary rollouts",
    "Networking, probe and debugging scenarios",
    "Timed, performance-based CKAD mock exam with instructor review",
    "Guided debrief of the Killer.sh CKAD exam simulator (two sessions included with the exam voucher)",
    "kubectl speed drills, YAML generation shortcuts and time-management coaching"
  ],
  "certificationNote": [
    "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion. The Certified Kubernetes Application Developer (CKAD) certification is separately awarded by The Linux Foundation / Cloud Native Computing Foundation (CNCF) after a candidate registers for and passes the applicable official examination. Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass.",
    "EXAM FORMAT: Online, remotely proctored, performance-based exam – candidates solve hands-on, command-line tasks on live Kubernetes clusters.\nDURATION: 2 hours\nPASS MARK: 66% or above\nVALIDITY: 2 years\nRETAKE POLICY: One free retake (two attempts in total) within the 12-month eligibility period.\nWHAT THE EXAM FEE INCLUDES (S$730): The official CKAD exam voucher from The Linux Foundation, with 12 months to schedule and sit the exam, one free retake, and two Killer.sh exam-simulator sessions.\nPATHWAY NOTE: Passing CKAD renews an active KCNA certification under The Linux Foundation's CARE programme. CKAD is one of the five certifications required for the CNCF Kubestronaut title."
  ],
  "feeBreakdown": {
    "training": 2200,
    "exam": 730,
    "total": 2930,
    "examLabel": "Exam fee (official CKAD exam voucher)"
  },
  "gstNote": "Prices are in Singapore dollars (SGD) per participant and exclude GST, which is charged in addition at the prevailing rate (currently 9%).",
  "fees": {
    "selfSponsored": "S$2,930 per participant",
    "corporateSmall": "S$2,930 per participant",
    "corporateLarge": "S$2,930 per participant"
  },
  "nextRunDate": "",
  "seoTitle": "CKAD – Certified Kubernetes Application Developer | Metaskills Institute Singapore",
  "seoDescription": "Build and deploy cloud native applications with 3-day CKAD coaching in Singapore, practical labs and an official exam voucher.",
  "whatsappMessage": "Hello Metaskills Institute, I would like to enquire / register for CKAD – Certified Kubernetes Application Developer (1-to-1 or small-group coaching)."
},
{
  "slug": "kubestronaut-programme",
  "routePath": "/courses/kubestronaut-programme",
  "title": "Kubestronaut Programme",
  "category": "Cloud and DevOps",
  "tagline": "Four intensive days of CKS security training, with optional, individually purchased exams for your Kubestronaut journey.",
  "heroImage": hero2,
  "heroAlt": "Illustrative Kubestronaut Programme engineering scene",
  "generatedHero": true,
  "duration": "4 days (32 hours) of CKS-focused classroom training",
  "dailySchedule": "9:00am – 5:00pm (8 hours per day, including breaks)",
  "deliveryMode": "1-to-1 or small-group coaching",
  "learningFormat": {
    "mode": "In-person, instructor-led training in Singapore, offered in two personalised coaching formats:",
    "body": [
      "1-to-1 coaching – a dedicated trainer works with you alone, pacing the 4-day course around your experience, goals and questions",
      "Small-group coaching – a small class so every participant gets individual attention, hands-on help in labs and direct feedback from the trainer",
      "Both formats cover the same syllabus, labs and exam preparation."
    ]
  },
  "whyAttend": "The Kubestronaut Programme offers Metaskills Institute's 4-day, instructor-led Certified Kubernetes Security Specialist (CKS) course in Singapore, with optional exam vouchers available individually for the five Cloud Native Computing Foundation (CNCF) Kubernetes certifications – Kubernetes and Cloud Native Associate (KCNA), Kubernetes and Cloud Native Security Associate (KCSA), Certified Kubernetes Administrator (CKA), Certified Kubernetes Application Developer (CKAD) and Certified Kubernetes Security Specialist (CKS). Candidates who hold all five certifications at the same time are recognised by CNCF as Kubestronauts. Training is delivered as personalised 1-to-1 coaching or small-group coaching, with small class sizes so each participant gets individual attention.\n\nThe classroom training focuses entirely on CKS, the most advanced exam in the pathway. Every day is mapped to the official CKS exam domains and weightings published by The Linux Foundation, with extensive hands-on labs on live clusters covering cluster setup and hardening, system hardening, microservice vulnerabilities, supply-chain security and runtime security, followed by a timed mock exam and a guided Killer.sh simulator debrief. All five exams are optional and may be purchased individually. The course-only fee is S$4,400; KCNA and KCSA are S$410 each, and CKA, CKAD and CKS are S$730 each. The total with all five optional exams is S$7,410 before GST. Candidates prepare for and sit KCNA, KCSA, CKA and CKAD independently. Because CKS requires a passed CKA, you must pass the CKA exam before attempting CKS.",
  "whoShouldAttend": [
    "Platform, DevOps, SRE and cloud engineers who already administer Kubernetes and need to secure it in production",
    "Security engineers responsible for cluster, workload and supply-chain security",
    "CKA-certified professionals (or those about to sit CKA) working towards CKS and the Kubestronaut title",
    "Experienced Kubernetes practitioners who are self-preparing for KCNA, KCSA, CKA and CKAD and want instructor-led training for the most demanding exam, CKS"
  ],
  "prerequisites": [
    "Official: The Linux Foundation requires CKS candidates to have taken and passed the Certified Kubernetes Administrator (CKA) exam before attempting the CKS exam. KCNA, KCSA, CKA and CKAD have no formal prerequisites.",
    "What this means for you: this course does not teach CKA. You must pass the CKA exam before you sit the CKS exam. We recommend sitting CKA before or soon after the course.",
    "Recommended by Metaskills: solid hands-on Kubernetes administration experience at CKA level – kubectl, kubeadm, RBAC, networking and troubleshooting – plus confidence with the Linux command line and a text editor such as vi/vim."
  ],
  "objectives": [
    "Secure cluster setup with Network Policies, CIS benchmark reviews, TLS-enabled Ingress, protected node metadata and verified platform binaries",
    "Harden clusters with least-privilege RBAC, service-account hygiene, restricted API access and timely upgrades",
    "Harden hosts and reduce attack surface using least-privilege IAM, restricted network access and kernel tools such as AppArmor and seccomp",
    "Minimise microservice vulnerabilities with Pod Security Standards, Secrets management, multi-tenancy and sandboxed containers, and Pod-to-Pod encryption (Cilium, Istio)",
    "Secure the software supply chain: minimal base images, SBOMs, permitted registries, artifact signing and validation, and static analysis with Kubesec and KubeLinter",
    "Detect and investigate runtime threats with behavioural analytics, container immutability and Kubernetes audit logs",
    "Work quickly and accurately in the command-line, performance-based CKS exam environment, and plan the order of the five Kubestronaut exams (CKA before CKS)"
  ],
  "courseDesign": "Percentages are the official CKS exam-domain weightings published by The Linux Foundation.",
  "schedule": [
    {
      "day": "Day 1 – Cluster Setup (15%)",
      "items": [
        "network security policies, CIS benchmark review of cluster components (etcd, kubelet, kubedns, kube-apiserver), Ingress with TLS, protecting node metadata and endpoints, verifying platform binaries",
        "Cluster Hardening (15%): RBAC to minimise exposure, service-account hygiene, restricting access to the Kubernetes API, upgrading Kubernetes to avoid vulnerabilities"
      ]
    },
    {
      "day": "Day 2 – System Hardening (10%)",
      "items": [
        "minimising host OS footprint, least-privilege IAM, minimising external network access, kernel hardening with AppArmor and seccomp",
        "Minimize Microservice Vulnerabilities (20%): Pod Security Standards, managing Secrets, isolation (multi-tenancy, sandboxed containers), Pod-to-Pod encryption (Cilium, Istio)"
      ]
    },
    {
      "day": "Day 3 – Supply Chain Security (20%)",
      "items": [
        "minimising base image footprint, SBOM, CI/CD and artifact repositories, permitted registries, signing and validating artifacts, static analysis of workloads and images (Kubesec, KubeLinter)"
      ]
    },
    {
      "day": "Day 4 – Monitoring, Logging and Runtime Security (20%)",
      "items": [
        "behavioural analytics, threat detection, investigating attack phases and bad actors, container immutability at runtime, Kubernetes audit logs",
        "Timed CKS mock exam, Killer.sh debrief and personal Kubestronaut exam plan"
      ]
    }
  ],
  "practicalActivities": [
    "Instructor-led hands-on security labs on live Kubernetes clusters every day",
    "Cluster hardening labs: Network Policies, RBAC, CIS benchmark review and API access restriction",
    "Host and workload hardening labs: AppArmor, seccomp, Pod Security Admission and sandboxed containers",
    "Supply-chain labs: image minimisation, scanning, signing and static analysis with Kubesec and KubeLinter",
    "Runtime security labs: threat detection and Kubernetes audit-log investigation",
    "Timed, performance-based CKS mock exam",
    "Guided debrief of the Killer.sh CKS exam simulator (two simulator sessions are included with the CKS voucher)",
    "Personal exam-sequencing plan for all five exams (CKA must be passed before CKS)"
  ],
  "certificationNote": [
    "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion. The KCNA, KCSA, CKA, CKAD and CKS certifications are separately awarded by The Linux Foundation / Cloud Native Computing Foundation (CNCF) after a candidate registers for and passes the applicable official examination. Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass. The Kubestronaut title is conferred by CNCF to individuals who hold all five certifications at the same time.",
    "TRAINING SCOPE\nClassroom training covers CKS only. All exam vouchers are optional and may be purchased individually. Candidates prepare for and sit KCNA, KCSA, CKA and CKAD independently; no classroom training for these four certifications is included.",
    "EXAM FORMAT & DURATION\n• KCNA: online, remotely proctored, multiple-choice; 90 minutes\n• KCSA: online, remotely proctored, multiple-choice; 90 minutes\n• CKA: online, remotely proctored, performance-based (hands-on command-line tasks on live Kubernetes); 2 hours\n• CKAD: online, remotely proctored, performance-based; 2 hours\n• CKS: online, remotely proctored, performance-based; 2 hours\nTotal exam time across all five: 9 hours",
    "PASS MARK\nKCNA 75% • KCSA 75% • CKA 66% • CKAD 66% • CKS 67%",
    "VALIDITY\nEach certification is valid for 2 years. The Kubestronaut title lasts until the end of the year in which the first of the five certifications expires; renewing the expired certification by year end retains the title. CNCF notifies new Kubestronauts by email within a business week of all five being passed.",
    "PREREQUISITE RULE\nCKS candidates must have taken and passed the CKA exam before attempting CKS.",
    "RETAKE POLICY\nEach of the five exam vouchers includes one free retake (two attempts in total), to be used within the 12-month eligibility period.",
    "OPTIONAL EXAM VOUCHERS\nExam vouchers may be purchased individually: KCNA S$410; KCSA S$410; CKA S$730; CKAD S$730; CKS S$730. All five optional exam vouchers total S$3,010 before GST. Each voucher includes 12 months to schedule and sit the exam and one free retake. The CKA, CKAD and CKS vouchers each include two Killer.sh exam-simulator sessions.",
    "KUBESTRONAUT BENEFITS (from CNCF)\nKubestronaut jacket, Credly badge, private Kubestronaut Slack channel and mailing list, five 50%-off certification coupons a year, and 20% off three CNCF events a year."
  ],
  "feeBreakdown": {
    "training": 4400,
    "exam": 3010,
    "total": 7410,
    "examLabel": "All five optional exam vouchers",
    "optionalExams": [
      { "label": "KCNA", "price": 410 },
      { "label": "KCSA", "price": 410 },
      { "label": "CKA", "price": 730 },
      { "label": "CKAD", "price": 730 },
      { "label": "CKS", "price": 730 }
    ]
  },
  "gstNote": "Prices are in Singapore dollars (SGD) per participant and exclude GST, which is charged in addition at the prevailing rate (currently 9%).",
  "fees": {
    "selfSponsored": "S$4,400 per participant (course only)",
    "corporateSmall": "S$4,400 per participant (course only)",
    "corporateLarge": "S$4,400 per participant (course only)"
  },
  "nextRunDate": "",
  "seoTitle": "Kubestronaut Programme | Metaskills Institute Singapore",
  "seoDescription": "Four days of CKS security coaching in Singapore with optional, individually purchased exam vouchers. CKA must be passed before CKS.",
  "whatsappMessage": "Hello Metaskills Institute, I would like to enquire / register for Kubestronaut Programme (1-to-1 or small-group coaching).",
  "prerequisitesNote": "What this means for you: this course does not teach CKA. You must pass the CKA exam before you sit the CKS exam. We recommend sitting CKA before or soon after the course.",
  "importantInfo": [
    "Training covers the Certified Kubernetes Security Specialist (CKS) only. KCNA, KCSA, CKA and CKAD have no classroom training included. All five exam vouchers are optional and may be purchased individually."
  ]
},
{
  "slug": "red-hat-certified-openshift-administrator",
  "routePath": "/courses/red-hat-certified-openshift-administrator",
  "title": "Red Hat Certified OpenShift Administrator (EX280)",
  "category": "Cloud and DevOps",
  "tagline": "Run secure, multi-tenant Red Hat OpenShift clusters in production – and walk into the EX280 exam ready.",
  "heroImage": hero3,
  "heroAlt": "Illustrative Red Hat Certified OpenShift Administrator (EX280) engineering scene",
  "generatedHero": true,
  "duration": "4 days (32 hours)",
  "dailySchedule": "9:00am – 5:00pm (8 hours per day, including breaks)",
  "deliveryMode": "1-to-1 or small-group coaching",
  "learningFormat": {
    "mode": "In-person, instructor-led training in Singapore, offered in two personalised coaching formats:",
    "body": [
      "1-to-1 coaching – a dedicated trainer works with you alone, pacing the 4-day course around your experience, goals and questions",
      "Small-group coaching – a small class so every participant gets individual attention, hands-on help in labs and direct feedback from the trainer",
      "Both formats cover the same syllabus, labs and exam preparation."
    ]
  },
  "whyAttend": "The Red Hat Certified OpenShift Administrator credential (EX280, titled by Red Hat as Red Hat Certified System Administrator in OpenShift) shows that you can configure and manage Red Hat OpenShift Container Platform clusters for real-world use. This 4-day, instructor-led classroom course in Singapore focuses on the daily work of an OpenShift cluster administrator. Training is delivered as personalised 1-to-1 coaching or small-group coaching, with small class sizes so each participant gets individual attention.\n\nYou will manage resources declaratively with manifests, Kustomize and Helm, configure authentication and role-based access, protect traffic with network policies and TLS routes, enable developer self-service with quotas and project templates, manage operators and cluster updates, and secure privileged workloads. The course finishes with a timed, performance-based mock exam. The S$820 exam fee covers the official Red Hat EX280 exam with one free retake.",
  "whoShouldAttend": [
    "Platform, system and cloud administrators who manage OpenShift infrastructure",
    "Site reliability engineers (SREs) and DevOps engineers running applications on OpenShift",
    "Kubernetes administrators moving to Red Hat OpenShift",
    "IT professionals preparing for the Red Hat Certified OpenShift Administrator (EX280) exam"
  ],
  "prerequisites": [
    "Official: none – Red Hat sets no formal prerequisites for the EX280 exam. RHCSA is strongly recommended but not required.",
    "Recommended by Metaskills: experience deploying and managing applications on OpenShift or Kubernetes using the web console and command line (equivalent to Red Hat's OpenShift Administration I), plus basic Linux skills: using a Bash shell, working with files and processes, and checking network settings."
  ],
  "objectives": [
    "Manage OpenShift clusters from the web console and the oc command line, and troubleshoot applications and nodes",
    "Deploy and update applications declaratively using manifests, Kustomize, Helm and templates",
    "Configure identity providers, users, groups, RBAC roles and service accounts",
    "Protect application traffic with network policies and expose applications with TLS routes and load-balancer services",
    "Enable developer self-service with project templates, quotas and limit ranges",
    "Install and update operators and manage OpenShift cluster updates",
    "Run workloads that need special permissions using security context constraints",
    "Complete performance-based tasks efficiently under exam conditions"
  ],
  "courseDesign": "Red Hat publishes the EX280 exam objectives without percentage weightings.",
  "schedule": [
    {
      "day": "Day 1 – Manage OpenShift Container Platform",
      "items": [
        "console and oc CLI, projects, troubleshooting",
        "Manage resources declaratively: manifests, Kustomize, Helm and templates"
      ]
    },
    {
      "day": "Day 2 – Deploy and manage applications",
      "items": [
        "deployments, scaling, probes, config maps, secrets and storage",
        "Manage authentication and authorisation: HTPasswd identity provider, users and groups, RBAC, service accounts"
      ]
    },
    {
      "day": "Day 3 – Configure network security",
      "items": [
        "network policies, routes with TLS, load-balancer services",
        "Enable developer self-service: project templates, quotas, limit ranges"
      ]
    },
    {
      "day": "Day 4 – Manage OpenShift operators and cluster updates • Configure application security",
      "items": [
        "security context constraints and privileged workloads",
        "Timed EX280 mock exam, review and exam-day strategy"
      ]
    }
  ],
  "practicalActivities": [
    "Hands-on labs on a live OpenShift cluster throughout every day",
    "Deploy applications with manifests, Kustomize and Helm",
    "Configure identity providers, RBAC and service accounts",
    "Network policy and TLS route labs",
    "Multi-tenant self-service setup with quotas and project templates",
    "Operator installation and update exercises",
    "Timed, performance-based EX280 mock exam with instructor review"
  ],
  "certificationNote": [
    "Participants who meet the attendance and course-completion requirements will receive a Metaskills Institute Certificate of Completion. The Red Hat Certified OpenShift Administrator certification is separately awarded by Red Hat after a candidate registers for and passes the applicable official examination (EX280). Metaskills Institute provides certification-aligned preparation and does not guarantee an examination pass. This course is independently developed by Metaskills Institute and is not official Red Hat training.",
    "EXAM FORMAT: Performance-based exam – candidates complete hands-on administration tasks on a live Red Hat OpenShift cluster. Taken in person at a testing centre or remotely.\nDURATION: 3 hours\nPASS MARK: Minimum score of 210 out of 300 (confirm in Red Hat's exam information when registering)\nVALIDITY: Considered current for 3 years\nRETAKE POLICY: One free retake if the first attempt is not passed, used within one year of purchase.\nWHAT THE EXAM FEE INCLUDES (S$820): The official Red Hat EX280 exam, with one free retake.\nPATHWAY NOTE: RHCSA is not required for EX280, but Red Hat strongly recommends it."
  ],
  "feeBreakdown": {
    "training": 5500,
    "exam": 820,
    "total": 6320,
    "examLabel": "Exam fee (official Red Hat EX280 exam)"
  },
  "gstNote": "Prices are in Singapore dollars (SGD) per participant and exclude GST, which is charged in addition at the prevailing rate (currently 9%).",
  "fees": {
    "selfSponsored": "S$6,320 per participant",
    "corporateSmall": "S$6,320 per participant",
    "corporateLarge": "S$6,320 per participant"
  },
  "nextRunDate": "",
  "seoTitle": "Red Hat Certified OpenShift Administrator (EX280) | Metaskills Institute Singapore",
  "seoDescription": "Manage secure, multi-tenant OpenShift clusters with 4-day EX280 coaching in Singapore, hands-on labs and an official exam.",
  "whatsappMessage": "Hello Metaskills Institute, I would like to enquire / register for Red Hat Certified OpenShift Administrator (EX280) (1-to-1 or small-group coaching)."
},
];
