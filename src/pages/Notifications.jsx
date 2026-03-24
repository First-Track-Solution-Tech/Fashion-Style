import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, text: "🎉 30% OFF on New Arrivals!", time: "2 hours ago" },
    { id: 2, text: "🛍 Your wishlist item is on sale!", time: "5 hours ago" },
    { id: 3, text: "🚚 Order #1234 has been shipped", time: "1 day ago" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Notifications
      </h1>

      <div className="space-y-4">

        {notifications.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-sm hover:bg-gray-50"
          >
            <p className="text-gray-800">{item.text}</p>
            <span className="text-sm text-gray-500">
              {item.time}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Notifications;