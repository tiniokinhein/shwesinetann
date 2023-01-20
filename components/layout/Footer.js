import Link from 'next/link'
import React from 'react'
import { mm } from '../../config/font'

const Footer = () => {
    return (
        <div className={`bg-600`}>
            <div className={`2xl:container mx-auto px-5 py-10`}>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-2/5 mb-16 md:mb-0'>
                        <img
                            src='/assets/logo.png'
                            alt=''
                        />
                        <p className={`${mm.className} text-500 text-[16px] leading-[2em] mt-3 mb-7`}>
                            စိန်၊ရွှေ၊ ရတနာများအား တစ်နေရာတည်းဝယ်ယူနိုင်ရန် <br />အကောင်းဆုံး E Marketplace Platform ကြီး
                        </p>
                        <p className='text-500 text-[16px]'>
                            Secure your payment with
                        </p>
                        <div className='flex flex-row items-center mt-3'>
                            <img 
                                src='/assets/payment/mpu.png'
                                alt=''
                                className='w-[50px]'
                            />
                            <img 
                                src='/assets/payment/kpay.png'
                                alt=''
                                className='w-[26px] ml-5'
                            />
                            <img 
                                src='/assets/payment/wavepay.png'
                                alt=''
                                className='w-[31.2px] ml-5'
                            />
                            <img 
                                src='/assets/payment/onepay.png'
                                alt=''
                                className='w-[26px] ml-5 rounded'
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 mb-16 md:mb-0'>
                        <div className='mb-10'>
                            <p className='text-500 text-[16px]'>
                                Follow us on
                            </p>
                            <div className='flex flex-row items-center mt-3'>
                                <Link href='https://www.instagram.com' legacyBehavior>
                                    <a target='_blank' rel='noopener noreferrer'>
                                        <img 
                                            src='/assets/social/instagram.png'
                                            alt=''
                                            className='transition-all hover:opacity-80 hover:transition-all'
                                        />
                                    </a>
                                </Link>
                                <Link href='https://www.facebook.com' legacyBehavior>
                                    <a target='_blank' rel='noopener noreferrer'>
                                        <img 
                                            src='/assets/social/fb.png'
                                            alt=''
                                            className='ml-5 transition-all hover:opacity-80 hover:transition-all'
                                        />
                                    </a>
                                </Link>
                                <Link href='https://www.twitter.com' legacyBehavior>
                                    <a target='_blank' rel='noopener noreferrer'>
                                        <img 
                                            src='/assets/social/tt.png'
                                            alt=''
                                            className='ml-5 transition-all hover:opacity-80 hover:transition-all'
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <p className='text-500 text-[16px]'>
                                For Mobile App Download here
                            </p>
                            <div className='flex flex-row items-center mt-3'>
                                <Link href='https://play.google.com/store/apps/details?id=' legacyBehavior>
                                    <a target='_blank' rel='noopener noreferrer'>
                                        <img 
                                            src='/assets/store/playstore.png'
                                            alt=''
                                            className='w-[100px] transition-all hover:opacity-50 hover:transition-all'
                                        />
                                    </a>
                                </Link>
                                <Link href='https://apps.apple.com/us/app/PROJECT/id_NUMBERS' legacyBehavior>
                                    <a target='_blank' rel='noopener noreferrer'>
                                        <img 
                                            src='/assets/store/appstore.png'
                                            alt=''
                                            className='w-[90px] ml-5 transition-all hover:opacity-50 hover:transition-all'
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/5'>
                        <ul>
                            <li className='mb-3'>
                                <Link href='/' legacyBehavior>
                                    <a className='text-[16px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                        <span className='text-[18px] text-warning mr-1'>&#8226;</span> Home
                                    </a>
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='/shop' legacyBehavior>
                                    <a className='text-[16px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                        <span className='text-[18px] text-warning mr-1'>&#8226;</span> Shops
                                    </a>
                                </Link>
                            </li>
                            <li className='mb-3'>
                                <Link href='/promotion' legacyBehavior>
                                    <a className='text-[16px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                        <span className='text-[18px] text-warning mr-1'>&#8226;</span> Promotions
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' legacyBehavior>
                                    <a className='text-[16px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                        <span className='text-[18px] text-warning mr-1'>&#8226;</span> Contact 
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='border-t border-700'>
                <div className={`2xl:container mx-auto p-5 relative`}>
                    <p className='text-center text-500 text-[14px]'>
                        Powered by 
                        <Link href='/' className='ml-1 transition-all hover:transition-all hover:text-500/70'>
                            Shwe Sine Tann
                        </Link>
                        . Copyright 2022 - {new Date().getFullYear()}  &copy; All Rights Reserved.
                    </p>

                    <div className='flex flex-row items-center justify-center mt-3 relative lg:absolute lg:right-5 lg:top-5 lg:mt-0'>
                        <Link href='/terms' legacyBehavior>
                            <a className='text-[14px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                Terms
                            </a>
                        </Link>
                        <span className='mx-1.5 text-500 text-[14px]'>|</span>
                        <Link href='/privacy-policy' legacyBehavior>
                            <a className='text-[14px] text-500 transition-all hover:transition-all hover:text-500/70'>
                                Privacy Policy
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
