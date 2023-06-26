import Image from "next/image";
import Link from "next/link";
import Placeholder from "../../../public/images/lessonplaceholder.png";

const SliderCourseCard = ({ title }) => {
  return (
    <div className="cursor-pointer">
      <div>
        <Image
          src={Placeholder}
          width={370}
          height={176}
          alt="Course Image"
          className="w-full"
        />
      </div>
      <div className="bg-[#132034] px-2 py-1 flex flex-col gap-5">
        <div className="font-bold text-white flex justify-start text-xl ml-3">
          {title}
        </div>
        <div className="text-[#c2a672] text-sm flex justify-end mb-1">
          <Link href={""}>View Course</Link>
        </div>
      </div>
    </div>
  );
};

export default SliderCourseCard;
