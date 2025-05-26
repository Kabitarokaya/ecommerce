"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
    <>
      <section className=' px-1'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/16ECF745281FBAE-The%20ordinary%20web.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/7F4A14B3A04EA2C-Motul_Web.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/6C03C4EFD32E90C-12-SkinCareSet_webSlider_1600x270px.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/ABF22188CFC10E5-S%20%20S%20Energy%20Traders_V01_t01.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/AE94B238AFCA01C-Baltra_webSlider_V01_t01.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/74E0170EE57370C-Web_Slider.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/89C42BB30073964-Suncream_WebSlider_V01_T01.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/38CFD496EB6FC28-Bibigo_webSlider_V01_t001.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/82056D269C65298-06-SYPrimus_webSlider_1600x270px.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/E90F3F54C14A457-0-02-03-45aa5fa6ed0e7cb9e6381ed8c0551e98f6627195da7d0e7f7ba31f0a818379f3_837a44d2880e3f45.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/C134735F972D3CB-08-MisshaDareTint_webSlider_1600x270px.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://cdn.sybazzar.com/public/1600-270/files/C18DA622B736067-K-Offer_Web_Slider.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </section>

    </>
  )
}

export default Banner
