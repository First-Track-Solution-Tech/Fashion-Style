// import { NavLink } from "react-router-dom";
// import { Home, Search, Heart, ShoppingCart, User } from "lucide-react";

// const BottomNav = () => {
//   const linkClass =
//     "flex flex-col items-center text-xs";

//   const activeClass = "text-pink-600";
//   const inactiveClass = "text-gray-500";

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2">
      
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `${linkClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Home size={20} />
//         <span>Home</span>
//       </NavLink>

//       <NavLink
//         to="/search"
//         className={({ isActive }) =>
//           `${linkClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Search size={20} />
//         <span>Search</span>
//       </NavLink>

//       <NavLink
//         to="/wishlist"
//         className={({ isActive }) =>
//           `${linkClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <Heart size={20} />
//         <span>Wishlist</span>
//       </NavLink>

//       <NavLink
//         to="/cart"
//         className={({ isActive }) =>
//           `${linkClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <ShoppingCart size={20} />
//         <span>Cart</span>
//       </NavLink>

//       <NavLink
//         to="/profile"
//         className={({ isActive }) =>
//           `${linkClass} ${isActive ? activeClass : inactiveClass}`
//         }
//       >
//         <User size={20} />
//         <span>Profile</span>
//       </NavLink>
//     </div>
//   );
// };

// export default BottomNav;





import { NavLink } from "react-router-dom";
import { Home, FileText, Info, Phone, User } from "lucide-react";

const BottomNav = () => {
  const baseClass = "flex flex-col items-center text-xs";
  const activeClass = "text-pink-600";
  const inactiveClass = "text-gray-500";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <Home size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <FileText size={20} />
        <span>Blog</span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <Info size={20} />
        <span>About</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <Phone size={20} />
        <span>Contact</span>
      </NavLink>

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
  );
};

export default BottomNav;
