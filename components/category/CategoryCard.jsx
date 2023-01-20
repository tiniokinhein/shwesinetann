import PropTypes from 'prop-types'
import Image from 'next/image';
import Link from 'next/link';

function CategoryCard({category, isActive}) {
  const activeClass = isActive ? 'bg-810' : '' ;
  return (
    <div className={`flex flex-col rounded-lg text-center border py-3 px-1 ${activeClass} w-full w-inherit`}>
        <figure 
          className="h-[38px]"
          style={{
            background: "url("+ category.vector_img +") no-repeat center / contain"
          }}
        />
        <span className='text-[14px] mt-2'> 
          {category.name} 
        </span>
      </div>
  )
}

CategoryCard.defaultProps = {
  isActive: false,
};

CategoryCard.propTypes = {
  isActive: PropTypes.bool,
}

export default CategoryCard
