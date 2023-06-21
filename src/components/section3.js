import LessonCard from "./_child/lessoncard";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row text-center gap-[15px]">
      <LessonCard title={"Force Training Essentials"}/>
      <LessonCard title={"Bounty Hunter Planning"}/>
      <LessonCard title={"Effective Management"}/>
      <LessonCard title={"Mandalore Goals"}/>
    </div>
  );
};

export default Section3;
