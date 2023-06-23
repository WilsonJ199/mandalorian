import CourseComplete from "./_child/coursecomplete";
import LessonCard from "./_child/lessoncard";

const Section2 = ({ courses }) => {
  return (
    <div>
      <CourseComplete />
      Lessons
      <div >
        {courses.map((course, index) => {
          if (course.id === 5)
            return (
              <div key={index}>
                {course.lessons.map((lesson, index) => (
                  <div key={index} >
                    <LessonCard item={lesson} />
                  </div>
                ))}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Section2;
