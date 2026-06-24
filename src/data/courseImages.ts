// Per-course image imports — each course gets its own unique photo set
// Agentic AI Workshop Series
import agenticFoundations1 from "@/assets/courses/agentic-foundations-1.jpg";
import agenticFoundations2 from "@/assets/courses/agentic-foundations-2.jpg";
import agenticFoundations3 from "@/assets/courses/agentic-foundations-3.jpg";
import agenticLlm1 from "@/assets/courses/agentic-llm-1.jpg";
import agenticLlm2 from "@/assets/courses/agentic-llm-2.jpg";
import agenticLlm3 from "@/assets/courses/agentic-llm-3.jpg";
import agenticDeploy1 from "@/assets/courses/agentic-deploy-1.jpg";
import agenticDeploy2 from "@/assets/courses/agentic-deploy-2.jpg";
import agenticDeploy3 from "@/assets/courses/agentic-deploy-3.jpg";
// Data Science
import pythonAnalytics1 from "@/assets/courses/python-analytics-1.jpg";
import pythonAnalytics2 from "@/assets/courses/python-analytics-2.jpg";
import pythonAnalytics3 from "@/assets/courses/python-analytics-3.jpg";
import dataAnalyst1 from "@/assets/courses/data-analyst-1.jpg";
import dataAnalyst2 from "@/assets/courses/data-analyst-2.jpg";
import dataAnalyst3 from "@/assets/courses/data-analyst-3.jpg";
import dataScientist1 from "@/assets/courses/data-scientist-1.jpg";
import dataScientist2 from "@/assets/courses/data-scientist-2.jpg";
import dataScientist3 from "@/assets/courses/data-scientist-3.jpg";
// Fintech
import algoL1_1 from "@/assets/courses/algo-trading-l1-1.jpg";
import algoL1_2 from "@/assets/courses/algo-trading-l1-2.jpg";
import algoL1_3 from "@/assets/courses/algo-trading-l1-3.jpg";
import algoL2_1 from "@/assets/courses/algo-trading-l2-1.jpg";
import algoL2_2 from "@/assets/courses/algo-trading-l2-2.jpg";
import algoL2_3 from "@/assets/courses/algo-trading-l2-3.jpg";
// AI Automation and Agents
import riseAgents1 from "@/assets/courses/rise-ai-agents-1.jpg";
import riseAgents2 from "@/assets/courses/rise-ai-agents-2.jpg";
import riseAgents3 from "@/assets/courses/rise-ai-agents-3.jpg";
import noCode1 from "@/assets/courses/no-code-workflow-1.jpg";
import noCode2 from "@/assets/courses/no-code-workflow-2.jpg";
import noCode3 from "@/assets/courses/no-code-workflow-3.jpg";
import plainLang1 from "@/assets/courses/plain-language-ai-1.jpg";
import plainLang2 from "@/assets/courses/plain-language-ai-2.jpg";
import plainLang3 from "@/assets/courses/plain-language-ai-3.jpg";
import aiCoding1 from "@/assets/courses/ai-coding-tools-1.jpg";
import aiCoding2 from "@/assets/courses/ai-coding-tools-2.jpg";
import aiCoding3 from "@/assets/courses/ai-coding-tools-3.jpg";
import aiAssistant1 from "@/assets/courses/ai-assistant-1.jpg";
import aiAssistant2 from "@/assets/courses/ai-assistant-2.jpg";
import aiAssistant3 from "@/assets/courses/ai-assistant-3.jpg";
import gptKnowledge1 from "@/assets/courses/gpt-knowledge-1.jpg";
import gptKnowledge2 from "@/assets/courses/gpt-knowledge-2.jpg";
import gptKnowledge3 from "@/assets/courses/gpt-knowledge-3.jpg";
import secureInfra1 from "@/assets/courses/secure-ai-infra-1.jpg";
import secureInfra2 from "@/assets/courses/secure-ai-infra-2.jpg";
import aiTraining1 from "@/assets/courses/ai-training-design-1.jpg";
import aiTutors1 from "@/assets/courses/ai-tutors-1.jpg";
// Cyber Defence
import cyberPathways1 from "@/assets/courses/cyber-pathways-1.jpg";
// AI Leadership
import aiStrategy1 from "@/assets/courses/ai-strategy-1.jpg";
import aiAccountability1 from "@/assets/courses/ai-accountability-1.jpg";
import aiGovernance1 from "@/assets/courses/ai-governance-1.jpg";
import aiWargaming1 from "@/assets/courses/ai-wargaming-1.jpg";
// MCC+
import mccFoundation1 from "@/assets/courses/mcc-foundation-1.jpg";
import mccSecOps1 from "@/assets/courses/mcc-security-ops-1.jpg";
// Vibe Coding
import vibeCoding1 from "@/assets/past-class-44.jpg";
import vibeCoding2 from "@/assets/past-class-45.jpg";
import vibeCoding3 from "@/assets/past-class-46.jpg";
// Reuse some category-level images for variety (2nd and 3rd slides)
import courseCyber1 from "@/assets/course-cyber-1.jpg";
import courseCyber2 from "@/assets/course-cyber-2.jpg";
import courseCyber3 from "@/assets/course-cyber-3.jpg";
import courseLeadership1 from "@/assets/course-leadership-1.jpg";
import courseLeadership2 from "@/assets/course-leadership-2.jpg";
import courseLeadership3 from "@/assets/course-leadership-3.jpg";

