function ShopInfo({shop}) {
  return (
    <div className="absolute flex items-center left-0 right-0 bottom-0 bg-black/50 px-3 py-2">
      <img className="w-[20px]" src={shop.shop_logo} alt='' />
      <span className="ml-2 truncate text-white text-[12px] font-semibold">
        {shop.name}
      </span>
    </div>
  )
}

export default ShopInfo
