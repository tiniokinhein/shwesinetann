import React from 'react'
import { subItems } from '../../data/submenus'

const SearchSubmenu = ({ onClick }) => {
    return (
        <div className='flex flex-col'>
            <button 
                className={`w-full text-left text-black/50 px-5 py-3 border-b border-[#D7E9FF] bg-transparent hover:bg-100 hover:text-white text-[12px] transition-all hover:transition-all`}
                onClick={() => onClick('All Categories')}
            >
                All Categories
            </button>

            {
                subItems.map(p => {
                    const filter = subItems[subItems.length - 1].id === p.id

                    return (
                        <button 
                            className={`w-full text-left text-black/50 px-5 py-3 ${filter ? 'border-0' : 'border-b'} border-[#D7E9FF] bg-transparent hover:bg-100 hover:text-white text-[12px] transition-all hover:transition-all`}
                            onClick={() => onClick(p.title)}
                        >
                            {p.title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default SearchSubmenu
