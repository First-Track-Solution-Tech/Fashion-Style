
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
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Explore our curated collection of premium fashion wear. From casual
            tees to ethnic elegance, find your perfect fit with exclusive offers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
              Shop Now
            </button>

            <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 transition-all">
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
//   return (
//     <section
//       className="relative w-full overflow-hidden h-[70vh] md:h-[85vh] bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('images/Hero-bg.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-[#fff1f5]/90"></div> */}

//       <div className="relative container mx-auto px-4 py-16 md:py-24">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words">
//           {/* <h1 className="text-5xl md:text-7xl font-bold mb-6"> */}
//             <span className="block bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
//               Discover Your
//             </span>
//             <span className="block text-gray-900">Style Statement</span>
//           </h1>

//           <p className="text-xl text-gray-600 mb-8 max-w-2xl">
//             Explore our curated collection of premium fashion wear. From casual
//             tees to ethnic elegance, find your perfect fit with exclusive offers.
//           </p>



//           <div className="flex flex-col sm:flex-row gap-4 w-full">
//           {/* <div className="flex flex-col sm:flex-row gap-4"> */}
//             <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
//               Shop Now
//             </button>
//             <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 transition-all">
//               View Collection
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






