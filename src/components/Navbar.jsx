
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
// import image from "../assets/image.png";
// import { useWishlist } from "../context/WishlistContext";
// import { useCart } from "../context/CartContext";


// // const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
// const Navbar = () => {
//   const { wishlistCount } = useWishlist();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const [openCategories, setOpenCategories] = useState(false);
//   const { getCartCount } = useCart();
//   const cartCount = getCartCount();



//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleUserClick = () => {
//     if (!user) navigate("/login");
//     else setUserMenuOpen(!userMenuOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <header>
      
//       <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

//         {/* 🔔 TOP BANNER */}
//         <div className="bg-pink-500 text-white text-center text-sm p-2">
//           🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
//         </div>

//         {/* 🔹 MAIN NAVBAR */}
//         <div className="flex items-center justify-between px-6 py-2">
//           {/* LOGO */}
         
//             <Link to="/" className="flex items-center gap-3">
//               <img
//                 src="/Logo_design2.png"
//                 alt="FashionStyle Logo"
//                 // className="h-10 md:h-12 lg:h-14 object-contain"

//                 className="h-14 md:h-18 lg:h-20 object-contain"
//               />
//               <span className="text-xl md:text-2xl font-bold tracking-wide
//                 bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500
//                 bg-clip-text text-transparent">
//                   Fashion Style
//                 </span>

               
//               </Link>


//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8">

//             <Link to="/" className="hover:text-pink-600 font-medium">
//               Home
//             </Link>

//             <Link to="/products" className="hover:text-pink-600 font-medium">
//               Products
//             </Link>

        

//             {/* ✅ CATEGORIES (CLICK + HOVER) */}
//             <div className="relative group">
               
//                 <span className="hover:text-pink-600 font-medium cursor-pointer">
//                   Categories
//                 </span>

//                 {/* Dropdown */}
//                 <div
//                   className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg
//                             opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
//                 >
//                   <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">
//                     T-Shirts
//                   </Link>

//                   <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">
//                     Hoodies
//                   </Link>

//                   <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">
//                     Jeans
//                   </Link>

//                   <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">
//                     Ethnic Wear
//                   </Link>
//                 </div>
//               </div>

            
//             <Link to="/new-arrivals" className="hover:text-pink-600 font-medium">
//               New Arrivals
//             </Link>

//             <Link to="/sale" className="hover:text-pink-600 font-medium">
//               Sale
//             </Link>

//             {/* SEARCH */}
//             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search products"
//                 className="bg-transparent ml-2 w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="flex items-center gap-2">

//             {/* WISHLIST */}
//              <Link
//               to="/wishlist"
//               className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//             >
//               <Heart className="w-5 h-5 text-gray-600" />

//               {wishlistCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs
//                                 w-5 h-5 rounded-full flex items-center justify-center">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

           

//             {/* CART */}
//             <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
//                 <ShoppingBag className="w-6 h-6 text-gray-700" />

//                 {cartCount > 0 && (
//                   <span
//                     className="absolute -top-2 -right-2 bg-red-600 text-white text-xs
//                     w-5 h-5 flex items-center justify-center rounded-full font-bold"
//                   >
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>


//             {/* USER */}
//             <div className="relative">
//               <button
//                 onClick={handleUserClick}
//                 className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <User className="w-5 h-5 text-gray-600" />
//               </button>

//               {user && userMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
//                   <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </nav>
//       {/* 📱 MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
//           <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm 
//                           bg-gradient-to-br from-pink-50 via-white to-pink-100 
//                           shadow-2xl flex flex-col transition-all duration-300">

//             {/* Header */}
//             <div className="flex items-center justify-between px-5 py-4 border-b">
//               <span className="text-xl md:text-2xl font-bold tracking-wide
//                 bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500
//                 bg-clip-text text-transparent">
//                   Fashion Style
//                 </span>
              
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             {/* Menu Links */}
//             <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-4 text-gray-800">

//               <Link
//                 to="/"
//                 className="block text-base font-medium hover:text-pink-600"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/products"
//                 className="block text-base font-medium hover:text-pink-600"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Products
//               </Link>

//               {/* Categories */}

//               <div>
//                 <button
//                   onClick={() => setOpenCategories(!openCategories)}
//                   className="flex items-center justify-between w-full text-xs uppercase
//                             tracking-wide text-gray-400 mb-2"
//                 >
//                   Categories
//                   <span className="text-gray-600">
//                     {openCategories ? "−" : "+"}
//                   </span>
//                 </button>

//                 {openCategories && (
//                   <div className="space-y-2 pl-3">
//                     <Link
//                       to="/category/T-Shirts"
//                       className="block text-gray-700 hover:text-pink-600"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       T-Shirts
//                     </Link>

//                     <Link
//                       to="/category/Hoodies"
//                       className="block text-gray-700 hover:text-pink-600"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Hoodies
//                     </Link>

