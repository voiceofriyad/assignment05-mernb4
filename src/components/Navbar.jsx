// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// function Navbar() {
//   const { cartCount } = useCart();

//   return (
//     <nav className="flex justify-between px-4 py-2 bg-gray-800 text-white">
//       <h1 className="text-xl font-bold">
//         <Link to="/">My Store</Link>
//       </h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/cart">Cart ({cartCount})</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  // Fix: calculate total quantity
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar flex justify-between px-4 py-2 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">
        <Link to="/">My Store</Link>{" "}
      </h1>
      <div className="nav-links space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
