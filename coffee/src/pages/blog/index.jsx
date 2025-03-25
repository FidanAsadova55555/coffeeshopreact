import React from 'react'
import JustBreadcrumb from '@/shared/breadcrumb'
import NewsCard from '../../common/news'
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import { QueryKeys } from '@/constants/query';
import Loading from '@/shared/loading';
import { useState } from 'react';
import { DataNotFoundContainer } from '@/shared/notfound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft ,faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: settingsData, isLoading: settingsLoading, isError: settingsError, error: settingsErrorMessage } = useQuery({
    queryKey: [QueryKeys.PAGINATIONSETTINGS],
    queryFn: async () => {
      const response = await getAPIData("paginationsettings");
      console.log("Pagination settings response:", response); 
      return response.data?.[0]; 
    },
  });const pageSize = settingsData?.pagesize || 8;

  console.log("Using page size:", pageSize); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.NEWSCARDS, currentPage, pageSize],
    queryFn: async () =>
      await getAPIData(`newscards?pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&populate=*`),
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
  <div className="max-w-[1440px] mx-auto pb-[67px]">
  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
  {data && data?.data?.map((el, index) => (
  <div key={index}>
    <NewsCard 
      title={el.title} 
      image={el.image?.formats?.large?.url 
        ? `http://localhost:1337${el.image.formats.large.url}` 
        : "https://via.placeholder.com/150"}
        desc={el.desc} 
        date={el.date}
        category={el.category}
    />
  </div>
))}




</div>
<div className="flex justify-center mt-[50px] pt-[80px]">
{currentPage !== 1 && (
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    className="w-[45px] h-[45px] border border-[#e3e3e3] rounded-full leading-[43px] text-center inline-block text-[18px] font-medium text-newstext transition-all ease-in-out duration-300 hover:text-white hover:bg-newstext bg-transparent mr-[4px]"
  >
<FontAwesomeIcon icon={faAngleLeft} />
</button>
)}

<button
  onClick={() => setCurrentPage(1)}
  className={`w-[45px] font-sofia h-[45px] border border-[#e3e3e3] rounded-full leading-[43px] text-center inline-block text-[18px] font-medium ${
    currentPage === 1
      ? "text-white bg-newstext"
      : "text-newstext bg-transparent hover:text-white hover:bg-newstext"
  } mr-[4px]`}
>
  1
</button>

<button
  onClick={() => setCurrentPage(2)}
  className={`w-[45px] font-sofia h-[45px] border border-[#e3e3e3] rounded-full leading-[43px] text-center inline-block text-[18px] font-medium ${
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
    className="w-[45px] h-[45px] border border-[#e3e3e3] rounded-full leading-[43px] text-center inline-block text-[18px] font-medium text-newstext transition-all ease-in-out duration-300 hover:text-white hover:bg-newstext bg-transparent mr-[4px]"
  >
<FontAwesomeIcon icon={faAngleRight} />
</button>
)}

      </div>
  </div>
 
    </>
  )
}

export default Blog