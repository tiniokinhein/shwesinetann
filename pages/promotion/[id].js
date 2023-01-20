import React from 'react'
import Layout from '../../components/layout/Layout'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import {mm, playfair} from '../../config/font'
import {promotionItems} from '../../data/promotions'
import CategoryCard from '../../components/category/CategoryCard';
import ProductCardList from "../../components/product/ProductCardList";
import {products} from "../../data/products"
import {categoryBase} from '../../data/categories';
import ListSectionHeader from "../../components/shared/ListSectionHeader";
import FilterDropdown from "../../components/shared/FilterDropdown";

const PromotionDetail = ({id}) => {

    const [p, setP] = React.useState(null)

    React.useEffect(() => {
        setP(promotionItems.filter(f => f.id === Number(id))[0])
    }, [id])

    return (
        <Layout
            title={p?.shop_id.name}
            description={p?.description}
        >
            <div className='2xl:container px-5 mx-auto py-16'>

                <div>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full md:w-3/5 px-3'>
                            <div
                                className='rounded-[10px] w-full h-[310px] md:h-full'
                                style={{
                                    background: "url(" + p?.img + ") no-repeat center / cover"
                                }}
                            />
                        </div>
                        <div className='w-full md:w-2/5 px-3 pt-5 md:pt-0'>
                            <h4 className={`${playfair.className} text-[14px] text-black/70 font-bold`}>
                                {p?.shop_id?.name}
                            </h4>
                            <h1 className={`${playfair.className} text-[30px] text-primary font-bold mb-10`}>
                                {p?.title}
                            </h1>
                            <p
                                className={`${mm.className} text-[18px] text-black/60 leading-[2em]`}
                                dangerouslySetInnerHTML={{
                                    __html: p?.description
                                }}
                            />
                        </div>
                    </div>
                </div>

                <ListSectionHeader heading="Promotion Items" extraComp={<FilterDropdown items={[{
                           'id': 1,
                           'name': 'Default'
                       }]} className="absolute right-1/2 md:right-0 top-0"/>}/>

                <Tabs className='categ-tab react-tabs mt-8'>
                    <TabList
                        className='border-0 pb-5 mb-5 rounded-lg flex overflow-x-scroll min-w-screen minified-scrollbar'>
                        {
                            categoryBase.map((category, idx) => (
                                <Tab className={`react-tabs__tab w-32 rounded-lg mx-2`}>
                                    <CategoryCard key={idx} idx={idx} category={category}/>
                                </Tab>))
                        }
                    </TabList>

                    {
                        categoryBase.map((category, idx) => (
                            <TabPanel>
                                <ProductCardList products={products} pagination={{}}/>
                            </TabPanel>
                        ))
                    }
                </Tabs>


            </div>
        </Layout>
    )
}

PromotionDetail.getInitialProps = async (context) => {
    const {id} = context.query
    return {id}
}

export default PromotionDetail
