 import { motion } from "framer-motion";

export default function EventCalendar() {
  const events = [
    {
      title: "Weekly Halaqa",
      date: "2025-08-25",
      description: "Join us for a halaqa on Surah Yaseen after Maghrib.",
      icon: "📖",
    },
    {
      title: "Youth Gathering",
      date: "2025-08-30",
      description: "An Islamic youth gathering with activities and lectures.",
      icon: "👥",
    },
    {
      title: "Community Iftar",
      date: "2025-09-10",
      description: "Monthly community iftar at the local masjid.",
      icon: "🍲",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#fbeae5] via-[#fff] to-[#fce7e1] min-h-screen">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-[#a5381c] flex items-center justify-center gap-3">
          📅 Event Calendar
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Stay updated with our upcoming events and gatherings.  
          Don’t miss out on special occasions!
        </p>
        <div className="mt-5 w-32 h-1 bg-gradient-to-r from-[#a5381c] to-[#d29489] mx-auto rounded-full"></div>
      </div>

      {/* Event Cards */}
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/70 backdrop-blur-lg border border-[#f1d2cb] shadow-xl rounded-2xl p-8 text-center transition transform hover:-translate-y-3 hover:shadow-2xl hover:border-[#a5381c]"
          >
            {/* Icon */}
            <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-125">
              {event.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#a5381c] mb-3">
              {event.title}
            </h3>

            {/* Date Badge */}
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#a5381c] to-[#d29489] text-white text-sm font-semibold shadow-md">
              {event.date}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
