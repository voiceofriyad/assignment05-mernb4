import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-full max-w-md mx-auto" />
      <h2 className="text-3xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
      <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;