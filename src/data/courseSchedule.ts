export interface CourseRunDate {
  intake: string;
  dates: string;
  status: "full" | "filling" | "upcoming";
}

export const courseScheduleData: Record<string, CourseRunDate[]> = {
  // ── Data Science ──
  "python-programming-for-data-analytics": [
    { intake: "Jun 2020 Class A", dates: "1 Jun – 1 Jul 2020", status: "full" },
    { intake: "Jun 2020 Class B", dates: "2 Jun – 2 Jul 2020", status: "full" },
    { intake: "Jul 2020 Class A", dates: "6 Jul – 5 Aug 2020", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "certified-data-analyst": [
    { intake: "Dec 2020 Class A (e2i)", dates: "3 Dec 2020 – 23 Jan 2021", status: "full" },
    { intake: "Dec 2020 (CITREP+)", dates: "3 Dec – 19 Dec 2020", status: "full" },
    { intake: "Mar 2021 Class (e2i)", dates: "4 Mar – 10 Apr 2021", status: "full" },
    { intake: "Apr 2021 Class (e2i)", dates: "22 Apr – 10 Jul 2021", status: "full" },
    { intake: "May 2021 Class (e2i)", dates: "27 May – 10 Jul 2021", status: "full" },
    { intake: "Jun 2021 Class (e2i)", dates: "17 Jun – 31 Jul 2021", status: "full" },
    { intake: "Jul 2021 Class (e2i)", dates: "15 Jul – 16 Oct 2021", status: "full" },
    { intake: "Aug 2021 Class (e2i)", dates: "12 Aug – 16 Oct 2021", status: "full" },
    { intake: "Sep 2021 Class (e2i)", dates: "9 Sep – 20 Nov 2021", status: "full" },
    { intake: "Oct 2021 Class (e2i)", dates: "7 Oct – 20 Nov 2021", status: "full" },
    { intake: "Nov 2021 Class (e2i)", dates: "11 Nov 2021 – 5 Mar 2022", status: "full" },
    { intake: "Jan 2022 Class (e2i)", dates: "6 Jan – 5 Mar 2022", status: "full" },
    { intake: "Feb 2022 Class (e2i)", dates: "17 Feb – 23 Apr 2022", status: "full" },
    { intake: "Mar 2022 Class (e2i)", dates: "10 Mar – 23 Apr 2022", status: "full" },
    { intake: "Apr 2022 Class (e2i)", dates: "31 Mar – 28 May 2022", status: "full" },
    { intake: "May 2022 Class (e2i)", dates: "19 May – 2 Jul 2022", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "certified-data-scientist": [
    { intake: "Nov 2020 Class A", dates: "3 Nov – 17 Dec 2020", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Agentic AI Workshop Series ──
  "agentic-ai-foundations": [
    { intake: "Nov 2025 Run", dates: "Nov 2025", status: "full" },
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Sep 2025 Run", dates: "18–19 Sep 2025", status: "upcoming" },
  ],
  "agentic-ai-use-case": [
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Oct 2025 Run", dates: "2–3 Oct 2025", status: "upcoming" },
  ],
  "agentic-ai-deploy-secure-systems": [
    { intake: "Mar 2026 Run", dates: "Mar 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Fintech / Algorithmic Trading ──
  "algorithmic-trading-level-1": [
    { intake: "Dec 2025 Run", dates: "Dec 2025", status: "full" },
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "algorithmic-trading-level-2": [
    { intake: "Mar 2026 Run", dates: "Mar 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── AI Automation and Agents ──
  "rise-of-ai-agents-2026": [
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-ai-workflows-no-code": [
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "design-ai-automations-plain-language": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-operational-tools-ai-coding-agents": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-your-own-ai-assistant": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "gpt-your-organisation-knowledge-base": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "secure-agentic-ai-infrastructure": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-training-design-curriculum": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-ai-tutors-adaptive-learning": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── AI Leadership and Governance ──
  "ai-strategy-roadmap-leaders": [
    { intake: "Oct 2025 Run", dates: "Oct 2025", status: "full" },
    { intake: "Dec 2025 Run", dates: "Dec 2025", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-accountability-when-ai-decides": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "governing-ai-agents-trust-boundaries": [
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-wargaming-test-decisions": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Cyber Defence ──
  "cybersecurity-roles-threats-pathways": [
    { intake: "Nov 2025 Run", dates: "Nov 2025", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── MCC+ Cyber Defence Certification ──
  "mcc-plus-cyber-defence-foundation": [
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-security-operations": [
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-threat-hunting-blue-team": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-offensive-cyber-fundamentals": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-digital-forensics": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-ai-security-autonomous-defence": [
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
};

export const getCourseSchedule = (slug: string): CourseRunDate[] =>
  courseScheduleData[slug] || [];
