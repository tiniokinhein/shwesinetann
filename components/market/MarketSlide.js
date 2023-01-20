import Image from 'next/image'
import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { playfair } from '../../config/font'

const MarketSlide = ({ posts, slideClass }) => {
    return (
        <Swiper
            loop
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            modules={[Autoplay,Pagination]}
            className={`h-full ${slideClass}`}
        >
            {
                posts.map(p => (
                    <SwiperSlide key={p.id} className={`h-full`}>
                        <div className={`w-[400px] max-w-full mx-auto flex flex-col items-center justify-center my-10 h-3/4`}>
                            <Image 
                                src={p.logo}
                                width={'100%'}
                                height={'100%'}
                                alt=''
                                className={`w-[50px] h-[34px]`}
                            />
                            <Image 
                                src={p.img}
                                width={'100%'}
                                height={'100%'}
                                alt=''
                                className={`w-[150px] h-[150px] md:w-[300px] md:h-[300px]`}
                            />
                            <h2 className={`text-white ${playfair.className} text-[20px] md:text-[24px] font-semibold`}>
                                {p.title}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: p.description
                                }} 
                                className={`px-5 text-center text-500 text-[12px] md:text-[14px] tracking-0.5 mt-7 font-thin`}
                            />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MarketSlide
