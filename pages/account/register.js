import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { coItems } from '../../data/company'
import { playfair } from '../../config/font'
import MarketSlide from '../../components/market/MarketSlide'
import BackHome from '../../components/layout/BackHome'
import Login from '../../components/auth/Login'
import AuthHeaderLayout from '../../components/layout/AuthHeaderLayout'

const Register = () => {

    const [state, setState] = React.useState({
        phone: '',
        email: '',
        pwd: ''
    })
    const [loading , setLoading] = React.useState(false)
    const [visiblePwd , setVisiblePwd] = React.useState('password')

    const formSubmit = e => {
        e.preventDefault()

        setLoading(true)
    }

    const formList = (
        <form 
            autoComplete='off'
            onSubmit={formSubmit}
        >
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='name'
                    className={`${playfair.className} text-[12px] text-black mb-3`}
                >
                    Name <small className='text-red-600'>*</small>
                </label>
                <input 
                    type='text'
                    id='name'
                    value={state.name}
                    onChange={e => setState(s => ({
                        ...s,
                        name: e.target.value
                    }))}
                    placeholder='Please enter your name'
                    className={`h-[48px] rounded-[11px] bg-500 text-[12px] px-5`}
                    required
                />
            </div>
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='phone'
                    className={`${playfair.className} text-[12px] text-black mb-3`}
                >
                    Phone No <small className='text-red-600'>*</small>
                </label>
                <input 
                    type='text'
                    id='phone'
                    value={state.phone}
                    onChange={e => setState(s => ({
                        ...s,
                        phone: e.target.value
                    }))}
                    placeholder='Please enter your phone number'
                    className={`h-[48px] rounded-[11px] bg-500 text-[12px] px-5`}
                    required
                />
            </div>
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='email'
                    className={`${playfair.className} text-[12px] text-black mb-3`}
                >
                    Email <small className='text-red-600'>*</small>
                </label>
                <input 
                    type='email'
                    id='email'
                    value={state.email}
                    onChange={e => setState(s => ({
                        ...s,
                        email: e.target.value
                    }))}
                    placeholder='Please enter your email'
                    className={`h-[48px] rounded-[11px] bg-500 text-[12px] px-5`}
                    required
                />
            </div>
            <div className='flex flex-col mb-7 relative'>
                <label 
                    htmlFor='pwd'
                    className={`${playfair.className} text-[12px] text-black mb-3`}
                >
                    Password <small className='text-red-600'>*</small>
                </label>
                <input 
                    type={visiblePwd}
                    id='pwd'
                    value={state.pwd}
                    onChange={e => setState(s => ({
                        ...s,
                        pwd: e.target.value
                    }))}
                    placeholder='Please enter your password'
                    className={`h-[48px] rounded-[11px] bg-500 text-[12px] pl-5 pr-10`}
                    required
                />

                {
                    state.pwd.length >= 1 && (
                        <button 
                            className='text-black absolute right-[20px] bottom-[14px] z-10'
                            onClick={(e) => {
                                e.preventDefault()
                                if(visiblePwd === 'password') {
                                    setVisiblePwd('text')
                                } else {
                                    setVisiblePwd('password')
                                }
                            }}
                        >
                            { visiblePwd === 'password' ? <VscEye size={20} /> : <VscEyeClosed size={20} /> }
                        </button>
                    )
                }
            </div>

            <button 
                className='relative capitalize btn w-full h-[48px] rounded-[11px] bg-400 text-[12px] text-white/80 px-5 hover:bg-400/90 hover:text-white'
                disabled={loading ? true : false}
            >
                Register

                {
                    loading && (
                        <span className='absolute top-1/2 right-1/2 -translate-y-1/2 -mr-[60px]'>
                            <svg aria-hidden="true" className="inline w-5 h-5 animate-spin text-white/30 fill-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </span>
                    )
                }
            </button>
        </form>
    )

    return (
        <>
            <Head>
                <title>Create an account | Shwe Sine Tann</title>
                <meta name="description" content='' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`lg:flex lg:flex-row lg:flex-wrap lg:h-[100vh] lg:min-h-[600px] bg-white`}>
                <div className={`lg:w-1/2 bg-400 py-5 lg:py-0`}>
                    <MarketSlide posts={coItems} slideClass='regSlide' />
                </div>

                <div className={`lg:w-1/2 flex flex-col items-center justify-center relative py-20 lg:py-0`}>
                    <div className='absolute left-5 top-5 z-10'>
                        <BackHome />
                    </div>
                    <div className='absolute left-0 right-0 bottom-5'>
                        <Login />
                    </div>

                    <AuthHeaderLayout
                        title='Register'
                        info='Please fill the details and creat account'
                    />

                    <div className={`mt-5 w-4/5 lg:w-3/5`}>
                        {formList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
