import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProductCard from './components/ProductCard';

const colors = [
  { id: 'ColorSg', colorCode: '#595759', label: 'Space Gray', imageUrl: 'https://example.com/space-gray.jpg' },
  { id: 'ColorS', colorCode: '#d2d3d4', label: 'Silver', imageUrl: 'https://example.com/silver.jpg' },
  { id: 'ColorP', colorCode: '#d89f97', label: 'Pink', imageUrl: 'https://example.com/pink.jpg' },
  { id: 'ColorG', colorCode: '#afbfab', label: 'Green', imageUrl: 'https://example.com/green.jpg' },
  { id: 'ColorSb', colorCode: '#91a5bb', label: 'Sky Blue', imageUrl: 'https://example.com/sky-blue.jpg' },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Product</h2>

          <div className="flex justify-center">
            <ProductCard
              imageUrl="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              title="Small Headphones"
              price={299}
              colors={colors}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
