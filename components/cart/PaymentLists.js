import React from 'react'
import { playfair } from '../../config/font'

const PaymentLists = ({ 
    state, 
    setState, 
    comment, 
    setComment,
    cnCode,
    setCnCode,
    selectPay,
    setSelectPay,
    data
}) => {

    const beforeLayout = `before:absolute before:w-[14px] before:h-[14px] before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-10`

    return (
        <>
            <div className='rounded-xl border p-5'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-row items-center'>
                        <span className={`text-[16px] ${playfair.className} font-bold pb-2 border-b border-400 text-400`}>
                            Payment Method
                        </span>
                    </div>
                </div>

                <div className='mt-2 flex flex-wrap -mx-3'>
                    {
                        data.map((p,i) => {
                            const active = selectPay.name === p.name

                            return(
                                <div key={i} className='w-1/2 lg:w-1/3 p-3'>
                                    <div 
                                        className='rounded-lg border p-5 flex flex-row items-center cursor-pointer h-full'
                                        onClick={() => {
                                            setSelectPay(p)
                                        }}
                                    >
                                        <span className={`relative mr-3 min-w-[20px] min-h-[20px] border border-400 bg-white rounded-full ${beforeLayout} before:${active ? 'bg-400' : 'bg-white'}`} />
                                        <img 
                                            alt=''
                                            src={p.logo}
                                            width='40'
                                            height='40'
                                            className='min-w-[40px]'
                                        />
                                        <h4 
                                            className='ml-3 text-[12px]'
                                            dangerouslySetInnerHTML={{
                                                __html: p.name
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='rounded-xl border p-5 mt-5'>
                <div className='relative'>
                    <input 
                        type='text'
                        value={cnCode}
                        onChange={e => setCnCode(e.target.value)}
                        placeholder='Please enter your cupon code'
                        className='w-full h-[50px] bg-500 border rounded-lg py-4 pl-4 pr-4 sm:pr-[165px] text-black text-[12px]'
                    />
                    <span className='text-[10px] text-400 font-normal'>
                        Your cupon is success get 5 % OFF
                    </span>
                    <button 
                        onClick={() => {}}
                        className='relative sm:absolute sm:right-0 sm:top-0 text-[12px] text-500 rounded-lg bg-400 py-4 w-full sm:w-[160px] mt-3 sm:mt-0'
                    >
                        Apply Cuppon
                    </button>
                </div>
            </div>

            <div className='rounded-xl border p-5 mt-5'>
                <p className={`text-[12px] text-black/50 mb-3`}>
                    Do you have any comments regarding the order?
                </p>
                <textarea
                    rows='3'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder='Please enter your commet. tell us more.'
                    className='w-full bg-500 text-black text-[12px] border rounded-lg p-5 font-normal'
                    style={{
                        resize: 'none'
                    }}
                />
            </div>

            <button 
                onClick={() => {
                    setState('checkout')
                    window.scrollTo(0,0)
                }}
                className='mt-5 w-[400px] max-w-full text-500 bg-400 rounded-lg py-3 text-[16px] transition-all hover:bg-100 hover:transition-all'
            >
                View Checkout
            </button>
        </>
    )
}

export default PaymentLists
