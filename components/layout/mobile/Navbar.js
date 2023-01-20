import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'
import { subItems } from '../../../data/submenus'

const Navbar = ({ visible }) => {

    const router = useRouter()

    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, delayChildren: 0.2, staggerDirection: -1 }
        }
    }

    const menuLink = `before:absolute before:content-[''] before:h-[2px] before:bg-white before:left-0 before:-bottom-[6px] text-white bg-transparent text-[16px] p-0 relative before:transition-all hover:before:transition-all hover:before:w-full`

    return (
        <motion.div
            variants={variants}
            className={`fixed top-0 left-0 right-0 ${visible ? 'visible' : 'invisible'}`}
        >
            <ul className={`w-2/3 p-10 overflow-y-visible menu menu-vertical items-start ${visible ? 'visible' : 'invisible'}`}>
                <li className={`px-0 py-[0.5rem]`}>
                    <Link href='/' legacyBehavior>
                        <a className={`${router.pathname === '/' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={`px-0 py-[0.5rem]`}>
                    <Link href='/shop' legacyBehavior>
                        <a className={`${router.pathname === '/shops' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                            Shops
                        </a>
                    </Link>
                </li>
                <li tabIndex={0} className={`px-0 py-[0.5rem]`}>
                    <a className={`text-white text-[16px] p-0 bg-transparent`}>
                        Categories
                    </a>
                    <ul className={`relative left-0 bg-100 border-t-[3px] border-[#DEA702] mt-2 !rounded-none`}>
                        {
                            subItems.map(p => (
                                <li key={p.id}>
                                    <Link href={`/${p.slug}`} legacyBehavior>
                                        <a className={`bg-transparent text-white text-[14px] transition-all hover:transition-all px-3 !pt-3 !pb-0`}>
                                            {p.title}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </li>
                <li className={`px-0 py-[0.5rem]`}>
                    <Link href='/promotion' legacyBehavior>
                        <a className={`${router.pathname === '/promotions' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                            Promotions
                        </a>
                    </Link>
                </li>
                <li className={`px-0 py-[0.5rem]`}>
                    <Link href='/contact' legacyBehavior>
                        <a className={`${router.pathname === '/contact' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                            Contact
                        </a>
                    </Link>
                </li>
                <li className={`px-0 py-[0.5rem]`}>
                    <Link href='/seller/register' legacyBehavior>
                        <a className={`${router.pathname === '/seller/register' ? 'before:w-full' : 'before:w-0'} ${menuLink}`}>
                            Seller Register
                        </a>
                    </Link>
                </li>
            </ul>
        </motion.div>
    ) 
}

export default Navbar
