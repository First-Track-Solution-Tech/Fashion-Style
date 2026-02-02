import React from "react";
import { Heart, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Rating from "./Rating";

const ProductCard = ({ product, onView }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

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
          {/* ❤️ Wishlist */}
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
                inWishlist ? "fill-pink-500 text-pink-500" : "text-gray-700"
              }`}
            />
          </button>

          {/* 👁 Eye */}
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

        {/* ADD TO CART */}
        <div className="absolute bottom-0 left-0 right-0 bg-white translate-y-full group-hover:translate-y-0 transition p-3">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Add to Cart
          </button>
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
// import { Link } from "react-router-dom";
// import { ShoppingCart, Heart, Eye } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";
// import Rating from "./Rating";

// const ProductCard = ({ product, onView }) => {
//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   const inWishlist = isInWishlist(product.id);

//   const handleWishlistToggle = () => {
//     if (inWishlist) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   return (
//     <div className="card group bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
//       <div className="relative overflow-hidden">

//         {/* SALE BADGE */}
//         {product.isOnSale && product.discount && (
//           <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
//             {product.discount}% OFF
//           </span>
//         )}

//         {/* IMAGE */}
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//         />

//         {/* ACTION BUTTONS */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">

//           {/* WISHLIST */}
//           <button
//             onClick={handleWishlistToggle}
//             className={`p-2 rounded-full shadow-md transition ${
//               inWishlist
//                 ? "bg-red-100 text-red-600"
//                 : "bg-white text-gray-600 hover:bg-gray-100"
//             }`}
//           >
//             <Heart
//               className={`w-5 h-5 ${inWishlist ? "fill-current scale-110" : ""}`}
//             />
//           </button>

//           {/* 👁 QUICK VIEW (NO LINK, NO NAVIGATION) */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // 🚨 MOST IMPORTANT
//               onView?.(product);
//             }}
//             className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-gray-100"
//           >
//             <Eye className="w-5 h-5" />
//           </button>
//         </div>

//         {/* ADD TO CART */}
//         <div className="absolute bottom-0 left-0 right-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
//           <button
//             onClick={() => addToCart(product, 1)}
//             className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
//           >
//             <ShoppingCart className="w-4 h-4" />
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* PRODUCT INFO */}
//       <div className="p-4">
//         {/* Product name can still navigate */}
//         <Link to={`/product/${product.id}`}>
//           <h3 className="font-medium text-gray-800 hover:text-pink-600 mb-1 truncate">
//             {product.name}
//           </h3>
//         </Link>

//         <p className="text-sm text-gray-600 mb-2">{product.category}</p>

//         <div className="flex items-center justify-between mb-2">
//           <Rating rating={product.rating} />
//           <span className="text-xs text-gray-500">
//             {product.reviews} reviews
//           </span>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-lg font-bold text-gray-900">
//             ₹{product.price}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
