import React from "react";
import { Heart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Rating from "./Rating";

const ProductCard = ({ product, onView }) => {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlist();

  const inWishlist = isInWishlist(product.id);

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
      {/* IMAGE WRAPPER */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* ACTION ICONS */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
          {/* Wishlist */}
          <button
            onClick={() =>
              inWishlist
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
            }
            className="p-2 bg-white rounded-full shadow hover:bg-pink-100"
          >
            <Heart
              className={`w-5 h-5 ${
                inWishlist
                  ? "fill-pink-500 text-pink-500"
                  : "text-gray-700"
              }`}
            />
          </button>

          {/* Quick View */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView(product);
            }}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* ADD TO CART SECTION */}
        <div className="absolute bottom-0 left-0 right-0 bg-white translate-y-full group-hover:translate-y-0 transition p-3">
          {!cartItem ? (
            // Add to Cart Button
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          ) : (
            // Quantity Controls
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="text-lg font-bold px-3"
              >
                −
              </button>

              <span className="font-semibold">
                {cartItem.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="text-lg font-bold px-3"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* INFO */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="flex justify-between items-center mt-2">
          <Rating rating={product.rating} />
          <span className="font-bold">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;





// import React from "react";
// import { Heart, Eye } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";
// import Rating from "./Rating";

// const ProductCard = ({ product, onView }) => {
//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   const inWishlist = isInWishlist(product.id);

//   return (
//     <div className="group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
//       {/* IMAGE WRAPPER */}
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//         />

//         {/* ACTION ICONS */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
//           {/* ❤️ Wishlist */}
//           <button
//             onClick={() =>
//               inWishlist
//                 ? removeFromWishlist(product.id)
//                 : addToWishlist(product)
//             }
//             className="p-2 bg-white rounded-full shadow hover:bg-pink-100"
//           >
//             <Heart
//               className={`w-5 h-5 ${
//                 inWishlist ? "fill-pink-500 text-pink-500" : "text-gray-700"
//               }`}
//             />
//           </button>

//           {/* 👁 Eye */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onView(product);
//             }}
//             className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//           >
//             <Eye className="w-5 h-5 text-gray-700" />
//           </button>
//         </div>

//         {/* ADD TO CART */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white translate-y-full group-hover:translate-y-0 transition p-3">
//           <button
//             onClick={() => addToCart(product, 1)}
//             className="w-full bg-black text-white py-2 rounded-lg"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* INFO */}
//       <div className="p-4">
//         <h3 className="font-semibold text-lg">{product.name}</h3>
//         <p className="text-sm text-gray-500">{product.category}</p>

//         <div className="flex justify-between items-center mt-2">
//           <Rating rating={product.rating} />
//           <span className="font-bold">₹{product.price}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;









