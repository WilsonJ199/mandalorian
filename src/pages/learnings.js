import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import SectionDivider from "@/components/divider";
import Section3 from "@/components/section3";
import Footer from "@/components/footer";

export default function MyLearnings() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <SectionDivider header="View Course" value2="Back to Courses" />
        <SectionDivider header="Available Courses" value2="View All Courses" />
      </div>
    <Footer />
    </div>
  );
}
