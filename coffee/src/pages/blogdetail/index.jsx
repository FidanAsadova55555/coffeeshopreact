import React from 'react'
import Detail from '@/common/newsdetail'
import NewsCard from '@/common/news'
import Comment from '@/common/comment'
import { QueryKeys } from "@/constants/query";
import { Link } from 'react-router';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { useParams } from 'react-router'
import { getAPIData } from '@/http/api';
import { useQuery } from '@tanstack/react-query'
const BlogDetail = () => {
  const { id } = useParams(); 
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

  const blogId = parseInt(id, 10);

  const blog = data?.data?.find((b) => b.id === blogId);

  if (!blog) {
    return <DataNotFoundContainer/>;
  }
  console.log(data);
  return (
    <>
    <div className='max-w-[1040px]  mx-auto px-[15px]'>
        <Detail
        title={blog.title}
        image={blog?.image?.url ? `http://localhost:1337${blog.image.url}` : "https://via.placeholder.com/300"}
category={blog.category}
      author={blog.author}

        />
        <Comment/>

     <div className='mx-[-15px] mt-[25px]'>
      <h5 className='text-[25px] text-[#333] font-sofia capitalize text-center'>
related post
      </h5>
        <div className="grid grid-cols-1 small:grid-cols-2  medium:grid-cols-3 ">
        {data && data?.data?.slice(0, 3).map((el, index) => (
  <Link to={`/news/${el.id}`} key={index}>
    <NewsCard 
      title={el.title} 
      image={
        el.image?.formats?.large?.url 
          ? `http://localhost:1337${el.image.formats.large.url}` 
          : "https://via.placeholder.com/150"
      }
      desc={el.desc} 
      date={el.date}
      category={el.category}
    />
  </Link>
))}

    </div>
     </div>

    </div>
    
    </>
  )
}

export default BlogDetail