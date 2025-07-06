import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found.</h2>;

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details-info">
          <h2>{product.title}</h2>
          <p className="desc">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