//                     <Link
//                       to="/category/Jeans"
//                       className="block text-gray-700 hover:text-pink-600"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Jeans
//                     </Link>

//                     <Link
//                       to="/category/Ethnic Wear"
//                       className="block text-gray-700 hover:text-pink-600"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Ethnic Wear
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/new-arrivals"
//                 className="block text-base font-medium hover:text-pink-600"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 New Arrivals
//               </Link>

//               <Link
//                 to="/sale"
//                 className="block text-base font-semibold text-pink-600"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Sale 🔥
//               </Link>

//             </nav>
//           </div>
//         </div>
//       )}


//     </header>
//   );
// };

// export default Navbar;











import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import image from "../assets/image.png";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";


// const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
const Navbar = () => {
  const { wishlistCount } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [openCategories, setOpenCategories] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();



  const user = JSON.parse(localStorage.getItem("user"));

  const handleUserClick = () => {
    if (!user) navigate("/login");
    else setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header>
      
      <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

        {/* 🔔 TOP BANNER */}
        <div className="bg-pink-500 text-white text-center text-sm p-2">
          🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
        </div>

        {/* 🔹 MAIN NAVBAR */}
        <div className="flex items-center justify-between px-6 py-2">

        {/* <div className="flex items-center justify-between px-4 py-3"> */}

          {/* LOGO */}
         
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Logo_design2.png"
                alt="FashionStyle Logo"
                // className="h-10 md:h-12 lg:h-14 object-contain"
                className="h-10 md:h-12 lg:h-14"

                // className="h-14 md:h-18 lg:h-20 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold tracking-wide
                bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500
                bg-clip-text text-transparent">
                  Fashion Style
                </span>

               
              </Link>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className="hover:text-pink-600 font-medium">
              Home
            </Link>

            <Link to="/products" className="hover:text-pink-600 font-medium">
              Products
            </Link>

        

            {/* ✅ CATEGORIES (CLICK + HOVER) */}
            <div className="relative group">
               
                <span className="hover:text-pink-600 font-medium cursor-pointer">
                  Categories
                </span>

                {/* Dropdown */}
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                >
                  <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">
                    T-Shirts
                  </Link>

                  <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">
                    Hoodies
                  </Link>

                  <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">
                    Jeans
                  </Link>

                  <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">
                    Ethnic Wear
                  </Link>
                </div>
              </div>

            
            <Link to="/new-arrivals" className="hover:text-pink-600 font-medium">
              New Arrivals
            </Link>

            <Link to="/sale" className="hover:text-pink-600 font-medium">
              Sale
            </Link>

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent ml-2 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2">

            {/* WISHLIST */}
             <Link
              to="/wishlist"
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <Heart className="w-5 h-5 text-gray-600" />

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs
                                w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

           

            {/* CART */}
            <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
                <ShoppingBag className="w-6 h-6 text-gray-700" />

                {cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs
                    w-5 h-5 flex items-center justify-center rounded-full font-bold"
                  >
                    {cartCount}
                  </span>
                )}
              </Link>


            {/* USER */}
            <div className="relative">
              <button
                onClick={handleUserClick}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>

              {user && userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {/* 📱 MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm 
                          bg-gradient-to-br from-pink-50 via-white to-pink-100 
                          shadow-2xl flex flex-col transition-all duration-300">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="text-xl md:text-2xl font-bold tracking-wide
                bg-gradient-to-r from-sky-400 via-pink-400 to-rose-500
                bg-clip-text text-transparent">
                  Fashion Style
                </span>
              
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-4 text-gray-800">

              <Link
                to="/"
                className="block text-base font-medium hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block text-base font-medium hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              {/* Categories */}

              <div>
                <button
                  onClick={() => setOpenCategories(!openCategories)}
                  className="flex items-center justify-between w-full text-xs uppercase
                            tracking-wide text-gray-400 mb-2"
                >
                  Categories
                  <span className="text-gray-600">
                    {openCategories ? "−" : "+"}
                  </span>
                </button>

                {openCategories && (
                  <div className="space-y-2 pl-3">
                    <Link
                      to="/category/T-Shirts"
                      className="block text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      T-Shirts
                    </Link>

                    <Link
                      to="/category/Hoodies"
                      className="block text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hoodies
                    </Link>

                    <Link
                      to="/category/Jeans"
                      className="block text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jeans
                    </Link>

                    <Link
                      to="/category/Ethnic Wear"
                      className="block text-gray-700 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Ethnic Wear
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/new-arrivals"
                className="block text-base font-medium hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>

              <Link
                to="/sale"
                className="block text-base font-semibold text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale 🔥
              </Link>

            </nav>
          </div>
        </div>
      )}


    </header>
  );
};

export default Navbar;










