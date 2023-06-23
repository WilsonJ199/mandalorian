import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import SectionDivider from "@/components/divider";
import Section3 from "@/components/section3";
import Layout from "@/components/layout";

export default function MyLearnings() {
  return (
    <Layout>
      <div className="container mx-auto">
        <SectionDivider header="View Course" value2="Back to Courses" />
        <SectionDivider header="Available Courses" value2="View All Courses" />
      </div>
    </Layout>
  );
}
