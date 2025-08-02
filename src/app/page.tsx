import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <HeroSection
      title={
        <>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </>
      }
      subtitle="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
      legends={[
        { icon: '☕', description: 'Café expresso' },
        { icon: '🥛', description: 'Cappuccino' },
        { icon: '🍵', description: 'Chá' },
      ]}
    />
  );
}
