import React from 'react'
import JustBreadcrumb from '@/shared/breadcrumb'
import NewsCard from '../../common/news'
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import { QueryKeys } from '@/constants/query';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
const Blog = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.NEWSCARDS],
    queryFn: async () => await getAPIData("newscards?populate=*"),
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
  return (
    <>
   
    <JustBreadcrumb/>
  <div className="max-w-[1440px] mx-auto">
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
  </div>
    </>
  )
}

export default Blog