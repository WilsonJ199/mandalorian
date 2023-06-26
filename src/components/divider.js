import { AiFillCaretRight } from "react-icons/ai"
import Link from "next/link";

const SectionDivider = ({ header, link, value2 }) => {
  return (
    <div className="flex justify-between items-center gap-7 p-2 py-5 sm:py-7">
      <h2 className="uppercase font-bold text-[#c5a974] text-2xl sm:mr-[20px]">
        {header}
      </h2>
      <div className="flex-grow h-px bg-[#132034]"></div>
      <Link href={{link}} className="flex items-center gap-2 text-[#132034]">
        {value2} <AiFillCaretRight />
      </Link>
    </div>
  );
};

export default SectionDivider;
