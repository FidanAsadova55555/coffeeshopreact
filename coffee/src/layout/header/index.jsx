import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Logo from '@/shared/logo';
import styles from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(true);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoginOpen, setIsLoginOpen] = useState(false); 
  
    const menuItems = [
        { name: "home", path: "/" },
        { name: "shop", path: "/shop" },
        { name: "featured", path: "/featured" },
        { name: "pages", path: "/pages" },
        { name: "blogs", path: "/blog" },

      ];
      useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1200);
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          if (window.innerWidth > 1200) {
            setIsMenuOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <>
<header  className={`lg:py-[25px] py-[15px] ${
           isScrolled ? "fixed top-0 left-0 w-full bg-[#ffffffe6] shadow-[0_2px_5px_-2px_rgba(0,0,0,0.1)] transition-all ease-in-out 0.5s z-50" : "relative"
        }`}>
<div className='grid grid-cols-12 items-center'>
    <div className="lg:col-span-5 col-span-3 px-[15px]">
        <div className={`flex justify-start text-[17px] items-center ${isSmallScreen ? "hidden" : "flex"}`}>
        {menuItems.map((item) => (
              <Link  className={`font-sofia uppercase mx-[18px] p-[8px] ${styles.menuitem}`}
                key={item.name}
                to={item.path}
       
              >
                {item.name}
              </Link>
            ))}
        </div>
        {isSmallScreen && (
             <span 
             className={`${styles.menu} text-black cursor-pointer`} 
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
          <span></span>
          <span></span>
          <span></span>

           </span>
           
            )}
    </div>
    <div className="lg:col-span-2 col-span-6 px-[15px]">
<Logo/>
    </div>
    <div className="lg:col-span-5 col-span-3 px-[15px]">
   
    <ul className="flex justify-end items-center  text-sm">
      <li className='mr-[13px]'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          
          className=" lg:h-[24px] lg:w-[26px] h-[22px] w-[22px] fill-current text-black"
        >
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)">
            <g transform="scale(0.1)">
            <path d="m 1312.7,795.5 c -472.7,0 -857.204,384.3 -857.204,856.7 0,472.7 384.504,857.2 857.204,857.2 472.7,0 857.3,-384.5 857.3,-857.2 0,-472.4 -384.6,-856.7 -857.3,-856.7 z M 2783.9,352.699 2172.7,963.898 c 155.8,194.702 241.5,438.602 241.5,688.302 0,607.3 -494.1,1101.4 -1101.5,1101.4 -607.302,0 -1101.399,-494.1 -1101.399,-1101.4 0,-607.4 494.097,-1101.501 1101.399,-1101.501 249.8,0 493.5,85.5 687.7,241 L 2611.7,181 c 23,-23 53.6,-35.699 86.1,-35.699 32.4,0 63,12.699 86,35.699 23.1,22.801 35.8,53.301 35.8,85.898 0,32.602 -12.7,63 -35.7,85.801"/>
            </g>
          </g>
        </svg>
      </li>
      {!isSmallScreen && (
        <>
  <li  className='mr-[13px]'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
         
          className="fill-current lg:h-[24px] lg:w-[26px] h-[22px] w-[22px] text-black"
        >
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" ><g transform="scale(0.1)" id="g12">
            <path  d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"></path>
            <path  d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"></path></g></g>
        </svg>
      </li>
      <li  className='mr-[13px]'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        
          className="lg:h-[24px] lg:w-[26px] h-[22px] w-[22px] fill-current text-black"
        >
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)">
            <g transform="scale(0.1)">
            <path d="m 903,2424.4 c 157.9,0 306.4,-61.5 418.1,-173.1 l 134.8,-134.9 c 20.7,-20.6 48.1,-32 77.1,-32 29,0 56.4,11.4 77,32 l 133.7,133.7 c 111.7,111.6 259.9,173.1 417.5,173.1 156.91,0 305,-61.3 416.8,-172.5 111.2,-111.3 172.5,-259.5 172.5,-417.5 0.6,-157.3 -60.69,-305.5 -172.5,-417.4 L 1531.5,373.5 487.402,1417.6 c -111.601,111.7 -173.105,259.9 -173.105,417.5 0,158.1 61.199,306.1 172.5,416.8 111.308,111.2 259.101,172.5 416.203,172.5 z m 1829.7,-19.6 c 0,0 0,0 -0.1,0 -152.4,152.4 -355.1,236.3 -570.9,236.3 -215.7,0 -418.7,-84.1 -571.5,-236.9 l -56.9,-57 -58.2,58.2 c -153.1,153.1 -356.3,237.5 -572.1,237.5 -215.305,0 -417.902,-83.9 -570.305,-236.3 -153,-153 -236.8942,-356 -236.2966,-571.5 0,-215 84.4026,-417.8 237.4966,-571 L 1454.7,143.301 c 20.5,-20.403 48.41,-32.199 76.8,-32.199 28.7,0 56.7,11.5 76.7,31.597 L 2731.5,1261.8 c 152.7,152.7 236.8,355.7 236.8,571.4 0.7,216 -83,419 -235.6,571.6"></path>            </g>
          </g>
        </svg>
      </li>
      </>
      )}
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 297.78668 398.66666"
         
          className="fill-current lg:h-[24px] lg:w-[26px] h-[22px] w-[22px] text-black"
        >
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,398.66667)">
            <g transform="scale(0.1)">
              <path d="M 2233.36,2432.71 H 0 V 0 h 2233.36 v 2432.71 z m -220,-220 V 220 H 220.004 V 2212.71 H 2013.36"></path>
              <path d="m 1116.68,2990 v 0 C 755.461,2990 462.637,2697.18 462.637,2335.96 V 2216.92 H 1770.71 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-220 c 204.58,0 376.55,-142.29 422.19,-333.08 H 694.492 C 740.117,2627.71 912.102,2770 1116.68,2770"></path>
              <path d="M 1554.82,1888.17 H 678.543 v 169.54 h 876.277 v -169.54"></path>
            </g>
          </g>
        </svg>
      </li>
    </ul>
 


    </div>

