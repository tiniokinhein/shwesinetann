import {FiChevronsRight} from "react-icons/fi"
import FilterDropdown from "../shared/FilterDropdown"

const ListSectionHeader = ({heading, seeMoreUrl, extraComp}) => {
    let rightComp;
    const rightCompClasses = "absolute right-1/2 md:right-0 bottom-0"

    if(extraComp) {
        rightComp = extraComp
    } else if (seeMoreUrl) {
        rightComp = <a
                        className={`
                          ${rightCompClasses}
                          z-10
                          flex
                          flex-row
                          items-center
                          justify-center
                          border
                          border-transparent
                          md:border
                          md:border-300
                          capitalize
                          rounded-md
                          text-black
                          text-[14px]
                          bg-transparent
                          transition-all
                          hover:md:bg-300
                          hover:text-black/50
                          hover:md:text-white
                          hover:transition-all
                          w-[140px]
                          py-2
                          -mr-[70px]
                          md:mr-0
                        `}
                        href={seeMoreUrl}
                    >
                        See More <FiChevronsRight className="text-lg ml-1"/>
                    </a>
    }

    return (
        <div className='mb-2 relative mt-10'>
            <h2 className={`
              text-[24px]
              leading-10 
              text-center
              font-serif
              ${seeMoreUrl ? 'pb-10' : ''}
              md:pb-0
            `}>
                {heading}
            </h2>
            { rightComp }
        </div>
    )
}

export default ListSectionHeader
