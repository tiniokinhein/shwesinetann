import Layout from '../components/layout/Layout'
import HomeSlide from '../components/slide/HomeSlide'
import MinifiedShopList from '../components/shop/MinifiedShopList'
import DetailedShopList from '../components/shop/DetailedShopList'
import CategoryCardList from '../components/category/CategoryCardList'
import ProductCardList from '../components/product/ProductCardList'
import TwoGridSlidePromotion from '../components/promotion/TwoGridSlidePromotion'
import { products } from "../data/products"

const Home = () => {
  return(
    <Layout 
      description='This is Shwe Sine Tann'
    >
      <HomeSlide />

      <div className='2xl:container px-5 mx-auto pb-16'>

        <MinifiedShopList />
        <DetailedShopList />

        <CategoryCardList
            autoplay={true}
            heading="All Categories"
        />

        <ProductCardList
            heading="Promotion Items"
            products={products}
            seeMoreUrl="/products"
        />

        <TwoGridSlidePromotion />

        <ProductCardList
            heading="Promotion Items"
            products={products}
            seeMoreUrl="/products"
        />

      </div>
    </Layout>
  )
}

export default Home