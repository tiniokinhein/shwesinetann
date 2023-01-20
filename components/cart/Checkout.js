import React from 'react'
import { playfair } from '../../config/font'
import ProductLists from './ProductLists'

const Checkout = ({
    state,
    comment,
    selectPay,
    addressStatus
}) => {
    return (
        <div className='mb-10'>
            <div>
                <h4 className={`text-[16px] ${playfair.className} font-bold text-black/90 mb-5`}>
                    Product
                </h4>
                <ProductLists state={state} />
            </div>
            <div className='mt-10'>
                <h4 className={`text-[16px] ${playfair.className} font-bold text-black/90 mb-5`}>
                    Delivery address
                </h4>
                <div className='p-5 border rounded-lg'>
                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            City
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.delivery.township}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            State
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.delivery.region}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            Address
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.delivery.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className={`text-[16px] ${playfair.className} font-bold text-black/90 mb-5`}>
                    Billing address
                </h4>
                <div className='p-5 border rounded-lg'>
                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            City
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.billing.township}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            State
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.billing.region}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            Address
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {addressStatus.billing.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className={`text-[16px] ${playfair.className} font-bold text-black/90 mb-5`}>
                    Payment Method
                </h4>
                <div className='p-5 border rounded-lg'>
                    <div className='flex flex-row items-center justify-between'>
                        <h4 className={`truncate text-[13px] text-black/90`}>
                            Payment name
                        </h4>
                        <p className={`text-[12px] text-black/90`}>
                            {selectPay.short}
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h4 className={`text-[16px] ${playfair.className} font-bold text-black/90 mb-5`}>
                    Comment
                </h4>
                <div className='p-5 border rounded-lg'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className={`text-[12px] text-black/90`}>
                            {comment.length >= 1 ? comment : '-'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
