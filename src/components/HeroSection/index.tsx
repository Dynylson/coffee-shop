import { ReactNode } from 'react';
import { Legend } from './components/legend';
import Image from 'next/image';

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  legends: {
    icon: ReactNode;
    description: string;
  }[];
}

export const HeroSection = ({ title, subtitle, legends }: HeroSectionProps) => {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="font-baloo font-bold text-base-title text-baloo-xl leading-tight">
          {title}
        </h1>
        <p className="text-roboto-lg text-base-subtitle max-w-[50ch] mt-4">
          {subtitle}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-[66px]">
          {legends.map(({ icon, description }, index) => (
            <Legend key={index} icon={icon} description={description} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-center">
        <Image
          src="/coffee-delivery.png"
          width={476}
          height={360}
          alt="Coffee Delivery Banner"
        />
      </div>
    </section>
  );
};
