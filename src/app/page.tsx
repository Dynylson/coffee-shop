import { HeroSection } from '@/components/HeroSection';
import { LegendIcon } from '@/components/HeroSection/components/legend-icon';

export default function Home() {
  const legendIcons = [
    {
      icon: (
        <LegendIcon icon="/icons/cart-white.svg" backgroundColor="#C47F17" />
      ),
      description: 'Compra simples e segura',
    },
    {
      icon: <LegendIcon icon="/icons/box.svg" backgroundColor="#574F4D" />,
      description: 'Embalagem mantém o café intacto',
    },
    {
      icon: <LegendIcon icon="/icons/clock.svg" backgroundColor="#DBAC2C" />,
      description: 'Entrega rápida e rastreada',
    },
    {
      icon: <LegendIcon icon="/icons/coffee.svg" backgroundColor="#8047F8" />,
      description: 'O café chega fresquinho até você',
    },
  ];

  return (
    <HeroSection
      title={
        <>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </>
      }
      subtitle="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
      legends={legendIcons}
    />
  );
}
