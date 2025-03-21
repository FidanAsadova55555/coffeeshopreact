import React from 'react'
import Detail from '../../common/newsdetail'
import NewsCard from '../../common/news'

const Home = () => {
  return (
    <>
    <div className='max-w-[1040px] mx-auto px-[15px]'>
      <Detail/>
     

    </div>
    <div className='max-w-[1040px] mx-auto'>
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
    <NewsCard height={"300px"}/>
    <NewsCard height={"300px"}/>
    <NewsCard height={"300px"}/>
    </div></div>
    </>
  )
}

export default Home