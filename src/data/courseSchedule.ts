export interface CourseRunDate {
  intake: string;
  dates: string;
  status: "full" | "filling" | "upcoming";
  client?: string;
}

export const courseScheduleData: Record<string, CourseRunDate[]> = {
  // ── Data Science ──
  "python-programming-for-data-analytics": [
    { intake: "Jun 2020 Class A", dates: "1 Jun – 1 Jul 2020", status: "full" },
    { intake: "Jun 2020 Class B", dates: "2 Jun – 2 Jul 2020", status: "full" },
    { intake: "Jul 2020 Class A", dates: "6 Jul – 5 Aug 2020", status: "full" },
    { intake: "Nov 2024 Run (MINDEF)", dates: "14–15 Nov 2024", status: "full", client: "MINDEF" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "certified-data-analyst": [
    { intake: "Jul 2024 Module I (MINDEF)", dates: "29–30 Jul 2024", status: "full", client: "MINDEF" },
    { intake: "Aug 2024 Module II (MINDEF)", dates: "5–6 Aug 2024", status: "full", client: "MINDEF" },
    { intake: "Aug 2024 Module III (MINDEF)", dates: "19–20 Aug 2024", status: "full", client: "MINDEF" },
    { intake: "Aug 2024 Module IV (MINDEF)", dates: "26–27 Aug 2024", status: "full", client: "MINDEF" },
    { intake: "Nov 2024 Module I (MINDEF)", dates: "4–5 Nov 2024", status: "full", client: "MINDEF" },
    { intake: "Nov 2024 Module II (MINDEF)", dates: "11–12 Nov 2024", status: "full", client: "MINDEF" },
    { intake: "Nov 2024 Module III (MINDEF)", dates: "18–19 Nov 2024", status: "full", client: "MINDEF" },
    { intake: "Nov 2024 Module IV (MINDEF)", dates: "25–26 Nov 2024", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module I (MINDEF)", dates: "2–3 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module II (MINDEF)", dates: "9–10 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module III (MINDEF)", dates: "23–24 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jul 2025 Module IV (MINDEF)", dates: "7–8 Jul 2025", status: "full", client: "MINDEF" },
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
    { intake: "Sep 2024 Module I (MINDEF)", dates: "9–10 Sep 2024", status: "full", client: "MINDEF" },
    { intake: "Sep 2024 Module II (MINDEF)", dates: "23–24 Sep 2024", status: "full", client: "MINDEF" },
    { intake: "Sep 2024 Module III (MINDEF)", dates: "30 Sep – 1 Oct 2024", status: "full", client: "MINDEF" },
    { intake: "Oct 2024 Module IV (MINDEF)", dates: "7–8 Oct 2024", status: "full", client: "MINDEF" },
    { intake: "Oct 2024 Module V (MINDEF)", dates: "21–22 Oct 2024", status: "full", client: "MINDEF" },
    { intake: "Oct 2024 Module VI (MINDEF)", dates: "28–29 Oct 2024", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module I (MINDEF)", dates: "6–7 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module II (MINDEF)", dates: "13–14 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module III (MINDEF)", dates: "20–21 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module IV (MINDEF)", dates: "3–4 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module V (MINDEF)", dates: "17–18 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module VI (MINDEF)", dates: "24–25 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Nov 2020 Class A", dates: "3 Nov – 17 Dec 2020", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Agentic AI Workshop Series ──
  "agentic-ai-foundations": [
    { intake: "Jun 2025 Run (MINDEF)", dates: "12–13 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Dec 2024 Run", dates: "2–3 Dec 2024", status: "full" },
    { intake: "Nov 2025 Run", dates: "Nov 2025", status: "full" },
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Sep 2025 Run", dates: "18–19 Sep 2025", status: "upcoming" },
  ],
  "agentic-ai-use-case": [
    { intake: "Jun 2025 Run (MINDEF)", dates: "26–27 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Oct 2025 Run", dates: "2–3 Oct 2025", status: "upcoming" },
  ],
  "agentic-ai-deploy-secure-systems": [
    { intake: "Jul 2025 Run (MINDEF)", dates: "31 Jul – 1 Aug 2025", status: "full", client: "MINDEF" },
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
    { intake: "Jul 2025 Run (MINDEF)", dates: "10–11 Jul 2025", status: "full", client: "MINDEF" },
    { intake: "Aug 2025 Run (MINDEF)", dates: "4–5 Aug 2025", status: "full", client: "MINDEF" },
    { intake: "Aug 2025 Run B (MINDEF)", dates: "25–26 Aug 2025", status: "full", client: "MINDEF" },
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
    { intake: "Aug 2025 Run (MINDEF)", dates: "14–15 Aug 2025", status: "full", client: "MINDEF" },
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
