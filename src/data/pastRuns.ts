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
export const pastRunsData: Record<string, PastRun[]> = {
  // Agentic AI Series
  "agentic-ai-foundations": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 18,
      organization: "MINDEF",
      photos: [pastRun3, pastRun1],
      highlight: "100% of participants rated the workshop 'Excellent'",
      testimonial: {
        quote: "The hands-on labs were incredibly practical. I was able to apply AI workflow concepts to my team's operations within the first week.",
        name: "David T.",
        role: "Senior Operations Manager",
        org: "MINDEF",
      },
    },
    {
      date: "Nov 2025",
      venue: "CT Hub 2, Singapore",
      participants: 22,
      organization: "NEC Asia Pacific",
      photos: [pastRun1, pastRun4],
      highlight: "Cross-functional teams from 4 departments attended",
    },
  ],
  "agentic-ai-use-case": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 15,
      organization: "DSTA",
      photos: [pastRun5, pastRun6],
      highlight: "Participants built 8 real-world AI use cases during the workshop",
      testimonial: {
        quote: "This workshop shifted our perspective on AI accountability. The case studies were directly relevant to our defence applications.",
        name: "Rachel L.",
        role: "AI Programme Lead",
        org: "DSTA",
      },
    },
  ],
  "agentic-ai-deploy-secure-systems": [
    {
      date: "Mar 2026",
      venue: "CT Hub 2, Singapore",
      participants: 12,
      organization: "Certis",
      photos: [pastRun4, pastRun3],
      highlight: "Deep-dive into secure deployment pipelines for AI agents",
    },
  ],

  // Data Science
  "python-programming-for-data-analytics": [
    {
      date: "Dec 2025",
      venue: "CT Hub 2, Singapore",
      participants: 25,
      organization: "OCBC Bank",
      photos: [pastRun1, pastRun4],
      highlight: "25 analysts upskilled in Python data analytics",
      testimonial: {
        quote: "The curriculum was perfectly tailored for banking professionals. Our team's data processing efficiency improved by 40% after the course.",
        name: "Michelle W.",
        role: "Data Analytics Lead",
        org: "OCBC Bank",
      },
    },
    {
      date: "Oct 2025",
      venue: "SMU Campus, Singapore",
      participants: 20,
      organization: "UOB",
      photos: [pastRun3, pastRun2],
      highlight: "Joint programme with SMU faculty",
    },
    {
      date: "Aug 2025",
      venue: "CT Hub 2, Singapore",
      participants: 18,
      organization: "Maybank",
      photos: [pastRun4, pastRun1],
      highlight: "Customised curriculum for financial data analytics",
    },
  ],
  "certified-data-analyst": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 20,
      organization: "IMDA",
      photos: [pastRun2, pastRun1],
      highlight: "100% certification pass rate",
      testimonial: {
        quote: "The structured approach from fundamentals to advanced analytics gave our team the confidence to lead data-driven projects.",
        name: "James C.",
        role: "Digital Transformation Manager",
        org: "IMDA",
      },
    },
  ],
  "certified-data-scientist": [
    {
      date: "Nov 2025",
      venue: "CT Hub 2, Singapore",
      participants: 15,
      organization: "MAS",
      photos: [pastRun5, pastRun4],
      highlight: "Intensive deep learning capstone projects completed",
      testimonial: {
        quote: "The faculty's industry experience was invaluable. They brought real-world applications of ML models that we could immediately apply to financial regulation.",
        name: "Dr. Sarah T.",
        role: "Senior Data Scientist",
        org: "MAS",
      },
    },
  ],

  // Fintech / Algorithmic Trading
  "algorithmic-trading-level-1": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 16,
      organization: "OCBC Bank",
      photos: [pastRun4, pastRun3],
      highlight: "Live trading simulation with real market data",
      testimonial: {
        quote: "An eye-opening programme. The blend of theory and hands-on trading simulation was exactly what our quant team needed.",
        name: "Kevin L.",
        role: "Quantitative Analyst",
        org: "OCBC Bank",
      },
    },
    {
      date: "Dec 2025",
      venue: "CT Hub 2, Singapore",
      participants: 12,
      organization: "UOB",
      photos: [pastRun1, pastRun5],
      highlight: "Participants built functional trading algorithms",
    },
  ],
  "algorithmic-trading-level-2": [
    {
      date: "Mar 2026",
      venue: "CT Hub 2, Singapore",
      participants: 10,
      organization: "Maybank",
      photos: [pastRun5, pastRun4],
      highlight: "Advanced ML-driven strategy development",
    },
  ],

  // AI Automation
  "rise-of-ai-agents-2026": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 24,
      organization: "SMRT",
      photos: [pastRun3, pastRun1],
      highlight: "24 operations leaders explored AI agent deployment",
      testimonial: {
        quote: "This opened our eyes to how AI agents can transform public transport operations. Highly practical and forward-looking.",
        name: "Andrew K.",
        role: "Head of Innovation",
        org: "SMRT",
      },
    },
  ],
  "build-ai-workflows-no-code": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 20,
      organization: "SAFRA",
      photos: [pastRun1, pastRun6],
      highlight: "Non-technical managers built functional AI workflows",
    },
  ],

  // AI Leadership
  "ai-strategy-roadmap-leaders": [
    {
      date: "Dec 2025",
      venue: "CT Hub 2, Singapore",
      participants: 15,
      organization: "MINDEF",
      photos: [pastRun5, pastRun6],
      highlight: "C-suite and senior leaders from defence sector",
      testimonial: {
        quote: "The strategic frameworks taught here have become the foundation of our AI transformation roadmap. Essential for any leader navigating the AI era.",
        name: "BG (Ret) Tan S.K.",
        role: "Director, Digital Strategy",
        org: "MINDEF",
      },
    },
    {
      date: "Oct 2025",
      venue: "SMU Campus, Singapore",
      participants: 18,
      organization: "NUS",
      photos: [pastRun3, pastRun5],
      highlight: "Joint executive programme with NUS faculty",
    },
  ],
  "governing-ai-agents-trust-boundaries": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 14,
      organization: "MAS",
      photos: [pastRun5, pastRun3],
      highlight: "Deep-dive into AI governance frameworks for financial regulation",
    },
  ],

  // Cyber Defence
  "cybersecurity-roles-threats-pathways": [
    {
      date: "Nov 2025",
      venue: "CT Hub 2, Singapore",
      participants: 20,
      organization: "Certis",
      photos: [pastRun3, pastRun4],
      highlight: "Security professionals from 5 organisations attended",
      testimonial: {
        quote: "Comprehensive coverage of the threat landscape. The practical labs on incident response were outstanding.",
        name: "Timothy G.",
        role: "Chief Information Security Officer",
        org: "Certis",
      },
    },
  ],

  // MCC+ Series
  "mcc-plus-cyber-defence-foundation": [
    {
      date: "Feb 2026",
      venue: "CT Hub 2, Singapore",
      participants: 16,
      organization: "DSTA",
      photos: [pastRun4, pastRun1],
      highlight: "Foundation certification with 100% pass rate",
    },
  ],
  "mcc-plus-security-operations": [
    {
      date: "Jan 2026",
      venue: "CT Hub 2, Singapore",
      participants: 12,
      organization: "MINDEF",
      photos: [pastRun3, pastRun4],
      highlight: "Live SOC simulation exercises completed",
    },
  ],
};

export const getPastRuns = (slug: string): PastRun[] => pastRunsData[slug] || [];
