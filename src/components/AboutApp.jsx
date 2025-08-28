 import { FaBookOpen, FaMusic, FaGamepad, FaCalendarAlt, FaPuzzlePiece } from "react-icons/fa";
import { FaMosque } from "react-icons/fa6"; 
import { Link } from "react-router-dom";

export default function AboutApp() {
  const features = [
    { 
      icon: <FaMosque className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Daily Qur’an Verses", 
      text: "Start each day with curated Qur’anic verses.", 
      link: "/quran" 
    },
    { 
      icon: <FaBookOpen className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Tafsir Access", 
      text: "Read tafsir in multiple languages with search tools.", 
      link: "/tafsir" 
    },
    { 
      icon: <FaMusic className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Nasheeds", 
      text: "Listen to inspiring Islamic nasheeds.", 
      link: "/nasheeds" 
    },
    { 
      icon: <FaGamepad className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Games & Quiz", 
      text: "Play Islamic quizzes and earn rewards.", 
      link: "/games-quiz"   
    },
    { 
      icon: <FaPuzzlePiece className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Memory Match", 
      text: "Test your memory with Islamic-themed cards.", 
      link: "/games-quiz/memory-match"   
    },
    { 
      icon: <FaMosque className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Community Updates", 
      text: "Stay informed about events and announcements.", 
      link: "/community"   // ✅ FIXED
    },
    { 
      icon: <FaCalendarAlt className="text-5xl text-[#c94f2c] mx-auto mb-4" />, 
      title: "Event Calendar", 
      text: "Never miss an important event or gathering.", 
      link: "/events" 
    },
  ];

  return (
    <section 
      id="app" 
      className="bg-[#fde6d8] px-6 md:px-20 py-12 rounded-3xl mx-4 md:mx-20 shadow-lg mt-12"
    >
      <h1 className="text-center text-4xl font-bold text-[#c94f2c] mb-6">
        About the App
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
        The <strong>Iman Connect App</strong> is designed to bring our Ummah closer to Allah and one another.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <Link 
            to={feature.link} 
            key={index} 
            className="block cursor-pointer hover:scale-105 transition-transform"
          >
            {feature.icon}
            <h3 className="font-semibold text-[#c94f2c]">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
