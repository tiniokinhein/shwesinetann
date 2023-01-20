import Link from 'next/link'
import React from 'react'
import { VscTrash } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { playfair } from '../../config/font'
import { formatNum, priceCurrency } from '../../config/priceFormat'
import { delProduct } from '../../redux/cart/action'

const ProductLists = ({ setState, state }) => {

    const { carts } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                {
                    carts.map((p,i) => (
                        <div key={i} className='rounded-xl border p-5 mb-3 flex flex-row items-center'>
                            <Link href='/product/[id]' as={`/product/${p.id}`}>
                                <img 
                                    alt=''
                                    src={p.image_url_md}
                                    width='120'
                                    height='120'
                                    className='rounded-lg'
                                />
                            </Link>
                            <Link href='/product/[id]' as={`/product/${p.id}`}>
                                <div className='grow mx-5 overflow-hidden'>
                                    <h4 className={`${playfair.className} text-[16px] sm:text-[20px] text-black/90 font-bold truncate text-left mb-3`}>
                                        {p.name}
                                    </h4>
                                    {
                                        state !== 'checkout' && (
                                            <p className='text-[12px] sm:text-[14px] text-black/50 line-through text-left mb-1'>
                                                {formatNum(p.webclient_list_price_with_currency)} {priceCurrency}
                                            </p>
                                        )
                                    }
                                    <p className='text-[12px] sm:text-[16px] text-black text-left'>
                                        {formatNum(p.webclient_sale_price_with_currency)} {priceCurrency}
                                    </p>
                                </div>
                            </Link>
                            {
                                state !== 'checkout' && (
                                    <button 
                                        onClick={() => dispatch(delProduct(p))}
                                        className='text-red-700 ml-auto w-[40px] min-w-[40px] h-[40px] rounded-full flex items-center justify-center bg-500 transition-all hover:bg-black/20 hover:transition-all'
                                    >
                                        <VscTrash size={20} />
                                    </button>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            {
                state !== 'checkout' && (
                    <button 
                        onClick={() => {
                            setState('address')
                            window.scrollTo(0,0)
                        }}
                        className='mt-5 w-[400px] max-w-full text-500 bg-400 rounded-lg py-3 text-[16px] transition-all hover:bg-100 hover:transition-all'
                    >
                        Continue
                    </button>
                )
            }
        </>
    )
}

export default ProductLists
