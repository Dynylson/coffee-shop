import { Coffee } from '@/types';
import { create } from 'zustand';

interface CartState {
  products: Coffee[];
  addProduct: (product: Coffee) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product: Coffee) =>
    set((state) => ({
      products: [...state.products, product],
    })),
}));
