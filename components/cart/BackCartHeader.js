import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { playfair } from '../../config/font'

const BackCartHeader = ({ link }) => {
    return (
        <div className='relative'>
            <button 
                onClick={link}
                className='absolute left-0 top-1/2 -translate-y-1/2 text-black/80 bg-500 w-[40px] h-[40px] rounded-full flex items-center justify-center'
            >
                <MdOutlineArrowBack size={20} />
            </button>
            <h4 className={`text-center ${playfair.className} text-[30px] font-bold text-black/90`}>
                Check Out
            </h4>
        </div>
    )
}

export default BackCartHeader
