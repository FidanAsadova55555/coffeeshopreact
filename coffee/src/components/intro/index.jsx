import React from 'react'
import { useTranslation } from 'react-i18next'
const Intro = () => {
    const { t } = useTranslation();
  
  return (
    <div className='w-full h-[776.34px] overflow-hidden relative  '>
<img src="https://monfee-store-demo.myshopify.com/cdn/shop/files/slideshow-v42.jpg?v=1613542787" alt=""  className='w-full h-full object-cover'/>
<div className="absolute top-1/2 -translate-y-1/2 left-[15px] middle:left-[13%]  z-[2]">
<div className="capitalize font-play">
<h1 className=' pb-[15px] leading-6 tracking-[4px] font-medium text-intro'>{t("styleDestination")}</h1>
<h2 className='pb-[15px] text-[30px] small:text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px]  text-white leading-[1.2]'>{t("lifeBeginsAfterCoffee")}</h2>
<h3 className='leading-6 pb-[15px] text-intro text-[20px]'>{t("styleDestination")}</h3>
</div>
<button className='text-white border text-[12px] font-sofia bg-transparent tracking-[2px] px-[30px] py-[15px] transition-all duration-300 ease-in-out border-white mb-[30px] hover:bg-white hover:text-black'>
{t("shopNow")}</button>
</div>

    </div>
    
  )
}

export default Intro