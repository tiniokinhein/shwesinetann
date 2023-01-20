import React from 'react'
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im'
import { playfair } from '../../config/font'
import Breadcrumb from '../layout/Breadcrumb'


const ShopDetailLayout = ({ title, p }) => {
    return (
        <div>
            <Breadcrumb 
                title={title}
                backTitle='Shop'
                backLink='/shop'
            />
            
            <div className='relative rounded-lg overflow-hidden'>
                <div className='absolute right-[20px] top-[165px] z-10 bg-[#997b9e] flex flex-row items-center rounded-md px-2 py-1'>
                    <img 
                        src='/assets/icons/premium.png'
                        alt=''
                        height='18'
                    />
                    <p className='text-black text-[10px] ml-1'>
                        {
                            p?.subscription === 'premium' ? 'Premium Shop' : 'Standard Shop'
                        }
                    </p>
                </div>
                <div 
                    className='h-[220px]'
                    style={{
                        background: "url("+ p?.thumbnail +") no-repeat center / cover"
                    }}
                />

                <div className='bg-500 px-7 pb-7 flex flex-col md:flex-row items-center md:items-end justify-between'>
                    <div className='flex flex-col md:flex-row items-center md:items-end justify-between'>
                        <div className='-mt-[50px]'>
                            <img 
                                alt=''
                                src={p?.shop_logo}
                                className='z-20 w-[162px] h-[162px] rounded-full border-2 border-[#CD9A00]'
                            />  
                        </div>
                        <div className='mt-5 md:ml-7 md:mt-0'>
                            <h4 className={`${playfair.className} text-black/80 text-[24px] font-bold text-center md:text-left`}>
                                {p?.name}
                            </h4>
                            <p className='mt-2 text-black/60 text-[20px] text-center md:text-left'>
                                21K Followers
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center mt-5 md:mt-0'>
                        <button
                            className='text-white p-2.5 bg-[#1877f2] rounded-full'
                        >
                            <ImFacebook size={16} />
                        </button>
                        <button
                            className='mx-5 text-white p-2.5 bg-[#e40687] rounded-full'
                        >
                            <ImInstagram size={16} />
                        </button>
                        <button
                            className='text-white p-2.5 bg-[#03a9f4] rounded-full'
                        >
                            <ImTwitter size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetailLayout
