import React from 'react'
import { products } from '../../data/products'
import ListSectionHeader from '../shared/ListSectionHeader'
import ProductCard from './ProductCard'

const SimilarProducts = () => {
    return (
        <>
            <ListSectionHeader heading="Similar products" />
            <div className="flex flex-wrap flex-row -mx-3">
                {
                    products
                    .slice(0,6)
                    .map((item, idx) => (
                        <ProductCard key={idx} prodTmpl={item} />
                    ))
                }
            </div>
        </>
    )
}

export default SimilarProducts
