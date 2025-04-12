import React from 'react';
import useCartStore from '@/store/cartStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const WishlistDrawer = ({ isOpen, closeDrawer }) => {
  const wishlist = useCartStore((state) => state.wishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);
  const baseUrl = 'http://localhost:1337';

  return (
    <div
      className={`font-sofia fixed bg-[#fff] top-0 right-0 h-full w-[380px] shadow-lg transform ${
        isOpen ? 'translate-x-0 ' : 'translate-x-full'
      } transition-transform duration-300 z-50`}
    >
      <div className="font-medium leading-[43px] flex justify-between items-center h-[45px] text-black border-b border-[#ecebeb] pb-0 mb-0 text-[20px]">
        <button className="w-[45px] border-r border-[#dedede] h-full flex justify-center items-center" onClick={closeDrawer}>
          <svg
            className="w-[14px] h-[14px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 298.667 298.667"
          >
            <g>
              <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333" />
            </g>
          </svg>
        </button>
        <h2 className="h-full">Wishlist</h2>
        <button className="w-[45px] border-l text-base border-[#dedede] h-full flex justify-center items-center" onClick={closeDrawer}>
          {wishlist.length}
        </button>
      </div>

      <ul className="px-[20px] overflow-y-auto max-h-[calc(100vh-104px)]">
        {wishlist.length === 0 ? (
          <p className="text-center text-sm text-gray-500 font-sofiaRegular">Your wishlist is empty.</p>
        ) : (
          wishlist.map((item, index) => {
            const fullImageUrl = `${baseUrl}${item.image?.url || ''}`;
            return (
              <li
                key={index}
                className="py-[20px] font-sofiaRegular flex justify-between items-start border-b border-[#e1e1e1]"
              >
                <div className="flex justify-start items-center">
                  <div className="w-[76px] h-[94px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={fullImageUrl} alt={item.title} />
                  </div>
                  <div className="flex flex-col pl-[20px]">
                    <span className="capitalize">{item.title}</span>
                    <span>${Number(item.newprice).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="remove-button text-newstext hover:text-coffee ease-in-out transition-all duration-300"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default WishlistDrawer;
