import React from 'react'
import JustBreadcrumb from '@/shared/breadcrumb'
import NewsCard from '../../common/news'
const Blog = () => {
  return (
    <>
   
    <JustBreadcrumb/>
  <div className="max-w-[1440px] mx-auto">
  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>

</div>
  </div>
    </>
  )
}

export default Blog