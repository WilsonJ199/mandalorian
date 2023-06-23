import Image from "next/image";
import Link from "next/link";
import CourseInfo from "./_child/courseinfo";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import CourseImg from "../../public/images/placeholder2.png"


const Section1 = ({ course }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-2 text-[#132034]">
        <div>
        <Image src={CourseImg} width={270} height={150} className="w-full" alt="Course Picture" />
        </div>
        <h3 className="uppercase font-bold text-[#132034] text-2xl">
          Economics of Leadership
        </h3>
        <div className="flex items-center gap-1">
          <AiOutlineClockCircle /> Duration
          <span className="font-bold">2h 00m</span>
        </div>
        <div className="flex items-center gap-1 font-bold whitespace-nowrap ">
          <BsCircleFill color="#2edb34" /> Completed 12/01/2021
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-3">
        <CourseInfo sec={"Description"}/>
        <CourseInfo sec={"Objective"}/>
      </div>
    </div>
  );
};

export default Section1;
