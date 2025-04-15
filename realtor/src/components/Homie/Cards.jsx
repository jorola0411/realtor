import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import new1 from '../../assets/new1.png';
import new2 from '../../assets/new2.png';
import new3 from '../../assets/news3.png';
import newsDataJson from '../../data/newsData.json';

const images = {
  new1,
  new2,
  new3
};

const Cards = () => {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    
    setNewsData(newsDataJson);
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="container mx-auto bg-white py-8 my-20">
      <h2 className="text-[40px] font-bold mb-4 p-4 text-center">NEWS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="flex flex-col items-start justify-start p-4">
            <img
              src={images[news.image]}
              alt={news.title}
              className="w-full h-[350px] object-cover mb-2 py-4"
            />
            <p className="text-gray-500 text-sm">{news.date}</p>
            <div>
              <div>
                <h3 className="text-lg font-semibold mt-1 line-clamp-1">{news.title}</h3>
                <p className="text-gray-700 my-2 line-clamp-3">{news.description}</p> 
              </div>
              <button
                onClick={() => handleViewDetails(news.id)} 
                className="border border-gray-300 py-2 px-4 hover:bg-gray-100 transition duration-300"
              >
                View →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
