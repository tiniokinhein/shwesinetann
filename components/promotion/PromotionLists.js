import Link from 'next/link'
import React from 'react'
import { playfair } from '../../config/font'

const PromotionLists = ({ posts }) => {
    return posts.length ? (
        <div className='flex flex-wrap -mx-3'>
            {
                posts.map((p,i) => (
                    <div key={i} className={`w-full sm:w-1/2 md:w-1/3 p-3`}>
                        <Link href='/promotion/[id]' as={`/promotion/${p.id}`}>
                            <div className={`flex flex-col rounded-[8px] overflow-hidden h-full bg-500`}>
                                <img
                                    src={p.img}
                                    alt=''
                                    className='w-full transition-all opacity-100 hover:opacity-80 hover:transition-all'
                                />

                                <div className='p-5'>
                                    <h4 className={`${playfair.className} text-[14px] text-black/40 font-bold transition-all hover:text-black hover:transition-all`}>
                                        {p.shop_id.name}
                                    </h4>
                                    <h1 className={`${playfair.className} mt-1 text-[23px] text-primary font-bold transition-all hover:text-primary/80 hover:transition-all`}>
                                        {p.title}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    ) : null
}

export default PromotionLists
