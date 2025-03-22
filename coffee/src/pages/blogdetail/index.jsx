import React from 'react'
import Detail from '@/common/newsdetail'
import NewsCard from '@/common/news'
import Comment from '@/common/comment'
const BlogDetail = () => {
  return (
    <>
    <div className='max-w-[1040px]  mx-auto px-[15px]'>
        <Detail/>
        <Comment/>

     <div className='mx-[-15px] mt-[25px]'>
      <h5 className='text-[25px] text-[#333] font-sofia capitalize text-center'>
related post
      </h5>
        <div className="grid grid-cols-1 small:grid-cols-2  medium:grid-cols-3 ">
    <NewsCard />
    <NewsCard />
    <NewsCard />
    </div>
     </div>

    </div>
    
    </>
  )
}

export default BlogDetail