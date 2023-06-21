import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

const SectionDivider = ({ header, value2 }) => {
  return (
    <div className="py-7 flex justify-between items-center gap-7">
      <div className="uppercase font-bold text-[#c5a974] text-2xl">
        {header}
      </div>
      <div className="flex-grow h-px bg-[#132034] ml-[20px]"></div>
      <Link href={""} className="flex items-center gap-2text-[#132034]">
        {value2} <BiRightArrow />
      </Link>
    </div>
  );
};

export default SectionDivider;
