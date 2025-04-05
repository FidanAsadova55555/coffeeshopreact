import React, { useState, useEffect } from 'react';
import useCartStore from '@/store/cartStore'; 
import { useParams } from 'react-router'; 
import { useQuery } from '@tanstack/react-query'; 
import { getAPIData } from '@/http/api'; 
import { QueryKeys } from '@/constants/query'; 
import Loading from '@/shared/loading'; 
import { DataNotFoundContainer } from '@/shared/notfound';
import styles from "./style.module.scss"

const ProductAdd = ({ image, title, old, newprice }) => {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => {
      const response = await getAPIData('shopcards?populate=*');
      return response;
    },
  });

  const [quantity, setQuantity] = useState(1); 
  const { addToCart } = useCartStore((state) => state); 
  const shopId = parseInt(id, 10);

  const shop = data?.data?.find((b) => b.id === shopId);

  if (isLoading) return <Loading />; 
  if (isError || !data) return <DataNotFoundContainer />; 
  
  if (!shop) return <DataNotFoundContainer />; 

  const handleAddToCart = () => {
    console.log('Adding to cart:', { ...shop, quantity });
    addToCart({ ...shop, quantity });
  };

  return (
    <div className="pb-[24px] grid grid-cols-12 mb-[30px]">
      <div className="col-span-12 md:col-span-7 lg:col-span-5 px-[15px]">
        <div className={`overflow-hidden ${styles.relativeplace} w-full h-auto `}>
          <img
            className="w-full h-full object-cover"
            src={image || 'https://via.placeholder.com/300'}
            alt={title || 'Product'}
          />
        </div>
      </div>

      <div className="col-span-12 md:col-span-5 lg:col-span-4 px-[15px]">
        {title && (
          <div>
            <h3 className="font-sofia pt-[20px] text-[24px] mb-[8px] inline-block capitalize text-black  hover:text-coffee transition-all ease-in-out duration-500">
              {title}
            </h3>
          </div>
        )}

        <div className="pb-[40px] font-sofiaRegular leading-6 flex gap-1 font-semibold justify-start items-center ">
          {old && (
            <div className="text-old text-[16px] line-through">${Number(old).toFixed(2)}</div>
          )}
          {newprice && (
            <div className="text-coffee text-[20px]">${Number(newprice).toFixed(2)}</div>
          )}
        </div>

        <div>
          <p className="font-sofia text-sm leading-[28px] text-[#a8a8a8] pt-[22px] border-t border-[#e7e7e7]">
          Calf-length dress in airy, textured cotton fabric with a printed pattern Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus Product Details Inspired by traditional blockprinting techniques in India, our own in-house design is the vibrant pattern that every closet needs. That's why...          </p>
          <div className="flex justify-start mt-[22px] items-center w-[306px]">
            <div className="w-[90px] mr-[15px] h-[52px] border border-newstext  relative">
              <span className="w-[45px] absolute left-0 top-0 py-[10px] text-center text-[20px] text-[#232529] font-semibold border-r border-[#232529] rounded-none">
                {quantity}
              </span>

              <button
                className="absolute right-0 top-0 h-[50%] w-[42px]"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>

              <button
                className="absolute right-0 bottom-0 h-[50%] w-[42px] border-t-[1px] border-black"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-[14px] px-[28px] text-center text-white bg-coffee uppercase trackin-[0.2em] font-sofia transition-all ease-in-out duration-300 hover:bg-newstext"
            >
              Add to Cart
            </button>
          </div>

          <button className="py-[14px] block px-[28px] w-[306px] text-center text-white bg-newstext uppercase trackin-[0.2em] my-[25px] font-sofia transition-all ease-in-out duration-300 hover:bg-coffee ">
            Buy it Now
          </button>
        </div>
      </div>
      <div className="col-span-3">hii</div>
    </div>
  );
};

export default ProductAdd;
