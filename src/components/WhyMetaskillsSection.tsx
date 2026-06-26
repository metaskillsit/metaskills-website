import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award, Briefcase, GraduationCap, Lightbulb, Target, Network } from "lucide-react";
import facilityImg from "@/assets/facility.jpg";

const WhyMetaskillsSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Briefcase, title: t("why.feat1Title"), description: t("why.feat1Desc") },
    { icon: GraduationCap, title: t("why.feat2Title"), description: t("why.feat2Desc") },
    { icon: Award, title: t("why.feat3Title"), description: t("why.feat3Desc") },
    { icon: Lightbulb, title: t("why.feat4Title"), description: t("why.feat4Desc") },
    { icon: Target, title: t("why.feat5Title"), description: t("why.feat5Desc") },
    { icon: Network, title: t("why.feat6Title"), description: t("why.feat6Desc") },
  ];

  return (
    <section id="consultants" className="bg-background">
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={facilityImg}
          alt={t("why.title")}
          className="w-full h-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--hero-overlay)/0.6)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
              {t("why.title")}
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-14">
          {t("why.intro")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMetaskillsSection;
