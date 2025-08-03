import Image from 'next/image';

interface LegendIconProps {
  icon: string;
  backgroundColor: string;
}

export const LegendIcon = ({ icon, backgroundColor }: LegendIconProps) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-full`}
      style={{ backgroundColor }}
    >
      <Image src={icon} width={13} height={13} alt="" />
    </div>
  );
};
