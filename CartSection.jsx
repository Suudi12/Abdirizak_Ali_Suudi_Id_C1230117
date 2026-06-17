import React from 'react';
import CartItem from './CartItem';

export default function CartSection({ cart, onIncrease, onDecrease, onRemove }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full lg:w-96 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit sticky top-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Cart</h2>
        <span className="bg-orange-50 text-orange-600 font-bold text-xs px-3 py-1.5 rounded-full">
          {totalItems} items
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 font-medium">Salladaadu waa maran tahay</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                onIncrease={onIncrease} 
                onDecrease={onDecrease} 
                onRemove={onRemove} 
              />
            ))}
          </div>

          <div className="flex justify-between items-center font-bold text-lg text-gray-900 mt-6 pt-4 border-t-2 border-gray-50">
            <span>Total</span>
            <span className="text-xl text-gray-900">${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-center transition-colors shadow-md shadow-orange-100">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}