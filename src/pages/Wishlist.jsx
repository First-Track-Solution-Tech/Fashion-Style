import { Trash2, Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Heart className="text-pink-500" /> My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty 💔</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-pink-600 font-bold">₹{item.price}</p>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="flex items-center gap-2 text-red-500 mt-2"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
