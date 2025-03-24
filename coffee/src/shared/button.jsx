import React from 'react'
import { useTranslation } from 'react-i18next';

const Button = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-[16px]'>
<button className="relative  inline-block font-sofiaRegular text-center text-black border border-black px-[40px] py-[15px] text-[14px]  transition-all duration-300 ease-in-out uppercase tracking-[2px] mt-[10px] hover:border-coffee hover:bg-coffee hover:text-white">
{t("shopNow")}</button>

    </div>
  )
}

export default Button