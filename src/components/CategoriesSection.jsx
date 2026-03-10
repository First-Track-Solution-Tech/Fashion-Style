import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesSection = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const bgColors = [
    "bg-pink-100 border-pink-400",
    "bg-blue-100 border-blue-400",
    "bg-purple-100 border-purple-400",
    "bg-green-100 border-green-400",
    "bg-yellow-100 border-yellow-400",
    "bg-red-100 border-red-400",
  ];
   
  const handleCategoryClick = (category) => {
    setTimeout(() => {
      navigate(`/category/${category.name}`);
    }, 150); // small delay for animation
  };
  // const handleCategoryClick = (category, index) => {
  //   setActiveIndex(index);

  //   // go to category page
  //   navigate(`/category/${category.name}`);
  // };
  
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our exclusive collections
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {categories.map((category, index) => {
            const colorClass = bgColors[index % bgColors.length];

            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`p-6 rounded-2xl border cursor-pointer text-center
                  flex flex-col items-center justify-center aspect-square
                  ${colorClass}
                  transition-transform duration-200
                  hover:scale-105 hover:shadow-lg
                  active:scale-90`}
                // onClick={() => handleCategoryClick(category, index)}
                // className={`p-6 rounded-2xl border cursor-pointer text-center
                //   flex flex-col items-center justify-center aspect-square
                //   ${colorClass}
                //   transition-all duration-300
                //   hover:scale-105 hover:shadow-lg
                //   active:scale-95 active:shadow-md`}


                // className={`group p-6 rounded-2xl border cursor-pointer text-center
                //   transition-all duration-300 flex flex-col items-center justify-center
                //   aspect-square
                //   ${colorClass} hover:shadow-lg hover:scale-105`}
              >
                <div className="text-4xl mb-3 text-gray-700">
                  {category.icon}
                </div>

                <h3 className="font-semibold text-gray-800 text-sm">
                  {category.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {category.count} items
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;