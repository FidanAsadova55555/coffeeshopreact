import React from 'react'
import MySlider from '../../common/slider'
import ProductCard from '../../common/product'
import Button from '../../shared/button'

const Identical = ({ reverse = false }) => {
  return (
    <div className='mb-[15px]'>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className={`${reverse ? "order-1 md:order-2" : "order-1"}`}>
        <div className='w-full h-auto overflow-hidden'>
<img src="https://monfee-store-demo.myshopify.com/cdn/shop/files/product-v5-1.jpg?v=1613542748" alt="" className='w-full h-full object-cover' />
    </div>
</div>
<div className={`${reverse ? "order-2 md:order-1" : "order-2"}`}>
<div className='p-[2%] text-center'>
    <h1 className='capitalize font-sofia text-newstext text-[40px] mb-[15px] leading-[1.2]'>everything for you</h1>
    <h2 className='text-base text-black font-sofiaRegular mb-[30px]'>Limited edition. Eco-friendly. Not just for
    working out</h2>
    <MySlider slidesData={[<ProductCard/>, <ProductCard />,<ProductCard />,<ProductCard />,<ProductCard />, <ProductCard />]} />
    <Button/>
    </div>
</div>
        </div>
    </div>
  )
}

export default Identical