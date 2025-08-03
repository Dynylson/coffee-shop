import { CoffeeCard } from './components/coffee-card';

export const CoffessSection = () => {
  return (
    <section>
      <h2 className="font-baloo text-base-subtitle text-baloo-lg font-bold mb-14">
        Nossos cafés
      </h2>
      <div className="flex">
        <CoffeeCard
          image="/coffees/expresso-tradicional.svg"
          tags={['TRADICIONAL']}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9,90"
        />
      </div>
    </section>
  );
};
