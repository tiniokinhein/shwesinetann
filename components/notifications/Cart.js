import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VscTrash } from 'react-icons/vsc'
import { mm, playfair } from '../../config/font'
import { formatNum, priceCurrency } from '../../config/priceFormat'
import { delProduct } from '../../redux/cart/action'

const Cart = () => {

    const { carts } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return carts.length >= 1 ? (
        <div className='p-4 flex flex-col items-start mt-[10px] md:mt-[30px] bg-white border-t-[3px] border-[#DEA702]'>
            <h4 className={`${playfair.className} font-bold text-black text-[18px]`}>
                Add To Cart (<small className={`${mm.className}`}>{carts.length}</small>)
            </h4>

            {
                carts.map((p,i) => (
                    <div key={i} className='rounded-xl border p-3 flex flex-row mb-3 w-full'>
                        <Link href='/product/[id]' as={`/product/${p.id}`}>
                            <img 
                                alt=''
                                src={p.image_url_md}
                                width='50'
                                height='50'
                                className='rounded-md'
                            />
                        </Link>
                        <Link href='/product/[id]' as={`/product/${p.id}`} className='grow'>
                            <div className='mx-3 overflow-hidden'>
                                <h4 className={`${playfair.className} text-[12px] text-black/90 font-bold truncate text-left`}>
                                    {p.name}
                                </h4>
                                <p className='text-[10px] text-black/50 line-through text-left'>
                                    {formatNum(p.webclient_list_price_with_currency)} {priceCurrency}
                                </p>
                                <p className='text-[11px] text-black text-left'>
                                    {formatNum(p.webclient_sale_price_with_currency)} {priceCurrency}
                                </p>
                            </div>
                        </Link>
                        <button 
                            onClick={() => dispatch(delProduct(p))}
                            className='text-red-700'
                        >
                            <VscTrash size={20} />
                        </button>
                    </div>
                ))
            }

            <Link href='/checkout' legacyBehavior>
                <a className='text-500 bg-400 rounded-lg p-3 text-[14px] w-full text-center'>
                    Buy Order
                </a>
            </Link>
        </div>
    ) : (
        <div className='p-4 flex flex-col items-center justify-center mt-[10px] md:mt-[30px] bg-white border-t-[3px] border-[#DEA702]'>
            <Link href='/' legacyBehavior>
                <a className='text-400 border border-400 rounded-lg py-2 px-5 text-[12px] bg-transparent transition-all hover:bg-400 hover:text-500 hover:transition-all'>
                    Go Shopping
                </a>
            </Link>
        </div>
    )
}

export default Cart
