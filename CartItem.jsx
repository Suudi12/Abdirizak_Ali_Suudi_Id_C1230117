import React from 'react';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex gap-4 items-center pb-4 border-b border-gray-50">
      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
      
      <div className="flex-1">
        <h4 className="font-bold text-sm text-gray-800 leading-tight">{item.name}</h4>
        <div className="flex gap-3 items-center mt-1">
          <span className="text-emerald-500 font-bold text-sm">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <button 
            onClick={() => onRemove(item.id)} 
            className="text-red-500 hover:text-red-600 text-xs font-semibold"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
        <button 
          onClick={() => onDecrease(item.id)} 
          className="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-lg transition-colors"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
        <button 
          onClick={() => onIncrease(item.id)} 
          className="w-7 h-7 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-lg transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}