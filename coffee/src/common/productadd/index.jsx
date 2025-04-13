import React, { useState } from 'react';
import useCartStore from '@/store/cartStore'; 
import { useParams, useNavigate } from 'react-router'; 
import { useQuery } from '@tanstack/react-query'; 
import { getAPIData } from '@/http/api'; 
import { QueryKeys } from '@/constants/query'; 
import Loading from '@/shared/loading'; 
import { DataNotFoundContainer } from '@/shared/notfound';
import styles from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from 'react-i18next';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ProductAdd = ({ image, title, old, newprice }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => await getAPIData('shopcards?populate=*'),
  });

  const [quantity, setQuantity] = useState(1); 
  const { addToCart, toggleWishlist, user } = useCartStore((state) => state); 
  const shopId = parseInt(id, 10);

  const shop = data?.data?.find((b) => b.id === shopId);

  if (isLoading) return <Loading />; 
  if (isError || !data || !shop) return <DataNotFoundContainer />; 

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart.");
      navigate('/login');
      return;
    }

    addToCart({ ...shop, quantity });
    alert("Product added to cart successfully.");
  };

  const handleAddToWish = () => {
    toggleWishlist({ ...shop, quantity });
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-7 lg:col-span-5 px-[15px]">
        <div className={`overflow-hidden ${styles.relativeplace} w-full h-auto`}>
          <img
            className="w-full h-full object-cover"
            src={image || 'https://via.placeholder.com/300'}
            alt={title || 'Product'}
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-5 lg:col-span-4 px-[15px]">
        {title && (
          <div className='flex justify-between items-start'>
            <h3 className="max-w-[400px] font-sofia text-[24px] mb-[8px] inline-block capitalize text-black hover:text-coffee transition-all ease-in-out duration-500">
              {title}
            </h3>
            <button onClick={handleAddToWish} className={styles.tooltipWrapper}>
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              <span className={styles.tooltip}>Add to Wishlist</span>
            </button>
          </div>
        )}

        <div className="pb-[40px] font-sofiaRegular leading-6 flex gap-1 font-semibold justify-start items-center">
          {old && (
            <div className="text-old text-[16px] line-through">${Number(old).toFixed(2)}</div>
          )}
          {newprice && (
            <div className="text-coffee text-[20px]">${Number(newprice).toFixed(2)}</div>
          )}
        </div>

        <div>
          <p className="font-sofia text-sm leading-[28px] text-[#a8a8a8] pt-[22px] border-t border-[#e7e7e7]">
            Calf-length dress in airy, textured cotton fabric with a printed pattern Sed hendrerit...
          </p>

          <div className="flex justify-start mt-[22px] items-center w-[306px]">
            <div className="w-[90px] mr-[15px] h-[52px] border-2 border-newstext relative">
              <span className="w-[45px] absolute left-0 top-0 py-[10px] text-center text-[20px] text-[#232529] font-semibold border-r border-[#232529] rounded-none">
                {quantity}
              </span>

              <button
                className="absolute right-0 cursor-pointer transition-all ease-in-out duration-500 hover:text-coffee top-0 h-[50%] w-[42px]"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <button
                className="absolute cursor-pointer transition-all ease-in-out duration-500 hover:text-coffee right-0 bottom-0 h-[50%] w-[42px] border-t-[1px] border-black"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-[14px] px-[28px] text-center text-white bg-coffee uppercase trackin-[0.2em] font-sofia transition-all ease-in-out duration-300 hover:bg-newstext"
            >
              Add to Cart
            </button>
          </div>

          <button className="py-[14px] block px-[28px] w-[306px] text-center text-white bg-newstext uppercase trackin-[0.2em] my-[25px] font-sofia transition-all ease-in-out duration-300 hover:bg-coffee">
            Buy it Now
          </button>
        </div>
      </div>

      <div className="col-span-12 md:flex md:justify-between lg:grid items-center lg:col-span-3 font-sofia px-[15px]">
        <div className="contextbox">
          <h3 className='boxtitle'>{t('whyChooseUs')}</h3>
          <p className='text-old text-sm leading-[28px]'>{t('whyChooseUsText')}</p>
        </div>
        <div className="contextbox">
          <h3 className='boxtitle'>{t('return')}</h3>
          <p className='text-old text-sm leading-[28px]'>{t('returnText')}</p>
        </div>
        <div className="contextbox">
          <h3 className='boxtitle'>{t('shipping')}</h3>
          <p className='text-old text-sm leading-[28px]'>{t('shippingText')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
