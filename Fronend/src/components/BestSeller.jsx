import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <section className="mt-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
        Best Sellers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </section>
  );
};

export default BestSeller;
