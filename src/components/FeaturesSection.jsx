// import React from "react";
// import { Truck, Shield, CreditCard } from "lucide-react";

// const FeaturesSection = () => {
//   const features = [
//     { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over $50" },
//     { icon: Shield, title: "Secure Payment", desc: "100% secure payment methods" },
//     { icon: CreditCard, title: "Easy Returns", desc: "30-day return policy" },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from--900 to-pink-800 text-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((f, idx) => (
//             <div
//               key={idx}
//               className="text-center p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:from-red-500 hover:to-pink-500">
//                 <f.icon className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">{f.title}</h3>
//               <p className="text-gray-300">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;





// import React from "react";
// import { Truck, Shield, CreditCard } from "lucide-react";

// const FeaturesSection = () => {
//   const features = [
//     { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over $50" },
//     { icon: Shield, title: "Secure Payment", desc: "100% secure payment methods" },
//     { icon: CreditCard, title: "Easy Returns", desc: "30-day return policy" },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((f, idx) => (
//             <div
//               key={idx}
//               className="text-center p-8 bg-white rounded-2xl 
//               transition-all duration-300 shadow-md 
//               hover:shadow-xl hover:-translate-y-2"
//             >
//               {/* Icon Circle */}
//               <div className="w-16 h-16 bg-gradient-to-r 
//               from-pink-500 to-red-500 
//               rounded-full flex items-center 
//               justify-center mx-auto mb-6">
//                 <f.icon className="w-8 h-8 text-white" />
//               </div>

//               <h3 className="text-xl font-bold mb-4 text-gray-800">
//                 {f.title}
//               </h3>

//               <p className="text-gray-600">
//                 {f.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;





import React from "react";
import { Truck, Shield, CreditCard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over $50" },
    { icon: Shield, title: "Secure Payment", desc: "100% secure payment methods" },
    { icon: CreditCard, title: "Easy Returns", desc: "30-day return policy" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {features.map((f, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-2xl 
              transition-all duration-300 shadow-md 
              hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Animated Icon Circle */}
              <div className="w-16 h-16 bg-gradient-to-r 
              from-pink-500 to-red-500 
              rounded-full flex items-center 
              justify-center mx-auto mb-6
              transition-all duration-500
              animate-bounce
              group-hover:rotate-12 group-hover:scale-110">

                <f.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {f.title}
              </h3>

              <p className="text-gray-600">
                {f.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
