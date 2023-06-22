import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#132034] text-[#c5a974]">
      <div className="flex container mx-auto justify-center py-12">
        <div className="py-5">
          <div className="flex gap-5 justify-center">
            <Link href={""}>
              <IoLogoFacebook size={"25px"} />
            </Link>
            <Link href={""}>
              <IoLogoInstagram size={"25px"} />
            </Link>
            <Link href={""}>
              <IoLogoTwitter size={"25px"} />
            </Link>
          </div>
          <p className="py-5">
            Copyright ©2023 All Rights Reserved | Intern Project
          </p>
          <p className="text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
