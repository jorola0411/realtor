import React from 'react';
import ex1 from '../../assets/12.png';
import ex2 from '../../assets/13.png';
import ex3 from '../../assets/14.png';
import ex4 from '../../assets/15.png';

const developments = [
  {
    name: 'LUMEN',
    image: ex1, 
  },
  {
    name: 'PINNACLE WEST',
    image: ex2,
  },
  {
    name: 'OPUS',
    image: ex3, 
  },
  {
    name: 'FORMA HEIGHTS',
    image: ex4, 
  },
];

const Discovery = () => {
  return (
    <section className="container mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#2D1E1E] uppercase mb-6 tracking-wide text-center">
        Discover Our Featured Developments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {developments.map((dev, index) => (
          <div key={index} className="flex flex-col py-4">
            <hr className="border-t-2 border-gray-300 mb-4" />
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-[300px] md:h-[550px] object-cover mb-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold">{dev.name}</span>
              <button className="border border-gray-300 py-2 px-4 hover:bg-gray-100 transition duration-300 text-sm sm:text-base">
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discovery;
