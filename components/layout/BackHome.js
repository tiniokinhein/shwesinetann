import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const BackHome = () => {
    return (
        <Link href='/' legacyBehavior>
            <a className='flex flex-row text-black hover:text-black/80 transition-all hover:transition-all'>
                <BiArrowBack size={20} />
                <small className='ml-1'>Back to Home</small>
            </a>
        </Link>
    )
}

export default BackHome
