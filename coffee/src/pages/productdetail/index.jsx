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
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams(); 
  const { data: maybe } = useQuery({
    queryKey: [QueryKeys.COLORS],
    queryFn: async () => await getAPIData("colors"),
  });  console.log(maybe, "colorsss");

const { data, isLoading, isError, error } = useQuery({
  queryKey: [QueryKeys.SHOPCARDS],
  queryFn: () => getAPIData("shopcards?populate[colors][populate]=image&populate=image")

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
<div
  className="bg-cover bg-center "
  style={{
    backgroundImage: "url(https://monfee-store-demo.myshopify.com/cdn/shop/files/bg-product.jpg?v=1613544856)",
  }}
>   
<div className="pb-[68px]">
        <ProductWithCart />
       
</div>
    </div>
     <div>
      <ProductTabs/>
     </div>
     <div className=' mt-[25px] pb-[20px] max-w-1410px mx-auto'>
      <h5 className=' pb-[63px] text-[36px]  text-[#333] font-sofia capitalize text-center'>
      {t("relatedProducts")}      </h5>
           <MySlider  
                        slidesData={data && data?.data?.slice(0, 5).map((el) =>{ 
                          console.log(el,"dataaa")
                          return(
<ProductCard

  image={el.image?.url ? `http://localhost:1337${el.image.url}` : "https://via.placeholder.com/300"}
  title={
    <Link to={`/products/${el.id}`}>
      {el.title}
    </Link>
  }  old={el.old}
  newprice={el.newprice}
  colors={el.colors}
/>

)})}
/>
    </div>
     
    
    
    </>
  )
}

export default ProductDetail