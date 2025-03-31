import React from 'react'

import Comment from '@/common/comment'
import { QueryKeys } from "@/constants/query";
import { Link } from 'react-router';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { useParams } from 'react-router'
import { getAPIData } from '@/http/api';
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/common/product'
import ProductTabs from '../../common/review';
const ProductDetail = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => await getAPIData("shopcards?populate=*"),
  });

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
    <div className=''>
        <ProductCard
        image={shop.image?.url ? `http://localhost:1337${shop.image.url}` : "https://via.placeholder.com/300"}
        title={shop.title}
        old={shop.old}
        newprice={shop.newprice}
        colors={shop.colors}

        />
        <Comment/>

     <div className='mx-[-15px] mt-[25px]'>
      <h5 className='text-[25px] text-[#333] font-sofia capitalize text-center'>
related post
      </h5>
        <div className="grid grid-cols-1 small:grid-cols-2  medium:grid-cols-3 ">
        {data && data?.data?.slice(0, 3).map((el, index) => (
  <Link to={`/products/${el.id}`} key={index}>
    <ProductCard
              image={shop.image?.url ? `http://localhost:1337${shop.image.url}` : "https://via.placeholder.com/300"}
              title={shop.title}
              old={shop.old}
              newprice={shop.newprice}
              colors={shop.colors}
            />
  </Link>
))}

    </div>
     </div>
     <div>
      <ProductTabs/>
     </div>

    </div>
    
    </>
  )
}

export default ProductDetail