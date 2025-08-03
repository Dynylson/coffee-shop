import { ReactNode } from 'react';

export interface LegendProps {
  icon: ReactNode;
  description: string;
}

export const Legend = ({ icon, description }: LegendProps) => {
  return (
    <div className="flex items-center gap-3 text-base-text">
      {icon}
      <p>{description}</p>
    </div>
  );
};
