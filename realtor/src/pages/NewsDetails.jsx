import React from 'react';
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

    if (!news) {
        return <div>News article not found.</div>;
    }

    return (
        <>

     

            <div className="container mx-auto bg-white py-8">
                <div className="flex md:flex-row items-start justify-between gap-20">
                    <div className="w-3/4"> {/* First column with 3/4 width */}
                        <h1 className="text-[4rem] font-bold mb-8 leading-snug">{news.title}</h1>
                        <p className="text-gray-700 text-[1.5rem] mb-12">{news.description}</p>
                    </div>
                    <div className="w-1/4 pl-20"> {/* Second column with 1/4 width */}
                        <div>
                            <p className='text-gray-500 mb-4 text-lg'>DATE</p>
                            <p className="uppercase text-lg mb-8">{news.date}</p>
                            <p className='text-gray-500 mb-4 text-lg'>CATEGORY</p>
                            <p className="uppercase text-lg mb-4">{news.category}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto bg-white mb-20">

                <img
                    src={images[news.image]} // Map image key to imported images
                    alt={news.title}
                    className="w-full h-auto object-cover pb-12"
                />

                <div className='w-3/4 mx-auto'>
                    <h2 className="text-5xl mt-4">{news.h1}</h2>
                    <p className="text-2xl my-2 leading-relaxed mt-4 text-gray-700">{news.p1}</p>
                </div>

                <div className='my-20 w-3/4 mx-auto'>
                    <h2 className="text-5xl mt-4 text-gray-600">{news.h2}</h2>
                    <p className="text-2xl leading-relaxed mt-4 text-gray-700">{news.p2}</p>
                </div>

                <div className='my-20 w-3/4 mx-auto'>
                    <h2 className="text-5xl mt-4 text-gray-600">{news.h3}</h2>
                    <p className="text-2xl leading-relaxed mt-4 text-gray-700 mb-12">{news.p3}</p>
                </div>


            </div>

        </>
    );
};

export default NewsDetails;