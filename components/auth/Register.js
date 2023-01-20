import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className='flex flex-row items-center justify-center'>
            <small className='text-black text-[12px]'>
                Don’t have an account? 
            </small>
            <Link href='/account/register' legacyBehavior>
                <a className='ml-1 text-200 text-[12px] hover:text-200/60'>
                    Register
                </a>
            </Link>
        </div>
    )
}

export default Register
