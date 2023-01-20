import DetailedShopItem from "./DetailedShopItem"
import ListSectionHeader from "../shared/ListSectionHeader"
import { shops } from "../../data/shops"

const DetailedShopList = () => {
  return (
    <>
      <ListSectionHeader heading="Popular Shops" />
      
      <div className='flex flex-wrap -mx-3'>
        {
          shops
          .slice(0, 3)
          .map((shop, idx) => (
            <DetailedShopItem key={idx} shop={shop}/>
          ))
        }
      </div>

    </>
  )
}

export default DetailedShopList
