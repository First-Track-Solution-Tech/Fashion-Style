import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { Star, X } from "lucide-react";

const Products = () => {
  const [filters, setFilters] = useState({
    size: "",
    color: "",
    price: 2000,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = products.slice(0, 4);

  const filteredProducts = products.filter((product) => {
    return (
      (filters.size === "" || product.sizes?.includes(filters.size)) &&
      (filters.color === "" || product.colors?.includes(filters.color)) &&
      product.price <= filters.price
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-gray-500 mt-2">
          Discover premium fashion curated for your style
        </p>
      </div>

      {/* FEATURED */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Collection ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">All Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* FILTER */}
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
            <ProductFilter filters={filters} setFilters={setFilters} />
          </div>

          {/* GRID */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-5 relative">

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold">
              {selectedProduct.name}
            </h3>

            <p className="text-gray-500 mb-2">
              {selectedProduct.category}
            </p>

            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{selectedProduct.rating}</span>
            </div>

            <p className="text-gray-700 mb-4">
              {selectedProduct.description}
            </p>

            <p className="text-lg font-bold mb-4">
              ₹{selectedProduct.price}
            </p>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;








// import { useState } from "react";
// import { products } from "../data/product";
// import ProductCard from "./ProductCard";
// import ProductFilter from "./ProductFilter";

// const Products = () => {
//   const [filters, setFilters] = useState({
//     size: "",
//     color: "",
//     price: 2000,
//   });

//   // ⭐ Featured Products
//   const featuredProducts = products.slice(0, 4);

//   // 🔍 Filter Logic
//   const filteredProducts = products.filter((product) => {
//     return (
//       (filters.size === "" || product.sizes?.includes(filters.size)) &&
//       (filters.color === "" || product.colors?.includes(filters.color)) &&
//       product.price <= filters.price
//     );
//   });

//   // 👁 QUICK VIEW STATE
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">

//       {/* 🧭 PAGE HEADER */}
//       <div className="mb-10 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Our Products
//         </h1>
//         <p className="text-gray-500 mt-2">
//           Discover premium fashion curated for your style
//         </p>
//       </div>

//       {/* ⭐ FEATURED PRODUCTS */}
//       <section className="mb-14">
//         <h2 className="text-2xl font-semibold mb-6">
//           Featured Collection ✨
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onView={setSelectedProduct}   // 👁 PASS HANDLER
//             />
//           ))}
//         </div>
//       </section>

//       {/* 🛍 MAIN PRODUCTS AREA */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-6">
//           All Products
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//           {/* 🎛 FILTERS */}
//           <div className="md:col-span-1 bg-white rounded-lg shadow p-4 h-fit">
//             <ProductFilter filters={filters} setFilters={setFilters} />
//           </div>

//           {/* 🧺 PRODUCTS GRID */}
//           <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   onView={setSelectedProduct}   // 👁 PASS HANDLER
//                 />
//               ))
//             ) : (
//               <div className="col-span-full text-center py-20">
//                 <p className="text-gray-500 text-lg">
//                   😔 No products match your filters
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= QUICK VIEW MODAL ================= */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
//           <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">

//             {/* ❌ CLOSE */}
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-full h-64 object-cover rounded-xl mb-4"
//             />

//             {/* INFO */}
//             <h2 className="text-2xl font-semibold mb-1">
//               {selectedProduct.name}
//             </h2>

//             <p className="text-sm text-gray-500 mb-2">
//               {selectedProduct.category}
//             </p>

//             {/* DESCRIPTION */}
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               {selectedProduct.description || "No description available."}
//             </p>

//             {/* PRICE */}
//             <p className="text-xl font-bold text-gray-900 mb-4">
//               ₹{selectedProduct.price}
//             </p>

//             {/* BUTTON */}
//             <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;








