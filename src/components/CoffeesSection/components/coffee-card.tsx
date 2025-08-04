'use client';

import { useCartStore } from '@/stores/cart-store';
import { Coffee } from '@/types';
import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type CoffeeCardProps = Coffee;

export const CoffeeCard = ({
  image,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) => {
  const addProduct = useCartStore((state) => state.addProduct);

  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return;

    setQuantity((state) => state - 1);
  }

  function handleAddCoffee() {
    for (let i = 1; i <= quantity; i++) {
      addProduct({
        image,
        tags,
        title,
        description,
        price,
      });
    }
  }

  return (
    <div className="flex flex-col items-center bg-base-card px-5 pb-5 rounded-tl-[3px] rounded-tr-[33px] rounded-bl-[33px] rounded-br-[3px]">
      <Image
        className="mt-[-20px]"
        src={image}
        width={120}
        height={120}
        alt={title}
      />
      <ul className="mt-3 mb-4">
        {tags.map((tag, index) => {
          return (
            <li
              className="text-yellow-dark bg-yellow-light text-roboto-xs font-bold py-1 px-2 rounded-full"
              key={index}
            >
              {tag}
            </li>
          );
        })}
      </ul>
      <h3 className="font-baloo text-base-subtitle text-baloo-sm font-bold mb-2">
        {title}
      </h3>
      <p className="text-base-label text-roboto-sm max-w-[30ch] text-center mb-8">
        {description}
      </p>
      <div className="flex items-center">
        <p className="text-base-text text-roboto-sm">
          R$ <span className="font-baloo font-bold text-baloo-md">{price}</span>
        </p>
        <div className="flex items-center gap-2 ml-[22px]">
          <div className="flex items-center gap-2 bg-base-button text-base-title text-roboto-md rounded-[6px] p-2">
            <button onClick={handleDecreaseQuantity}>
              <Minus className="text-purple cursor-pointer" size={18} />
            </button>
            {quantity}
            <button onClick={handleIncreaseQuantity}>
              <Plus className="text-purple cursor-pointer" size={18} />
            </button>
          </div>
          <button
            onClick={handleAddCoffee}
            className="bg-purple-dark rounded-[6px] p-3 cursor-pointer"
          >
            <Image
              src="/icons/cart-white.svg"
              width={19}
              height={18}
              alt="Carrinho"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
