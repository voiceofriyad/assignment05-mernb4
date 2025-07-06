// import React from "react";
// import { useCart } from "../context/CartContext";

// function Cart() {
//   const { cartItems, removeFromCart, total } = useCart();

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Qty</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id} className="text-center">
//                 <td>
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-16 h-16 mx-auto cart-img "
//                   />
//                 </td>
//                 <td>{item.title}</td>
//                 <td>${item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <h3 className="mt-4 text-xl cart-total">Total: ${total.toFixed(2)}</h3>
//     </div>
//   );
// }

// export default Cart;

import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeItemCompletely } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        // <p className="cart-empty">Your cart is empty.</p>
        <div className="empty-cart">
          <img
            src="https://w7.pngwing.com/pngs/432/660/png-transparent-empty-cart-illustration.png"
            alt="Empty Cart"
          />
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven’t added anything yet.</p>
          <a href="/" className="shop-btn">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-img"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="qty-controls">
                        <button onClick={() => removeFromCart(item.id)}>
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => removeItemCompletely(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-total-bar">
            <strong>Total Price: ${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
