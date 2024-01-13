import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCards,EffectCoverflow, Pagination } from 'swiper/modules';

import './Moment.css'

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
    const slideImage = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467046448799784/1.jpg?ex=65b41872&is=65a1a372&hm=59bbb7594581c6e0bd4eccbc8b1b81ff72948b99ec4fd47a76371daf2d1bfe73&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467047778402344/2.jpg?ex=65b41872&is=65a1a372&hm=dcf9a362f235d476f3eab056f21ad77f797f88b073cdb40c98028bcb9f3488c9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467049166704702/3.jpg?ex=65b41873&is=65a1a373&hm=c0200d93294215a9f6d2c0151132b88af4be850a47d71081bf2ac5f8cab79ff0&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467050978648194/4.jpg?ex=65b41873&is=65a1a373&hm=afcbc618a7e59555e275cdede0e22f4aecb4a50809172f745ba28c681a579ebb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467052752847020/5.jpg?ex=65b41874&is=65a1a374&hm=b59529994b76f429208d374fa3298654cce69d4ceb82b0273bc1bb115d7947fb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467054422167572/6.jpg?ex=65b41874&is=65a1a374&hm=a36f25f52db0ef0e49ab018ba83172645867f710de8cf2dca200e7ae097fc0b3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467056389300285/7.jpg?ex=65b41874&is=65a1a374&hm=ee3efe348ddc21a1d8df2a4df72064d5dddc764449d12ca1272f897b250a4830&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467058696175656/8.jpg?ex=65b41875&is=65a1a375&hm=272a157050d9d42d8e2c34e2e2e198ef2b703bd1dd82a083a3d4f63b331ab2b7&"
    ]

    const standImage = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467054422167572/6.jpg?ex=65b41874&is=65a1a374&hm=a36f25f52db0ef0e49ab018ba83172645867f710de8cf2dca200e7ae097fc0b3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467050978648194/4.jpg?ex=65b41873&is=65a1a373&hm=afcbc618a7e59555e275cdede0e22f4aecb4a50809172f745ba28c681a579ebb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467052752847020/5.jpg?ex=65b41874&is=65a1a374&hm=b59529994b76f429208d374fa3298654cce69d4ceb82b0273bc1bb115d7947fb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467056389300285/7.jpg?ex=65b41874&is=65a1a374&hm=ee3efe348ddc21a1d8df2a4df72064d5dddc764449d12ca1272f897b250a4830&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467058696175656/8.jpg?ex=65b41875&is=65a1a375&hm=272a157050d9d42d8e2c34e2e2e198ef2b703bd1dd82a083a3d4f63b331ab2b7&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467054422167572/6.jpg?ex=65b41874&is=65a1a374&hm=a36f25f52db0ef0e49ab018ba83172645867f710de8cf2dca200e7ae097fc0b3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467050978648194/4.jpg?ex=65b41873&is=65a1a373&hm=afcbc618a7e59555e275cdede0e22f4aecb4a50809172f745ba28c681a579ebb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467052752847020/5.jpg?ex=65b41874&is=65a1a374&hm=b59529994b76f429208d374fa3298654cce69d4ceb82b0273bc1bb115d7947fb&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467056389300285/7.jpg?ex=65b41874&is=65a1a374&hm=ee3efe348ddc21a1d8df2a4df72064d5dddc764449d12ca1272f897b250a4830&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467058696175656/8.jpg?ex=65b41875&is=65a1a375&hm=272a157050d9d42d8e2c34e2e2e198ef2b703bd1dd82a083a3d4f63b331ab2b7&"
    
    ]

    const horizontal = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467046448799784/1.jpg?ex=65b41872&is=65a1a372&hm=59bbb7594581c6e0bd4eccbc8b1b81ff72948b99ec4fd47a76371daf2d1bfe73&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467047778402344/2.jpg?ex=65b41872&is=65a1a372&hm=dcf9a362f235d476f3eab056f21ad77f797f88b073cdb40c98028bcb9f3488c9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467049166704702/3.jpg?ex=65b41873&is=65a1a373&hm=c0200d93294215a9f6d2c0151132b88af4be850a47d71081bf2ac5f8cab79ff0&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467046448799784/1.jpg?ex=65b41872&is=65a1a372&hm=59bbb7594581c6e0bd4eccbc8b1b81ff72948b99ec4fd47a76371daf2d1bfe73&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467047778402344/2.jpg?ex=65b41872&is=65a1a372&hm=dcf9a362f235d476f3eab056f21ad77f797f88b073cdb40c98028bcb9f3488c9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467049166704702/3.jpg?ex=65b41873&is=65a1a373&hm=c0200d93294215a9f6d2c0151132b88af4be850a47d71081bf2ac5f8cab79ff0&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467046448799784/1.jpg?ex=65b41872&is=65a1a372&hm=59bbb7594581c6e0bd4eccbc8b1b81ff72948b99ec4fd47a76371daf2d1bfe73&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467047778402344/2.jpg?ex=65b41872&is=65a1a372&hm=dcf9a362f235d476f3eab056f21ad77f797f88b073cdb40c98028bcb9f3488c9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1195467049166704702/3.jpg?ex=65b41873&is=65a1a373&hm=c0200d93294215a9f6d2c0151132b88af4be850a47d71081bf2ac5f8cab79ff0&",
            
    ]
  return (
    <div className='moment-container'>
        <div className='moment-title-container'>
            <p className='moment-title-text'>Moment</p>
        </div>
        {/* <div> */}
            <div className='slider-container' >
              <div class="slider">
                {slideImage.map((item, index) => {
                  return(
                    <span style={spanStyles[`--i-${index+1}`]} key={item}><img src={item}  alt='img1'/></span>
                  )
                })}
              </div>
            </div>
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {standImage.map((item, index) => {
          return(
            <SwiperSlide key={item} ><img src={item} alt='img1' style={{width:'100%', background:'transparent'}}/></SwiperSlide>
          )
        })}
 
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
        {horizontal.map((item, index) => {
          return(
            <SwiperSlide className='swiper-slide2' key={item}>
              <img src={item} alt='items'/>
            </SwiperSlide>
          )
        })} 
      </Swiper>
        {/* </div> */}
    </div>
  )
}

export default Moment