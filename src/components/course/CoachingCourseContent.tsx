import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, CheckCircle, Clock, Info } from "lucide-react";
import CoursePriceBreakdown from "./CoursePriceBreakdown";
import CourseExaminationInfo from "./CourseExaminationInfo";

export const CourseEnquiryButton = ({ course }: { course: Course }) => (
  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-normal h-auto min-h-11 py-3">
    <a href={`https://wa.me/6589866146?text=${encodeURIComponent(course.whatsappMessage || course.title)}`} target="_blank" rel="noopener noreferrer">Enquire / Register</a>
  </Button>
);

const List = ({ items, columns = false }: { items: string[]; columns?: boolean }) => <ul className={columns ? "grid sm:grid-cols-2 gap-3" : "space-y-3"}>{items.map(item => <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>)}</ul>;
const Heading = ({ children }: { children: React.ReactNode }) => <h2 className="font-heading text-2xl font-bold text-foreground mb-5">{children}</h2>;

const CoachingCourseContent = ({ course }: { course: Course }) => (
  <>
    <section><Heading>Course Synopsis</Heading><p className="text-muted-foreground leading-relaxed whitespace-pre-line">{course.whyAttend}</p>{course.importantInfo && <div className="mt-6 p-5 bg-muted rounded-sm border border-border"><h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3"><Info className="w-4 h-4 text-primary" />Important Information</h3>{course.importantInfo.map(note => <p key={note} className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line mb-3 last:mb-0">{note}</p>)}</div>}</section>
    <section><Heading>Who Should Attend</Heading><List items={course.whoShouldAttend || []} columns /></section>
    <section><Heading>Prerequisites</Heading><List items={course.prerequisites || []} />{course.prerequisitesNote && <p className="mt-5 text-sm text-muted-foreground italic leading-relaxed">{course.prerequisitesNote}</p>}</section>
    <section><Heading>Learning Outcomes</Heading><p className="text-muted-foreground mb-4">By the end of the course, participants will be able to:</p><List items={course.objectives} /></section>
    <section id="structure"><Heading>Course Structure</Heading><p className="text-muted-foreground leading-relaxed mb-5">{course.courseDesign}</p>
      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6"><Clock className="w-4 h-4" />{course.duration}</div>
      <Accordion type="multiple" defaultValue={["day-0"]} className="space-y-6">{course.schedule.map((day, index) => <AccordionItem key={day.day} value={`day-${index}`} className="border border-border rounded-sm overflow-hidden"><AccordionTrigger className="bg-primary px-5 sm:px-6 py-3 text-left text-sm font-bold text-primary-foreground leading-relaxed hover:no-underline"><span className="flex items-start gap-3"><BookOpen className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span>{day.day}</span></span></AccordionTrigger><AccordionContent className="px-5 sm:px-6 pt-5 pb-6"><List items={day.items} /></AccordionContent></AccordionItem>)}</Accordion>
    </section>
    <section><Heading>Practical Activities</Heading><ul className="grid sm:grid-cols-2 gap-3">{course.practicalActivities?.map(item => <li key={item} className="flex gap-3 p-4 bg-muted rounded-sm border border-border text-sm text-foreground/80 leading-relaxed"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>)}</ul></section>
    <CoursePriceBreakdown course={course} />
    <CourseExaminationInfo notes={course.certificationNote || []} />
    <section><CourseEnquiryButton course={course} /></section>
  </>
);

export default CoachingCourseContent;