import React from 'react'
import Logo from '@/shared/logo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";
import { faTwitter, faDribbble, faBehance, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const first=["About Us",
"Privacy Policy",
    "Terms & Conditions",
    "Products Return",
    "Wholesale Policy"]
    const second=[
      "Pagination",
"Terms & Conditions",
"Contact",
"Accessories",
"Term of use"    ]
const last=[
"Help Center","Address Store",
"Privacy Policy",
"Receivers & Amplifiers",
"Clothings"
]
  return (
    <footer className='bg-footerc border-t font-sofia border-footerborder'>
      <div className='lg:mx-[28px]  '>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
  <div className="pr-[15px] pl-[15px] text-center lg:text-left md:col-span-3 lg:col-span-1 col-span-1 
                  flex flex-col justify-start items-center lg:items-start  pt-[50px] pb-[40px] 
                  lg:border-r border-footerborder md:border-r-0  ">
    <div className="lg:w-[200px] w-[125px] lg:h-[56px] h-[35px] overflow-hidden">
      <Logo />
    </div>
    <h1 className="font-sofia text-black text-[14px] leading-6 max-w-[250px] mt-[23px]">
      Subscribe our newsletter and get discount 30% off
    </h1>
    <div className="flex text-m text-black mt-[30px]">
      <FontAwesomeIcon icon={faTwitter} className="hover:text-coffee transition-colors duration-300 ml-[5px] mr-[13px]" />
      <FontAwesomeIcon icon={faDribbble} className="hover:text-coffee transition-colors duration-300 ml-[5px] mr-[13px]" />
      <FontAwesomeIcon icon={faBehance} className="hover:text-coffee transition-colors duration-300 ml-[5px] mr-[13px]" />
      <FontAwesomeIcon icon={faInstagram} className="hover:text-coffee transition-colors duration-300 ml-[5px] mr-[5px]" />
    </div>
  </div>

  <div className="pl-[30px] pt-[50px] pb-[40px] text-center md:text-left border-footerborder 
                  lg:border-r md:border-r ">
    <h4 className={`text-black text-[18px] capitalize ${styles.footerclmn}`}>
      customer care
    </h4>
    <div className="mt-[30px]">
      <ul>
        {first.map((item, index) => (
          <li key={index} className="text-black text-[14px] leading-8 hover:text-coffee transition-all duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="pl-[30px] pt-[50px] pb-[40px] text-center md:text-left  border-footerborder 
                  lg:border-r md:border-r">
    <h4 className={`text-black  text-[18px] capitalize ${styles.footerclmn}`}>
      quick shop
    </h4>
    <div className="mt-[30px]">
      <ul>
        {second.map((item, index) => (
          <li key={index} className="text-black text-[14px] leading-8 hover:text-coffee transition-all duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="pl-[30px] text-center md:text-left pr-[15px] pt-[50px] pb-[40px] ">
    <h4 className={`text-black text-[18px] capitalize ${styles.footerclmn}`}>
      company
    </h4>
    <div className="mt-[30px]">
      <ul>
        {last.map((item, index) => (
          <li key={index} className="text-black text-[14px] leading-8 hover:text-coffee transition-all duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


      </div>
    </footer>
  )
}

export default Footer