</div>
<div className={`fixed top-0 left-0 h-full w-full xs:w-[320px] bg-white shadow-lg transform 
${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 flex flex-col`}>


  <div className='flex items-center w-full h-[55px] uppercase border-b border-bordercolor font-sofia'>

    <div className={`  ${MenuOpen ? "text-white bg-black" : "text-black bg-white"} transition-all ease-in-out duration-200 w-[50%] flex justify-center items-center text-[14px]  h-[55px] gap-[8px]`}onClick={() => {
  setMenuOpen(true);
  setIsLoginOpen(false);
}}>
     <span className={`${styles.smmenu} lg:hidden cursor-pointer ${MenuOpen ? "text-white" : "text-black"}`}>
  <span></span>
  <span></span>
  <span></span>
</span>

      <h1 className='text-[14px]'>Menu</h1>
    </div>

    <div className={`  ${isLoginOpen ? "text-white bg-black" : "text-black bg-white"} transition-all ease-in-out duration-200  w-[50%] flex justify-center items-center text-[14px]  h-[55px] gap-[8px]`} onClick={() => {
  setIsLoginOpen(true);
  setMenuOpen(false);
}}
>
      <span>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 400"
  className={`fill-current h-[16px] w-[16px] ${isLoginOpen ? "text-white" : "text-black"}`}
>

          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)">
            <g transform="scale(0.1)" id="g12">
              <path d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"></path>
              <path d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"></path>
            </g>
          </g>
        </svg>
      </span>
      <h1 className='text-[14px]'>Login</h1>
    </div>

  </div>
  <div className="flex-grow overflow-y-auto max-h-[calc(100vh-105px)]">
   {MenuOpen && (
  <div className={`flex flex-col justify-center  text-[16px] items-start text-black`}>
    {menuItems.map((item) => (
      <div key={item.name} className='border-b w-full flex justify-between items-center border-bordercolor'>
        <Link className='p-[15px] font-sofia uppercase leading-[1.5rem] text-left' to={item.path}>
          {item.name}
        </Link>
        <div>
          <Link to={item.path}>
            <i className="p-[15px] ri-arrow-right-s-line text-[20px] border-l border-bordercolor"></i>
          </Link>
        </div>
      </div>
    ))}
  </div> )}
{isLoginOpen && (
<div className='py-[30px] px-[15px]'>
<div className='flex flex-col justify-center text-[13px] items-center mt-[16px] font-sofiaRegular '>
  <div className='mb-[16px] w-full text-intext  h-[45px] border border-bordercolor'>
  <input type="text" placeholder='Email address'  className=' py-[6px] px-[12px] h-full w-full outline-none border-none bg-transparent'/>
  </div>
  <div className='mb-[16px] w-full text-intext  h-[45px]  border border-bordercolor '>
  <input type="text" placeholder='Password'  className=' py-[6px] h-full w-full outline-none border-none bg-transparent px-[12px]'/>
  </div>
  <div className='text-[#555] text-left w-full py-[8px]'>
Forgot your password?
  </div>
  <button className='p-[11px] mt-[10px] text-white w-full tracking-[0.2em] uppercase bg-black'>
log in
  </button>
  <div className='w-full'>
  <div className='my-[16px] w-full'>
    <span className={`${styles.or} font-sofia`}>or</span>
  </div>
</div>
<div className={styles.register}>
  Register now
</div>

</div>
  </div>)}
  </div>
  <div className='flex justify-center items-center w-full  text-center bg-coffee text-white fixed bottom-0 left-0 ' onClick={() => {
  setIsMenuOpen(false);
}}
>
          <FontAwesomeIcon icon={faXmark} className="text-[12px] mr-[16px]" />

  <div className='tracking-[1.5px] font-sofia uppercase leading-[50px] text-[12px] 0'>
close
  </div>
</div>
</div>


</header>
    </>
  )
}

export default Header