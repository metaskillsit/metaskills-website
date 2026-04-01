import { Link } from "react-router-dom";
import { Calendar, DollarSign, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Course } from "@/data/courses";

interface CourseSidebarProps {
  course: Course;
}

const CourseSidebar = ({ course }: CourseSidebarProps) => {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="bg-muted rounded-sm p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
              {t("coursePage.nextRunDate")}
            </h3>
          </div>
          <p className="text-foreground text-sm whitespace-pre-line">
            {course.nextRunDate}
          </p>
        </div>

        <div className="bg-muted rounded-sm p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider">
              {t("coursePage.courseFees")}
            </h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">{t("coursePage.selfSponsored")}</p>
              <p className="font-bold text-foreground">{course.fees.selfSponsored}</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-0.5">{t("coursePage.corporateRates")}</p>
              <p className="text-sm text-foreground">{course.fees.corporateSmall}</p>
              <p className="text-sm text-foreground">{course.fees.corporateLarge}</p>
            </div>
            <p className="text-xs text-muted-foreground italic pt-2">
              {t("coursePage.gstNote")}
            </p>
          </div>
        </div>

        <a
          href="mailto:admissions@metaskills.sg"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
        >
          <Mail className="w-4 h-4" /> {t("coursePage.enquireNow")}
        </a>
        <Link
          to="/admissions"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-border text-foreground font-semibold rounded-sm text-sm hover:bg-muted transition-all"
        >
          {t("coursePage.submitEnquiryForm")}
        </Link>
      </div>
    </div>
  );
};

export default CourseSidebar;
