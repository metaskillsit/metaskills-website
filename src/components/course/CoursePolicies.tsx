const CoursePolicies = () => {
  const policies = [
    {
      title: "Cancellation",
      text: "Up to 30 days before: Full refund minus SGD 900 processing fee. 30 days or less: No refund. Substitutions allowed up to 3 days before.",
    },
    {
      title: "Rescheduling",
      text: "Client-initiated rescheduling at least 14 days before. SGD 600 rescheduling fee may apply. Metaskills-initiated changes offer full refund option.",
    },
    {
      title: "Attendance",
      text: "75% attendance required for certification. Participants should arrive on time. Notify absence via email to admissions@metaskills.sg.",
    },
  ];

  return (
    <section className="border-t border-border bg-muted">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <h2 className="font-heading text-xl font-bold text-foreground mb-6">
          Course Policies
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
