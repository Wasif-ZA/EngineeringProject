// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to the Engineering Project</h1>
          <p className="py-6">
            This platform is designed to showcase our engineering solutions, providing insights into
            innovative designs, problem-solving approaches, and the methodologies that drive our
            project's success. Dive into each section to explore project details, technical
            specifications, and the impact of our work.
          </p>
          <Link href="/product">
            <button className="btn btn-primary">Explore the Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
