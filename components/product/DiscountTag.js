import PropTypes from 'prop-types'

function DiscountTag({ type, value }) {
  
  if (type === "circle") {
    return (
      <div className="absolute -top-[5px] -right-[5px] z-10 flex items-center justify-center rounded-full bg-red-500 h-10 w-10 p-2 text-white text-[10px]">
        <span className="text-center"> 
          {value} <br />Off 
        </span>
      </div>
    )
  } else if (type === 'box') {
    return (
      <div className="absolute top-2 right-0 flex items-center justify-center rounded-l-md bg-red-500 p-2 text-white text-[10px]">
        <span className="text-center"> 
          {value} 
        </span>
      </div>
    )
  }
}

DiscountTag.defaultProps = {
  type: "circle",
};

DiscountTag.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default DiscountTag