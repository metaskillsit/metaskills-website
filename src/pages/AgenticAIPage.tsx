import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Cpu,
  Eye,
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Layers,
  Users,
  Bot,
  Brain,
  Building2,
  FileCheck,
  Workflow,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Landmark,
  BarChart3,
  Briefcase,
  Lock,
  Server,
  Zap,
  Target,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WA_LINK =
  "https://wa.me/6589483482?text=Hi%20I'm%20interested%20in%20your%20Agentic%20AI%20Governance%20solutions.%20Can%20we%20schedule%20a%20strategy%20session%3F";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const AgenticAIPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(220,25%,6%)] text-[hsl(220,15%,95%)]">
      <Navbar />
      <main className="pt-16 md:pt-[70px]">
        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,8%)] via-[hsl(220,25%,6%)] to-[hsl(220,30%,4%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, hsl(43,96%,56%) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(43,96%,56%,0.04)] blur-[120px]" />

          <div className="relative z-10 max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-6">
                <Shield className="w-3.5 h-3.5" /> Enterprise AI Governance
              </div>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Don't Just Build AI Agents. <span className="text-[hsl(var(--gold))]">Build Them Right.</span>
              </h1>
              <p className="text-[hsl(220,15%,55%)] text-base md:text-lg max-w-xl mx-auto mb-10">
                AI is becoming autonomous. Governance is no longer optional.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(220,25%,6%)] font-semibold px-6 py-3 rounded-md hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Request Demo
                </a>
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 border border-[hsl(220,20%,25%)] text-[hsl(220,15%,80%)] font-medium px-6 py-3 rounded-md hover:border-[hsl(var(--gold),0.5)] hover:text-[hsl(var(--gold))] transition-all"
                >
                  <BookOpen className="w-4 h-4" /> Book a Strategy Session
                </a>
              </div>
            </motion.div>

            {/* Abstract visual */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-16 hidden md:block"
            >
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[hsl(220,15%,45%)]">
                {["Trust", "Execution", "Verification", "Observation"].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    {i > 0 && <ChevronRight className="w-4 h-4 text-[hsl(var(--gold),0.4)]" />}
                    <div className="flex items-center gap-2 border border-[hsl(220,20%,18%)] bg-[hsl(220,25%,10%)] rounded-md px-4 py-2.5">
                      {[Shield, Workflow, FileCheck, Eye][i] &&
                        (() => {
                          const Icon = [Shield, Workflow, FileCheck, Eye][i];
                          return <Icon className="w-4 h-4 text-[hsl(var(--gold))]" />;
                        })()}
                      <span className="text-[hsl(220,15%,75%)]">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ WHAT IS AGENTIC AI ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">
                Understanding the Shift
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">What is Agentic AI?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <p className="text-[hsl(220,15%,70%)] leading-relaxed mb-4">
                  Agentic AI refers to artificial intelligence systems that can{" "}
                  <strong className="text-[hsl(220,15%,90%)]">plan, decide, and act autonomously</strong>. Unlike
                  traditional AI that responds to single prompts, agentic AI can execute complex, multi-step workflows
                  independently.
                </p>
                <p className="text-[hsl(220,15%,70%)] leading-relaxed mb-6">
                  These systems leverage tools, access data sources, maintain memory across interactions, and make
                  decisions to accomplish goals — fundamentally changing how enterprises operate.
                </p>
                <a
                  href="https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[hsl(var(--gold))] font-medium text-sm hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Agentic AI Governance Research (Singapore IMDA){" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Brain, label: "Plans & Decides", desc: "Autonomous goal-oriented reasoning" },
                  { icon: Workflow, label: "Multi-Step Execution", desc: "Complex workflow orchestration" },
                  { icon: Server, label: "Uses Tools & Data", desc: "API calls, databases, integrations" },
                  { icon: Cpu, label: "Memory Systems", desc: "Context across interactions" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-lg p-4">
                    <Icon className="w-5 h-5 text-[hsl(var(--gold))] mb-2" />
                    <p className="text-sm font-semibold text-[hsl(220,15%,90%)] mb-1">{label}</p>
                    <p className="text-xs text-[hsl(220,15%,55%)]">{desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ PROBLEM SECTION ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <AlertTriangle className="w-8 h-8 text-[hsl(0,70%,55%)] mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                Why Most AI Agent Deployments Fail in Enterprises
              </h2>
              <p className="text-[hsl(220,15%,60%)]">Without governance, autonomous AI becomes a liability.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                "No control over agent actions",
                "No audit trail or traceability",
                "No enforcement of business rules",
                "No human approval checkpoints",
                "High compliance and operational risk",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 border border-[hsl(0,30%,18%)] bg-[hsl(0,20%,8%)] rounded-lg p-4"
                >
                  <AlertTriangle className="w-4 h-4 text-[hsl(0,70%,55%)] mt-0.5 shrink-0" />
                  <span className="text-sm text-[hsl(220,15%,75%)]">{point}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
              className="text-center mt-10 text-[hsl(var(--gold))] font-semibold text-sm md:text-base italic"
            >
              "As AI becomes autonomous, governance becomes critical."
            </motion.p>
          </div>
        </section>

        {/* ═══ RESEARCH & INDUSTRY SHIFT ═══ */}
        <section id="research" className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">
                Industry Intelligence
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">The Rise of Agentic Governance</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: Landmark,
                  title: "Government Frameworks",
                  desc: "Governments worldwide, led by Singapore's IMDA, are introducing governance frameworks specifically designed for autonomous AI agents — focusing on accountability, control, and verification.",
                },
                {
                  icon: Globe,
                  title: "Emerging Standards",
                  desc: "Industry bodies are establishing standards for agentic AI deployment, covering agent identity, permission boundaries, audit requirements, and inter-agent communication protocols.",
                },
                {
                  icon: Zap,
                  title: "Enterprise Infrastructure",
                  desc: "Agentic AI is rapidly shifting from experimentation to enterprise infrastructure. Organizations that embed governance early will lead; those that don't will face regulatory and operational risk.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6"
                >
                  <Icon className="w-6 h-6 text-[hsl(var(--gold))] mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[hsl(220,15%,60%)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SOLUTION ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">
                Our Approach
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                The Metaskills Agentic Governance System
              </h2>
              <p className="text-[hsl(220,15%,60%)]">
                We provide a full end-to-end system — not just tools. Every layer is designed for enterprise-grade
                control, compliance, and scale.
              </p>
            </motion.div>

            {/* 4-Layer Framework */}
            <div className="mb-20">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="font-heading text-xl md:text-2xl font-bold text-center mb-10"
              >
                Our Governance Architecture
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    icon: Shield,
                    layer: "Trust Plane",
                    desc: "Policies, roles, and authority boundaries that define what agents can and cannot do.",
                    color: "43,96%,56%",
                  },
                  {
                    icon: Workflow,
                    layer: "Execution Plane",
                    desc: "Controlled workflow execution with policy enforcement at every step.",
                    color: "43,80%,50%",
                  },
                  {
                    icon: FileCheck,
                    layer: "Verification Layer",
                    desc: "Pre-action checks, validation gates, and human-in-the-loop approvals.",
                    color: "43,70%,45%",
                  },
                  {
                    icon: Eye,
                    layer: "Observation Layer",
                    desc: "Real-time logs, monitoring dashboards, and comprehensive audit trails.",
                    color: "43,60%,40%",
                  },
                ].map(({ icon: Icon, layer, desc, color }, i) => (
                  <motion.div
                    key={layer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="relative border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6 overflow-hidden group hover:border-[hsl(43,96%,56%,0.3)] transition-colors"
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[hsl(${color})] to-transparent`}
                    />
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(43,96%,56%,0.1)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                      </div>
                      <span className="text-[hsl(220,15%,45%)] text-xs font-mono">0{i + 1}</span>
                    </div>
                    <h4 className="font-semibold text-base mb-2">{layer}</h4>
                    <p className="text-sm text-[hsl(220,15%,55%)] leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-8">Capabilities</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: Bot, text: "Multi-agent orchestration with governance" },
                  { icon: Users, text: "Human-in-the-loop approvals" },
                  { icon: Lock, text: "Policy-based execution control" },
                  { icon: Shield, text: "Role-based permissions" },
                  { icon: FileCheck, text: "Audit-ready logs" },
                  { icon: Brain, text: "Knowledge and memory systems" },
                  { icon: Server, text: "Enterprise system integration (APIs, Jira, databases)" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i * 0.5}
                    className="flex items-center gap-3 bg-[hsl(220,25%,9%)] border border-[hsl(220,20%,14%)] rounded-lg px-4 py-3"
                  >
                    <Icon className="w-4 h-4 text-[hsl(var(--gold))] shrink-0" />
                    <span className="text-sm text-[hsl(220,15%,75%)]">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ IMPLEMENTATION JOURNEY ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">
                Delivery Process
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold">From Strategy to Deployment</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3">
              {[
                { icon: Target, step: "Assess", desc: "Evaluate readiness, risks, and opportunities" },
                { icon: Layers, step: "Design", desc: "Architect governance and agent workflows" },
                { icon: Cpu, step: "Build", desc: "Develop, integrate, and configure systems" },
                { icon: Activity, step: "Pilot", desc: "Test in controlled environments" },
                { icon: Zap, step: "Scale", desc: "Enterprise-wide rollout and monitoring" },
              ].map(({ icon: Icon, step, desc }, i) => (
                <motion.div
                  key={step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="text-center border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-5 relative"
                >
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,96%,56%,0.1)] border border-[hsl(43,96%,56%,0.2)] flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                  </div>
                  <p className="font-semibold text-sm mb-1">{step}</p>
                  <p className="text-xs text-[hsl(220,15%,50%)]">{desc}</p>
                  <span className="absolute top-2 right-3 text-[hsl(220,15%,20%)] text-xs font-mono">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ USE CASES ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,6%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--gold))] mb-2">
                Applications
              </p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold">Enterprise Use Cases</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Building2,
                  title: "AI BPO Operations",
                  desc: "Automated SLA management, intelligent ticketing, and triage with full audit compliance.",
                },
                {
                  icon: BarChart3,
                  title: "Financial Workflows",
                  desc: "Compliance-first AI agents for reporting, reconciliation, and regulatory processes.",
                },
                {
                  icon: Bot,
                  title: "Enterprise Copilots",
                  desc: "AI assistants with governed access to enterprise data, tools, and decision frameworks.",
                },
                {
                  icon: Brain,
                  title: "Decision Intelligence",
                  desc: "Multi-agent systems that support strategic decisions with traceable reasoning chains.",
                },
                {
                  icon: Briefcase,
                  title: "Regulated Industries",
                  desc: "Healthcare, finance, and government deployments requiring strict governance controls.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="border border-[hsl(220,20%,15%)] bg-[hsl(220,25%,9%)] rounded-xl p-6 hover:border-[hsl(43,96%,56%,0.3)] transition-colors"
                >
                  <Icon className="w-6 h-6 text-[hsl(var(--gold))] mb-3" />
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-[hsl(220,15%,60%)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY METASKILLS ═══ */}
        <section className="py-16 md:py-24 bg-[hsl(220,25%,8%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">Why Metaskills Institute</h2>
              <p className="text-[hsl(220,15%,60%)] max-w-xl mx-auto">
                We don't just advise — we build, deploy, and govern.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                "Deep expertise in agentic AI and enterprise systems",
                "Experience across ASEAN organizations and industries",
                "Focus on governance and real-world deployment",
                "Strong integration capability with existing enterprise tools",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 bg-[hsl(220,25%,9%)] border border-[hsl(220,20%,14%)] rounded-lg p-5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--gold))] mt-0.5 shrink-0" />
                  <span className="text-sm text-[hsl(220,15%,75%)] leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220,25%,6%)] to-[hsl(220,30%,4%)] border-t border-[hsl(220,20%,12%)]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4">
                Agentic AI — <span className="text-[hsl(var(--gold))]">With Governance Built&nbsp;In,</span> Not
                Bolted&nbsp;On.
              </h2>
              <p className="text-base md:text-lg text-[hsl(220,15%,65%)] leading-relaxed max-w-2xl mb-8">
                We design and deploy end-to-end agentic AI systems where every action is controlled, auditable, and
                aligned with business rules.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(220,25%,6%)] font-semibold px-7 py-3.5 rounded-md hover:brightness-110 transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5" /> Explore Agentic Research
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[hsl(var(--gold),0.4)] text-[hsl(var(--gold))] font-semibold px-7 py-3.5 rounded-md hover:bg-[hsl(43,96%,56%,0.08)] transition-all text-base"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AgenticAIPage;
