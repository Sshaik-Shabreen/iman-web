import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#d29489] sticky top-0 z-50">
        {/* Left nav links */}
        <nav className="flex space-x-6 text-white font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/app" className="hover:underline">About the App</Link>
          <Link to="/contact" className="hover:underline">Contact & Support</Link>
        </nav>

        {/* Logo */}
        <img
          src="/logo.jpeg"
          alt="Logo"
          className="h-14 w-14 rounded-full object-cover"
        />

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#a5381c] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#8c2f16]">
            Get the App Now
          </button>
          <div className="flex space-x-3">
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" className="h-5 w-5" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" className="h-5 w-5" alt="X" /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" className="h-5 w-5" alt="YouTube" /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" className="h-5 w-5" alt="Instagram" /></a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <Outlet />
    </div>
  );
}
