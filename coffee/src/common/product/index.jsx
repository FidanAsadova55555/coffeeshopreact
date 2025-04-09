import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useLocation } from 'react-router';
import styles from "./style.module.scss"
const ProductCard = ({image,title,old,newprice,colors}) => {
  const [mainImage, setMainImage] = useState(image);

  const discountPercentage = old ? Math.round(((old - newprice) / old) * 100) : 0;
  const colorShadeMap = {
    chocolate: '#8b4513',
    lightyellow: '#ffffe0',
    cream:'#d2b48c',
    white: '#fffafa',
    red: '#a52a2a',
    black: '#000',
  };

  const handleColorClick = (imgUrl) => {
    setMainImage(`http://localhost:1337${imgUrl}`);
  };
const onlyImage = image && !title && !old && !newprice && (!colors || colors.length === 0);
  const location = useLocation();
  const isProduct = location.pathname.startsWith("/products") && location.pathname !== "/products";
  console.log("Rendered with image:", image);

return (
  <div className={` font-sofia px-[15px]  ${!onlyImage ? 'pb-[24px] mb-[30px]' : 'pb-0 mb-0'}`}>
<div className={`${styles.relativeplace} ${!isProduct ? styles.blur : ''} relative`}>
<div className='overflow-hidden  w-full h-auto'>
      <img
        className='w-full h-full object-cover'
        src={mainImage || "https://via.placeholder.com/300"}
        alt={title || "Product"}
      />
      </div>

      {!onlyImage &&  (
        <>
        {!isProduct &&  (
          <ul className={styles.iconslist}>
            <li>
              <button className={styles.tooltipWrapper}>
                <FontAwesomeIcon icon={faEllipsisH} className={styles.icon} />
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
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                <span className={styles.tooltip}>Add to Wishlist</span>
              </button>
            </li>
          </ul>
          )}
          {discountPercentage > 0 && (
            <div className={`${styles.sale} bg-myred`}>
              -{discountPercentage}%
            </div>
          )}

          {colors && Array.isArray(colors) && colors.length > 1 && (
            <div className={styles.krujochki}>
              {colors.map((colorItem, idx) => (
                
                <div
                  key={idx}
                  className={styles.circle}
                  role="button"
                  tabIndex={0}
                  style={{
                    backgroundColor:
                      colorShadeMap[colorItem.color?.toLowerCase()] || colorItem.color,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("colorItem:", colorItem);
                    console.log(" Color circle clicked:", colorItem?.image?.url);
                    

                    if (colorItem.image?.url) {
                      handleColorClick(colorItem.image.url);
                    }
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}
       {!onlyImage && isProduct &&  (
      <div className={styles.up}>
        <div className='w-[50%] flex justify-center items-center'>                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </div>
        <div className='w-[50%] border-l border-[#e0e0e0] flex justify-center items-center'>                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </div>

      </div>)}
    </div>

    {!onlyImage && title && (
      <div className='text-center'>
        <h3 className='pt-[20px] pb-[10px] inline-block capitalize text-black text-center hover:text-coffee transition-all ease-in-out duration-500'>
          {title}
        </h3>
      </div>
    )}

    {!onlyImage && (
      <div className='pt-[5px] leading-6 flex gap-1 font-semibold justify-center items-center text-[15px]'>
        {old && (
          <div className='text-old line-through'>${Number(old).toFixed(2)}</div>
        )}
        {newprice && (
          <div className='text-coffee'>${Number(newprice).toFixed(2)}</div>
        )}
      </div>
    )}
  </div>
);
};

export default ProductCard;
