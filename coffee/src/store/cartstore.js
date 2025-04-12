import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: product.quantity }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      clearCart: () => set({ cart: [] }),

      updateQuantity: (id, quantity) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      wishlist: [],

      toggleWishlist: (product) => {
        const exists = get().wishlist.find((item) => item.id === product.id);
        if (exists) {
          set({
            wishlist: get().wishlist.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            wishlist: [...get().wishlist, product],
          });
        }
      },

      removeFromWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter((item) => item.id !== id),
        });
      },

      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
