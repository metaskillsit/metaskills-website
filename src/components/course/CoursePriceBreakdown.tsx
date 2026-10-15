import type { Course } from "@/data/courses";

const CoursePriceBreakdown = ({ course }: { course: Course }) => {
  const fees = course.feeBreakdown;
  if (!fees) return null;
  const price = (value: number) => `S$${value.toLocaleString("en-SG")}`;
  return (
    <div className="bg-muted rounded-sm p-6 border border-border">
      <h2 className="font-heading text-xl font-bold text-foreground mb-5">Course Fees</h2>
      <dl className="space-y-4 text-sm text-foreground">
        <div className="flex justify-between gap-4"><dt>Class fee</dt><dd className="font-semibold shrink-0">{price(fees.training)}</dd></div>
        <div className="flex justify-between gap-4"><dt>{fees.examLabel}</dt><dd className="font-semibold shrink-0">{price(fees.exam)}</dd></div>
        <div className="border-t border-border pt-4"><dt className="text-muted-foreground mb-1">Total (before GST)</dt><dd className="text-lg font-bold">{price(fees.total)} per participant</dd></div>
      </dl>
      <p className="text-xs text-muted-foreground leading-relaxed mt-5">{course.gstNote}</p>
    </div>
  );
};

export default CoursePriceBreakdown;