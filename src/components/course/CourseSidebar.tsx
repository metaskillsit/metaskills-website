import { DollarSign, MessageCircle, Mail, CalendarDays, PlusCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";

interface CourseSidebarProps {
  course: Course;
}

const coursePricingOverrides: Record<string, { corporate: string; corporateLabel?: string; selfSponsored?: string; customNotes?: boolean; hideNotes?: boolean; fundingNote?: string }> = {
  "ai-strategy-roadmap-leaders": {
    corporate: "S$15,000 per workshop per day (up to 10 pax)",
  },
  "aws-cloud-solutions-architecture-devops": {
    corporateLabel: "Public/Corporate Rates",
    corporate: "S$9,000 per pax",
    customNotes: true,
  },
  "ai-literacy-for-finance-professionals": {
    corporateLabel: "Course Fee",
    corporate: "S$700 per pax",
    hideNotes: true,
    fundingNote: "Government funding available (IBF-STS, SkillsFuture Credit & UTAP)",
  },
  "ai-fluency-for-finance-professionals": {
    corporateLabel: "Course Fee",
    corporate: "S$1,400 per pax",
    hideNotes: true,
    fundingNote: "Government funding available (IBF-STS, SkillsFuture Credit & UTAP)",
  },
  "ai-strategy-governance-ethical-leadership": {
    corporateLabel: "Course Fee",
    corporate: "S$1,000 per pax",
    hideNotes: true,
    fundingNote: "Government funding available (IBF-STS, SkillsFuture Credit & UTAP)",
  },
};

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  const { t } = useTranslation();
  const pricing = coursePricingOverrides[course.slug];
  const hasStructuredFees = Boolean(course.feeNotes);
  const corporateRate = hasStructuredFees
    ? course.fees.corporateSmall
    : pricing?.corporate || "S$6,000 per workshop per day (up to 10 pax)";
  const showSelfSponsored = hasStructuredFees ? true : pricing ? pricing.selfSponsored !== undefined : true;
  const useCustomNotes = pricing?.customNotes || false;
  const hideNotes = hasStructuredFees ? true : pricing?.hideNotes || false;
  const fundingNote = pricing?.fundingNote;
  const whatsappHref = `https://wa.me/6589483482?text=${encodeURIComponent(
    course.whatsappMessage || "Hi I'm interested in your AI training and solutions."
  )}`;

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        {course.courseDateStatus && (
          <div className="bg-muted rounded-sm p-6 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                Course Schedule
              </h3>
            </div>
            <p className="text-xs text-muted-foreground mb-0.5">Next Run Date</p>
            <p className="font-bold text-foreground mb-4">{course.courseDateStatus}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-semibold rounded-sm text-sm hover:bg-[#1da851] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us to Check Course Dates
            </a>
          </div>
        )}

        <div className="bg-muted rounded-sm p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
              {t("coursePage.courseFees")}
            </h3>
          </div>
          <div className="space-y-3">
            {hasStructuredFees ? (
              <>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{t("coursePage.selfSponsored")}</p>
                  <p className="font-bold text-foreground">{course.fees.selfSponsored}</p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground mb-0.5">Corporate Training</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{corporateRate}</p>
                </div>
                <div className="border-t border-border pt-3 text-xs text-muted-foreground italic space-y-1">
                  <p className="font-semibold not-italic text-foreground/80">{t("coursePage.feeNote")}</p>
                  {course.feeNotes?.map((note, i) => (
                    <p key={i}>{i + 1}) {note}</p>
                  ))}
                  <p className="pt-2">{t("coursePage.gstNote")}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{pricing?.corporateLabel || t("coursePage.corporateRates")}</p>
                  <p className="font-bold text-foreground">{corporateRate}</p>
                </div>
                {showSelfSponsored && (
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground mb-0.5">{t("coursePage.selfSponsored")}</p>
                    <p className="font-bold text-foreground">S$750 per pax per day</p>
                  </div>
                )}
                {fundingNote && (
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">{fundingNote}</p>
                  </div>
                )}
                {!hideNotes && (
                  <div className="border-t border-border pt-3 text-xs text-muted-foreground italic space-y-1">
                    {useCustomNotes ? (
                      <>
                        <p className="font-semibold not-italic text-foreground/80">{t("coursePage.feeNote")}</p>
                        <p>Customised training arrangements, including class size, course scope, and delivery format, can be discussed and tailored to organisational requirements.</p>
                        <p className="pt-2">All fees are exempt from GST.</p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold not-italic text-foreground/80">{t("coursePage.feeNote")}</p>
                        <p>1) {t("coursePage.feeNote1")}</p>
                        <p>2) {t("coursePage.feeNote2")}</p>
                        <p>3) {t("coursePage.feeNote3")}</p>
                        <p className="pt-2">{t("coursePage.gstNote")}</p>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-sm text-sm hover:bg-[#1da851] transition-all shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> {t("coursePage.whatsappConsultant")}
        </a>
        <a
          href="mailto:admissions@metaskills.sg"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-muted transition-all"
        >
          <Mail className="w-4 h-4" /> {t("coursePage.emailUs")}
        </a>
      </div>
    </div>
  );
};

export default CourseSidebar;
