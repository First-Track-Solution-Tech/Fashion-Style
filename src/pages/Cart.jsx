import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">
                      ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mt-2 flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div className="mt-8 border-t pt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: ₹{getCartTotal().toFixed(2)}
            </h3>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;





// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cartItems, getCartTotal } = useCart();

//   if (!cartItems) return null;

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between border-b pb-2"
//               >
//                 <span>
//                   {item.name} × {item.quantity}
//                 </span>
//                 <span>₹{item.price * item.quantity}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 text-xl font-semibold">
//             Total: ₹{getCartTotal()}
//           </div>

//           <button className="mt-4 bg-black text-white px-6 py-2 rounded">
//             Checkout
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;





