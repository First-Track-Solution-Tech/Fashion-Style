import React, { useState } from "react";
import { Star, Heart, Eye, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const FeaturedProducts = ({ products }) => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Trending this week</p>
          </div>

          {!showAllMobile && (
            <button
              onClick={() => setShowAllMobile(true)}
              className="flex items-center text-red-600 font-semibold lg:hidden"
            >
              View All
            <span className="ml-1">{">"}</span>
            </button>
          )}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const hideOnMobile =
              !showAllMobile && index >= 4 ? "hidden lg:block" : "";

            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition relative ${hideOnMobile}`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* WISHLIST & EYE ICON */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition">
                  {/* <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition"> */}
                    {/* Wishlist */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (inWishlist) removeFromWishlist(product.id);
                        else addToWishlist(product);
                      }}
                      className={`p-2 rounded-full shadow-md transition ${
                        inWishlist
                          ? "bg-red-100 text-red-600"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${inWishlist ? "fill-current scale-110" : ""}`} />
                    </button>

                    {/* Eye / Quick View */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="p-2 bg-white text-gray-600 rounded-full shadow-md hover:bg-gray-100"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  {/* ADD TO CART BUTTON */}

                  <div className="absolute bottom-0 left-0 right-0 bg-white lg:transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 p-3">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full py-2 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full py-2 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div> */}
                </div>

                {/* PRODUCT INFO */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-lg font-bold mt-2">₹{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-5 relative animate-scaleIn">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            {/* IMAGE */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            {/* NAME & CATEGORY */}
            <h3 className="text-xl font-bold mb-1">{selectedProduct.name}</h3>
            <p className="text-sm text-gray-500 mb-2 capitalize">{selectedProduct.category}</p>

            {/* RATING & REVIEWS */}
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{selectedProduct.rating}</span>
              <span className="text-xs text-gray-400">({selectedProduct.reviews} reviews)</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{selectedProduct.description}</p>

            {/* COLORS */}
            {selectedProduct.colors && (
              <div className="mb-4">
                <p className="text-sm font-semibold mb-1">Available Colors</p>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color, i) => (
                    <span key={i} className="text-xs px-3 py-1 border rounded-full text-gray-600">{color}</span>
                  ))}
                </div>
              </div>
            )}

            {/* PRICE & STOCK */}
            <p className="text-lg font-bold mb-4">₹{selectedProduct.price}</p>
            {!selectedProduct.inStock && <p className="text-sm text-red-500 mb-3">Out of Stock</p>}

            {/* ADD TO CART IN MODAL */}
            <button
              disabled={!selectedProduct.inStock}
              className={`w-full py-3 rounded-lg text-white transition ${
                selectedProduct.inStock ? "bg-black hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => selectedProduct.inStock && addToCart(selectedProduct, 1)}
            >
              Add to Cart
            </button>

            {/* ADD TO WISHLIST IN MODAL */}
            <button
              onClick={() => {
                if (isInWishlist(selectedProduct.id)) removeFromWishlist(selectedProduct.id);
                else addToWishlist(selectedProduct);
              }}
              className="mt-3 w-full py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" />
              {isInWishlist(selectedProduct.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;







// import React, { useState } from "react";
// import { Star, Heart, ChevronRight, Eye, X } from "lucide-react";

// const FeaturedProducts = ({ products }) => {
//   const [showAllMobile, setShowAllMobile] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <section className="py-16 relative">
//       <div className="container mx-auto px-4">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
//             <p className="text-gray-600">Trending this week</p>
//           </div>

//           {!showAllMobile && (
//             <button
//               onClick={() => setShowAllMobile(true)}
//               className="flex items-center text-red-600 font-semibold lg:hidden"
//             >
//               View All <ChevronRight className="w-4 h-4 ml-1" />
//             </button>
//           )}
//         </div>

//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => {
//             const hideOnMobile =
//               !showAllMobile && index >= 4 ? "hidden lg:block" : "";

//             return (
//               <div
//                 key={product.id}
//                 className={`group bg-white rounded-2xl overflow-hidden shadow
//                 hover:shadow-xl transition ${hideOnMobile}`}
//               >
//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover"
//                   />

//                   {/* 👁 EYE ICON */}
//                   <button
//                     onClick={() => setSelectedProduct(product)}
//                     className="absolute top-4 right-4 bg-white p-2 rounded-full shadow
//                     hover:bg-gray-100"
//                   >
//                     <Eye className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="font-semibold">{product.name}</h3>

//                   <div className="flex items-center gap-1 mt-1">
//                     <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                     <span className="text-sm text-gray-600">
//                       {product.rating}
//                     </span>
//                   </div>

//                   <p className="text-lg font-bold mt-2">
//                     ₹{product.price}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ================= POPUP MODAL ================= */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          
//           <div className="bg-white w-full max-w-md rounded-2xl p-5 relative animate-scaleIn">

//             {/* CLOSE */}
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black"
//             >
//               <X />
//             </button>

//             {/* IMAGE */}
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full h-52 object-cover rounded-xl mb-4"
//             />

//             {/* NAME */}
//             <h3 className="text-xl font-bold mb-1">
//               {selectedProduct.name}
//             </h3>

//             {/* CATEGORY */}
//             <p className="text-sm text-gray-500 mb-2 capitalize">
//               {selectedProduct.category}
//             </p>

//             {/* RATING & REVIEWS */}
//             <div className="flex items-center gap-2 mb-3">
//               <Star className="w-4 h-4 text-yellow-400 fill-current" />
//               <span className="text-sm font-medium">
//                 {selectedProduct.rating}
//               </span>
//               <span className="text-xs text-gray-400">
//                 ({selectedProduct.reviews} reviews)
//               </span>
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//               {selectedProduct.description}
//             </p>

//             {/* COLORS */}
//             {selectedProduct.colors && (
//               <div className="mb-4">
//                 <p className="text-sm font-semibold mb-1">Available Colors</p>
//                 <div className="flex gap-2">
//                   {selectedProduct.colors.map((color, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-3 py-1 border rounded-full text-gray-600"
//                     >
//                       {color}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* PRICE */}
//             <p className="text-lg font-bold mb-4">
//               ₹{selectedProduct.price}
//             </p>

//             {/* STOCK STATUS */}
//             {!selectedProduct.inStock && (
//               <p className="text-sm text-red-500 mb-3">
//                 Out of Stock
//               </p>
//             )}

//             {/* ADD TO CART */}
//             <button
//               disabled={!selectedProduct.inStock}
//               className={`w-full py-3 rounded-lg text-white transition
//               ${
//                 selectedProduct.inStock
//                   ? "bg-black hover:bg-gray-900"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default FeaturedProducts;






