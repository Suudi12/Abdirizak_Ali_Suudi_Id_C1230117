import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Popular
        </span>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800 text-lg leading-tight">{product.name}</h3>
          <span className="text-emerald-500 font-extrabold text-lg">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-400 text-xs line-clamp-2 mb-4 h-8 leading-relaxed">{product.description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <span className="text-amber-500">★ {product.rating}</span>
            <span className="text-gray-300">•</span>
            <span>{product.time}</span>
          </div>
          <button 
            onClick={() => onAdd(product)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-xl text-sm transition-colors duration-200 shadow-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}