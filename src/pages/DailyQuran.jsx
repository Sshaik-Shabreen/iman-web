 import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DailyQuran() {
  const [verse, setVerse] = useState(null);
  const [key, setKey] = useState(0); // for animation reset
  const [loading, setLoading] = useState(true);

  const fetchVerse = async () => {
    try {
      setLoading(true);
      // ✅ Fetch from your backend API
      const res = await fetch("http://localhost:5000/api/dailyquran"); 
      const data = await res.json();

      setVerse(data); // assuming your backend returns { surah, ayah, arabic, translation }
      setKey((prev) => prev + 1); // reset animation
      setLoading(false);
    } catch (error) {
      console.error("Error fetching verse:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div className="min-h-screen bg-[#fef6f2] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#cd8d7a] mb-6">
          Daily Qur’an Verse
        </h1>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <AnimatePresence mode="wait">
            {verse && (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl text-gray-800 mb-4 leading-loose font-arabic">
                  {verse.arabic}
                </p>
                <p className="text-lg text-gray-600 italic mb-6">
                  {verse.translation}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  — Surah {verse.surah}, Ayah {verse.ayah}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <button
          onClick={fetchVerse}
          className="mt-4 px-6 py-2 bg-[#cd8d7a] text-white rounded-xl shadow hover:bg-[#b67864] transition"
        >
          New Verse
        </button>
      </div>
    </div>
  );
}
