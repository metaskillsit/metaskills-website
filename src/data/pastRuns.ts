import pastRun1 from "@/assets/past-run-1.jpg";
import pastRun2 from "@/assets/past-run-2.jpg";
import pastRun3 from "@/assets/past-run-3.jpg";
import pastRun4 from "@/assets/past-run-4.jpg";
import pastRun5 from "@/assets/past-run-5.jpg";
import pastRun6 from "@/assets/past-run-6.jpg";

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

// Map course slugs to their past runs
// Only verified past runs with real data are included
export const pastRunsData: Record<string, PastRun[]> = {
  // ── Agentic AI Series (only MINDEF runs verified) ──
  "agentic-ai-foundations": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 18,
      organization: "Corporate",
      photos: [pastRun3, pastRun1],
      highlight: "100% of participants rated the workshop 'Excellent'",
    },
  ],
  "agentic-ai-use-case": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 15,
      organization: "Corporate",
      photos: [pastRun5, pastRun6],
      highlight: "Participants built 8 real-world AI use cases during the workshop",
    },
  ],
  "agentic-ai-deploy-secure-systems": [
    {
      date: "Mar 2026",
      venue: "CT Hub 2, Singapore",
      participants: 12,
      organization: "Corporate",
      photos: [pastRun4, pastRun3],
      highlight: "Deep-dive into secure deployment pipelines for AI agents",
    },
  ],

  // ── Data Science (JCube courses — real testimonials from jcube-institute.com) ──
  "certified-data-analyst": [
    {
      date: "2024",
      venue: "Singapore",
      participants: 20,
      organization: "Corporate",
      photos: [pastRun2, pastRun1],
      highlight: "Industry-recognised certification with high pass rate",
      testimonial: {
        quote: "The course curriculum is exceptionally well-structured and focused on equipping students with the practical skills needed to handle real-world data analyst work using Python. The skills learned during the course have been directly applicable to my job, significantly improving my efficiency and productivity.",
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
      photos: [pastRun3, pastRun4],
      highlight: "Graduates placed in data governance and analytics roles",
      testimonial: {
        quote: "The curriculum is hands-on and practical, emphasising on developing data science intuition rather than simply coding. Coming from a non-programming background, I picked up data analytics, data visualisation and machine learning skills that are relevant to industry practices.",
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
      photos: [pastRun5, pastRun4],
      highlight: "Intensive deep learning capstone projects completed",
      testimonial: {
        quote: "I have picked up skills from really nothing to working with APIs, data cleaning, data visualisation and data analysis. Both Dr. Ke and Jack are competent, patient and motivating, encouraging us to learn and complete our projects! The practicum was the highlight, providing valuable insights into AI and data science applications in the industry.",
        name: "Cher Kheng Thian",
        role: "Founder",
        org: "Sales and Marketing Agency",
      },
    },
  ],
  "python-programming-for-data-analytics": [
    {
      date: "2024",
      venue: "Singapore",
      participants: 22,
      organization: "Corporate",
      photos: [pastRun1, pastRun4],
      highlight: "Professionals upskilled in Python data analytics",
      testimonial: {
        quote: "Thank you so much, Dr. Jack! The resources you've provided have been incredibly helpful and have significantly enhanced my learning experience. The skills and knowledge I've gained from your course have been directly applicable to improving these workflows.",
        name: "Tan Cheng Kiat",
        role: "Analyst",
        org: "Singapore Healthcare Agency",
      },
    },
  ],

  // ── Fintech / Algorithmic Trading (ran Jun 2022 – Dec 2023) ──
  "algorithmic-trading-level-1": [
    {
      date: "Jun 2022",
      venue: "Singapore",
      participants: 15,
      photos: [pastRun4, pastRun3],
      highlight: "Inaugural cohort — live trading simulation with real market data",
    },
    {
      date: "Oct 2022",
      venue: "Singapore",
      participants: 18,
      photos: [pastRun1, pastRun5],
      highlight: "Participants built functional trading algorithms",
    },
    {
      date: "Mar 2023",
      venue: "Singapore",
      participants: 20,
      photos: [pastRun3, pastRun6],
      highlight: "Expanded cohort with cross-industry participation",
    },
    {
      date: "Aug 2023",
      venue: "Singapore",
      participants: 16,
      photos: [pastRun2, pastRun4],
      highlight: "Strong demand from finance professionals",
    },
    {
      date: "Dec 2023",
      venue: "Singapore",
      participants: 14,
      photos: [pastRun5, pastRun1],
      highlight: "Final run of the year with advanced strategy modules",
    },
  ],
  "algorithmic-trading-level-2": [
    {
      date: "Sep 2022",
      venue: "Singapore",
      participants: 10,
      photos: [pastRun5, pastRun4],
      highlight: "Advanced ML-driven strategy development",
    },
    {
      date: "Feb 2023",
      venue: "Singapore",
      participants: 12,
      photos: [pastRun3, pastRun1],
      highlight: "Deep reinforcement learning applied to trading",
    },
    {
      date: "Jul 2023",
      venue: "Singapore",
      participants: 14,
      photos: [pastRun6, pastRun2],
      highlight: "Backtesting and live simulation modules",
    },
    {
      date: "Nov 2023",
      venue: "Singapore",
      participants: 11,
      photos: [pastRun4, pastRun5],
      highlight: "Final cohort — portfolio optimisation capstone",
    },
  ],

  // ── MCC+ Cyber Defence (MINDEF run verified) ──
  "mcc-plus-cyber-defence-foundation": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 16,
      organization: "Corporate",
      photos: [pastRun4, pastRun1],
      highlight: "Foundation certification completed",
    },
  ],
  "mcc-plus-security-operations": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 12,
      organization: "Corporate",
      photos: [pastRun3, pastRun4],
      highlight: "Live SOC simulation exercises completed",
    },
  ],
};

export const getPastRuns = (slug: string): PastRun[] => pastRunsData[slug] || [];
