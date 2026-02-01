import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";

const NewArrivals = () => {
  const [sort, setSort] = useState("newest");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const newArrivalProducts = [
    {
      id: 1,
      name: "Oversized Cotton T-Shirt",
      price: 899,
      category: "men",
      rating: 4,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "Women Summer Dress",
      price: 1499,
      category: "women",
      rating: 5,
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 3,
      name: "Stylish Hoodie",
      price: 1999,
      category: "winter",
      rating: 4,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 4,
      name: "Ethnic Kurti",
      price: 1299,
      category: "ethnic",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    },
    {
      id: 5,
      name: "Leather Handbag",
      price: 2499,
      category: "accessories",
      rating: 4,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    },
    {
      id: 6,
      name: "Minimal Watch",
      price: 1799,
      category: "accessories",
      rating: 4,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 7,
      name: "Casual Shirt",
      price: 1199,
      category: "men",
      rating: 3,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    },
    {
      id: 8,
      name: "Women Top",
      price: 999,
      category: "women",
      rating: 4,
      image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7",
    },
    {
      id: 9,
      name: "Running Sneakers",
      price: 2999,
      category: "footwear",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1",
    },
    {
      id: 10,
      name: "Winter Jacket",
      price: 3499,
      category: "winter",
      rating: 4,
      image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    },
    {
      id: 11,
      name: "Ethnic Saree",
      price: 4999,
      category: "ethnic",
      rating: 5,
      image: "https://images.pexels.com/photos/12089493/pexels-photo-12089493.jpeg",
    },
    {
      id: 12,
      name: "Summer Floral Dress",
      price: 1799,
      category: "summer",
      rating: 4,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    },
  ];

  const filteredProducts = useMemo(() => {
    let data = [...newArrivalProducts];

    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);

    return data;
  }, [sort, category]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* HERO */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 text-white p-10 text-center shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            New Arrivals
          </h1>
          <p className="text-lg opacity-90">
            Fresh styles just dropped. Stay ahead of the trend.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="sticky top-0 z-40 py-4 mb-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="flex gap-3 flex-wrap">
              {["all","men","women","accessories","footwear","ethnic","winter","summer"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setVisibleCount(8);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium ${
                    category === cat
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setVisibleCount(8);
              }}
              className="border rounded-lg px-4 py-2 bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((item) => (
            <div
              key={item.id}
              className="hover:scale-105 transition"
            >
              <ProductCard
                product={{ ...item, isNew: true }}
                onView={() => setSelectedProduct(item)}
              />
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((p) => p + 4)}
              className="px-6 py-3 bg-purple-600 text-white rounded-full"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* PRODUCT DETAILS MODAL */}
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

                <p className="text-xl text-purple-600 font-semibold mb-4">
                  ₹{selectedProduct.price}
                </p>

                <p className="text-gray-600 mb-6">
                  Premium quality product with stylish modern design.
                  Perfect for daily & festive wear.
                </p>

                <button className="px-6 py-3 bg-purple-600 text-white rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrivals;






