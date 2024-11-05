// pages/product.tsx
import React from 'react';
import Navbar from '../components/navbar';
import AlbumCard from '../components/card';
import ProductCard from '../components/ProductCard';

const productColors = [
  { id: 'ColorSg', colorCode: '#595759', label: 'Space Gray', imageUrl: 'https://example.com/space-gray.jpg' },
  { id: 'ColorS', colorCode: '#d2d3d4', label: 'Silver', imageUrl: 'https://example.com/silver.jpg' },
  { id: 'ColorP', colorCode: '#d89f97', label: 'Pink', imageUrl: 'https://example.com/pink.jpg' },
  { id: 'ColorG', colorCode: '#afbfab', label: 'Green', imageUrl: 'https://example.com/green.jpg' },
  { id: 'ColorSb', colorCode: '#91a5bb', label: 'Sky Blue', imageUrl: 'https://example.com/sky-blue.jpg' },
];

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Product Details</h1>
        
        {/* Product Card */}
        <ProductCard
          imageUrl="https://example.com/default-product.jpg"
          title="Engineering Product"
          price={299}
          colors={productColors}
        />

        {/* Album Card */}
        <div className="mt-8">
          <AlbumCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
