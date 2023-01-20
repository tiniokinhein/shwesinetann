import React from 'react'
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import ListSectionHeader from "../shared/ListSectionHeader"
import { deals } from "../../data/deals"

function CarouselDealList() {

  return (
    <div>
      <ListSectionHeader heading='' />
      <div className="flex">

        <div className="w-1/2">
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
            className={`h-full regSlide`}
          >
            {deals.map((deal, idx) => (
              <SwiperSlide key={idx} className={`h-full`}>
                <div className={`w-[400px] max-w-full mx-auto my-10 flex flex-col items-center justify-center`}>
                  <Image
                    src={deal.image_url_md}
                    alt=''
                    fill
                    className={`w-[50px] h-full`}
                  />

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </div>
  )
}

export default CarouselDealList
