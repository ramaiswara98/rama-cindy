import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCards,EffectCoverflow, Pagination } from 'swiper/modules';

import './Moment.css'
import IMG1 from '../../assets/images/1.JPG'
import IMG2 from '../../assets/images/2.JPG'
import IMG3 from '../../assets/images/3.JPG'
import IMG4 from '../../assets/images/4.JPG'
import IMG5 from '../../assets/images/5.JPG'
import IMG6 from '../../assets/images/6.JPG'
import IMG7 from '../../assets/images/7.JPG'
import IMG8 from '../../assets/images/8.JPG'

function Moment() {
    const spanStyles={
        '--i-1': { '--i': 1 },
        '--i-2': { '--i': 2 },
        '--i-3': { '--i': 3 },
        '--i-4': { '--i': 4 },
        '--i-5': { '--i': 5 },
        '--i-6': { '--i': 6 },
        '--i-7': { '--i': 7 },
        '--i-8': { '--i': 8 },

    }
  return (
    <div className='moment-container'>
        <div className='moment-title-container'>
            <p className='moment-title-text'>Moment</p>
        </div>
        {/* <div> */}
            <div className='slider-container' style={{marginTop:60,marginBottom:60}}>
            <div class="slider">
                <span style={spanStyles['--i-1']}><img src={IMG1}  alt='img1'/></span>
                <span style={spanStyles['--i-2']}><img src={IMG2}  alt='img1'/></span>
                <span style={spanStyles['--i-3']}><img src={IMG3}  alt='img1'/></span>
                <span style={spanStyles['--i-4']}><img src={IMG4}  alt='img1'/></span>
                <span style={spanStyles['--i-5']}><img src={IMG5}  alt='img1'/></span>
                <span style={spanStyles['--i-6']}><img src={IMG6}  alt='img1'/></span>
                <span style={spanStyles['--i-7']}><img src={IMG7}  alt='img1'/></span>
                <span style={spanStyles['--i-8']}><img src={IMG8}  alt='img1'/></span>
            </div>
            </div>
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={IMG6} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG4} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG5} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG7} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG8} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt='img1' style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={IMG6} alt='img1' style={{width:'100%'}}/></SwiperSlide>
      </Swiper>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipers"
      >
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG1} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG2} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2 '>
          <img src={IMG3} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG1} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG2} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2 '>
          <img src={IMG3} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG1} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>
          <img src={IMG2} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2 '>
          <img src={IMG3} />
        </SwiperSlide>
        
      </Swiper>
        {/* </div> */}
    </div>
  )
}

export default Moment