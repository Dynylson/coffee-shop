import { ReactNode } from 'react';
import { Legend } from './components/legend';
import { ILegend } from './types';

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  legends: ILegend[];
}

export const HeroSection = ({ title, subtitle, legends }: HeroSectionProps) => {
  return (
    <section>
      <h1 className="font-baloo font-bold text-base-title text-baloo-xl leading-tight">
        {title}
      </h1>
      <p className="text-roboto-lg text-base-subtitle max-w-[50ch] mt-4">
        {subtitle}
      </p>
      <div className="mt-[66px]">
        {legends.map(({ icon, description }, index) => (
          <Legend key={index} icon={icon} description={description} />
        ))}
      </div>
    </section>
  );
};
