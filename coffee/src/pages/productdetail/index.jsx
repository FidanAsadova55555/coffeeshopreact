import React from 'react'
import MySlider from '@/common/slider'

import { QueryKeys } from "@/constants/query";
import { Link } from 'react-router';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { useParams } from 'react-router'
import { getAPIData } from '@/http/api';
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/common/product'
import ProductTabs from '@/common/review';
import ProductWithCart from '@/components/addtocart';
const ProductDetail = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => 
      await getAPIData("shopcards?populate[colors][populate][image]=true&populate[image]=true"),

  });
console.log(data,"hiii")
   if (isLoading) return <div>
 <div className='flex justify-center items-center'>
 <div className='w-[500px] h-[500px] overflow-hidden'>
 <Loading className="w-full h-full object-contain"/>
 </div>
 </div>
   </div>;
   if (isError) return <div>
     <div className='flex justify-center items-center'>
 <div className='w-[500px] h-[500px] overflow-hidden'>
 <DataNotFoundContainer className="w-full h-full object-contain"/>
 </div>
 </div>
   </div>;

  const shopId = parseInt(id, 10);

  const shop = data?.data?.find((b) => b.id === shopId);

  if (!shop) {
    return <DataNotFoundContainer/>;
  }
  return (
    <>
    <div>
        <ProductWithCart/>
       

    
     <div>
      <ProductTabs/>
     </div>
     <div className=' mt-[25px] pb-[20px] max-w-1410px mx-auto'>
      <h5 className=' pb-[63px] text-[36px]  text-[#333] font-sofia capitalize text-center'>
related post
      </h5>
           <MySlider  
                        slidesData={data && data?.data?.slice(0, 5).map((el) => (
  <Link to={`/products/${el.id}`} key={`${el.id}-${el.title}`}>
<ProductCard
  image={el.image?.url ? `http://localhost:1337${el.image.url}` : "https://via.placeholder.com/300"}
  title={el.title}
  old={el.old}
  newprice={el.newprice}
  colors={el.colors}
/>

  </Link>
))}
/>
    </div>
     </div>
    
    </>
  )
}

export default ProductDetail