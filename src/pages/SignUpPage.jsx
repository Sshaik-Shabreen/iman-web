 import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    console.log("Sign Up Data:", formData);
    alert("✅ Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      {/* Animated Border Wrapper */}
      <div className="relative rounded-2xl p-[3px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-border">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Sign Up
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Animated Border Keyframes */}
      <style>{`
        .animate-border {
          background-size: 300% 300%;
          animation: moveGradient 6s linear infinite;
        }
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
