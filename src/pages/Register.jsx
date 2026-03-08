// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError("Please fill in all fields");
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       setLoading(false);
//       return;
//     }

//     try {
//       await new Promise((res) => setTimeout(res, 1000));

//       const userData = {
//         name: formData.name,
//         email: formData.email,
//         token: `user-token-${Date.now()}`,
//       };

//       localStorage.setItem("user", JSON.stringify(userData));
//       navigate("/profile");
//       window.location.reload();
//     } catch {
//       setError("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
//           Create Account ✨
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Join FashionStyle today
//         </p>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div>
//             <label className="text-sm text-gray-600">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="John Doe"
//               className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="you@example.com"
//               className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="••••••••"
//               className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="••••••••"
//               className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           </div>

//           <Button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-pink-600 hover:bg-pink-700"
//           >
//             {loading ? "Creating account..." : "Create Account"}
//           </Button>
//         </form>

//         <p className="text-center text-sm mt-6 text-gray-500">
//           Already have an account?{" "}
//           <Link to="/login" className="text-pink-600 font-medium">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;








import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const [formData, setFormData] = useState({
name: "",
phone: "",
email: "",
password: "",
confirmPassword: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();


if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match");
  return;
}

localStorage.setItem("user", JSON.stringify(formData));

alert("Account Created Successfully");


};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white px-4">

  <div className="bg-gradient-to-br from-pink-500/20 via-white/20 to-purple-500/20 backdrop-blur-lg border border-pink-200 rounded-2xl p-8 w-full max-w-md shadow-2xl">

    <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
      Create Your Account
    </h2>

    <p className="text-center text-gray-400 mb-6">
      Join FashionStyle and elevate your style game
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Full Name */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-pink-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Phone */}
      <div className="flex bg-pink-800 rounded-lg overflow-hidden">

        <select className="bg-pink-800 text-white px-3 outline-none">
          <option>+91 (India)</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="flex-1 p-3 bg-pink-800 text-white placeholder-gray-400 outline-none"
        />

      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-pink-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-pink-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-pink-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-3 text-gray-400"
        >
          {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
      >
        Create Account
      </button>

    </form>

    {/* Login */}
    <p className="text-center text-gray-400 mt-6">
      Already have an account?{" "}
      <Link to="/login" className="text-pink-600 font-medium">
        Login
      </Link>
    </p>

  </div>
</div>


);
};

export default Register;
