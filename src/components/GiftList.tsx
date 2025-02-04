import React from 'react';

interface Gift {
  id: number;
  name: string;
  price: number;
  link: string;
}

interface GiftListProps {
  onGiftClick: (link: string) => void; // Função para lidar com o clique
}

const GiftList: React.FC<GiftListProps> = ({ onGiftClick }) => {
  const gifts: Gift[] = [
    { id: 1, name: 'Presente 1', price: 100, link: 'https://recargapay.com.br/r/LQQ0ZOL' },
    { id: 2, name: 'Presente 2', price: 200, link: '' },
    { id: 3, name: 'Presente 3', price: 300, link: '' },
  ];

  return (
    <section id="gifts" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-8 font-serif">Lista de Presentes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
              <p className="text-gray-600 mb-4">R$ {gift.price}</p>
              <button
                onClick={() => onGiftClick(gift.link)} // Chama a função handleGiftClick
                className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
              >
                Presentear
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftList;
