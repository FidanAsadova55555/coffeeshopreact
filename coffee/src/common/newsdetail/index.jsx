import React from 'react'
import styles from "./style.module.scss"
const Detail = ({title,image,category,author}) => {
  return (
        <div className='pt-[64px] pb-[38px] mb-[38px]  border-b  border-border '>
<h5 className='text-[30px] md:text-[50px] w-[80%] mx-auto  pb-[20px] font-sofiaRegular  text-center capitalize text-inherit'> 
{title}</h5>
<h4 className='text-center mb-[25px] md:mb-[40px] font-sofia'>
<span className={`${styles.slash} text-[12px] uppercase text-title relative tracking-[0.2em] text-center`}> By :
  <span className='text-[12px] uppercase text-black tracking-[0.2em] font-medium pl-[5px]'>
{author}
  </span>
</span>

<span className="text-[12px] uppercase text-title tracking-[0.2em]">
  <span className='text-black pr-[5px]'>0</span>
  comments
</span>

</h4>
<div className='pb-[30px] w-full h-auto overflow-hidden'>
  <img src={image} alt={title} className='w-full h-full object-cover'/>
</div>
<div className='font-sofia'>
<div className="mb-[8px] text-[28px]  capitalize  leading-[1.2] text-newstext  ">
Where can I get some?
</div>
<div className='text-sm text-title leading-[28px] text-left mb-[16px]'>
Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.
</div>
<div className={`${styles.leftborder} relative text-[14px] py-[15px] px-[30px] leading-[29px] m-[30px] mb-[24px]`}>
<p className="text-[14px] text-[#a8a8a8] text-left leading-[28px] max-w-[889px]">
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis ROBERT SMITH
</p>

</div>
<div className='text-sm text-title leading-[28px] text-left mb-[16px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

</div>
<div className='font-sofia'>
<div className="mb-[8px] text-[28px]  capitalize  leading-[1.2] text-newstext  ">
What is Lorem Ipsum?
</div>
<div className='text-sm text-title leading-[28px] text-left mb-[16px]'>
The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve included in-depth details of the key values that drive our agency forward, as well as a background on our team members, fun facts about our agency, and a new culture reel that surfaces our collective vision.
</div>
<div className="relative w-full h-0 pb-[56.25%] overflow-hidden mb-[16px] mt-[30px]">
  <iframe
    src="https://player.vimeo.com/video/76262101?background=1&quality=1080p&loop=1"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full"
  ></iframe>
</div>
<div className='grid grid-cols-1 lg:grid-cols-2'>
<div className="text-[12px] 'px-[15px]' text-left  pb-[20px] lg:pb-0 font-semibold text-black uppercase tracking-[0.2em]">
Tags : 
</div>
<div className="text-[12px] 'px-[15px]' text-left pb-[20px] lg:pb-0  lg:text-right font-semibold text-black uppercase tracking-[0.2em]">
categories :
<span className="font-normal text-[#aaa] uppercase tracking-[0.2em]">
{category}</span>
</div>
</div>

</div>
        </div>

 
  )
}

export default Detail