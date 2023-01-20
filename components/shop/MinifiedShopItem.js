import Image from "next/image"
import Link from "next/link"

const ShopItem = ({ shop }) => {
  return (
    <div className='my-3 px-3 w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7'>
      <Link 
        href={shop?.subscription === 'premium' ? '/premium-shop/[id]' : '/shop/[id]' } 
        as={shop?.subscription === 'premium' ? `/premium-shop/${shop.id}` : `/shop/${shop.id}`}
      >
        <figure 
          className='border border-pink-400 rounded-md transition duration-200 ease-out hover:shadow-lg hover:ease-in hover:scale-105 relative p-auto w-full h-[150px]'
        >
          {
            shop.subscription && 
            shop.subscription === 'premium' && (
              <Image 
                alt=''
                className='absolute right-1 top-1 z-10' 
                src='/assets/accessories/badge-premium.svg' 
                width={30} 
                height={30}
              />
            )
          }
          <Image 
            alt=''
            className='p-2 object-contain' 
            src={shop.shop_logo} 
            fill
            sizes='
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            '
          />
        </figure>
      </Link>
    </div>
  )
}

export default ShopItem
