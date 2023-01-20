import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const PromotionSlideWithoutTitle = ({ posts }) => {
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
                            <div className={`flex flex-col rounded-[8px] overflow-hidden h-full`}>
                                <img
                                    src={p.img}
                                    alt=''
                                    className='w-full'
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default PromotionSlideWithoutTitle
