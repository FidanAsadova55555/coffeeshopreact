import React from 'react'
import JustBreadcrumb from '@/shared/breadcrumb'
import ProductCard from '@/common/product'
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import { QueryKeys } from '@/constants/query';
import { useState } from 'react';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft ,faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
  const { data: settingsData, isLoading: settingsLoading, isError: settingsError, error: settingsErrorMessage } = useQuery({
      queryKey: [QueryKeys.PAGINATIONSETTINGS],
      queryFn: async () => {
        const response = await getAPIData("paginationsettings");
        console.log("Pagination settings response:", response); 
        return response.data?.[1]; 
      },
    });const pageSize = settingsData?.pagesize || 8;
  
    console.log("Using page size:", pageSize); 
    const { data, isLoading, isError, error } = useQuery({
      queryKey: [QueryKeys.SHOPCARDS, currentPage, pageSize],
      queryFn: async () =>
        await getAPIData(`shopcards?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&populate=*`),
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
    console.log(data)
    const totalPages = data?.meta?.pagination?.pageCount || 1;
  
  return (
    <>
    <JustBreadcrumb/>
<div className='grid grid-cols-2 lg:grid-cols-4'>
{data && data?.data?.map((shop, idx) => (
          <Link to={`/shop/${shop.id}`} key={idx}>
                     <ProductCard
                     image={shop.image?.url ? `http://localhost:1337${shop.image.url}` : "https://via.placeholder.com/300"}
                     title={shop.title}
                     old={shop.old}
                     newprice={shop.newprice}
                   />
          </Link>
        ))}


</div>
<div className="flex justify-center mt-[50px] pt-[80px]">
{currentPage !== 1 && (
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="w-[45px] h-[45px] border border-[#e3e3e3]  leading-[43px] text-center inline-block text-[18px] font-medium text-newstext transition-all ease-in-out duration-300 hover:text-white hover:bg-newstext bg-transparent mr-[4px]"
  >
<FontAwesomeIcon icon={faAngleLeft} />
</button>
)}

<button
  onClick={() => setCurrentPage(1)}
  className={`w-[45px] font-sofia h-[45px] border border-[#e3e3e3]  leading-[43px] text-center inline-block text-[18px] font-medium ${
    currentPage === 1
      ? "text-white bg-newstext"
      : "text-newstext bg-transparent hover:text-white hover:bg-newstext"
  } mr-[4px]`}
>
  1
</button>

<button
  onClick={() => setCurrentPage(2)}
  className={`w-[45px] font-sofia h-[45px] border border-[#e3e3e3] leading-[43px] text-center inline-block text-[18px] font-medium ${
    currentPage === 2
      ? "text-white bg-newstext"
      : "text-newstext bg-transparent hover:text-white hover:bg-newstext"
  } mr-[4px]`}
>
  2
</button>

{currentPage !== 2 && (
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    className="w-[45px] h-[45px] border border-[#e3e3e3] leading-[43px] text-center inline-block text-[18px] font-medium text-newstext transition-all ease-in-out duration-300 hover:text-white hover:bg-newstext bg-transparent mr-[4px]"
  >
<FontAwesomeIcon icon={faAngleRight} />
</button>
)}

      </div>
    </>
  )
}

export default Products