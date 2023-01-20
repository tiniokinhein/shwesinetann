import CategoryCard from './CategoryCard';
import ListSectionHeader from "../shared/ListSectionHeader"
import { categoryBase } from '../../data/categories';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

function CategoryCardList({heading, headerExtraComp, autoplay}) {
    const activeItemIdx = categoryBase.findIndex(item => item.isActive === true);

  return (
    <>
      <ListSectionHeader heading={heading} extraComp={headerExtraComp}/>
      <div className='mt-5 -mx-5'>
        <Swiper
          loop
          initialSlide={activeItemIdx}
          centeredSlides={true}
          slidesPerView={2}
          breakpoints={{
            380: {
              width: 380,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 4,
            },
            768: {
              width: 768,
              slidesPerView: 6,
            },
            1024: {
              width: 1024,
              slidesPerView: 8,
            },
            1280: {
              width: 1280,
              slidesPerView: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={autoplay && [Autoplay]}
          className={`h-full categSlide`}
        >
          {categoryBase.map((category, idx) => (
            <SwiperSlide key={idx} className={`h-full mx-2 md:mx-4`} >
              <CategoryCard key={idx} idx={idx} category={category} isActive={category.isActive}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

CategoryCardList.defaultProps = {
  autoplay: false,
};

export default CategoryCardList
