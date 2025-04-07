import React from 'react';
import Banner from '../../assets/formahome.png'; // Make sure this path is correct


const HeroSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Hero section with background image */}
      <div
        className="w-full h-[800px] flex items-center justify-start px-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1 className="text-[80px] leading-[48px] font-normal text-white drop-shadow-md">
        Architecture <br /> <br></br> With Purpose
        </h1>
      </div>

      {/* White content block */}
      <div className="bg-white px-10 py-8">
        <div className="max-w-[700px]">
          <p className="text-[28px] mb-4">
            We’re thrilled to announce the addition of several green spaces throughout the ALA Residencies community! These carefully designed outdoor areas offer residents with walking paths and community gardens.
          </p>
          <button className="bg-[#D9D9D9] text-black text-[20px] px-4 py-1">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
