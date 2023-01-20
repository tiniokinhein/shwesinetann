import Image from "next/image"
import Link from "next/link"

const DetailedShopItem = ({ shop }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/3 relative px-3 mt-3 mb-[40px]">
      <Link href='/shop/[id]' as={`/shop/${shop.id}`}>
        <figure>
          <Image 
            className="rounded-lg" 
            src={shop.thumbnail} 
            alt='' 
            height={235} 
            width={810}
          />
        </figure>
        <div className="card card-side py-0 shadow-none bg-white h-[110px] border absolute left-5 right-5 -bottom-[30px]">
          <figure 
            className="w-2/6"
            style={{
              background: "url("+ shop.shop_logo +") no-repeat center / contain"
            }}
          />
          <div className="card-body w-4/6 p-3 ">
            <h4 className="text-[16px] font-bold overflow-clip text-black/80">
              {shop.name}
            </h4>
            <p 
              className="text-xs font-light text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: shop.address
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DetailedShopItem
