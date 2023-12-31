import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import SectionDivider from "@/components/divider";
import Section3 from "@/components/section3";
import Layout from "@/components/layout";
import { CourseData } from "../components/Data/courseData";
import { LessonData } from "@/components/Data/lessonData";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <SectionDivider header="View Course" link={""} value2="Back to Courses" />
        <div className="grid md:grid-cols-2 gap-3">
          <Section1 courses={CourseData} />
          <Section2 lesson={LessonData} courses={CourseData} />
        </div>
        <SectionDivider header="Available Courses" link={""} value2="View All Courses" />
        <Section3 course={CourseData} />
      </div>
    </Layout>
  );
}
