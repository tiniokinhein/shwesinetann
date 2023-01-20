import ShopItem from "./MinifiedShopItem"
import { shops } from "../../data/shops"
import ListSectionHeader from "../shared/ListSectionHeader"

const MinifiedShopList = () => {
  return (
    <>
      <ListSectionHeader 
        heading="Premium Shops" 
        seeMoreUrl="/shop" 
      />

      <div className='flex flex-wrap flex-row -mx-3'>
        {
          shops
          // .filter(f => f.subscription && f.subscription === 'premium')
          .map((shop, idx) => (
            <ShopItem key={idx} shop={shop}/>
          ))
        }
      </div>
    </>
  )
}

export default MinifiedShopList
