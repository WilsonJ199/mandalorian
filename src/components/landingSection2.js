import Image from "next/image";
import Link from "next/link";
import Placeholder2 from "../../public/images/580x400.png";

const LandingSection2 = () => {
  return (
    <div className="grid md:grid-cols-2">
      {/* <div className="flex md:justify-end md:order-2"> */}
      <div className="mb-5 justify-center items-center flex md:order-2">
        <Image src={Placeholder2} width={580} height={400} alt="About us image 2"/>
      </div>
      <div className="justify-center items-center text-justify flex md:order-1">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
        officia deserunt mollit anim id est
      </div>
    </div>
  );
};

export default LandingSection2;
