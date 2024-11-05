"use client";

import React, { useState } from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  colors: { id: string; colorCode: string; label: string; imageUrl: string }[]; // Each color has an associated image URL
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price, colors }) => {
  // State to track the currently selected image URL
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

  // Function to handle color selection
  const handleColorChange = (newImageUrl: string) => {
    setCurrentImageUrl(newImageUrl);
  };

  return (
    <a href="#" className="group block">
      {/* Display the selected image */}
      <img
        src={currentImageUrl}
        alt={title}
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="mt-1.5">
      

        <div className="mt-1.5 flex gap-1">
          <form>
            <fieldset>
              <legend className="sr-only">Color</legend>
            </fieldset>

            <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
              {colors.map((color) => (
                <div key={color.id}>
                 
                
                </div>
              ))}
            </div>
          </form>
        </div>

        <div className="mt-3 flex justify-between text-sm">
          <h3 className="text-white group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>
          <p className="text-white">${price}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
