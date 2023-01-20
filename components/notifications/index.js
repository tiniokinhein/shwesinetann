import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import { mm, playfair } from '../../config/font'

const Notifications = () => {

    const { notifications } = useSelector(state => state.cart)
    const router = useRouter()

    return notifications.length >= 1 ? (
        <div className='p-4 flex flex-col items-start mt-[10px] md:mt-[30px] bg-white border-t-[3px] border-[#DEA702]'>
            <h4 className={`${playfair.className} font-bold text-black text-[18px]`}>
                Notification (<small className={`${mm.className}`}>{notifications.length}</small>)
            </h4>

            {
                notifications.map((p,i) => (
                    <div key={i} className='w-full'>
                        <div 
                            className='rounded-xl border p-3 flex flex-row justify-between cursor-pointer'
                            onClick={() => router.push('/')}
                        >
                            <div className='flex'>
                                <div className={`min-w-[36px] min-h-[36px] rounded-md ${p.status === 'delivering' ? 'text-[#00A0FF] bg-[#00A0FF]/20' : 'text-[#CD9A00] bg-[#CD9A00]/20'} flex items-center justify-center`}>
                                    {p.status === 'delivering' ? <VscBellDot size={20} /> : <VscBell size={20} />}
                                </div>
                                <div className='ml-2 mr-1 flex flex-col justify-between'>
                                    <h4 className={`${playfair.className} text-[10px] text-black/90 font-bold truncate text-left`}>
                                        {p.title}
                                    </h4>
                                    <p className='text-black/60 text-[10px] text-left'>
                                        {p.date}
                                    </p>
                                </div>
                            </div>
                            <p className='self-end text-black/60 text-[10px]'>
                                {p.time}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    ) : (
        <div className='p-4 flex flex-col items-center justify-center mt-[10px] md:mt-[30px] bg-white border-t-[3px] border-[#DEA702]'>
            <Link href='/' legacyBehavior>
                <a className='text-400 border border-400 rounded-lg py-2 px-5 text-[12px] bg-transparent transition-all hover:bg-400 hover:text-500 hover:transition-all'>
                    Go Shopping
                </a>
            </Link>
        </div>
    )
}

export default Notifications
