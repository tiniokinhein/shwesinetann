import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { FaBell } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { BsHeartFill } from 'react-icons/bs'
import SearchSubmenu from './SearchSubmenu'
import Cart from '../notifications/Cart'
import Wishlist from '../notifications/Wishlist'
import Notifications from '../notifications'

const Search = () => {

    const [search , setSearch] = React.useState('')
    const [status , setStatus] = React.useState(false)
    const [showText , setShowText] = React.useState('All Categories')
    const { carts, wishlists, notifications } = useSelector(state => state.cart)
    const router= useRouter()

    const chooseSub = (item) => {
        setStatus(false)
        setShowText(item)
    }

    return (
        <div className={`bg-200`}>
            <div className={`2xl:container mx-auto px-5 py-5 flex flex-col md:flex-row items-center`}>
                <div className={`grow md:mr-10 order-last md:order-first`}>
                    <div className={`flex flex-row`}>
                        <div className={`relative bg-300 rounded-l-md`}>
                            <button 
                                className={`flex flex-row px-5 py-3 items-center justify-between w-[180px]`}
                                onClick={() => status ? setStatus(false) : setStatus(true)}
                            >
                                <p className={`text-white text-[14px] mr-3`}>
                                    {showText}
                                </p>
                                {
                                    status ? (
                                        <FiChevronUp
                                            size={20}
                                            color={'#fff'}
                                        />
                                    ) : (
                                        <FiChevronDown
                                            size={20}
                                            color={'#fff'}
                                        />
                                    )
                                }
                            </button>
                            
                            {
                                status && (
                                    <div className='absolute left-0 right-0 top-full z-10 rounded-md bg-white overflow-hidden'>
                                        <SearchSubmenu
                                            onClick={chooseSub}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <div className={`border border-300 bg-100 px-5 grow flex items-center rounded-r-md`}>
                            <input 
                                type='text'
                                autoComplete='off'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder='Search by Shop Name and more'
                                className={`bg-transparent w-full text-[14px] text-500`}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={`mb-5 md:mb-0 order-first md:order-last relative`}>
                    <ul className='menu menu-horizontal flex flex-row item-center justify-between text-center'>
                        <li tabIndex={0} className='p-0'>
                            <a className={`relative p-0 active:bg-transparent`}>
                                <FaBell size={20} color={'#fff'} />

                                {
                                    notifications.length >= 1 && (
                                        <span className={`absolute -right-[7px] -top-[7px] w-[16px] h-[16px] rounded-full bg-red-600 text-white text-[8px] flex items-center justify-center`}>
                                            {notifications.length}
                                        </span>
                                    )
                                }
                            </a>
                            <ul className='w-[300px] -right-[94px] md:right-0 top-full bg-transparent z-20 rounded-b-lg shadow-lg'>
                                <li>
                                    <Notifications />
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={1} className='p-0'>
                            <a className={`mx-6 relative p-0 active:bg-transparent`}>
                                <BsHeartFill size={20} color={'#fff'} />

                                {
                                    wishlists.length >= 1 && (
                                        <span className={`absolute -right-[7px] -top-[7px] w-[16px] h-[16px] rounded-full bg-red-600 text-white text-[8px] flex items-center justify-center`}>
                                            {wishlists.length}
                                        </span>
                                    )
                                }
                            </a>
                            <ul className='w-[300px] -right-[94px] md:right-0 top-full bg-transparent z-10 rounded-b-lg shadow-lg'>
                                <li>
                                    <Wishlist />
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={2} className='p-0'>
                            <button 
                                className={`relative p-0 active:bg-transparent`}
                                onClick={() => router.push('/checkout')}
                            >
                                <IoCart size={24} color={'#fff'} />
                                
                                {
                                    carts.length >= 1 && (
                                        <span className={`absolute -right-[7px] -top-[7px] w-[16px] h-[16px] rounded-full bg-red-600 text-white text-[8px] flex items-center justify-center`}>
                                            {carts.length}
                                        </span>
                                    )
                                }
                            </button>
                            <ul className='w-[300px] -right-[94px] md:right-0 top-full bg-transparent z-10 rounded-b-lg shadow-lg'>
                                <li>
                                    <Cart />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search
