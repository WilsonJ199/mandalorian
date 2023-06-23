import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("");
  const handleDrop = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className=" sticky top-0 bg-[#132034]" onClick={handleDrop}>
      <nav className="flex flex-col items-center relative z-30 text-center py-1 md:py-3 md:flex-row md:justify-between xl:container xl:mx-auto bg-[#132034]">
        <Image src={logo} width={250} height={150} alt="The Mandalorian Logo" />

        <ul className="hidden md:flex space-x-16">
          <li>
            <p className="uppercase text-white">
              <span className="text-[#c5a974]">Welcome back,</span> Din Djarin
            </p>
          </li>
          <li>
            <Link legacyBehavior href={"/"}>
              <a className="uppercase text-sm text-white">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={"/learnings"}>
              <a className="uppercase text-sm text-white">
                My Learnings
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href={""}>
              <a className="uppercase text-sm text-white">
                Log out
              </a>
            </Link>
          </li>
        </ul>
        <div
          className="md:hidden flex justify-center bg-[#132034]"
          onClick={handleDrop}
        >
          {dropdown ? (
            <FaAngleUp color="#c5a974" />
          ) : (
            <FaAngleDown color="#c5a974" />
          )}
        </div>
      </nav>
      <div
        className={
          dropdown
            ? `md:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-[#132034] ease-in duration-300 z-0`
            : `md:hidden absolute top-[-150%] left-0 right-0 bottom-0 flex justify-center items-center w-screen h-full bg-[#132034] ease-in duration-300 z-0`
        }
      >
        <ul className="text-[#c5a974] font-bold text-2xl">
          <li className="p-3">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-3">
            <Link href={"/learnings"}>My Learnings</Link>
          </li>
          <li className="p-3">
            <Link href={""} onClick={handleDrop}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
