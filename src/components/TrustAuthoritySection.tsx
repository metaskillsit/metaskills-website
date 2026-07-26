import { useTranslation } from "react-i18next";
import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  GraduationCap,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import facilityImg from "@/assets/facility.jpg";

const valueProps = [
  { icon: Briefcase, key: "feat1" },
  { icon: GraduationCap, key: "feat2" },
  { icon: Award, key: "feat3" },
  { icon: Lightbulb, key: "feat4" },
  { icon: Target, key: "feat5" },
  { icon: Network, key: "feat6" },
];

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
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${facilityImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-[1140px] px-6 py-16 md:py-20">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
            Trust &amp; Authority
          </p>
          <h2 className="mt-4 max-w-[720px] font-heading text-[30px] md:text-[40px] font-medium leading-[1.12] text-foreground">
            Credentials that stand up to enterprise scrutiny
          </h2>
        </Reveal>

        <Reveal>
          <p className="lead-p mt-6 max-w-[760px]">
            {t("why.intro")}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item, i) => (
            <RevealItem
              key={item.key}
              className="group flex gap-4 rounded-sm border border-border bg-background p-6 transition-colors duration-300 hover:bg-muted"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium tracking-tight text-foreground mb-1">
                  {t(`why.${item.key}Title`)}
                </h3>
                <p className="body-p text-sm text-muted-foreground">
                  {t(`why.${item.key}Desc`)}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
