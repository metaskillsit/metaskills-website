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
    { intake: "Mar 2025 Run (DBS)", dates: "10–11 Mar 2025", status: "full", client: "DBS" },
    { intake: "May 2025 Run (OCBC)", dates: "19–20 May 2025", status: "full", client: "OCBC" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "certified-data-analyst": [
    // 2025 MINDEF corporate runs only
    { intake: "Jan 2025 Module I (MINDEF)", dates: "13–14 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module II (MINDEF)", dates: "20–21 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module III (MINDEF)", dates: "3–4 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module IV (MINDEF)", dates: "17–18 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module I (MINDEF)", dates: "2–3 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module II (MINDEF)", dates: "9–10 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jun 2025 Module III (MINDEF)", dates: "23–24 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Jul 2025 Module IV (MINDEF)", dates: "7–8 Jul 2025", status: "full", client: "MINDEF" },
    // Other corporate runs
    { intake: "Mar 2025 Run (DBS)", dates: "17–18 Mar 2025", status: "full", client: "DBS" },
    { intake: "Apr 2025 Run (OCBC)", dates: "7–8 Apr 2025", status: "full", client: "OCBC" },
    { intake: "May 2025 Run (MAS)", dates: "12–13 May 2025", status: "full", client: "MAS" },
    { intake: "Jun 2025 Run (GovTech)", dates: "16–17 Jun 2025", status: "full", client: "GovTech" },
    { intake: "Jul 2025 Run (ST Engineering)", dates: "21–22 Jul 2025", status: "full", client: "ST Engineering" },
    { intake: "Aug 2025 Run (Singtel)", dates: "4–5 Aug 2025", status: "full", client: "Singtel" },
    { intake: "Aug 2025 Run (NCS)", dates: "18–19 Aug 2025", status: "full", client: "NCS" },
    { intake: "Sep 2025 Run (Keppel)", dates: "1–2 Sep 2025", status: "full", client: "Keppel" },
    { intake: "Sep 2025 Run (CapitaLand)", dates: "15–16 Sep 2025", status: "full", client: "CapitaLand" },
    { intake: "Oct 2025 Run (Temasek)", dates: "6–7 Oct 2025", status: "full", client: "Temasek" },
    { intake: "Nov 2025 Run (PSA)", dates: "3–4 Nov 2025", status: "full", client: "PSA" },
    // Public runs (e2i)
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
    { intake: "Jan 2025 Module I (MINDEF)", dates: "6–7 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module II (MINDEF)", dates: "13–14 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2025 Module III (MINDEF)", dates: "20–21 Jan 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module IV (MINDEF)", dates: "3–4 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module V (MINDEF)", dates: "17–18 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Feb 2025 Module VI (MINDEF)", dates: "24–25 Feb 2025", status: "full", client: "MINDEF" },
    { intake: "Apr 2025 Run (DBS)", dates: "14–15 Apr 2025", status: "full", client: "DBS" },
    { intake: "May 2025 Run (GovTech)", dates: "5–6 May 2025", status: "full", client: "GovTech" },
    { intake: "Jul 2025 Run (MAS)", dates: "14–15 Jul 2025", status: "full", client: "MAS" },
    { intake: "Sep 2025 Run (Singtel)", dates: "8–9 Sep 2025", status: "full", client: "Singtel" },
    { intake: "Nov 2020 Class A", dates: "3 Nov – 17 Dec 2020", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Agentic AI Workshop Series ──
  "agentic-ai-foundations": [
    { intake: "Jun 2025 Run (MINDEF)", dates: "12–13 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Aug 2025 Run (ST Engineering)", dates: "11–12 Aug 2025", status: "full", client: "ST Engineering" },
    { intake: "Oct 2025 Run (OCBC)", dates: "20–21 Oct 2025", status: "full", client: "OCBC" },
    { intake: "Dec 2024 Run", dates: "2–3 Dec 2024", status: "full" },
    { intake: "Nov 2025 Run", dates: "Nov 2025", status: "full" },
    { intake: "Jan 2026 Run", dates: "Jan 2026", status: "full" },
    { intake: "Sep 2025 Run", dates: "18–19 Sep 2025", status: "upcoming" },
  ],
  "agentic-ai-use-case": [
    { intake: "Jun 2025 Run (MINDEF)", dates: "26–27 Jun 2025", status: "full", client: "MINDEF" },
    { intake: "Sep 2025 Run (GovTech)", dates: "15–16 Sep 2025", status: "full", client: "GovTech" },
    { intake: "Nov 2025 Run (NCS)", dates: "10–11 Nov 2025", status: "full", client: "NCS" },
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Oct 2025 Run", dates: "2–3 Oct 2025", status: "upcoming" },
  ],
  "agentic-ai-deploy-secure-systems": [
    { intake: "Jul 2025 Run (MINDEF)", dates: "31 Jul – 1 Aug 2025", status: "full", client: "MINDEF" },
    { intake: "Oct 2025 Run (Keppel)", dates: "27–28 Oct 2025", status: "full", client: "Keppel" },
    { intake: "Dec 2025 Run (DBS)", dates: "8–9 Dec 2025", status: "full", client: "DBS" },
    { intake: "Mar 2026 Run", dates: "Mar 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Fintech / Algorithmic Trading ──
  "algorithmic-trading-level-1": [
    { intake: "Oct 2025 Run (MAS)", dates: "13–14 Oct 2025", status: "full", client: "MAS" },
    { intake: "Nov 2025 Run (DBS)", dates: "17–18 Nov 2025", status: "full", client: "DBS" },
    { intake: "Dec 2025 Run (OCBC)", dates: "8–9 Dec 2025", status: "full", client: "OCBC" },
    { intake: "Feb 2026 Run", dates: "Feb 2026", status: "full" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "algorithmic-trading-level-2": [
    { intake: "Jan 2026 Run (MAS)", dates: "19–20 Jan 2026", status: "full", client: "MAS" },
    { intake: "Feb 2026 Run (Temasek)", dates: "9–10 Feb 2026", status: "full", client: "Temasek" },
    { intake: "Mar 2026 Run (DBS)", dates: "9–10 Mar 2026", status: "full", client: "DBS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── AI Automation and Agents ──
  "rise-of-ai-agents-2026": [
    { intake: "Nov 2025 Run (GovTech)", dates: "17–18 Nov 2025", status: "full", client: "GovTech" },
    { intake: "Dec 2025 Run (Singtel)", dates: "1–2 Dec 2025", status: "full", client: "Singtel" },
    { intake: "Jan 2026 Run (CapitaLand)", dates: "12–13 Jan 2026", status: "full", client: "CapitaLand" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-ai-workflows-no-code": [
    { intake: "Dec 2025 Run (NCS)", dates: "15–16 Dec 2025", status: "full", client: "NCS" },
    { intake: "Jan 2026 Run (ST Engineering)", dates: "26–27 Jan 2026", status: "full", client: "ST Engineering" },
    { intake: "Feb 2026 Run (PSA)", dates: "9–10 Feb 2026", status: "full", client: "PSA" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "design-ai-automations-plain-language": [
    { intake: "Jan 2026 Run (OCBC)", dates: "19–20 Jan 2026", status: "full", client: "OCBC" },
    { intake: "Feb 2026 Run (Keppel)", dates: "2–3 Feb 2026", status: "full", client: "Keppel" },
    { intake: "Mar 2026 Run (GovTech)", dates: "2–3 Mar 2026", status: "full", client: "GovTech" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-operational-tools-ai-coding-agents": [
    { intake: "Jan 2026 Run (Singtel)", dates: "5–6 Jan 2026", status: "full", client: "Singtel" },
    { intake: "Feb 2026 Run (DBS)", dates: "16–17 Feb 2026", status: "full", client: "DBS" },
    { intake: "Mar 2026 Run (NCS)", dates: "16–17 Mar 2026", status: "full", client: "NCS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-your-own-ai-assistant": [
    { intake: "Dec 2025 Run (CapitaLand)", dates: "22–23 Dec 2025", status: "full", client: "CapitaLand" },
    { intake: "Jan 2026 Run (Temasek)", dates: "26–27 Jan 2026", status: "full", client: "Temasek" },
    { intake: "Feb 2026 Run (MINDEF)", dates: "23–24 Feb 2026", status: "full", client: "MINDEF" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "gpt-your-organisation-knowledge-base": [
    { intake: "Jul 2025 Run (MINDEF)", dates: "10–11 Jul 2025", status: "full", client: "MINDEF" },
    { intake: "Aug 2025 Run (MINDEF)", dates: "4–5 Aug 2025", status: "full", client: "MINDEF" },
    { intake: "Aug 2025 Run B (MINDEF)", dates: "25–26 Aug 2025", status: "full", client: "MINDEF" },
    { intake: "Oct 2025 Run (PSA)", dates: "13–14 Oct 2025", status: "full", client: "PSA" },
    { intake: "Nov 2025 Run (ST Engineering)", dates: "3–4 Nov 2025", status: "full", client: "ST Engineering" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "secure-agentic-ai-infrastructure": [
    { intake: "Jan 2026 Run (MINDEF)", dates: "12–13 Jan 2026", status: "full", client: "MINDEF" },
    { intake: "Feb 2026 Run (GovTech)", dates: "2–3 Feb 2026", status: "full", client: "GovTech" },
    { intake: "Mar 2026 Run (MAS)", dates: "9–10 Mar 2026", status: "full", client: "MAS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-training-design-curriculum": [
    { intake: "Nov 2025 Run (OCBC)", dates: "24–25 Nov 2025", status: "full", client: "OCBC" },
    { intake: "Jan 2026 Run (DBS)", dates: "19–20 Jan 2026", status: "full", client: "DBS" },
    { intake: "Feb 2026 Run (Singtel)", dates: "16–17 Feb 2026", status: "full", client: "Singtel" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "build-ai-tutors-adaptive-learning": [
    { intake: "Dec 2025 Run (GovTech)", dates: "15–16 Dec 2025", status: "full", client: "GovTech" },
    { intake: "Jan 2026 Run (NCS)", dates: "5–6 Jan 2026", status: "full", client: "NCS" },
    { intake: "Mar 2026 Run (Keppel)", dates: "2–3 Mar 2026", status: "full", client: "Keppel" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── AI Leadership and Governance ──
  "ai-strategy-roadmap-leaders": [
    { intake: "Aug 2025 Run (MINDEF)", dates: "14–15 Aug 2025", status: "full", client: "MINDEF" },
    { intake: "Sep 2025 Run (Temasek)", dates: "22–23 Sep 2025", status: "full", client: "Temasek" },
    { intake: "Oct 2025 Run (CapitaLand)", dates: "13–14 Oct 2025", status: "full", client: "CapitaLand" },
    { intake: "Dec 2025 Run (DBS)", dates: "1–2 Dec 2025", status: "full", client: "DBS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-accountability-when-ai-decides": [
    { intake: "Oct 2025 Run (MAS)", dates: "27–28 Oct 2025", status: "full", client: "MAS" },
    { intake: "Dec 2025 Run (GovTech)", dates: "8–9 Dec 2025", status: "full", client: "GovTech" },
    { intake: "Feb 2026 Run (OCBC)", dates: "23–24 Feb 2026", status: "full", client: "OCBC" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "governing-ai-agents-trust-boundaries": [
    { intake: "Nov 2025 Run (MINDEF)", dates: "10–11 Nov 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2026 Run (Singtel)", dates: "12–13 Jan 2026", status: "full", client: "Singtel" },
    { intake: "Feb 2026 Run (PSA)", dates: "16–17 Feb 2026", status: "full", client: "PSA" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "ai-wargaming-test-decisions": [
    { intake: "Dec 2025 Run (ST Engineering)", dates: "15–16 Dec 2025", status: "full", client: "ST Engineering" },
    { intake: "Jan 2026 Run (MINDEF)", dates: "26–27 Jan 2026", status: "full", client: "MINDEF" },
    { intake: "Mar 2026 Run (Temasek)", dates: "9–10 Mar 2026", status: "full", client: "Temasek" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── Cyber Defence ──
  "cybersecurity-roles-threats-pathways": [
    { intake: "Sep 2025 Run (MINDEF)", dates: "22–23 Sep 2025", status: "full", client: "MINDEF" },
    { intake: "Nov 2025 Run (GovTech)", dates: "10–11 Nov 2025", status: "full", client: "GovTech" },
    { intake: "Jan 2026 Run (NCS)", dates: "19–20 Jan 2026", status: "full", client: "NCS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],

  // ── MCC+ Cyber Defence Certification ──
  "mcc-plus-cyber-defence-foundation": [
    { intake: "Nov 2025 Run (MINDEF)", dates: "17–18 Nov 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2026 Run (ST Engineering)", dates: "5–6 Jan 2026", status: "full", client: "ST Engineering" },
    { intake: "Feb 2026 Run (GovTech)", dates: "9–10 Feb 2026", status: "full", client: "GovTech" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-security-operations": [
    { intake: "Dec 2025 Run (MINDEF)", dates: "1–2 Dec 2025", status: "full", client: "MINDEF" },
    { intake: "Jan 2026 Run (NCS)", dates: "12–13 Jan 2026", status: "full", client: "NCS" },
    { intake: "Feb 2026 Run (Singtel)", dates: "2–3 Feb 2026", status: "full", client: "Singtel" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-threat-hunting-blue-team": [
    { intake: "Jan 2026 Run (GovTech)", dates: "19–20 Jan 2026", status: "full", client: "GovTech" },
    { intake: "Feb 2026 Run (MINDEF)", dates: "9–10 Feb 2026", status: "full", client: "MINDEF" },
    { intake: "Mar 2026 Run (DBS)", dates: "2–3 Mar 2026", status: "full", client: "DBS" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-offensive-cyber-fundamentals": [
    { intake: "Dec 2025 Run (ST Engineering)", dates: "8–9 Dec 2025", status: "full", client: "ST Engineering" },
    { intake: "Feb 2026 Run (MINDEF)", dates: "16–17 Feb 2026", status: "full", client: "MINDEF" },
    { intake: "Mar 2026 Run (Keppel)", dates: "16–17 Mar 2026", status: "full", client: "Keppel" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-digital-forensics": [
    { intake: "Jan 2026 Run (MAS)", dates: "5–6 Jan 2026", status: "full", client: "MAS" },
    { intake: "Feb 2026 Run (OCBC)", dates: "23–24 Feb 2026", status: "full", client: "OCBC" },
    { intake: "Mar 2026 Run (MINDEF)", dates: "9–10 Mar 2026", status: "full", client: "MINDEF" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
  "mcc-plus-ai-security-autonomous-defence": [
    { intake: "Jan 2026 Run (MINDEF)", dates: "19–20 Jan 2026", status: "full", client: "MINDEF" },
    { intake: "Feb 2026 Run (GovTech)", dates: "16–17 Feb 2026", status: "full", client: "GovTech" },
    { intake: "Mar 2026 Run (Temasek)", dates: "23–24 Mar 2026", status: "full", client: "Temasek" },
    { intake: "Upcoming Run", dates: "Contact admissions@metaskills.sg", status: "upcoming" },
  ],
};

export const getCourseSchedule = (slug: string): CourseRunDate[] =>
  courseScheduleData[slug] || [];
