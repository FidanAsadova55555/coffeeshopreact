import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import { useState } from "react";
import { useLocation } from "react-router";

import { useEffect } from "react";
const MySlider = ({ slide = [], slidesData = [], isIntro = false }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isProductsPage = location.pathname.startsWith("/products");

  return (
    <div className={`${styles.mySwiper} ${isIntro ? styles.introSlider : ""}`}>
      <Swiper
        key={windowWidth > 1492 ? "stay" : "refresh"} 

  modules={[Navigation, Pagination, Autoplay]}
  loop={true}
  {...(isIntro
    ? {   pagination: {
      clickable: true,
    },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        className: styles.swiperContainer,
      }
    : {
        slidesPerView: 2, 
        slidesPerGroup: 2, 

        spaceBetween: 0,
        pagination: {
          clickable: true,
          type: "bullets",

        },
        
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,

        breakpoints: {
          1492: {
            slidesPerView: windowWidth > 1492 && isProductsPage ? 4 : 3, 
            slidesPerGroup: windowWidth > 1492 && isProductsPage ? 3 : 2, 
            spaceBetween: 0,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
                        loop: false, 
            
          },
        },
        className: styles.swiperContainer,
      })}
      
>
{isIntro ? (
  slide.map((item, index) => (
    <SwiperSlide key={index} className={styles.swiperSlide}>
      {item}
    </SwiperSlide>
  ))
) : (
  slidesData.map((item, index) => (
    <SwiperSlide key={index} className={styles.swiperSlide}>
      {item}
    </SwiperSlide>
  ))
)}

     
      </Swiper>

      {isIntro && windowWidth > 1200 && (
  <>
    <div className={`swiper-button-next ${styles.next}`} />
    <div className={`swiper-button-prev ${styles.next}`} />
  </>
)}

    </div>
  );
};

export default MySlider;