import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import Iframe from 'react-iframe'
import { mm, playfair } from '../../config/font'

const ShopInfo = ({ p }) => {
    return (
        <div className='pb-5'>
            <div>
                <h4 className={`${playfair.className} font-light text-[16px] text-black mb-5`}>
                    Shop Informations
                </h4>
                <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-2/3 px-3 mb-10 md:mb-0'>
                        <p 
                            dangerouslySetInnerHTML={{
                                __html: p.description
                            }}
                            className={`${mm.className} text-[16px] text-black/50 leading-[2em]`}
                        />
                    </div>
                    <div className='w-full md:w-1/3 px-3'>
                        <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                            <h4 className='font-bold text-[12px] text-black/70'>
                                Name
                            </h4>
                            <p className='text-[12px] text-black/50'>
                                Sein Nan Taw
                            </p>
                        </div>
                        <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                            <h4 className='font-bold text-[12px] text-black/70'>
                                Email
                            </h4>
                            <p className='text-[12px] text-400 transition-all hover:text-black hover:transition-all'>
                                <a href={`mailto:seinnantaw@gmail.com`}>
                                    seinnantaw@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                            <h4 className='font-bold text-[12px] text-black/70'>
                                Phone No.
                            </h4>
                            <p className='text-[12px] text-400 transition-all hover:text-black hover:transition-all'>
                                <a href={`tel:+959123123123`}>
                                    09123123123
                                </a>
                            </p>
                        </div>
                        <div className='flex flex-row items-center justify-between border-b pb-4 mb-4'>
                            <h4 className='font-bold text-[12px] text-black/70'>
                                Terms & Conditions
                            </h4>
                            <Link href='/' legacyBehavior>
                                <a className='flex flex-row items-center text-[12px] text-primary transition-all hover:text-black hover:transition-all'>
                                    <span className='mr-1'>More detail</span>
                                    <IoMdArrowForward size={14} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className={`${playfair.className} font-light text-[16px] text-black mb-5`}>
                    Branches
                </h4>
                {
                    p?.branches.length ? (
                        <div className='flex flex-wrap -mx-3'>
                            {
                                p?.branches.map((m,i) => {
                                    return(
                                        <div key={i} className='w-full md:w-1/3 px-3 pb-16 md:pb-0'>
                                            <div className='mb-10 flex flex-row'>
                                                <img 
                                                    alt=''
                                                    src={m.icon}
                                                    className='min-w-[36px] h-[32px]'
                                                />
                                                <div className='px-3'>
                                                    <h4 className={`${mm.className} text-[14px] text-black/90`}>
                                                        {m.title}
                                                    </h4>
                                                    <p 
                                                        className={`${mm.className} text-[14px] text-black/60 mt-1`}
                                                        dangerouslySetInnerHTML={{
                                                            __html: m.address
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-full h-[220px]'>
                                                <Iframe 
                                                    url={m.map}
                                                    width="100%"
                                                    height="100%"
                                                    id="google-map"
                                                    className="border-0 rounded-lg"
                                                    display="block"
                                                    position="relative"
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default ShopInfo
