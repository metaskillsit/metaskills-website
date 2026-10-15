const examHeading = /^([A-Z][A-Z &0-9,+%–—-]+(?:\([^\n)]*\))?)(?::\s*|\n)/;

const formatHeading = (label: string) => label.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase()).replace(/Cncf/g, "CNCF");

const CourseExaminationInfo = ({ notes }: { notes: string[] }) => {
  if (notes.length === 0) return null;
  const sections = notes.flatMap(note => note.split(/\n(?=[A-Z][A-Z &0-9,+%–—-]+(?:\([^\n)]*\))?(?::|\n))/)).map(text => {
    const match = text.match(examHeading);
    return match ? { heading: formatHeading(match[1]), body: text.slice(match[0].length) } : { heading: undefined, body: text };
  });

  return (
    <section>
      <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Certification and Examination Information</h2>
      <div className="bg-muted rounded-sm border border-border px-5 sm:px-6 divide-y divide-border">
        {sections.map((section, index) => (
          <div key={index} className="py-5">
            {section.heading && <h3 className="text-sm font-semibold text-foreground mb-2">{section.heading}</h3>}
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{section.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseExaminationInfo;