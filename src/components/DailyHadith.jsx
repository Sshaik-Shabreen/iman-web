import { useState, useEffect } from "react";

const hadiths = [
  {
    id: 1,
    text: "Actions are judged by intentions, and everyone will be rewarded according to what he intended.",
    source: "Sahih Bukhari & Sahih Muslim",
  },
  {
    id: 2,
    text: "The best among you are those who have the best manners and character.",
    source: "Sahih Bukhari",
  },
  {
    id: 3,
    text: "Your smile for your brother is charity.",
    source: "Jami` at-Tirmidhi",
  },
  {
    id: 4,
    text: "None of you will truly believe until you love for your brother what you love for yourself.",
    source: "Sahih Bukhari & Sahih Muslim",
  },
  {
    id: 5,
    text: "The strong person is not the one who can overpower others, but the one who controls himself when angry.",
    source: "Sahih Bukhari & Sahih Muslim",
  },
];

export default function DailyHadith() {
  const [dailyHadith, setDailyHadith] = useState(null);

  useEffect(() => {
    // Pick hadith of the day (based on today's date)
    const today = new Date().getDate();
    const hadithOfTheDay = hadiths[(today - 1) % hadiths.length];
    setDailyHadith(hadithOfTheDay);
  }, []);

  if (!dailyHadith) return null;

  return (
    <section className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto mt-10 border border-violet-500">
      <h2 className="text-2xl font-bold text-violet-700 mb-4 text-center">
        🌙 Daily Hadith
      </h2>
      <p className="text-lg italic text-center">“{dailyHadith.text}”</p>
      <p className="text-sm text-right mt-4 text-gray-600">
        — {dailyHadith.source}
      </p>
    </section>
  );
}
