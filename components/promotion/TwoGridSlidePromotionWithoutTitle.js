import React from 'react'
import PromotionSlideWithoutTitle from './PromotionSlideWithoutTitle'
import { promotionItems } from '../../data/promotions'

const TwoGridSlidePromotionWithoutTitle = () => {
    return (
        <div className='mt-16'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 pr-0 md:pr-3'>
                    <PromotionSlideWithoutTitle posts={promotionItems.slice(0,3)} />
                </div>
                <div className='w-full md:w-1/2 pl-0 md:pl-3 mt-5 md:mt-0'>
                    <PromotionSlideWithoutTitle posts={promotionItems.slice(3,6)} />
                </div>
            </div>
        </div>
    )
}

export default TwoGridSlidePromotionWithoutTitle
