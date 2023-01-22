import React from 'react'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

const FilterDropdown = ({items, className}) => {

    const [selected, setSelected] = React.useState(items[0])
    const [isExpended, setIsExpended] = React.useState(false)

    const handleClick = (item) => {
        setSelected({...selected, ...item})
        setIsExpended(false)
    }

    return (
        <div className={`absolute border border-300 2-10 rounded-md h-full ${className}`}>

            <button
                className={`relative flex flex-row px-5 py-1 h-full items-center z-30 justify-between w-full`}
                onClick={() => setIsExpended(!isExpended)}
            >
                <p className={`text-100 text-[14px] mr-3`}>
                    {selected?.name}
                </p>
                {
                    isExpended ? (
                        <FiChevronUp size={20} color={'#8063C9'}/>
                    ) : (
                        <FiChevronDown size={20} color={'#8063C9'}/>
                    )
                }
            </button>

            {
                isExpended && (
                    <div className='absolute left-0 right-0 z-20 top-10 shadow rounded-md bg-white overflow-hidden'>
                        <div className='flex flex-col'>
                            {
                                items.map((item,i) => {
                                    return (
                                        <button
                                            key={i}
                                            className={`
                                            text-left text-black/50 hover:text-white text-[12px]
                                            w-full px-5 py-3 border-[#D7E9FF] 
                                            bg-transparent hover:bg-100  
                                            transition-all hover:transition-all
                                             `}
                                            onClick={() => handleClick(item)}
                                        >
                                            {item.name}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default FilterDropdown
