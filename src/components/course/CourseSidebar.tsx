import { DollarSign, MessageCircle, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";

interface CourseSidebarProps {
  course: Course;
}

const coursePricingOverrides: Record<string, { corporate: string; selfSponsored?: string }> = {
  "ai-strategy-roadmap-leaders": {
    corporate: "S$15,000 per workshop per day (up to 10 pax)",
  },
};

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  const pricing = coursePricingOverrides[course.slug];
  const corporateRate = pricing?.corporate || "S$6,000 per workshop per day (up to 10 pax)";
  const showSelfSponsored = pricing ? pricing.selfSponsored !== undefined : true;

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="bg-muted rounded-sm p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
              {t("coursePage.courseFees")}
            </h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Corporate Rates</p>
              <p className="font-bold text-foreground">S$6,000 per workshop per day (up to 10 pax)</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-0.5">Self-Sponsored</p>
              <p className="font-bold text-foreground">S$750 per pax per day</p>
            </div>
            <div className="border-t border-border pt-3 text-xs text-muted-foreground italic space-y-1">
              <p className="font-semibold not-italic text-foreground/80">Note:</p>
              <p>1) Training fee is based on a maximum class size of up to 10 participants per session.</p>
              <p>2) For cohorts exceeding 10 participants, pricing may be adjusted accordingly.</p>
              <p>3) Customised training arrangements, including class size, course scope, and delivery format, can be discussed and tailored to organisational requirements.</p>
              <p className="pt-2">All fees are exempt from GST.</p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/6589483482?text=Hi%20I%27m%20interested%20in%20your%20AI%20training%20and%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-sm text-sm hover:bg-[#1da851] transition-all shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp Consultant
        </a>
        <a
          href="mailto:admissions@metaskills.sg"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-muted transition-all"
        >
          <Mail className="w-4 h-4" /> Email Us
        </a>
      </div>
    </div>
  );
};

export default CourseSidebar;
