import React, { useState } from 'react';
import { useParams } from 'react-router'; 
import { useQuery } from '@tanstack/react-query'; 
import { getAPIData } from '@/http/api'; 
import { QueryKeys } from '@/constants/query'; 
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound'; 
import ProductAdd from '@/common/productadd';

const ProductWithCart = () => {
  const { id } = useParams();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => {
      const response = await getAPIData(`shopcards?populate=*`);
      return response;
    },
  });
  const shopId = parseInt(id, 10);

  const shop = data?.data?.find((b) => b.id === shopId);
  if (isLoading) return <Loading />;
  if (isError || !data) return <DataNotFoundContainer />; 


  if (!shop) return <DataNotFoundContainer />;

  return (
    <div >
 <ProductAdd
        image={shop.image?.url ? `http://localhost:1337${shop.image.url}` : "https://via.placeholder.com/300"}
        title={shop.title}
        old={shop.old}
        newprice={shop.newprice}
        id={shop.id}
      />

    
    </div>
  );
};

export default ProductWithCart;
