import LessonCard from "./_child/lessoncard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Section3 = () => {
  return (
    <section className="mb-5">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween5: 5 },
          1024: { slidesPerView: 4, spaceBetween: 5},
        }}
      >
        <SwiperSlide>
          {<LessonCard title={"Force Training Essentials"} />}
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Bounty Hunter Planning"} />
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Effective Management"} />
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Mandalore Goals"} />
        </SwiperSlide>
        <SwiperSlide>
          {<LessonCard title={"Placeholder title 1"} />}
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Placeholder title 2"} />
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Placeholder title 3"} />
        </SwiperSlide>
        <SwiperSlide>
          <LessonCard title={"Placeholder title 4"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Section3;
