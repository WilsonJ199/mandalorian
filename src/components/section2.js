import CourseComplete from "./_child/coursecomplete";
import LessonCard from "./_child/lessoncard";

const Section2 = ({lesson, course}) => {
  
  return (
    <div>
      <CourseComplete />
      Lessons
      <div className="flex flex-col item gap-2">
        {lesson?.map((l, index) => (
          <LessonCard title={l.title} rate={l.rate} status={l.status} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
