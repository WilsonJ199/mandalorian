import Stars from "../../public/images/starsbanner.jpg";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";

const BannerSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center background-img">
      <Image src={Logo} alt="Mandalorian Logo" />
    </div>
  );
};

export default BannerSection;
