import React from 'react'
import JustBreadcrumb from '@/shared/breadcrumb'
import ProductCard from '../../common/product'

const Products = () => {
  return (
    <>
    <JustBreadcrumb/>
<div className='grid grid-cols-2 lg:grid-cols-4'>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

</div>
    </>
  )
}

export default Products