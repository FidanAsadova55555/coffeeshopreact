import React from 'react'
import styles from "./style.module.scss"
const NewsCard = ({height}) => {
  return (
    <div className="pt-[67px] mb-[30px] px-[15px] font-sofia">
<div className={`${styles.news} relative  max-w-full overflow-hidden `}   style={{ height }}
>
 <img src="https://monfee-store-demo.myshopify.com/cdn/shop/articles/Blog3_1024x1024.jpg?v=1592032221
 " alt="" className='w-full h-full object-cover'/> 
<div className="w-[76px] h-[76px] text-center rounded-full inline-block absolute py-[10px] px-[15px] bg-white top-[30px] left-[30px]">
<div className={`${styles.day} text-[20px] font-medium font-sofia `}>
04</div>
<div className="text-[14px] font-medium font-sofia uppercase">
may</div>

</div>

</div>
<div>
  <h4 className='mt-[30px] pb-[5px] uppercase text-title text-xs  tracking-[0.2em]'>
news
  </h4>
  <h3 className={`${styles.relative} group mt-[10px] pb-[25px] text-[22px] leading-[1.2rem] relative overflow-hidden`}>
  <span className="block bg-gradient-to-t from-coffee to-coffee bg-no-repeat bg-[length:100%_0%] bg-[bottom] text-[#333] group-hover:bg-[length:100%_100%] transition-all duration-[800ms] ease-in-out bg-clip-text group-hover:text-transparent">
    About American Coffee
  </span>
</h3>
<h2 className='mt-[22px] text-sm  text-text'>
Where can I get some?
Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsu...
</h2>
<button className={`${styles.line} pb-[5px] hover:text-coffee relative font-semibold mt-[23px] text-sm text-black`}>
  Read more
</button>

</div>
    </div>
  )
}

export default NewsCard