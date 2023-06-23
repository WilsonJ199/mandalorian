import LessonCard from "./_child/lessoncard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Section3 = ({course}) => {
  return (
    <section className="mb-5">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween5: 5 },
          1024: { slidesPerView: 4, spaceBetween: 5 },
        }}
      >
        {course?.map((c, index) => (
          <SwiperSlide key={index}>
            <LessonCard title={c.title}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;
