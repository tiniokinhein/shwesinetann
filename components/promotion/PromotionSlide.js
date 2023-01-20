import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { playfair } from '../../config/font'

const PromotionSlide = ({ posts }) => {
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
            modules={[Autoplay, Pagination]}
            className={`h-full promoSlide`}
        >
            {
                posts.map((p,i) => (
                    <SwiperSlide key={i} className={`h-full`}>
                        <Link href='/promotion/[id]' as={`/promotion/${p.id}`}>
                            <div className={`flex flex-col rounded-[8px] overflow-hidden h-full bg-500`}>
                                <img
                                    src={p.img}
                                    alt=''
                                    className='w-full'
                                />

                                <div className='px-5 pt-4 pb-10'>
                                    <h4 className={`${playfair.className} text-[14px] text-black/40 font-bold`}>
                                        {p.shop_id.name}
                                    </h4>
                                    <h1 className={`${playfair.className} text-[30px] text-primary font-bold`}>
                                        {p.title}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default PromotionSlide