// Per-course image map: slug → [img1, img2, img3]
const courseImageMap: Record<string, string[]> = {
  "agentic-ai-foundations": [agenticFoundations1, agenticFoundations2, agenticFoundations3],
  "agentic-ai-use-case": [agenticLlm1, agenticLlm2, agenticLlm3],
  "agentic-ai-deploy-secure-systems": [agenticDeploy1, agenticDeploy2, agenticDeploy3],
  "python-programming-for-data-analytics": [pythonAnalytics1, pythonAnalytics2, pythonAnalytics3],
  "certified-data-analyst": [dataAnalyst1, dataAnalyst2, dataAnalyst3],
  "certified-data-scientist": [dataScientist1, dataScientist2, dataScientist3],
  "algorithmic-trading-level-1": [algoL1_1, algoL1_2, algoL1_3],
  "algorithmic-trading-level-2": [algoL2_1, algoL2_2, algoL2_3],
  "rise-of-ai-agents-2026": [riseAgents1, riseAgents2, riseAgents3],
  "build-ai-workflows-no-code": [noCode1, noCode2, noCode3],
  "design-ai-automations-plain-language": [plainLang1, plainLang2, plainLang3],
  "build-operational-tools-ai-coding-agents": [aiCoding1, aiCoding2, aiCoding3],
  "build-your-own-ai-assistant": [aiAssistant1, aiAssistant2, aiAssistant3],
  "gpt-your-organisation-knowledge-base": [gptKnowledge1, gptKnowledge2, gptKnowledge3],
  "secure-agentic-ai-infrastructure": [secureInfra1, secureInfra2, courseCyber3],
  "ai-training-design-curriculum": [aiTraining1, gptKnowledge3, noCode1],
  "build-ai-tutors-adaptive-learning": [aiTutors1, aiAssistant1, aiTraining1],
  "cybersecurity-roles-threats-pathways": [cyberPathways1, courseCyber1, courseCyber2],
  "ai-strategy-roadmap-leaders": [aiStrategy1, courseLeadership1, courseLeadership2],
  "ai-accountability-when-ai-decides": [aiAccountability1, courseLeadership3, aiStrategy1],
  "governing-ai-agents-trust-boundaries": [aiGovernance1, courseLeadership2, aiAccountability1],
  "ai-wargaming-test-decisions": [aiWargaming1, courseLeadership1, aiGovernance1],
  "mcc-plus-cyber-defence-foundation": [mccFoundation1, courseCyber1, courseCyber3],
  "mcc-plus-security-operations": [mccSecOps1, courseCyber2, mccFoundation1],
  "mcc-plus-threat-hunting-blue-team": [courseCyber1, mccSecOps1, courseCyber3],
  "mcc-plus-offensive-cyber-fundamentals": [courseCyber2, cyberPathways1, mccFoundation1],
  "mcc-plus-digital-forensics": [courseCyber3, mccSecOps1, courseCyber1],
  "mcc-plus-ai-security-autonomous-defence": [secureInfra1, mccFoundation1, courseCyber2],
  "vibe-coding-for-digital-builders": [vibeCoding1, vibeCoding2, vibeCoding3],
  // Winning Customers with AI for RM (3-part series) — reuse fintech imagery
  "rm-client-engagement-strategies": [algoL1_1, algoL2_1, algoL1_2],
  "rm-needs-analysis-portfolio-management": [algoL1_2, algoL2_2, algoL1_3],
  "rm-client-experience-retention": [algoL1_3, algoL2_3, algoL2_1],
};


export const getCourseImages = (slug: string): string[] =>
  courseImageMap[slug] || [agenticFoundations1, agenticFoundations2, agenticFoundations3];

export interface Course {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  heroImage: string;
  whyAttend: string;
  objectives: string[];
  courseDesign: string;
  schedule: { day: string; items: string[] }[];
  nextRunDate: string;
  fees: {
    selfSponsored: string;
    corporateSmall: string;
    corporateLarge: string;
  };
  duration?: string;
  jointlyOfferedBy?: string;
  whatYouLearn?: string[];
  afterCompleting?: string[];
}
