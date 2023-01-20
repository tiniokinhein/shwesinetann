import React from 'react'
import Layout from '../../components/layout/Layout'
import TwoGridSlidePromotionWithoutTitle from '../../components/promotion/TwoGridSlidePromotionWithoutTitle'
import ListSectionHeader from '../../components/shared/ListSectionHeader'
import DetailedShopList from '../../components/shop/DetailedShopList'
import ShopItem from '../../components/shop/MinifiedShopItem'
import { shops } from '../../data/shops'

const Shops = () => {
    return (
        <Layout
            title='Shops'
            description=''
        >
            <div className='2xl:container px-5 mx-auto pb-16'>
                <div>
                    <ListSectionHeader heading='Premium Shops' />
                    <div className='flex flex-wrap flex-row -mx-3'>
                        {
                            shops
                            .filter(f => f.subscription && f.subscription === 'premium')
                            .map((shop, idx) => (
                                <ShopItem key={idx} shop={shop}/>
                            ))
                        }
                    </div>
                </div>

                <DetailedShopList />
                <TwoGridSlidePromotionWithoutTitle />
                
                <div>
                    <ListSectionHeader heading='Shops' />
                    <div className='flex flex-wrap flex-row -mx-3'>
                        {
                            shops
                            .filter(f => f.subscription !== 'premium')
                            .map((shop, idx) => (
                                <ShopItem key={idx} shop={shop}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shops
