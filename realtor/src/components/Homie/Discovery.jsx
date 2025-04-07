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
    <section className="px-6 py-10 bg-white">
      <h2 className="text-[40px] font-medium text-[#2D1E1E] uppercase mb-6 tracking-wide">
        Discover Our Featured Developments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {developments.map((dev, index) => (
          <div key={index} className="flex flex-col border border-[#e5e5e5]">
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-[550px] object-cover"
            />
            <div className="flex items-center justify-between px-4 py-2 bg-[#F5F5F5]">
              <span className="text-[25px] font-medium text-[#2D1E1E]">{dev.name}</span>
              <button className="bg-[#D9D9D9] text-black text-[20px] px-4 py-1">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default discovery;
