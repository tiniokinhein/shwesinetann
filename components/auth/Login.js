import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-row items-center justify-center'>
            <small className='text-black text-[12px]'>
                You have an account?
            </small>
            <Link href='/account/login' legacyBehavior>
                <a className='ml-1 text-200 text-[12px] hover:text-200/60'>
                    Sign In
                </a>
            </Link>
        </div>
    )
}

export default Login
