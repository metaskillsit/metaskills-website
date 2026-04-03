import { useTranslation } from "react-i18next";

const CoursePolicies = () => {
  const { t } = useTranslation();

  const policies = [
    {
      title: t("coursePage.policyCancellationTitle"),
      text: t("coursePage.policyCancellationText"),
    },
    {
      title: t("coursePage.policyReschedulingTitle"),
      text: t("coursePage.policyReschedulingText"),
    },
    {
      title: t("coursePage.policyAttendanceTitle"),
      text: t("coursePage.policyAttendanceText"),
    },
  ];

  return (
    <section className="border-t border-border bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <h2 className="font-heading text-xl font-bold text-foreground mb-6">
          {t("coursePage.coursePolicies")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <div key={policy.title} className="bg-background rounded-sm p-5 border border-border">
              <h3 className="font-semibold text-foreground text-sm mb-2">{policy.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePolicies;
