import Link from "next/link"
import { useRouter } from "next/router"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import DiscountTag from "./DiscountTag"
import ShopInfo from "./ShopInfo"
import { playfair } from "../../config/font"
import { addWishlist, delWishlist } from "../../redux/cart/action"

function ProductCard({ prodTmpl }) {

  const { wishlists } = useSelector(state => state.cart)
  const router = useRouter() 
  const dispatch = useDispatch()

  const activeWl = () => {
    if(wishlists.filter(f => f.id === prodTmpl.id).length > 0) {
      return true
    }

    return false
  }

  return (
    <div className="card rounded card-compact bg-base-100 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6 p-3">
      <Link href='/product/[id]' as={`/product/${prodTmpl.id}`} className='relative'>
        <figure 
          className="relative overflow-visible max-h-40 h-40 min-h-40 md:max-h-32 md:h-32 md:min-h-32 lg:max-h-44 lg:h-44 lg:min-h-44 rounded-t-[5px]"
          style={{
            background: "url("+ prodTmpl.image_url_md +") no-repeat center / cover"
          }}
        />
        {prodTmpl.has_discount && (
          <DiscountTag value={prodTmpl.discount_description} />
        )}
        <ShopInfo shop={prodTmpl.shop_id} />
      </Link>

      <div className="p-2">
        <Link href='/product/[id]' as={`/product/${prodTmpl.id}`} legacyBehavior>
          <a className={`text-[14px] ${playfair.className} text-black hover:text-black/80 transition-all hover:transition-all`}>
            {prodTmpl.name}
          </a>
        </Link>
        <div className="flex flex-col h-[36px] mt-1 mb-2">
          {prodTmpl.has_discount && (
            <span 
              className="inline-block truncate text-[10px] text-gray-400 line-through decoration-red-400"
            >
              {prodTmpl.webclient_list_price_with_currency}
            </span>
          )}

          <span className="truncate text-[14px] text-primary inline-block">
            {prodTmpl.webclient_sale_price_with_currency}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => router.push(`/product/${prodTmpl.id}`)}
            className="grow flex flex-row items-center justify-center h-[2rem] rounded-[7px] capitalize text-[12px] font-normal mr-2 text-500 bg-400 transition-all hover:bg-100 hover:transition-all"
          >
            <MdOutlineShoppingCart 
              size={14}
              className='mr-1'
            /> 
            <span className='hidden sm:inline-flex'>
              Add to cart
            </span>
          </button>
          <button 
            onClick={() => activeWl() ? dispatch(delWishlist(prodTmpl)) : dispatch(addWishlist(prodTmpl)) }
            className="h-[2rem] border border-400 rounded-[5px] bg-transparent hover:bg-400 text-400 px-2 hover:text-500 transition-all hover:transition-all"
          >
            {activeWl() ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard
