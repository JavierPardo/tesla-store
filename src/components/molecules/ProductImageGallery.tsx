'use client';
import { useState } from "react";

export const ProductImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2 lg:w-2/5 p-4">
      <img src={mainImage} alt="Main Product" className="w-full h-96 object-contain rounded-lg shadow-md mb-4"/>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-blue-600' : 'border-transparent'} hover:border-blue-500 transition-all duration-200`}
            onClick={() => setMainImage(img)}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x80/cccccc/333333?text=N/A'; }}
          />
        ))}
      </div>
    </div>
  );
};