import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { playfair } from '../../config/font'
import { formatNum, priceCurrency } from '../../config/priceFormat'

const UserOrderInfo = ({ state }) => {

    const { carts } = useSelector(state => state.cart)

    const total = carts?.map(c => Number(c.webclient_sale_price_with_currency)).reduce((a,b) => a + b,0)

    return (
        <>
            <div className='py-5 px-8 bg-500 rounded'>
                <div className='flex flex-row items-center justify-between mb-5'>
                    <h4 className={`${playfair.className} font-bold text-[16px]`}>
                        My Info
                    </h4>
                    <button 
                        onClick={() => {}}
                        className='text-amber-900'
                    >
                        <FaUserEdit size={16} />
                    </button>
                </div>
                <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Name
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        Nyein Thu Aung
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Email
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        testing@myansis.com
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Phone No.
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        09 123456789
                    </p>
                </div>
            </div>

            <div 
                className='py-5 px-8 rounded mt-3'
                style={{
                    background: "url("+ "/assets/cart/order-info-bg.png" +") no-repeat center bottom / cover"
                }}
            >
                <div className='flex flex-row items-center justify-between mb-5'>
                    <h4 className={`${playfair.className} font-bold text-[16px]`}>
                        Order Info
                    </h4>
                </div>
                <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Order No.
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        0122201
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Product
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        {carts.length} {carts.length >= 2 ? 'Items' : 'Item'}
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                    <h4 className={`truncate text-[13px] text-black/70`}>
                        Date
                    </h4>
                    <p className={`text-[12px] text-black/80`}>
                        29/12/2022
                    </p>
                </div>

                {
                    state !== 'payment' &&
                    state !== 'checkout' && (
                        <div className='flex flex-row items-center justify-between'>
                            <h4 className={`truncate text-[13px] text-black/70`}>
                                Amount
                            </h4>
                            <p className={`text-[12px] text-black/80`}>
                                {formatNum(total)} {priceCurrency}
                            </p>
                        </div>
                    )
                }

                {
                    state !== 'product' &&
                    state !== 'address' && (
                        <>
                            <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    Discount
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    {formatNum(500000)} {priceCurrency}
                                </p>
                            </div>
                            <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    Sub Total
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    {formatNum(total)} {priceCurrency}
                                </p>
                            </div>
                            <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    Delivery fee
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    {formatNum(20000)} {priceCurrency}
                                </p>
                            </div>
                            <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    MDR rate
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    {formatNum(20000)} {priceCurrency}
                                </p>
                            </div>
                            <div className='flex flex-row items-center justify-between border-b pb-3 mb-3'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    Cupon
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    5% OFF
                                </p>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <h4 className={`truncate text-[13px] text-black/70`}>
                                    Total
                                </h4>
                                <p className={`text-[12px] text-black/80`}>
                                    {formatNum(total)} {priceCurrency}
                                </p>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default UserOrderInfo
