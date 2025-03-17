import React, { useState } from "react";
import useFetch from "./useFetch";

const SimpleCarousel = () => {
  const { data: imageData, loading, error } = useFetch("https://picsum.photos/v2/list");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="relative w-full h-64 flex items-center justify-center">
        <img
        style={{ maxWidth: "500px", maxHeight: "300px" }}
          src={imageData[currentIndex].download_url}
          alt={imageData[currentIndex].author}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex justify-between w-full mt-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded-lg">Prev</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default SimpleCarousel;
