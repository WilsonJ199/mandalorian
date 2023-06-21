import CourseComplete from "./_child/coursecomplete";
import LessonStatusCard from "./_child/statuscard";

const Section2 = () => {
  return (
    <div>
      <CourseComplete />
      Lessons
      <div className="flex flex-col item gap-2">
        <LessonStatusCard title={"Lesson 1: Introduction"} status={"91% Passed"}/>
        <LessonStatusCard title={"Lesson 2: Teams"} status={"91% Passed"}/>
        <LessonStatusCard title={"Lesson 3: Beskar Management"} status={"92% Passed"}/>
        <LessonStatusCard title={"Lesson 4: This is the way"} status={"94% Passed"}/>
        <LessonStatusCard title={"Lesson 5: Mandalorians and the Community"} status={"91% Passed"}/>
      </div>
    </div>
  );
};

export default Section2;
