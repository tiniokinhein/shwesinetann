import React from 'react'
import { playfair } from '../../config/font'

const AuthHeaderLayout = ({ title, info }) => {
    return (
        <div className={`text-center`}>
            <h1 className={`text-black ${playfair.className} text-[24px] mb-3`}>
                {title}
            </h1>
            <p className={`text-black-300 text-[12px] font-normal`}>
                {info}
            </p>
        </div>
    )
}

export default AuthHeaderLayout
