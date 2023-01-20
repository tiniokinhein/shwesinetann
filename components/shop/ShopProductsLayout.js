import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import CategoryCard from "../category/CategoryCard";
import ProductCardList from "../product/ProductCardList";
import {categoryBase} from "../../data/categories";
import FilterToggler from "../shared/FilterToggler";
import ProductFilterModal from "../product/ProductFilterModal";
import React from "react";

const ShopProductsLayout = ({products}) => {

    const [isFilterOpened, setIsFilterOpened] = React.useState(false)
    const handleFilterToggle = () => setIsFilterOpened(!isFilterOpened)

    return (
        <>
            <Tabs className='categ-tab react-tabs mt-8'>
                <TabList
                    className='border-0 pb-5 rounded-lg flex overflow-x-scroll min-w-screen minified-scrollbar'>
                    {
                        categoryBase.map((category, idx) => (
                            <Tab key={idx} className={`react-tabs__tab w-32 rounded-lg mx-2`}>
                                <CategoryCard idx={idx} category={category}/>
                            </Tab>))
                    }
                </TabList>

                {
                    categoryBase.map((category, idx) => (
                        <TabPanel key={idx}>
                            <ProductCardList heading="Ring" headerExtraComp={(
                                <FilterToggler onToggle={handleFilterToggle} />
                            )} products={products} pagination={{}}/>
                        </TabPanel>
                    ))
                }
            </Tabs>
            <ProductFilterModal isActive={isFilterOpened} onToggle={handleFilterToggle} />
        </>
    )
}

export default ShopProductsLayout