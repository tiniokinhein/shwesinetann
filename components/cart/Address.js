import React from 'react'
import { playfair } from '../../config/font'

const Address = ({ posts, active, onClick, unClick }) => {

    return posts.length ? (
        <div className=''>
            <div className='flex flex-wrap -mx-3'>
                {
                    posts
                    .slice()
                    .reverse()
                    .map((p,i) => {
                        
                        const filter = p.name === active?.name

                        return(
                            <div key={i} className='w-full md:w-1/2 px-3 mb-3'>
                                <div 
                                    className={`rounded-md border ${filter && 'border-400'} p-4 flex flex-row items-start cursor-pointer`}
                                    onClick={() => filter ? unClick() : onClick(p)}
                                >
                                    <img 
                                        alt=''
                                        src='/assets/shops/snt-branch-1.png'
                                        className='w-[16px] min-w-[16px] h-[14px]'
                                    />
                                    <div className='ml-2'>
                                        <h4 className={`${playfair.className} text-[15px] font-bold text-black/90`}>
                                            {p.name}
                                        </h4>
                                        <p className='text-[12px] text-black/50 mt-2'>
                                            {p.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) : null
}

export default Address
