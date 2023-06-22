import LessonCard from "./_child/lessoncard";

const Section3 = () => {
  return (
    // <div className="flex flex-col items-center lg:flex-row text-center gap-[15px] lg:mb-5">
     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
      <LessonCard title={"Force Training Essentials"} />
      <LessonCard title={"Bounty Hunter Planning"} />
      <LessonCard title={"Effective Management"} />
      <LessonCard title={"Mandalore Goals"} />
    </div>
  );
};

export default Section3;
