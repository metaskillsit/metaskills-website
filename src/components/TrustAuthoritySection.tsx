import { Award, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const credentials = [
  {
    icon: BadgeCheck,
    title: "Certified Instructors",
    body:
      "Faculty hold industry credentials from AWS, EC-Council, CompTIA, Microsoft, Apple and Google.",
  },
  {
    icon: Building2,
    title: "Institutional Partners",
    body:
      "Programmes delivered with SMU Academy, NTUC LearningHub, AISG and NUS Asian Institute of Digital Finance.",
  },
  {
    icon: Award,
    title: "Government-Subsidised",
    body:
      "Selected programmes are government-subsidised and can be customised for your organisation.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Delivery",
    body:
      "Trusted for in-house cohorts by public agencies, banks and technology enterprises across Asia.",
  },
];

const TrustAuthoritySection = () => {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div className="mx-auto max-w-[1140px] px-6 py-16 md:py-20">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
            Trust &amp; Authority
          </p>
          <h2 className="mt-4 max-w-[720px] font-heading text-[30px] md:text-[40px] font-medium leading-[1.12] text-foreground">
            Credentials that stand up to enterprise scrutiny
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <RevealItem key={item.title} className="group bg-background">
              <div className="h-full p-7 transition-colors duration-300 group-hover:bg-muted">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-heading text-[19px] font-medium leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.65] text-muted-foreground">
                  {item.body}
                </p>
                <span className="mt-6 block h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default TrustAuthoritySection;
