// import React from 'react';

// function NotFound() {
//   return (
//     <div className="p-4 text-center">
//       <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   );
// }

// export default NotFound;

import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "3rem", color: "#ef4444" }}>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#3b82f6", textDecoration: "underline" }}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
