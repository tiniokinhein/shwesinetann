import ProductCard from "./ProductCard"
import ListSectionHeader from "../shared/ListSectionHeader"

function ProductCardList({heading, headerExtraComp, products, seeMoreUrl, pagination}) {
    return (
        <>
            {heading && (
                <ListSectionHeader
                    heading={heading}
                    seeMoreUrl={seeMoreUrl}
                    extraComp={headerExtraComp}
                />
            )}

            <div className={`flex flex-wrap flex-row -mx-3 ${!heading && 'pt-2 mt-10'}`}>
                {
                    products.map((item, idx) => (
                        <ProductCard key={idx} prodTmpl={item}/>
                    ))
                }
            </div>

            {
                pagination && (
                    <div className="flex flex-row mx-auto justify-center">
                        <button className="btn p-4 bg-800 hover:bg-800 text-600 mx-1 border-0"> 1 </button>
                        <button className="btn p-4 bg-710 hover:bg-800 text-600 mx-1 border-0"> 2 </button>
                        <button className="btn p-4 bg-710 hover:bg-800 text-600 mx-1 border-0"> 3 </button>
                        <button className="btn p-4 bg-710 hover:bg-800 text-600 mx-1 border-0"> 4 </button>
                        <button className="btn p-4 bg-400 hover:bg-200 mx-1 border-0"> Next </button>
                    </div>
                )
            }

        </>
    )
}

export default ProductCardList
