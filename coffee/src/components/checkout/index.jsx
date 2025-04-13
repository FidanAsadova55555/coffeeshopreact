import React  from 'react';
import useCartStore from '@/store/cartstore';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router';
const CartDrawer = ({ isOpen, closeDrawer }) => {
  const navigate = useNavigate();

  const { cart ,removeFromCart } = useCartStore((state) => state);
  const totalPrice = cart.reduce((acc, item) => acc + item.newprice * item.quantity, 0);
  console.log(cart,"images");
  const baseUrl = 'http://localhost:1337'; 
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId); 
  };
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
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 298.667 298.667"
            style={{ enableBackground: 'new 0 0 298.667 298.667' }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "></polygon>
              </g>
            </g>
          </svg>
        </button>
        <h2 className="h-full">Shopping Cart</h2>
        <button className="w-[45px] border-l text-base border-[#dedede] h-full flex justify-center items-center" onClick={closeDrawer}>
          {totalQuantity}
        </button>
      </div>

      <ul className="px-[20px] overflow-y-auto max-h-[calc(100vh-104px)]">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => {
            const fullImageUrl = `${baseUrl}${item.image.url}`;
            return (
              <li key={index} className="py-[20px] font-sofiaRegular flex justify-between items-start border-b border-[#e1e1e1]">
                <div className="flex justify-start items-center">
                  <div className="w-[76px] h-[94px] overflow-hidden">
                    <img className="w-full h-full object-cover" src={fullImageUrl} alt={item.title} />
                  </div>
                  <div className="flex flex-col pl-[20px]">
                    <span className="capitalize">{item.title}</span>
                    <span>QTY: {item.quantity}</span>
                    <span>${(item.newprice * item.quantity).toFixed(2)}</span>
                  </div>

                </div>
                <button
                  className="remove-button text-newstext hover:text-coffee ease-in-out transition-all duration-300"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="fa fa-trash-o "></i>
                </button>
              </li>
            );
          })
        )}
      </ul>

      <div className="flex h-[59px] font-sofia justify-between leading-[59px] text-[18px] px-[40px] items-center ">
        <h3>Total:</h3>
        <span className="text-coffee">${totalPrice.toFixed(2)}</span>
       
      </div>
      <div className='px-[20px]  '>
      <button
      className='cursor-pointer uppercase bg-coffee text-white w-full text-center p-3 font-sofia'
      onClick={() => navigate('/checkout')}
    >
      Checkout
    </button>
      </div>
    </div>
  );
};

export default CartDrawer;
