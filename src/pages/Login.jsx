// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showForgot, setShowForgot] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setError("");
//     setMessage("");
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       await new Promise((res) => setTimeout(res, 1000));

//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (!storedUser || storedUser.email !== formData.email) {
//         setError("Invalid email or password");
//         setLoading(false);
//         return;
//       }

//       navigate("/profile");
//       window.location.reload();
//     } catch {
//       setError("Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPassword = () => {
//     setError("");
//     setMessage("");

//     if (!formData.email) {
//       setError("Please enter your email first");
//       return;
//     }

//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (!storedUser || storedUser.email !== formData.email) {
//       setError("No account found with this email");
//       return;
//     }

//     setMessage("Password reset link has been sent to your email (demo).");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white px-4">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
//           Welcome Back 👋
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Login to continue shopping
//         </p>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded mb-3">
//             {error}
//           </div>
//         )}

//         {message && (
//           <div className="bg-green-100 text-green-700 p-3 rounded mb-3">
//             {message}
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">

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

//           <div className="flex justify-between items-center text-sm">
//             <button
//               type="button"
//               onClick={handleForgotPassword}
//               className="text-pink-600 hover:underline"
//             >
//               Forgot password?
//             </button>

//             <Link to="/register" className="text-gray-600 hover:underline">
//               Create account
//             </Link>
//           </div>

//           <Button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-pink-600 hover:bg-pink-700"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </form>

//         <p className="text-center text-sm mt-6 text-gray-500">
//           New to FashionStyle?{" "}
//           <Link to="/register" className="text-pink-600 font-medium">
//             Sign up
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;







import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({
emailOrPhone: "",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);
};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-white px-4">

<div className="bg-gradient-to-br from-pink-500/20 via-white/20 to-purple-500/20 backdrop-blur-lg border border-pink-200 rounded-2xl p-8 w-full max-w-md shadow-2xl">
    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
      Welcome Back
    </h2>

    <p className="text-center text-gray-400 mb-6">
      Sign in to continue your Fashion Style 
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Email / Phone */}
      <input
        type="text"
        name="emailOrPhone"
        placeholder="Email or Phone"
        value={formData.emailOrPhone}
        onChange={handleChange}
        className="w-full p-3 rounded-lg border border-black-300 focus:outline-none focus:ring-2 focus:ring-pink-500" 
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-black-300 focus:outline-none focus:ring-2 focus:ring-pink-500" />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="flex justify-between text-sm">
        <Link
          to="/forgot-password"
          className="text-pink-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-semibold bg-pink-600 hover:bg-pink-700 transition" >
        Sign In
      </button>
    </form>

    {/* Register */}
    <p className="text-center text-gray-400 mt-6">
      Don't have an account?{" "}
      <Link to="/register" className="text-pink-600 hover:underline">
        Register
      </Link>
    </p>

    {/* Divider */}
    <div className="flex items-center gap-4 my-6">
      <hr className="flex-1 border-gray-700" />
      <span className="text-gray-400 text-sm">OR</span>
      <hr className="flex-1 border-gray-700" />
    </div>

    {/* Google Button */}
    <button className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
      Continue with Google
    </button>

  </div>
</div>


);
};

export default Login;







