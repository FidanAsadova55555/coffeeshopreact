import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useCartStore from '@/store/cartstore';

const CheckoutPage = () => {

  const { cart, user, removeFromCart } = useCartStore();
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState("pickup");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const totalPrice = cart.reduce((acc, item) => acc + item.newprice * item.quantity, 0);
  const baseUrl = 'http://localhost:1337';

  const handleConfirmOrder = () => {
    if (!user) {
      alert('Please login to confirm your order.');
      navigate('/login');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    alert('☕ Thank you! Your order has been placed.');
    navigate('/');
  };
  const deliveryFee = deliveryType === "delivery" ? totalPrice * 0.02 : 0;
  const totalWithFee = totalPrice + deliveryFee;
  return (
    <div className="min-h-screen bg-[#f8f5f2] px-4 md:px-12 py-10 font-sofia">
      <h1 className="text-2xl md:text-4xl font-semibold text-coffee mb-8 text-center">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 border-b pb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={`${baseUrl}${item.image.url}`}
                      alt={item.title}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div>
                      <h3 className="capitalize font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-500">
                        ${(item.newprice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-coffee text-lg"
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        {cart.length > 0 && (
  <div className="pt-6 border-t mt-6 text-right space-y-1 text-base">
    <div className="flex justify-between">
      <span>Subtotal:</span>
      <span>${totalPrice.toFixed(2)}</span>
    </div>
    <div className="flex justify-between">
      <span>Delivery Fee:</span>
      <span>${deliveryFee.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-bold text-lg pt-2">
      <span>Total:</span>
      <span>${(totalWithFee).toFixed(2)}</span>
    </div>
  </div>
)}

        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Info</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              defaultValue={user?.email || ''}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
              required
            />
            {deliveryType === 'delivery' && (
              <input
                type="text"
                placeholder="Delivery Address"
                className="w-full border p-3 rounded"
                required
              />
            )}
          </form>

          <div className="mt-6">
            <label className="block font-medium mb-1">Delivery Method</label>
            <select
              className="w-full border p-3 rounded"
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
            >
              <option value="pickup">Pickup</option>
              <option value="delivery">Home Delivery</option>
            </select>
          </div>

          <div className="mt-6">
            <label className="block font-medium mb-1">Payment Method</label>
            <select
              className="w-full border p-3 rounded"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
            </select>
          </div>

          <button
            onClick={handleConfirmOrder}
            className="w-full bg-coffee hover:bg-[#5b3921] text-white mt-8 py-3 px-6 rounded uppercase tracking-widest font-semibold transition-all"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
