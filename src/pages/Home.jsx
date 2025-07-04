import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function Home() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4 filters">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border search-input p-1 mr-2"
      />
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border sort-select p-1"
      >
        <option value="">Sort</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-4 mt-4 ">
        {filtered.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow card">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold mt-2">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold price">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-1 mt-2 buttons"
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-600 block mt-2 view-link buttons"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
