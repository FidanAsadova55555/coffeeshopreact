import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";

const MySlider = ({slide}) => {
  return (
    <div className={styles.mySwiper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>{slide}</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>{slide}</SwiperSlide>
      </Swiper>

      <div className={`  swiper-button-next ${styles.next}`} />
      <div className={`swiper-button-prev ${styles.next}`} />
    </div>
  );
};

export default MySlider;
