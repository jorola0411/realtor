import React from 'react';
import Banner from '../../assets/formahome.png'; // Make sure this path is correct


const HeroSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Hero section with background image */}
      <div
        className="w-full h-[100vh] flex items-center justify-start px-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1 className="text-[80px] leading-[48px] font-normal text-white drop-shadow-md container mx-auto">
        Architecture <br /> <br></br> With Purpose
        </h1>
      </div>

      {/* White content block */}
      <div className="bg-white container mx-auto flex flex-col items-start justify-center my-20">
        <div className="max-w-[700px]">
          <p className="text-[1.5rem] mb-6">
            We’re thrilled to announce the addition of several green spaces throughout the ALA Residencies community! These carefully designed outdoor areas offer residents with walking paths and community gardens.
          </p>
          <button className="border border-gray-300 py-2 px-4 hover:bg-gray-100 transition duration-300">
              Read More →
            </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
