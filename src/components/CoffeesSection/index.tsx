import { CoffeeCard } from './components/coffee-card';

export const CoffessSection = () => {
  const coffess = [
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    {
      image: '/coffees/expresso-tradicional.svg',
      tags: ['TRADICIONAL'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
  ];

  return (
    <section>
      <h2 className="font-baloo text-base-subtitle text-baloo-lg font-bold mb-14">
        Nossos cafés
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coffess.map((coffee, index) => {
          return (
            <CoffeeCard
              key={index}
              image={coffee.image}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          );
        })}
      </div>
    </section>
  );
};
