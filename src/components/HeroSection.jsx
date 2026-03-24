
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[75vh] md:min-h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/images/Hero-bg.jpg')",
      }}
    >
      {/* Content Wrapper */}
        <div className="w-full px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 break-words">
            <span className="block bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Discover Your
            </span>
            <span className="block text-gray-900">
              Style Statement
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg mb-8 bg-gradient-to-r from-gray-700 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Explore our curated collection of premium fashion wear. From casual
            tees to ethnic elegance, find your perfect fit with exclusive offers.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold
          hover:from-pink-600 hover:to-red-600
          active:from-pink-700 active:to-red-700
          transition-all shadow-lg hover:shadow-xl">
            Shop Now
          </button>
          <button className="px-8 py-3 border border-pink-300 text-pink-700 rounded-lg font-semibold
              hover:bg-pink-100
              active:bg-pink-200
              transition-all">
                View Collection
              </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;






// import React from "react";

// const HeroSection = () => {

//   const handleShopNow = () => {
//     const section = document.getElementById("new-arrivals");

//     if (!section) {
//       console.log("New Arrivals section not found");
//       return;
//     }

//     const yOffset = -80; // Navbar height adjust here
//     const y =
//       section.getBoundingClientRect().top +
//       window.pageYOffset +
//       yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };

//   const handleViewCollection = () => {
//     const section = document.getElementById("sale");

//     if (!section) {
//       console.log("Sale section not found");
//       return;
//     }

//     const yOffset = -80; // Navbar height adjust here
//     const y =
//       section.getBoundingClientRect().top +
//       window.pageYOffset +
//       yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       className="relative w-full min-h-[75vh] md:min-h-[85vh] bg-cover bg-center flex items-center"
//       style={{
//         backgroundImage: "url('/images/Hero-bg.jpg')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content Wrapper */}
//       <div className="relative w-full px-5 sm:px-8 max-w-7xl mx-auto">
//         <div className="max-w-2xl text-white">

//           {/* Heading */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 break-words">
//             <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
//               Discover Your
//             </span>
//             <span className="block text-white">
//               Style Statement
//             </span>
//           </h1>

//           {/* Paragraph */}
//           <p className="text-base sm:text-lg text-gray-200 mb-8">
//             Explore our curated collection of premium fashion wear.
//             From casual tees to ethnic elegance, find your perfect fit
//             with exclusive offers.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 w-full">

//             {/* Shop Now Button */}
//             <button
//                 onClick={handleShopNow}
//                 className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 
//                 text-white rounded-lg font-semibold hover:from-pink-600 
//                 hover:to-red-600 transition-all"
//               >
//                 Shop Now
//             </button>


//             {/* View Collection Button */}
//             <button
//               onClick={handleViewCollection}
//               className="w-full sm:w-auto px-8 py-3 
//               border-2 border-white text-white 
//               rounded-lg font-semibold 
//               hover:bg-white hover:text-red-600 
//               transition-all duration-300"
//             >
//               View Collection
//             </button>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
