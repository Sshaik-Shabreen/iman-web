 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Core Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutApp from "./components/AboutApp";
import GetTheApp from "./components/GetTheApp";
import ContactSupport from "./components/ContactSupport";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

// ✅ Pages
import DailyQuran from "./pages/DailyQuran";
import Tafsir from "./pages/Tafsir";
import Nasheeds from "./pages/Nasheeds";
import GamesQuiz from "./pages/GamesQuiz";
import WordPuzzle from "./pages/WordPuzzle";
import MemoryMatch from "./pages/MemoryMatch";
import Quiz from "./pages/Quiz";
import CommunityUpdates from "./pages/CommunityUpdates";
import EventCalendar from "./components/EventCalendar"; 
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Router>
      {/* ⬇ Changed background from violet to white */}
      <div className="bg-white text-black min-h-screen flex flex-col">
        {/* Cursor Trail Effect (always active) */}
        <CursorTrail />

        {/* Navbar (always visible) */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* ✅ Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <AboutApp />
                <GetTheApp />
                <ContactSupport />
              </>
            }
          />

          {/* ✅ Quran Section */}
          <Route path="/quran" element={<DailyQuran />} />

          {/* ✅ Tafsir Page */}
          <Route path="/tafsir" element={<Tafsir />} />

          {/* ✅ Nasheeds Page */}
          <Route path="/nasheeds" element={<Nasheeds />} />

          {/* ✅ Games & Quiz Section */}
          <Route path="/games-quiz" element={<GamesQuiz />} />
          <Route path="/games-quiz/word-puzzle" element={<WordPuzzle />} />
          <Route path="/games-quiz/memory-match" element={<MemoryMatch />} />
          <Route path="/games-quiz/quiz" element={<Quiz />} />

          {/* ✅ Community Section */}
          <Route path="/community" element={<CommunityUpdates />} />

          {/* ✅ Events Page */}
          <Route path="/events" element={<EventCalendar />} />

          {/* ✅ Authentication Pages */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* Scroll Button + Footer (always visible) */}
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}
