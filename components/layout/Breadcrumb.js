import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ title, backTitle, backLink }) => {
    return (
        <div className='flex flex-row items-center mb-5'>
            <Link href='/' legacyBehavior>
                <a className='uppercase text-[14px] text-black/50 transition-all hover:text-black hover:transition-all'>
                    Home
                </a>
            </Link>
            <span className='mx-2 text-[14px] text-black/50'>/</span>
            <Link href={backLink} legacyBehavior>
                <a className='uppercase text-[14px] text-black/50 transition-all hover:text-black hover:transition-all'>
                    {backTitle}
                </a>
            </Link>
            <span className='mx-2 text-[14px] text-black/50'>/</span>
            <span className='uppercase text-[14px] text-black'>
                {title}
            </span>
        </div>
    )
}

export default Breadcrumb
