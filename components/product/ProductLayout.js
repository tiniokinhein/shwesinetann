import Link from 'next/link'
import React from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { IoMdArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Select from 'react-select'
import { mm, playfair } from '../../config/font'
import { formatNum, priceCurrency } from '../../config/priceFormat'
import { addProduct } from '../../redux/cart/action'

const ProductLayout = ({ p }) => {

    const [tab , setTab] = React.useState(true)
    const [selectWeight , setSelectWeight] = React.useState(null)
    const [selectSize , setSelectSize] = React.useState(null)
    const [pop , setPop] = React.useState({
        tc: false,
        dtc: false
    })
    const { carts } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const shopHref = p?.subscription === 'premium' ? `/premium-shop/[id]` : `/shop/[id]`
    const shopLink = p?.subscription === 'premium' ? `/premium-shop/${p?.shop_id?.id}` : `/shop/${p?.shop_id?.id}`

    const addToCart = () => {
        const data = {
            ...p,
            weight: selectWeight?.value,
            size: selectSize?.value
        }
        dispatch(addProduct(data))
    }

    return (
        <div className=''>
            <div className='flex flex-wrap -mx-3'>
                <div className='w-full lg:w-2/5 pl-3 pr-3 lg:pr-10 lg:border-r'>
                    <Carousel
                        autoPlay={false}
                        showStatus={false}
                        showIndicators={false}
                        showArrows={false}
                        infiniteLoop
                        width={'100%'}
                        thumbWidth={70}
                        className='product-slide-wrapper'
                    >
                        {
                            p?.image_gallery.map((m,i) => (
                                <div key={i} className='relative'>
                                    <img 
                                        alt=''
                                        src={m}
                                        className='rounded-lg'
                                    />

                                    <div className='flex flex-row items-center absolute bottom-0 left-0 right-0 z-10 bg-black/50 p-3'>
                                        <img 
                                            alt=''
                                            src={p?.shop_id?.shop_logo}
                                            className='!w-[30px] !min-w-[30px]'
                                        />
                                        <h4 className={`grow ml-3 ${playfair.className} font-bold truncate text-[12px] text-500 text-left`}>
                                            {p?.shop_id?.name}
                                        </h4>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                    
                    <Link 
                        href={shopHref} 
                        as={shopLink}
                    >
                        <div className='flex flex-row rounded-lg border overflow-hidden'>
                            <div className='relative'>
                                <img 
                                    alt=''
                                    src={p?.shop_id?.shop_logo}
                                    className='w-[100px] min-w-[100px] h-full object-contain p-3'
                                />

                                {
                                    p?.subscription === 'premium' && (
                                        <img
                                            alt=''
                                            className='absolute left-0 top-0 z-10' 
                                            src='/assets/accessories/badge-premium.svg' 
                                            width='24'
                                            height='24'
                                        />
                                    )
                                }
                            </div>

                            <div className='grow pt-3 pb-5 pr-5 pl-3 overflow-hidden'>
                                <h4 className={`${playfair.className} font-bold truncate text-[18px] text-black/90 mb-3`}>
                                    {p?.shop_id?.name}
                                </h4>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between overflow-hidden'>
                                    <div className='mb-3 sm:mb-0'>
                                        <span className='text-400'>
                                            {p?.shop_id?.customer_review}
                                        </span>
                                        <p className='text-black/70 text-[12px] truncate'>
                                            Customer review
                                        </p>
                                    </div>
                                    <div>
                                        <span className='text-400'>
                                            {p?.shop_id?.delivery_on_time}
                                        </span>
                                        <p className='text-black/70 text-[12px] truncate'>
                                            Delivery on time
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='w-full lg:w-3/5 pr-3 pl-3 lg:pl-10 mt-10 lg:mt-0'>
                    <h4 className={`${playfair.className} font-bold truncate text-[18px] text-black/90`}>
                        {p?.name}
                    </h4>

                    <div className='my-5'>
                        <div className='flex flex-col justify-center'>
                            <span className='text-[14px] text-black/50 line-through'>
                                {formatNum(p?.webclient_list_price_with_currency)} {priceCurrency}
                            </span>
                            <span className='text-[18px] text-black my-2'>
                                {formatNum(p?.webclient_sale_price_with_currency)} {priceCurrency}
                            </span>
                            <span className='text-[14px] text-400'>
                                {p?.virtual_available}{p?.virtual_available >= 2 ? ' items ' : ' item '} instock left.
                            </span>
                        </div>
                    </div>

                    <div className='border-b pb-4 mb-4'>
                        <h4 className={`${playfair.className} font-bold truncate text-[15px] text-black/70 mb-3`}>
                            Description
                        </h4>
                        <p className={`${mm.className} text-[12px] text-black/80`}>
                            {p?.description}
                        </p>
                    </div>

                    <div className='border-b pb-4 mb-4'>
                        <button 
                            onClick={() => tab ? setTab(false) : setTab(true)}
                            className='w-full flex flex-row items-center justify-between'
                        >
                            <h4 className={`${playfair.className} font-bold text-[15px] text-black/70`}>
                                Product Details
                            </h4>
                            <span className='text-400'>
                                {tab ? <HiMinus size={20} /> : <HiPlus size={20} />}
                            </span>
                        </button>
                        
                        {
                            tab && (
                                <div className='mt-4 mb-1'>
                                    <div className='flex flex-row items-center justify-between h-[38px]'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Jewellery Type
                                        </h4>
                                        <p className={`${mm.className} text-[12px] text-black/80`}>
                                            {p?.type}
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Weight
                                        </h4>
                                        <Select 
                                            value={selectWeight}
                                            onChange={setSelectWeight}
                                            placeholder='Choose'
                                            options={p?.weight.map(m => ({
                                                label: m,
                                                value: m
                                            }))}
                                            className={`${mm.className} text-[12px] w-[150px] border-400`}
                                        />
                                    </div>
                                    <div className='flex flex-row items-center justify-between mt-1.5'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Size
                                        </h4>
                                        <Select 
                                            value={selectSize}
                                            onChange={setSelectSize}
                                            placeholder='Choose'
                                            options={p?.size.map(m => ({
                                                label: m,
                                                value: m
                                            }))}
                                            className={`${mm.className} text-[12px] w-[150px] border-400`}
                                        />
                                    </div>
                                    <div className='flex flex-row items-center justify-between h-[38px]'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Category
                                        </h4>
                                        <p className={`${mm.className} text-[12px] text-black/80`}>
                                            {p?.category}
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between h-[38px]'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Metal Colour
                                        </h4>
                                        <p className={`${mm.className} text-[12px] text-black/80`}>
                                            {p?.colour}
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between h-[38px]'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            Gender
                                        </h4>
                                        <p className={`${mm.className} text-[12px] text-black/80`}>
                                            {p?.gender}
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between h-[38px]'>
                                        <h4 className={`text-[14px] text-black/80`}>
                                            ETA
                                        </h4>
                                        <p className={`${mm.className} text-[12px] text-black/80`}>
                                            {p?.eta}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    
                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                        <h4 className={`${playfair.className} font-bold text-[15px] text-black/70`}>
                            Terms & Conditions
                        </h4>
                        <button 
                            onClick={() => setPop(v => ({
                                ...v,
                                tc: true
                            }))}
                            className='flex flex-row items-center text-[12px] text-primary transition-all hover:text-black hover:transition-all'
                        >
                            <span className='mr-1 hidden sm:flex'>More detail</span>
                            <IoMdArrowForward size={14} />
                        </button>
                    </div>

                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-6'>
                        <h4 className={`${playfair.className} font-bold text-[15px] text-black/70`}>
                            Delivery Terms & Conditions
                        </h4>
                        <button 
                            onClick={() => setPop(v => ({
                                ...v,
                                dtc: true
                            }))}
                            className='flex flex-row items-center text-[12px] text-primary transition-all hover:text-black hover:transition-all'
                        >
                            <span className='mr-1 hidden sm:flex'>More detail</span>
                            <IoMdArrowForward size={14} />
                        </button>
                    </div>

                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-1/2 px-3'>
                            <button 
                                onClick={addToCart}
                                className='w-full border border-400 rounded-lg text-[15px] text-400 p-2 bg-transparent transition-all hover:bg-400 hover:text-500 hover:transition-all'
                            >
                                Shopping Cart
                            </button>
                        </div>
                        <div className='w-1/2 px-3'>
                            <button 
                                onClick={() => {}}
                                className='w-full bg-400 rounded-lg text-[15px] text-500 p-2 transition-all hover:bg-200 hover:transition-all'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* {
                pop.tc && (
                    <Popup 
                        visible={pop.tc} 
                        onClose={() => setPop(v => ({
                            ...v,
                            tc: false
                        }))}
                        className='w-2/3 max-w-full'
                    >
                        <p>{p?.terms_conditions}</p>
                    </Popup>
                )
            } */}
        </div>
    )
}

export default ProductLayout
