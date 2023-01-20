import React from 'react'
import { playfair } from '../../config/font'

const CartProgress = ({ setState , state }) => {

    const beforeLayout = `before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-10`
    const afterLayout = `after:absolute after:w-full after:h-[2px] after:bg-400 after:left-0 after:right-0 after:top-1/2 after:-translate-y-1/2 after:-z-10`

    return (
        <div className='flex flex-row items-center justify-center w-[500px] max-w-full mx-auto mt-5 mb-20'>
            <div className={`text-center relative`}>
                <div 
                    className={`relative mx-auto w-[20px] h-[20px] border-2 border-400 bg-white rounded-full ${beforeLayout} ${state === 'product' || state === 'address' || state === 'payment' ? 'before:bg-400' : 'before:bg-white'}`}
                    // onClick={() => setState('product')}
                />
                <button
                    onClick={() => {}}
                    className='absolute left-1/2 -bottom-[30px] -translate-x-1/2 z-10'
                >
                    <span className={`${playfair.className} text-[12px] md:text-[14px] font-bold ${state === 'product' || state === 'address' || state === 'payment' ? 'text-400' : 'text-black/60'}`}>
                        Product
                    </span>
                </button>
            </div>
            <div className={`px-20 sm:px-40 md:px-60 relative ${afterLayout}`}>
                <div 
                    className={`relative mx-auto w-[20px] h-[20px] border-2 border-400 bg-white rounded-full ${beforeLayout} ${state === 'address' || state === 'payment' ? 'before:bg-400' : 'before:bg-white'}`}
                    // onClick={() => setState('address')}
                />
                <button
                    onClick={() => {}}
                    className='absolute left-1/2 -bottom-[30px] -translate-x-1/2 z-10'
                >
                    <span className={`${playfair.className} text-[12px] md:text-[14px] font-bold ${state === 'address' || state === 'payment' ? 'text-400' : 'text-black/60'}`}>
                        Address
                    </span>
                </button>
            </div>
            <div className='relative'>
                <div 
                    className={`relative mx-auto w-[20px] h-[20px] border-2 border-400 bg-white rounded-full ${beforeLayout} ${state === 'payment' ? 'before:bg-400' : 'before:bg-white'}`}
                    // onClick={() => setState('payment')}
                />
                <button
                    onClick={() => {}}
                    className='absolute left-1/2 -bottom-[30px] -translate-x-1/2 z-10 w-[140px]'
                >
                    <span className={`${playfair.className} text-[12px] md:text-[14px] font-bold ${state === 'payment' ? 'text-400' : 'text-black/60'}`}>
                        Payment
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CartProgress
