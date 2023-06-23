import { BsCircleFill } from "react-icons/bs";

const LessonStatusCard = ({ title, rate, status }) => {
  return (
    <div className="border border-[#29456e] grid lg:grid-cols-2  justify-center lg:justify-between p-5 text-[#132034]">
      <div className="mb-5 md:mb-0">
        <div className="flex items-center gap-2 mb-3 font-bold">
          {title} {status === "complete" ? <BsCircleFill color="#2edb34" /> : <BsCircleFill color="#f10606" />}
        </div>
        <div className="flex">Completion: {rate} 12/21/2020</div>
      </div>
      <div className="flex justify-center lg:justify-end items-center">
        <button className="border border-[#132034] hover:border-[#c5a974] hover:bg-[#132034] hover:text-white font-bold px-20 py-1">
          View Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonStatusCard;