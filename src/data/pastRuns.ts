import pastClass1 from "@/assets/past-class-1.jpg";
import pastClass2 from "@/assets/past-class-2.jpg";
import pastClass3 from "@/assets/past-class-3.jpg";
import pastClass4 from "@/assets/past-class-4.jpg";
import pastClass5 from "@/assets/past-class-5.jpg";
import pastClass6 from "@/assets/past-class-6.jpg";
import pastClass21 from "@/assets/past-class-21.jpg";
import pastClass22 from "@/assets/past-class-22.jpg";
import pastClass24 from "@/assets/past-class-24.jpg";
import pastClass25 from "@/assets/past-class-25.jpg";
import pastClass27 from "@/assets/past-class-27.jpg";
import pastClass28 from "@/assets/past-class-28.jpg";
import pastClass29 from "@/assets/past-class-29.jpg";
import pastClass30 from "@/assets/past-class-30.jpg";
import pastClass31 from "@/assets/past-class-31.jpg";
import pastClass33 from "@/assets/past-class-33.jpg";
import pastClass34 from "@/assets/past-class-34.jpg";
import pastClass35 from "@/assets/past-class-35.jpg";
import pastClass37 from "@/assets/past-class-37.jpg";
import pastClass39 from "@/assets/past-class-39.jpg";
import pastClass40 from "@/assets/past-class-40.jpg";
import pastClass43 from "@/assets/past-class-43.jpg";

export interface PastRun {
  date: string;
  venue: string;
  participants: number;
  organization?: string;
  photos: string[];
  highlight?: string;
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    org: string;
  };
}

// Only courses with verified completed runs should have past-run showcase content.
export const pastRunsData: Record<string, PastRun[]> = {
  // ── Agentic AI Series (verified 2025 MINDEF runs) ──
  "agentic-ai-foundations": [
    {
      date: "Jun 2025",
      venue: "Singapore",
      participants: 18,
      organization: "MINDEF",
      photos: [pastClass28, pastClass29],
      highlight: "Participants completed end-to-end agent workflow prototypes in live labs.",
    },
  ],
  "agentic-ai-use-case": [
    {
      date: "Jun 2025",
      venue: "Singapore",
      participants: 15,
      organization: "MINDEF",
      photos: [pastClass30, pastClass31],
      highlight: "Teams translated operational scenarios into production-ready AI use-case blueprints.",
    },
  ],
  "agentic-ai-deploy-secure-systems": [
    {
      date: "Jul 2025",
      venue: "Singapore",
      participants: 12,
      organization: "MINDEF",
      photos: [pastClass33, pastClass34],
      highlight: "Hands-on deployment and governance exercises for secure enterprise AI agents.",
    },
  ],

  // ── Data Science (verified) ──
  "certified-data-analyst": [
    {
      date: "2024",
      venue: "Singapore",
      participants: 20,
      organization: "Corporate",
      photos: [pastClass6, pastClass24],
      highlight: "Industry-recognised certification with high practical completion rate.",
      testimonial: {
        quote:
          "The course curriculum is exceptionally well-structured and focused on practical analyst skills with Python. The techniques were directly applicable to my work and improved my productivity significantly.",
        name: "Ng Yee Tat",
        role: "Manager",
        org: "Large Singapore Telco",
      },
    },
    {
      date: "2023",
      venue: "Singapore",
      participants: 18,
      organization: "Corporate",
      photos: [pastClass25, pastClass27],
      highlight: "Graduates transitioned into analytics and governance roles across sectors.",
      testimonial: {
        quote:
          "The curriculum is practical and helped me build data science intuition, not just coding. I gained analytics and machine learning skills relevant to real industry practices.",
        name: "Evelyn Wong",
        role: "Analyst",
        org: "Leading Security Organisation",
      },
    },
  ],
  "certified-data-scientist": [
    {
      date: "2024",
      venue: "Singapore",
      participants: 15,
      organization: "Corporate",
      photos: [pastClass34, pastClass35],
      highlight: "Capstone projects focused on machine learning model deployment.",
    },
  ],
  "python-programming-for-data-analytics": [
    {
      date: "2024",
      venue: "Singapore",
      participants: 22,
      organization: "Corporate",
      photos: [pastClass24, pastClass25],
      highlight: "Professionals upskilled in Python workflows for real reporting and analytics tasks.",
    },
  ],

  // ── Fintech / Algorithmic Trading (verified 2022–2024 public runs) ──
  "algorithmic-trading-level-1": [
    {
      date: "Aug 2022",
      venue: "CT Hub, Singapore",
      participants: 16,
      photos: [pastClass1, pastClass39],
      highlight: "Run 1 — Inaugural cohort, 16 pax class full.",
    },
    {
      date: "Oct 2022",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass2, pastClass40],
      highlight: "Run 2 — 12 pax class full.",
    },
    {
      date: "Nov 2022",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass3, pastClass4],
      highlight: "Run 3 — 12 pax class full.",
    },
    {
      date: "Dec 2022",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass5, pastClass39],
      highlight: "Run 4 — 12 pax class full.",
    },
    {
      date: "Jan 2023",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass1, pastClass2],
      highlight: "Run 5 — 12 pax class full.",
    },
    {
      date: "Feb 2023",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass3, pastClass5],
      highlight: "Run 6 — 12 pax class full.",
    },
    {
      date: "Apr 2023",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass4, pastClass40],
      highlight: "Run 7 — 12 pax class full.",
    },
    {
      date: "May 2023",
      venue: "CT Hub, Singapore",
      participants: 15,
      photos: [pastClass39, pastClass1],
      highlight: "Run 8 — 15 pax class full.",
    },
    {
      date: "Jun 2023",
      venue: "CT Hub, Singapore",
      participants: 15,
      photos: [pastClass2, pastClass3],
      highlight: "Run 9 — 15 pax class full.",
    },
    {
      date: "Aug 2023",
      venue: "CT Hub, Singapore",
      participants: 15,
      photos: [pastClass4, pastClass5],
      highlight: "Run 10 — 15 pax class full.",
    },
    {
      date: "Mar 2024",
      venue: "CT Hub, Singapore",
      participants: 15,
      photos: [pastClass40, pastClass39],
      highlight: "Run 11 — Registration opened.",
    },
  ],
  "algorithmic-trading-level-2": [
    {
      date: "Nov 2022",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass3, pastClass4],
      highlight: "Run 1 — 12 pax class full.",
    },
    {
      date: "Jan 2023",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass5, pastClass39],
      highlight: "Run 2 — 12 pax class full.",
    },
    {
      date: "Mar 2023",
      venue: "CT Hub, Singapore",
      participants: 12,
      photos: [pastClass1, pastClass2],
      highlight: "Run 3 — 12 pax class full.",
    },
  ],

  // ── AI Automation and Leadership (verified completed runs) ──
  "gpt-your-organisation-knowledge-base": [
    {
      date: "Aug 2025",
      venue: "Singapore",
      participants: 16,
      organization: "MINDEF",
      photos: [pastClass30, pastClass37],
      highlight: "Participants built retrieval-ready organisational knowledge assistants.",
    },
  ],
  "ai-strategy-roadmap-leaders": [
    {
      date: "Aug 2025",
      venue: "Singapore",
      participants: 14,
      organization: "MINDEF",
      photos: [pastClass21, pastClass22],
      highlight: "Leadership teams developed practical AI adoption roadmaps and governance plans.",
    },
  ],

};

export const getPastRuns = (slug: string): PastRun[] => pastRunsData[slug] || [];
