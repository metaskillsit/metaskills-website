import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CoursePriceBreakdown from "./CoursePriceBreakdown";

export const CourseEnquiryButton = ({ course }: { course: Course }) => (
  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-normal h-auto min-h-11 py-3">
    <a href={`https://wa.me/6589866146?text=${encodeURIComponent(course.whatsappMessage || course.title)}`} target="_blank" rel="noopener noreferrer">Enquire / Register</a>
  </Button>
);

const List = ({ items }: { items: string[] }) => <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">{items.map(item => <li key={item}>{item}</li>)}</ul>;
const Heading = ({ children }: { children: React.ReactNode }) => <h2 className="font-heading text-2xl font-bold text-foreground mb-5">{children}</h2>;

const CoachingCourseContent = ({ course }: { course: Course }) => (
  <>
    <section><Heading>Course Synopsis</Heading><p className="text-muted-foreground leading-relaxed whitespace-pre-line">{course.whyAttend}</p>{course.importantInfo?.map(note => <p key={note} className="mt-5 border-l-4 border-accent bg-muted p-4 font-semibold text-foreground leading-relaxed">{note}</p>)}</section>
    <section><Heading>Who Should Attend</Heading><List items={course.whoShouldAttend || []} /></section>
    <section><Heading>Prerequisites</Heading><List items={course.prerequisites || []} />{course.prerequisitesNote && <p className="mt-5 border-l-4 border-accent bg-muted p-4 font-semibold text-foreground leading-relaxed">{course.prerequisitesNote}</p>}</section>
    <section><Heading>Learning Outcomes</Heading><p className="text-muted-foreground mb-4">By the end of the course, participants will be able to:</p><List items={course.objectives} /></section>
    <section id="structure"><Heading>Course Structure</Heading><p className="text-muted-foreground leading-relaxed mb-5">{course.courseDesign}</p>
      <Accordion type="multiple" defaultValue={["day-0"]}>{course.schedule.map((day, index) => <AccordionItem key={day.day} value={`day-${index}`}><AccordionTrigger className="text-left text-foreground leading-relaxed">{day.day}</AccordionTrigger><AccordionContent><List items={day.items} /></AccordionContent></AccordionItem>)}</Accordion>
    </section>
    <section><Heading>Activities</Heading><List items={course.practicalActivities || []} /></section>
    <CoursePriceBreakdown course={course} />
    <section><Heading>Certification &amp; Examination Information</Heading><div className="space-y-4 text-muted-foreground leading-relaxed">{course.certificationNote?.map(item => <p className="whitespace-pre-line" key={item}>{item}</p>)}</div></section>
    <section><CourseEnquiryButton course={course} /></section>
  </>
);

export default CoachingCourseContent;