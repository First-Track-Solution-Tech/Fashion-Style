import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { Star, X } from "lucide-react";

const Category = () => {
  const { categoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* CATEGORY TITLE */}
      <h2 className="text-3xl font-bold mb-8 capitalize">
        {categoryName}
      </h2>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={setSelectedProduct}   // ✅ MOST IMPORTANT LINE
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md rounded-2xl p-5 relative">

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

            {/* INFO */}
            <h3 className="text-xl font-bold mb-1">
              {selectedProduct.name}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
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

export default Category;






// import { useParams } from "react-router-dom";
// import { products } from "../data/product";
// import ProductCard from "../components/ProductCard";

// const Category = () => {
//   const { categoryName } = useParams();

//   const filteredProducts = products.filter(
//     (product) => product.category === categoryName
//   );

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">
//         {categoryName}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Category;
