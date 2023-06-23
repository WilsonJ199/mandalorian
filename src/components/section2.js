import CourseComplete from "./_child/coursecomplete";
import StatusCard from "./_child/statuscard";

const Section2 = ({lesson}) => {
  
  return (
    <div>
      <CourseComplete />
      Lessons
      <div className="flex flex-col item gap-2">
        {lesson?.map((l, index) => (
          <StatusCard title={l.title} rate={l.rate} status={l.status} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
