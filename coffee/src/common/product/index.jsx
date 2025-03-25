import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from "./style.module.scss"
const ProductCard = ({image,title,old,newprice}) => {
  const discountPercentage = old ? Math.round(((old - newprice) / old) * 100) : 0;

  return (
    <div className='mb-[30px] font-sofia px-[15px] pb-[24px]'>
<div className={`overflow-hidden  w-full h-auto ${styles.blur}`}>
    <img className='w-full h-full object-cover' src={image} alt={title} />
<ul className={styles.iconslist} >
  <li>
  <button className={styles.tooltipWrapper}>
  <FontAwesomeIcon icon={faEllipsisH} className={styles.icon}/>
  <span className={styles.tooltip}>Select Option</span>

    </button>
  </li>
  <li>
  <button className={styles.tooltipWrapper}>
  <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
  <span className={styles.tooltip}>Quickview</span>
</button>

  </li>
  <li>
  <button className={styles.tooltipWrapper}>
  <FontAwesomeIcon icon={faHeart}  className={styles.icon}/>
    <span className={styles.tooltip}>Add to Wishlist</span>

    </button>
  </li>
</ul>
{discountPercentage > 0 && (

<div className={`${styles.sale}  bg-myred`}>
-{discountPercentage}%
</div>)}
<div className={styles.krujochki}>
  <div className={styles.circle}> </div>
  <div className={styles.circle}> </div>
  <div className={styles.circle}> </div>

</div>
</div>
<div className='text-center'>
<h3 className='pt-[20px] pb-[10px]  inline-block capitalize text-black text-center hover:text-coffee transition-all ease-in-out duration-500'>
{title}
</h3>
</div>
<div className='pt-[5px] leading-6 flex  gap-1 font-semibold justify-center items-center text-[15px]'>
{old && (

  <div className='text-old line-through'>${Number(old).toFixed(2)}
  </div>)}
  <div className='text-coffee '>${Number(newprice).toFixed(2)}
  </div>
</div>
    </div>
  )
}

export default ProductCard