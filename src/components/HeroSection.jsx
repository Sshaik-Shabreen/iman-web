 import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-[#d29489] overflow-hidden py-20 px-8 flex flex-col md:flex-row items-center justify-between shadow-2xl 
                 rounded-b-[80px]" // ✅ Curves only at bottom
    >
      {/* Decorative background circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-200/10 rounded-full blur-3xl"></div>

      {/* Left text content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl relative z-10"
      >
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Stay Connected with Your Faith and Ummah —{" "}
          <br className="hidden md:block" /> Anywhere, Anytime.
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          Access prayer times, Quran, Hadith, and Islamic resources — all from one place.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
          className="mt-6 px-6 py-3 bg-white text-[#d29489] font-semibold rounded-full shadow-lg hover:bg-yellow-200 hover:text-[#a63f2f] transition"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-10 md:mt-0 relative z-10"
      >
        <img
          src="/mosque.png" // replace with your actual path
          alt="Boy Praying"
          className="w-full max-w-md drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
