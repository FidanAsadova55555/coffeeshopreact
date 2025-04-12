import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import useCartStore from '@/store/cartstore';
import Comment from '@/common/comment';
import Detail from '@/common/newsdetail';
import NewsCard from '@/common/news';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { Link } from 'react-router';

const BlogDetail = () => {
  const { id } = useParams(); 
  const blogId = parseInt(id, 10);
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['newscards'],
    queryFn: async () => await getAPIData('newscards?populate=*'),
  });

  const comments = useCartStore((state) => state.comments);
  const blog = data?.data?.find((b) => b.id === blogId);

  const commentsForProduct = Array.isArray(comments[blogId]) ? comments[blogId] : [];

  if (isLoading) return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px] h-[500px] overflow-hidden'>
        <Loading className="w-full h-full object-contain"/>
      </div>
    </div>
  );

  if (isError) return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px] h-[500px] overflow-hidden'>
        <DataNotFoundContainer className="w-full h-full object-contain"/>
      </div>
    </div>
  );

  if (!blog) return <DataNotFoundContainer />;

  return (
    <div className='max-w-[1040px] mx-auto px-[15px]'>
      <Detail
        title={blog.title}
        image={blog?.image?.url ? `http://localhost:1337${blog.image.url}` : "https://via.placeholder.com/300"}
        category={blog.category}
        author={blog.author}
      />

      {commentsForProduct.length > 0 ? (
        <div>
          <h6 className="mt-6 font-sofia uppercase mb-6">Comments:</h6>
          {commentsForProduct.map((comment, index) =>{
            const formattedDate = new Date(comment.timestamp);
            const dateString = formattedDate instanceof Date && !isNaN(formattedDate) 
              ? formattedDate.toLocaleString() 
              : 'Invalid date';
             return(
            <div key={index} className="mb-4 font-sofia border border-[#d6d6d6] px-[23px] py-[11px]">
              <p>{comment.userName} (<span className="text-sm text-gray-500">{dateString}</span>              ):</p>
              <p className="text-gray-700">{comment.comment}</p>

                        </div>
          )})}
        </div>
      ) : (
        <p>No comments yet for this post.</p>
      )}

      <Comment productId={blog.id} />

      <div className='mx-[-15px] mt-[25px]'>
        <h5 className='text-[25px] text-[#333] font-sofia capitalize text-center'>
          Related Posts
        </h5>
        <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3">
          {data?.data?.slice(0, 3).map((el, index) => (
            <Link to={`/news/${el.id}`} key={index}>
              <NewsCard 
                title={el.title} 
                image={el.image?.formats?.large?.url 
                  ? `http://localhost:1337${el.image.formats.large.url}` 
                  : "https://via.placeholder.com/150"}
                desc={el.desc} 
                date={el.date}
                category={el.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
