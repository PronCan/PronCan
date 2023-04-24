import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../css/about.scss';

const About = () => {
  return (
    <>
        <div className="wrap_about">
          <div className='wrap_about_left'>
            <img src={require("../img/temp.png")} alt='title' className={'profile'}></img>
            {/* <img src={'http://proncan.ipdisk.co.kr:8000/list/HDD1/proncan/portfolio/profile_photo.jpg'} alt='profile' className={'profile'}></img> */}
            <p>이은진</p>
          </div>
          <div className="wrap_info">
            <div>
              <p className='wrap_info_title'>프로필</p>
              <div className='wrap_info_content'>
                <img src='/about/icon_mail.png' alt="icon_mail"></img>
                <p>leeproej@gmail.com</p>
              </div>
              <div className='wrap_info_content'>
                <img src='/about/icon_github.png' alt="icon_github"></img>
                <p>proncan</p>
              </div>
            </div>
            <div>
              <p className='wrap_info_title'>학력</p>
              
            </div>
            <div>
              <p className='wrap_info_title'>경력</p>
              
            </div>
            <div>
              <p className='wrap_info_title'>자격증</p>
              
            </div>
          </div>
        </div>
        <p>"ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ"</p>
        <Swiper
        className='swiper_about'
          slidesPerView={3}
          freeMode={true}
          freeModeSticky={true}
          centeredSlides={true}
          grabCursor={true}
          scrollbarHide={true}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='swiper_about_content'>Slide 1</SwiperSlide>
          <SwiperSlide className='swiper_about_content'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper_about_content'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper_about_content'>Slide 4</SwiperSlide>

          <div className='swiper-scrollbar'></div>
        </Swiper>
        
        <div className='about_history'>
          <ul>
            <li>2023</li>
            <li>2023</li>
            <li>123123</li>
          </ul>
          <ul>
            <li>2022</li>
            <li>2022</li>
            <li>2022</li>
            <li>2022</li>
          </ul>
        </div>
    </>
  )
}

export default About