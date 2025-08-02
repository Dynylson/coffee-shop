import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/coffee-shop.svg"
        width={85}
        height={40}
        alt="Logo Coffee Shop"
      />
      <div className="flex items-center gap-3">
        <div className="bg-purple-light text-purple-dark flex items-center gap-1 p-2 rounded-[6px]">
          <Image
            src="/location.svg"
            width={15}
            height={19}
            alt="Logo Localização"
          />
          <p className="text-roboto-sm">Garanhuns, PE</p>
        </div>
        <button className="flex items-center justify-center bg-yellow-light w-[38px] h-[38px] rounded-[6px]">
          <Image src="/cart.svg" width={18} height={17} alt="Logo Carrinho" />
        </button>
      </div>
    </div>
  );
};
