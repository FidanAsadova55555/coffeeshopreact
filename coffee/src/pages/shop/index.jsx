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
<div className='max-w-[1670px]   mx-auto'>
  <div className='mt-[50px] mb-[20px] px-[15px] font-sofia grid grid-cols-12 '>
    <div className='col-span-8 '>
      <div className='flex justify-start items-center'>
        <button className='border border-black bg-transparent transition-all text-black duration-300 ease-in-out hover:bg-coffee hover:border-coffee hover:text-white  py-[8px] px-[20px]'>
          <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg"       fill="currentColor"
 height="18px" viewBox="-4 0 393 393.99003" width="18px"><path d="m368.3125 0h-351.261719c-6.195312-.0117188-11.875 3.449219-14.707031 8.960938-2.871094 5.585937-2.3671875 12.3125 1.300781 17.414062l128.6875 181.28125c.042969.0625.089844.121094.132813.183594 4.675781 6.3125 7.203125 13.957031 7.21875 21.816406v147.796875c-.027344 4.378906 1.691406 8.582031 4.777344 11.6875 3.085937 3.105469 7.28125 4.847656 11.65625 4.847656 2.226562 0 4.425781-.445312 6.480468-1.296875l72.3125-27.574218c6.480469-1.976563 10.78125-8.089844 10.78125-15.453126v-120.007812c.011719-7.855469 2.542969-15.503906 7.214844-21.816406.042969-.0625.089844-.121094.132812-.183594l128.683594-181.289062c3.667969-5.097657 4.171875-11.820313 1.300782-17.40625-2.832032-5.511719-8.511719-8.9726568-14.710938-8.960938zm-131.53125 195.992188c-7.1875 9.753906-11.074219 21.546874-11.097656 33.664062v117.578125l-66 25.164063v-142.742188c-.023438-12.117188-3.910156-23.910156-11.101563-33.664062l-124.933593-175.992188h338.070312zm0 0"></path></svg>
            <p className='ml-[8px] tracking-[2px] text-base text-inherit uppercase'>filter</p>
          </div>
        </button>
      </div>
    </div>
    <div className='col-span-4'></div>
  </div>
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
<div className="flex justify-center mt-[50px] pb-[20px]">
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
</div>
    </>
  )
}

export default Products