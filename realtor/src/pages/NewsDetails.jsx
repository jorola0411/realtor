import {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import newsDataJson from '../data/newsData.json'; // Import the JSON file
import new1 from '../assets/new1.png';
import new2 from '../assets/new2.png';
import new3 from '../assets/news3.png';



const images = {
  new1,
  new2,
  new3
};

const NewsDetails = () => {
  const { id } = useParams(); // Get the id from the route parameter
  const news = newsDataJson.find((item) => item.id === id); // Find the news by id

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!news) {
    return <div>News article not found.</div>;
  }

  return (
    <div className="container mx-auto bg-white py-8 px-4 sm:px-8">
      {/* Responsive Flex Layout */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* First Column */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl sm:text-4xl md:text-[4rem] font-bold mb-6 leading-snug">
            {news.title}
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-8">{news.description}</p>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/4">
          <div>
            <p className="text-gray-500 mb-2 text-base sm:text-lg">DATE</p>
            <p className="uppercase text-base sm:text-lg mb-6">{news.date}</p>
            <p className="text-gray-500 mb-2 text-base sm:text-lg">CATEGORY</p>
            <p className="uppercase text-base sm:text-lg">{news.category}</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12">
        <img
          src={images[news.image]}
          alt={news.title}
          className="w-full max-w-full h-auto object-cover mb-8"
        />
      </div>

      {/* Content Sections */}
      <div className="w-full md:w-3/4 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mt-4">{news.h1}</h2>
        <p className="text-base sm:text-lg md:text-2xl my-4 leading-relaxed text-gray-700">
          {news.p1}
        </p>
      </div>

      <div className="my-12 w-full md:w-3/4 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mt-4 text-gray-600">{news.h2}</h2>
        <p className="text-base sm:text-lg md:text-2xl leading-relaxed mt-4 text-gray-700">
          {news.p2}
        </p>
      </div>

      <div className="my-12 w-full md:w-3/4 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl mt-4 text-gray-600">{news.h3}</h2>
        <p className="text-base sm:text-lg md:text-2xl leading-relaxed mt-4 text-gray-700 mb-12">
          {news.p3}
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;