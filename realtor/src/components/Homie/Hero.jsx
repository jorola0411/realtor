import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Full-width gray hero */}
      <div className="bg-[#D9D9D9] w-full h-[350px] flex items-center justify-start px-10">
        <h1 className="text-[40px] leading-[48px] font-normal ">
          Lorem ipsum <br /> dolor sit amet.
        </h1>
      </div>

      {/* White content block */}
      <div className="bg-white px-10 py-8">
        <div className="max-w-[700px]">
          <p className="text-lg  mb-4">
            We’re thrilled to announce the addition of several green spaces throughout the ALA Residencies community! These carefully designed outdoor areas offer residents with walking paths and community gardens.
          </p>
          <button className="bg-[#D9D9D9] text-black text-[10px] px-4 py-1">
            CTA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
