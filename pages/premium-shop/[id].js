import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Layout from '../../components/layout/Layout'
import ReviewLayout from '../../components/shop/ReviewLayout'
import ShopDetailLayout from '../../components/shop/ShopDetailLayout'
import ShopInfo from '../../components/shop/ShopInfo'
import { playfair } from '../../config/font'
import { shops } from '../../data/shops'
import { reviewData } from '../../data/userReviews'
import ShopProductsLayout from "../../components/shop/ShopProductsLayout";
import {products} from "../../data/products";

const PremiumShopDetail = ({ id }) => {
    
    const [p , setP] = React.useState(null)

    React.useEffect(() => {
        setP(shops.filter(f => f.id === Number(id))[0])
    }, [id])

    return (
        <Layout 
            title={p?.name}
            description={p?.description}
        >
            <div className='2xl:container px-5 mx-auto py-10'>
                <ShopDetailLayout 
                    title={p?.name}
                    p={p}
                />

                <Tabs className='react-tabs mt-3'>
                    <TabList className='shop-tab bg-500 border-0 mb-10 rounded-lg'>
                        <Tab className={`react-tabs__tab ${playfair.className} !text-black/80 !px-10 !py-3 !border-0 !bottom-0 !rounded-md`}>
                            Product
                        </Tab>
                        <Tab className={`react-tabs__tab ${playfair.className} !text-black/80 !px-10 !py-3 !border-0 !bottom-0 !rounded-md`}>
                            Shop info
                        </Tab>
                        <Tab className={`react-tabs__tab ${playfair.className} !text-black/80 !px-10 !py-3 !border-0 !bottom-0 !rounded-md`}>
                            Reviews
                        </Tab>
                    </TabList>

                    <TabPanel>
                         <ShopProductsLayout products={products}/>
                    </TabPanel>
                    <TabPanel>
                        <ShopInfo 
                            p={p} 
                        />
                    </TabPanel>
                    <TabPanel>
                        <ReviewLayout 
                            p={p} 
                            users={reviewData} 
                        />
                    </TabPanel>
                </Tabs>

            </div>
        </Layout>
    )
}

PremiumShopDetail.getInitialProps = async (context) => {
    const { id } = context.query
    
    return { id }
}   

export default PremiumShopDetail
