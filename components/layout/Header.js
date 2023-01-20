import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { subItems } from '../../data/submenus'
import Menu from './mobile/Menu'
import Search from './Search'

const Header = ({ onClick, visible }) => {

    const router = useRouter()

    const menuLink = `before:absolute before:content-[''] before:h-[2px] before:bg-white before:left-0 before:-bottom-[6px] text-white bg-transparent text-[16px] p-0 relative before:transition-all hover:before:transition-all hover:before:w-full`

    return (
        <>
            <div className={`bg-100 sticky top-0 z-50`}>
                <div className={`2xl:container mx-auto px-5 py-4`}>
                    <div className={`flex flex-row items-center justify-between`}>
                        <Link href='/'>
                            <Image
                                src='/assets/logo.png'
                                alt=''
                                width={95}
                                height={53}
                            />
                        </Link>

                        <div className='flex flex-row items-center'>
                            <div className='navbar-center hidden lg:flex lg:mr-20'>
                                <ul className='menu menu-horizontal'>
                                    <li className={`px-[1rem] py-[0.5rem]`}>
                                        <Link href='/' legacyBehavior>
                                            <a className={`${router.pathname === '/' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`px-[1rem] py-[0.5rem]`}>
                                        <Link href='/shop' legacyBehavior>
                                            <a className={`${router.pathname === '/shop' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                                                Shops
                                            </a>
                                        </Link>
                                    </li>
                                    <li tabIndex={0} className={`px-[1rem] py-[0.5rem]`}>
                                        <a className={`text-white text-[16px] p-0 bg-transparent`}>
                                            Categories
                                        </a>
                                        <ul className={`left-0 bg-white z-10 rounded-b-md shadow-2xl border-t-[3px] border-[#DEA702]`}>
                                            {
                                                subItems.map(p => (
                                                    <li key={p.id}>
                                                        <Link href={`/${p.slug}`} legacyBehavior>
                                                            <a className={`text-black/50 bg-transparent hover:text-black text-[14px] transition-all hover:transition-all`}>
                                                                {p.title}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                    <li className={`px-[1rem] py-[0.5rem]`}>
                                        <Link href='/promotion' legacyBehavior>
                                            <a className={`${router.pathname === '/promotion' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                                                Promotions
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`px-[1rem] py-[0.5rem]`}>
                                        <Link href='/contact' legacyBehavior>
                                            <a className={`${router.pathname === '/contact' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                                                Contact
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={`px-[1rem] py-[0.5rem]`}>
                                        <Link href='/seller/register' legacyBehavior>
                                            <a className={`${router.pathname === '/seller/register' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                                                Seller Register
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`ml-auto flex flex-row items-center`}>
                                <Link href='/account/login' legacyBehavior>
                                    <a className={`text-[10px] sm:text-[14px] text-white hover:text-white/50 transition-all hover:transition-all`}>
                                        Log In
                                    </a>
                                </Link>
                                <Link href='/account/register' legacyBehavior>
                                    <a className='ml-5 bg-warning text-white py-2 px-4 capitalize rounded-lg text-[10px] sm:text-[14px] transition-all hover:bg-warning/90 hover:transition-all'>
                                        Sign Up
                                    </a>
                                </Link>
                            </div>
                            <div className={`flex lg:hidden items-center w-[50px] h-[50px] relative`}>
                                <Menu onClick={onClick} visible={visible} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Search />
        </>
    )
}

export default Header
