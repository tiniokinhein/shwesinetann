import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react'
import { Autoplay , EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { slideItems } from '../../data/slides'
import { mm } from '../../config/font'

const HomeSlide = () => {

    return (
        <div 
            className={`py-10 relative`}
            style={{
                background: "transparent url('/assets/slides/slide_bg.png') no-repeat center / cover",
            }}
        >
            <div 
                className={`absolute left-0 right-0 top-0 bottom-0 -z-10`}
                style={{
                    backgroundImage: 'linear-gradient(to right, #300764 0%, #1F0243 20.83%, #430F83 45.6%, #501C90 74.33%, #C99EFF 100%)'
                }}
            />

            <div className={`w-[800px] max-w-full mx-auto text-center text-white text-[16px] sm:text-[20px] px-5`}>
                <h1 className={`${mm.className} mb-10 leading-[1.8em]`}>
                    မြန်မာနိုင်ငံ၏ စိန်၊ ရွှေ၊ ရတနာဆိုင်များအား တစ်နေရာတည်းတွင် အချိန်ကုန်သက်သာစွာ ဝင်ရောက် ဝယ်ယူကြည့်ရှုနိုင်မည့် ------------ စိန်၊ ရွှေ၊ ရတနာ Marketplace ကြီး    
                </h1>
            </div>
            <Swiper
                effect={"coverflow"}
                loop
                grabCursor={true}
                centeredSlides={true}
                slidesPerView='auto'
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, EffectCoverflow]}
                className={`homeSlide`}
            >
                {
                    slideItems.map(p => (
                        <SwiperSlide key={p.id}>
                            <img 
                                src={p.photo}
                                alt=''
                                className='rounded-[10px]' 
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default HomeSlide
