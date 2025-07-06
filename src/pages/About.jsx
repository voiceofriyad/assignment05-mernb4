// import React from 'react';

// function About() {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-2">About This Store</h2>
//       <p>This is a demo e-commerce application built with React. It uses local state to simulate a shopping cart and basic product browsing.</p>
//     </div>
//   );
// }

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img
          src="https://www.zilliondesigns.com/blog/wp-content/uploads/Perfect-Ecommerce-Sales-Banner-1280x720.jpg"
          alt="About our store"
          className="about-img"
        />
        <div className="about-text">
          <h1>About Our Store</h1>
          <p>
            Welcome to our simple and elegant React-powered e-commerce store.
            This project is a frontend demo built to showcase product browsing,
            cart management, and clean UI using React, Context API, and React
            Router.
          </p>
          <p>
            You can browse products, view details, add them to your cart, and
            experience a smooth, responsive interface — all without any backend!
          </p>
        </div>
      </div>

      <div className="about-features">
        <h2> Key Features</h2>
        <ul>
          <li>✅ Clean Product Listings with Filtering & Sorting</li>
          <li>✅ Product Detail Pages</li>
          <li>✅ Add to Cart & Cart Quantity Management</li>
          <li>✅ Context API for global cart state</li>
          <li>✅ React Router for seamless navigation</li>
          <li>✅ Fully responsive and user-friendly layout</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
