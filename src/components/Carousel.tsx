import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import news from "../data/news.json";
import { Link } from "react-router-dom";
//  max-w-xs md:max-w-6xl mx-auto
const NewsCarousel: React.FC = () => {
  return (
    /*<div className="relative w-full h-full py-10">

    </div>*/
    <Swiper
      className="w-full h-full my-14 max-w-xs md:max-w-6xl lg:max-w-7xl"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={"auto"}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000 }}
      loop={true} // 무한 루프 활성화
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 5 }, // 초소형 모바일
        640: { slidesPerView: 1, spaceBetween: 10 }, // 모바일
        768: { slidesPerView: 2, spaceBetween: 0 }, // 태블릿
        1024: { slidesPerView: 3, spaceBetween: 30 }, // 데스크탑
        1280: { slidesPerView: 3, spaceBetween: 40 }, // 대형 화면
      }}>
      {news.items.slice(0,6).map((item) => (
        <SwiperSlide key={item.id} className="mx-auto mb-14">
          <Link to={`/company/news/${item.id}`} className="w-96 mx-auto block bg-gray-100 rounded-lg overflow-hidden transition-transform transform hover:scale-105 ">
            <div className="relative md:w-full h-48 sm:h-56 md:h-96 lg:h-72 xl:h-80 rounded-lg">
              <img
                src={item.imageUrl || `/img/news/default-image.jpg`}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="h-32 p-4 text-center">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                {item.title}
              </h3>
              <p className="pt-3 text-sm text-gray-500">
                {new Date(item.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsCarousel;
