import React from 'react'

const SelfPickup = ({ info }) => {
    return (
        <>
            <p className='text-black/50 text-[12px] mt-5 mb-10 font-normal'>
                {info}
            </p>
            <div>
                <p className='text-black/90 text-[14px] font-normal'>
                    No.B3, Kan Yeik Mon, Kan St,
                </p>
                <p className='text-black/90 text-[14px] font-normal'>
                    Hlaing Township
                </p>
                <p className='text-black/90 text-[14px] font-normal'>
                    Yangon
                </p>
            </div>
        </>
    )
}

export default SelfPickup
