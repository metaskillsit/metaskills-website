import type { Course } from "@/data/courses";
import { DollarSign } from "lucide-react";

const CoursePriceBreakdown = ({ course }: { course: Course }) => {
  const fees = course.feeBreakdown;
  if (!fees) return null;
  const price = (value: number) => `S$${value.toLocaleString("en-SG")}`;
  return (
    <div className="bg-muted rounded-sm p-6 border border-border">
      <h2 className="flex items-center gap-2 font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-5"><DollarSign className="w-4 h-4 text-primary" />Course Fees</h2>
      <dl className="space-y-4 text-sm text-foreground">
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1"><dt className="text-muted-foreground">{fees.optionalExams ? "Course Only" : "Class Fee"}</dt><dd className="font-semibold shrink-0">{price(fees.training)}</dd></div>
        {fees.optionalExams ? <>
          <div className="border-t border-border pt-3"><dt className="font-semibold mb-1">Optional Examinations</dt><dd className="text-xs text-muted-foreground leading-relaxed">Exam vouchers are not included in the course-only fee and may be purchased individually.</dd></div>
          {fees.optionalExams.map(exam => <div key={exam.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1"><dt className="text-muted-foreground">{exam.label}</dt><dd className="font-semibold shrink-0">{price(exam.price)}</dd></div>)}
        </> : <div className="border-t border-border pt-3"><dt className="text-xs text-muted-foreground leading-relaxed mb-1">{fees.examLabel}</dt><dd className="font-bold">{price(fees.exam)}</dd></div>}
        <div className="border-t border-border pt-3"><dt className="text-xs text-muted-foreground mb-1">{fees.optionalExams ? "Total with All Five Optional Exams (before GST)" : "Total (before GST)"}</dt><dd className="font-bold">{price(fees.total)} per participant</dd></div>
      </dl>
      <p className="text-xs text-muted-foreground leading-relaxed mt-5">{course.gstNote}</p>
    </div>
  );
};

export default CoursePriceBreakdown;