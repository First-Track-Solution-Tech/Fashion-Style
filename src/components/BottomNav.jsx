// import { NavLink } from "react-router-dom";
// import { Home, FileText, Info, Phone, User } from "lucide-react";

// const BottomNav = () => {
//   const baseClass = "flex flex-col items-center text-xs";
//   const activeClass = "text-pink-600";
//   const inactiveClass = "text-gray-500";

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden">

//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `${baseClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Home size={20} />
//         <span>Home</span>
//       </NavLink>

//       <NavLink
//         to="/blog"
//         className={({ isActive }) =>
//           `${baseClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <FileText size={20} />
//         <span>Blog</span>
//       </NavLink>

//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           `${baseClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Info size={20} />
//         <span>About</span>
//       </NavLink>

//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           `${baseClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Phone size={20} />
//         <span>Contact</span>
//       </NavLink>

//       <NavLink
//         to="/login"
//         className={({ isActive }) =>
//           `${baseClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <User size={20} />
//         <span>Login</span>
//       </NavLink>

//     </div>
//   );
// };

// export default BottomNav;




import { NavLink, Link } from "react-router-dom";
import { Home, FileText, Info, Grid, User } from "lucide-react";
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
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t shadow-lg md:hidden z-50 p-4 space-y-3">

          <Link
            to="/category/T-Shirts"
            className="block hover:text-pink-600"
            onClick={() => setOpenCategories(false)}
          >
            T-Shirts
          </Link>

          <Link
            to="/category/Hoodies"
            className="block hover:text-pink-600"
            onClick={() => setOpenCategories(false)}
          >
            Hoodies
          </Link>

          <Link
            to="/category/Jeans"
            className="block hover:text-pink-600"
            onClick={() => setOpenCategories(false)}
          >
            Jeans
          </Link>

          <Link
            to="/category/Ethnic Wear"
            className="block hover:text-pink-600"
            onClick={() => setOpenCategories(false)}
          >
            Ethnic Wear
          </Link>

        </div>
      )}
    </>
  );
};

export default BottomNav;
