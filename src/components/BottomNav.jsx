// import { NavLink, Link } from "react-router-dom";
// import { Home, FileText, Info, Grid, User } from "lucide-react";
// import { useState } from "react";
// import { Shirt, ShoppingBag, Sparkles, ShirtIcon } from "lucide-react";
// const BottomNav = () => {
//   const [openCategories, setOpenCategories] = useState(false);

//   const baseClass = "flex flex-col items-center text-xs";
//   const activeClass = "text-pink-600";
//   const inactiveClass = "text-gray-500";

//   return (
//     <>
//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden z-40">

//         {/* Home */}
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `${baseClass} ${isActive ? activeClass : inactiveClass}`
//           }
//         >
//           <Home size={20} />
//           <span>Home</span>
//         </NavLink>

//         {/* Blog */}
//         <NavLink
//           to="/blog"
//           className={({ isActive }) =>
//             `${baseClass} ${isActive ? activeClass : inactiveClass}`
//           }
//         >
//           <FileText size={20} />
//           <span>Blog</span>
//         </NavLink>

//         {/* Categories Button */}
//         <button
//           onClick={() => setOpenCategories(!openCategories)}
//           className="flex flex-col items-center text-xs text-gray-500"
//         >
//           <Grid size={20} />
//           <span>Categories</span>
//         </button>

//         {/* About */}
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `${baseClass} ${isActive ? activeClass : inactiveClass}`
//           }
//         >
//           <Info size={20} />
//           <span>About</span>
//         </NavLink>

//         {/* Login */}
//         <NavLink
//           to="/login"
//           className={({ isActive }) =>
//             `${baseClass} ${isActive ? activeClass : inactiveClass}`
//           }
//         >
//           <User size={20} />
//           <span>Login</span>
//         </NavLink>
//       </div>

//       {/* Categories Popup */}
//       {openCategories && (
//         <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-t from-pink-50 via-white to-pink-100 border-t border-pink-200 shadow-lg md:hidden z-50 p-4 space-y-3 rounded-t-2xl">

//         <Link
//           to="/category/T-Shirts"
//           className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition"
//           onClick={() => setOpenCategories(false)}
//         >
//           <Shirt size={16} />
//           <span>T-Shirts</span>
//         </Link>
      
//         <Link
//           to="/category/Hoodies"
//           className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition"
//           onClick={() => setOpenCategories(false)}
//         >
//           <Hoodie size={16} />
//           <span>Hoodies</span>
//         </Link>
      
//         <Link
//           to="/category/Jeans"
//           className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition"
//           onClick={() => setOpenCategories(false)}
//         >
//           <ShoppingBag size={16} />
//           <span>Jeans</span>
//         </Link>
      
//         <Link
//           to="/category/Ethnic Wear"
//           className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition"
//           onClick={() => setOpenCategories(false)}
//         >
//           <Sparkles size={16} />
//           <span>Ethnic Wear</span>
//         </Link>
      
//       </div>
//       )}
//     </>
//   );
// };

// export default BottomNav;





import { NavLink, Link } from "react-router-dom";
import {
  Home,
  FileText,
  Info,
  Grid,
  User,
  Shirt,
  ShoppingBag,
  Sparkles,
  Package
} from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const [openCategories, setOpenCategories] = useState(false);

  const baseClass = "flex flex-col items-center text-xs";
  const activeClass = "text-pink-600";
  const inactiveClass = "text-gray-500";

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden z-40">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        {/* Blog */}
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <FileText size={20} />
          <span>Blog</span>
        </NavLink>

        {/* Categories Button */}
        <button
          onClick={() => setOpenCategories(!openCategories)}
          className="flex flex-col items-center text-xs text-gray-500"
        >
          <Grid size={20} />
          <span>Categories</span>
        </button>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <Info size={20} />
          <span>About</span>
        </NavLink>

        {/* Login */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          <User size={20} />
          <span>Login</span>
        </NavLink>
      </div>

      {/* Categories Popup */}
      {openCategories && (
  <div className="fixed bottom-16 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50 p-5 rounded-t-3xl">

    <h3 className="text-sm font-semibold text-gray-600 mb-4 text-center">
      Shop by Category
    </h3>

    <div className="grid grid-cols-4 gap-4 text-center">

      <Link
        to="/category/T-Shirts"
        onClick={() => setOpenCategories(false)}
        className="flex flex-col items-center gap-1"
      >
        <div className="bg-pink-100 p-3 rounded-full">
          <Shirt size={20} className="text-pink-600" />
        </div>
        <span className="text-xs text-gray-700">T-Shirts</span>
      </Link>

      <Link
        to="/category/Hoodies"
        onClick={() => setOpenCategories(false)}
        className="flex flex-col items-center gap-1"
      >
        <div className="bg-purple-100 p-3 rounded-full">
          <Package size={20} className="text-purple-600" />
        </div>
        <span className="text-xs text-gray-700">Hoodies</span>
      </Link>

      <Link
        to="/category/Jeans"
        onClick={() => setOpenCategories(false)}
        className="flex flex-col items-center gap-1"
      >
        <div className="bg-blue-100 p-3 rounded-full">
          <ShoppingBag size={20} className="text-blue-600" />
        </div>
        <span className="text-xs text-gray-700">Jeans</span>
      </Link>

      <Link
        to="/category/Ethnic Wear"
        onClick={() => setOpenCategories(false)}
        className="flex flex-col items-center gap-1"
      >
        <div className="bg-yellow-100 p-3 rounded-full">
          <Sparkles size={20} className="text-yellow-600" />
        </div>
        <span className="text-xs text-gray-700">Ethnic</span>
      </Link>

    </div>

  </div>
)}
      {/* {openCategories && (
        <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-t from-pink-50 via-white to-pink-100 border-t border-pink-200 shadow-lg md:hidden z-50 p-4 space-y-3 rounded-t-2xl">

        <Link
          to="/category/T-Shirts"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-100 transition"
          onClick={() => setOpenCategories(false)}
        >
          <div className="bg-pink-100 p-2 rounded-full">
            <Shirt size={16} className="text-pink-600" />
          </div>
          <span className="text-gray-700 font-medium">T-Shirts</span>
        </Link>
      
        <Link
          to="/category/Hoodies"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-100 transition"
          onClick={() => setOpenCategories(false)}
        >
          <div className="bg-purple-100 p-2 rounded-full">
            <Package size={16} className="text-purple-600" />
          </div>
          <span className="text-gray-700 font-medium">Hoodies</span>
        </Link>
      
        <Link
          to="/category/Jeans"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-100 transition"
          onClick={() => setOpenCategories(false)}
        >
          <div className="bg-blue-100 p-2 rounded-full">
            <ShoppingBag size={16} className="text-blue-600" />
          </div>
          <span className="text-gray-700 font-medium">Jeans</span>
        </Link>
      
        <Link
          to="/category/Ethnic Wear"
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-100 transition"
          onClick={() => setOpenCategories(false)}
        >
          <div className="bg-yellow-100 p-2 rounded-full">
            <Sparkles size={16} className="text-yellow-600" />
          </div>
          <span className="text-gray-700 font-medium">Ethnic Wear</span>
        </Link>
      
      </div>
      )} */}
    </>
  );
};

export default BottomNav;