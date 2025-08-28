 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#d29489] to-[#f5d8cb]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#d29489] mb-6">
          Welcome Back
        </h2>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4"
        >
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d29489]"
          />
        </motion.div>

        {/* Password */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-2"
        >
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d29489]"
          />
        </motion.div>

        {/* Forgot Password */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-right mb-4"
        >
          <Link to="/forgot-password" className="text-sm text-[#d29489] hover:underline">
            Forgot Password?
          </Link>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-6"
        >
          <button className="w-full bg-[#d29489] text-white py-2 px-4 rounded-lg hover:bg-[#c47b71] transition duration-300">
            Login
          </button>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center text-gray-600"
        >
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#d29489] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
