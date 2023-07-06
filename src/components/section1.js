import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import CourseImg from "../../public/images/placeholder2.png";

const Section1 = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => {
        if (course.id === 5)
          return (
            <div className="flex flex-col lg:flex-row gap-10 p-5 sm:p-0" key={index}>
              <div className="flex flex-col gap-2 text-[#132034]">
                <div>
                  <Image
                    src={CourseImg}
                    width={270}
                    height={150}
                    className="w-full"
                    alt="Course Picture"
                  />
                </div>
                <h3 className="uppercase font-bold text-[#132034] text-2xl">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1">
                  <AiOutlineClockCircle /> Duration
                  <span className="font-bold">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 font-bold whitespace-nowrap ">
                {course.status === "Completed" ? <BsCircleFill color="#2edb34" /> : <BsCircleFill color="#f10606" />} {course.status} {course.completion_date}
                </div>
              </div>
              <div className="flex flex-col gap-7 mt-3">
                <div>
                  <h3 className="font-bold text-[#132034]">
                    Course Description
                  </h3>
                  <p>{course.description}</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#132034]">
                    Course Objective
                  </h3>
                  <p>{course.objective}</p>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Section1;
