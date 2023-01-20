const Carousel = ({ items }) => {
  return (
    <div className="w-1/2">
      {items.map((component, idx) => (
        <div className="carousel w-full">
          <div id={`item-"${idx}`} className="carousel-item w-full">
            {component}
          </div>
        </div>
      ))}

      <div className="flex justify-center w-full py-2 gap-2">
        {items.map((component, idx) => (
          <a href={`#item-"${idx}`} className="btn btn-xs">1</a>
        ))}
      </div>

    </div>
  )
}

export default Carousel
