import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // 🔐 SAVE TO localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);








// import React, { createContext, useState, useContext, useEffect } from 'react';

// const WishlistContext = createContext();

// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error('useWishlist must be used within a WishlistProvider');
//   }
//   return context;
// };

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState(() => {
//     const savedWishlist = localStorage.getItem('fashionstore_wishlist');
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('fashionstore_wishlist', JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToWishlist = (product) => {
//     setWishlistItems(prevItems => {
//       if (prevItems.find(item => item.id === product.id)) {
//         return prevItems;
//       }
//       return [...prevItems, product];
//     });
//   };

//   const removeFromWishlist = (productId) => {
//     setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const isInWishlist = (productId) => {
//     return wishlistItems.some(item => item.id === productId);
//   };

//   const clearWishlist = () => {
//     setWishlistItems([]);
//   };

//   const value = {
//     wishlistItems,
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//     clearWishlist,
//   };

//   return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
// };