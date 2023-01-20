import {FiFilter} from 'react-icons/fi'

const FilterToggler = ({onToggle}) => {

    return (
        <button className={`btn rounded-lg 
        bg-710 border-400 text-400
        hover:bg-400 hover:text-white 
        absolute right-1/2 md:right-0 top-0`}
        onClick={onToggle}
        >
            Filter <FiFilter className="ml-2" size={16}/>
        </button>
    )
}

export default FilterToggler