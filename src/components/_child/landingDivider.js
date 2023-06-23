import { BiRightArrow } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";

const LandingDivider = ({ header, value2 }) => {
  return (
    <div className="py-7 flex justify-between items-center gap-7 pt-[50px]">
      <div className="flex-grow h-px bg-[#c5a974]"></div>
      <h2 className="uppercase font-bold text-[#c5a974] text-4xl">{header}</h2>
      <div className="flex-grow h-px bg-[#c5a974]"></div>
    </div>
  );
};

export default LandingDivider;
