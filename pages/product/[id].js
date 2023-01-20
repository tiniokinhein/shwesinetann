import React from 'react'
import Layout from '../../components/layout/Layout'
import ProductLayout from '../../components/product/ProductLayout'
import RelatedProducts from '../../components/product/RelatedProducts'
import SimilarProducts from '../../components/product/SimilarProducts'
import { products } from '../../data/products'

const ProductDetail = ({ id }) => {

    const [p , setP] = React.useState(null)

    React.useEffect(() => {
        setP(products.filter(f => f.id === Number(id))[0])
    }, [id])

    return (
        <Layout
            title={p?.name}
            description={p?.description}
        >
            <div className='2xl:container px-5 mx-auto py-16'>
                <ProductLayout p={p} />
                <SimilarProducts />
                <RelatedProducts />
            </div>
        </Layout>
    )
}

ProductDetail.getInitialProps = (context) => {
    const { id } = context.query
    return { id }
}

export default ProductDetail
