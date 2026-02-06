import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";


const Sale = () => {
  /* ================= LOCAL SALE PRODUCTS ================= */
  const saleProducts = [
    {
      id: 101,
      name: "Denim Jacket",
      price: 2499,
      originalPrice: 3499,
      discount: 30,
      category: "men",
      rating: 4,
      reviews: 120,
      isOnSale: true,
      image:
        "https://images.pexels.com/photos/7582114/pexels-photo-7582114.jpeg",
      sizes: ["S", "M", "L"],
    },
    {
      id: 102,
      name: "Women Party Dress",
      price: 1899,
      originalPrice: 2999,
      discount: 35,
      category: "women",
      rating: 5,
      reviews: 98,
      isOnSale: true,
      image:
        "https://images.pexels.com/photos/31041710/pexels-photo-31041710.jpeg",
      sizes: ["M", "L"],
    },
    {
      id: 103,
      name: "Running Sneakers",
      price: 2799,
      originalPrice: 3999,
      discount: 30,
      category: "footwear",
      rating: 4,
      reviews: 76,
      isOnSale: true,
      image:
        "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
      sizes: ["7", "8", "9", "10"],
    },
    {
      id: 104,
      name: "Leather Handbag",
      price: 2199,
      originalPrice: 3199,
      discount: 31,
      category: "accessories",
      rating: 4,
      reviews: 64,
      isOnSale: true,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    },
  ];

  /* ================= STATE ================= */
  const [sort, setSort] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();


  /* ================= SORT ================= */
  const sortedProducts = useMemo(() => {
    let data = [...saleProducts];
    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);
    if (sort === "discount")
      data.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    return data;
  }, [sort]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* ================= SALE BANNER ================= */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-10 text-white grid md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">🔥 Mega Sale</h1>
            <p className="text-lg mb-4">
              Up to <span className="font-bold">50% OFF</span> on trending fashion
            </p>
            <p className="text-sm opacity-90 mb-4">
              ⏰ Offer ends soon — don’t miss out!
            </p>
            <button className="bg-white text-red-500 font-semibold px-6 py-2 rounded-lg hover:scale-105 transition">
              Shop Now
            </button>
          </div>
          <div className="hidden md:flex justify-end text-7xl font-extrabold opacity-20">
            SALE
          </div>
        </div>
      </div>

      {/* ================= HEADER + SORT ================= */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Sale Products</h2>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort by</option>
          <option value="discount">Biggest Discount</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={(item) => setSelectedProduct(item)}
          />
        ))}
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white max-w-4xl w-full p-6 rounded-2xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full rounded-xl"
              />

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {selectedProduct.name}
                </h2>

                <p className="text-xl text-red-500 font-semibold mb-2">
                  ₹{selectedProduct.price}
                  <span className="text-sm line-through text-gray-400 ml-2">
                    ₹{selectedProduct.originalPrice}
                  </span>
                </p>

                <p className="text-gray-600 mb-4">
                  Stylish premium product with top quality material.
                  Perfect choice for modern fashion lovers.
                </p>

                {selectedProduct.sizes && (
                  <div className="flex gap-2 mb-6">
                    {selectedProduct.sizes.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 border rounded text-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="px-6 py-3 bg-black text-white rounded-lg"
                  >
                    Add to Cart
                  </button>


                {/* <button className="px-6 py-3 bg-black text-white rounded-lg">
                  Add to Cart
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sale;




// import React, { useState } from "react";
// import { products } from "../data/product";
// import ProductCard from "../components/ProductCard";

// const Sale = () => {
//   const saleItems = products.filter((item) => item.isOnSale);

//   // fallback so page never looks empty
//   const displayProducts =
//     saleItems.length > 0 ? saleItems : products.slice(0, 8);

//   const [sort, setSort] = useState("");

//   const sortedProducts = [...displayProducts].sort((a, b) => {
//     if (sort === "low") return a.price - b.price;
//     if (sort === "high") return b.price - a.price;
//     if (sort === "discount") return (b.discount || 0) - (a.discount || 0);
//     return 0;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-10">
//       {/* ================= SALE BANNER ================= */}
//       <div className="max-w-7xl mx-auto mb-12">
//         <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-10 text-white grid md:grid-cols-2 items-center">
//           <div>
//             <h1 className="text-4xl font-bold mb-2">🔥 Mega Sale</h1>
//             <p className="text-lg mb-4">
//               Up to <span className="font-bold">50% OFF</span> on trending fashion
//             </p>
//             <p className="text-sm opacity-90 mb-4">
//               ⏰ Offer ends soon — don’t miss out!
//             </p>
//             <button className="bg-white text-red-500 font-semibold px-6 py-2 rounded-lg hover:scale-105 transition">
//               Shop Now
//             </button>
//           </div>

//           <div className="hidden md:flex justify-end text-7xl font-extrabold opacity-20">
//             SALE
//           </div>
//         </div>
//       </div>

//       {/* ================= HEADER + SORT ================= */}
//       <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between mb-6 gap-4">
//         <h2 className="text-2xl font-semibold">
//           {saleItems.length > 0 ? "Sale Products" : "Trending Deals"}
//         </h2>

//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
//         >
//           <option value="">Sort by</option>
//           <option value="discount">Biggest Discount</option>
//           <option value="low">Price: Low to High</option>
//           <option value="high">Price: High to Low</option>
//         </select>
//       </div>

//       {/* ================= PRODUCTS GRID ================= */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {sortedProducts.map((product) => (
//           <div key={product.id} className="relative">
//             {product.discount && (
//               <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
//                 {product.discount}% OFF
//               </span>
//             )}
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>

//       {/* ================= BENEFITS ================= */}
//       {/* <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-6 text-center">
//         <div className="bg-white p-6 rounded-xl shadow">
//           🚚
//           <h4 className="font-semibold mt-2">Free Shipping</h4>
//           <p className="text-gray-500 text-sm">On orders above ₹999</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           💳
//           <h4 className="font-semibold mt-2">Secure Payment</h4>
//           <p className="text-gray-500 text-sm">100% safe checkout</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           ↩️
//           <h4 className="font-semibold mt-2">Easy Returns</h4>
//           <p className="text-gray-500 text-sm">7-day return policy</p>
//         </div>
//       </div> */}

//       {/* ================= EXTRA OFFER ================= */}
//       <div className="max-w-7xl mx-auto mt-16 bg-white rounded-2xl p-10 text-center shadow">
//         <h3 className="text-2xl font-bold mb-2">🎁 Extra 10% Off</h3>
//         <p className="text-gray-600 mb-6">
//           Subscribe now & unlock exclusive discounts
//         </p>
//         <button className="bg-black text-white px-8 py-3 rounded-lg hover:scale-105 transition">
//           Get Extra 10% Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sale;
