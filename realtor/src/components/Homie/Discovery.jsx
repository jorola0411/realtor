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

const discovery = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-[40px] font-medium text-[#2D1E1E] uppercase mb-6 tracking-wide">
        Discover Our Featured Developments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {developments.map((dev, index) => (
          <div key={index} className="flex flex-col py-4">
            <hr className='border-t-2 border-gray-300'/> 
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-[550px] object-cover py-4"
            />
            <div className="flex items-center justify-between">
              <span className="text-[25px]">{dev.name}</span>
              <button className="border border-gray-300 py-2 px-4 hover:bg-gray-100 transition duration-300">
              View →
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default discovery;
