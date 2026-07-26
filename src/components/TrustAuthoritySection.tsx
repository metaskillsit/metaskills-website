import { useTranslation } from "react-i18next";
import {
  Award,
  GraduationCap,
  Lightbulb,
  Network,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import facilityImg from "@/assets/facility.jpg";

const pillars = [
  { icon: GraduationCap, key: "pillar1" },
  { icon: Award, key: "pillar2" },
  { icon: Lightbulb, key: "pillar3" },
  { icon: Network, key: "pillar4" },
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

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.map((item) => (
            <RevealItem
              key={item.key}
              className="group flex flex-col rounded-sm border border-border bg-background p-7 transition-colors duration-300 hover:bg-muted"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-[20px] md:text-[22px] font-medium leading-tight tracking-tight text-foreground">
                  {t(`why.${item.key}Title`)}
                </h3>
              </div>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-muted-foreground">
                {t(`why.${item.key}Desc`)}
              </p>
              <span className="mt-6 block h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};

export default TrustAuthoritySection;
