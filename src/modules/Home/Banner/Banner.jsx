import React, { useEffect, useState } from 'react'
import style from "./Banner.module.scss"
import { apiGetBanner } from '../../../api/movies.API'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';



function Banner() {
  const [bannerItems, setBannerItems] = useState(null)
  const [errors, setErrors] = useState(null)
  const getBanners = async () => {
    try {
      const data = await apiGetBanner()
      setBannerItems(data.content)
    } catch (error) {
      setErrors(error.response?.data?.content)
    }
  }
  useEffect(() => {
    getBanners();
  }, []);
  console.log(bannerItems);


  if (errors) {
    console.log(errors);
    return (
      <h1>Lỗi loading banner</h1>
    )
  }

  return (
    <div className={style.main}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {bannerItems && bannerItems.map(item => {
          return (
            <SwiperSlide key={item.maBanner}>
              <img src={item.hinhAnh} />
            </SwiperSlide>)
        })}
      </Swiper>
    </div >
  )
}

export default Banner