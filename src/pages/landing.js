import Layout from "@/components/layout";
import BannerSection from "@/components/bannerSection";
import LandingSection1 from "@/components/landingSection1";
import LandingSection2 from "@/components/landingSection2";
import LandingDivider from "@/components/_child/landingDivider";

const Landing = () => {
  return (
    <Layout>
      <BannerSection />
      <div className=" w-full bg-[#132034] text-[#c5a974]">
        <div className="container mx-auto flex flex-col gap-20">
          <LandingDivider header={"About"} />
          <LandingSection1 />
          <LandingSection2 />
          <LandingDivider header={"Courses"} />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
