import { ILegend } from '../types';

export type LegendProps = ILegend;

export const Legend = ({ icon, description }: LegendProps) => {
  return (
    <div>
      <p>{icon}</p>
      <p>{description}</p>
    </div>
  );
};
