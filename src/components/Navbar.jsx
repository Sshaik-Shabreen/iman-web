 import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-8 py-4 transition-colors duration-500 ${
        scrolled
          ? "bg-black/70 text-white backdrop-blur-md" // 🔥 Black transparent with blur
          : "bg-[#d29489] text-white"
      }`}
    >
      {/* Navigation Links */}
      <nav className="flex space-x-6 font-bold">
        {[
          { href: "#about", text: "About Us" },
          { href: "#app", text: "About the App" },
          { href: "#contact-support", text: "Contact & Support" },
        ].map(({ href, text }) => (
          <a
            key={href}
            href={href}
            className={`transition-colors duration-300 hover:text-[#ffd5c2]`}
          >
            {text}
          </a>
        ))}
      </nav>

      {/* Logo */}
      <img
        src="/logo.jpeg"
        alt="Logo"
        className="h-14 w-14 rounded-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            document.getElementById("get-the-app-now")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-[#a5381c] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#8c2f16] transition-colors shadow-md hover:shadow-lg"
        >
          Get the App Now
        </button>

        {/* Social Icons */}
        <div className="flex space-x-3">
          {[
            {
              href: "https://www.facebook.com/ImanIndiaNamazAndIslamicGuidance",
              src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
              alt: "Facebook",
            },
            {
              href: "https://twitter.com/ImanIndiaOrg",
              src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg",
              alt: "Twitter",
            },
            {
              href: "https://www.youtube.com/@ImanIndiaOfficial",
              src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
              alt: "YouTube",
            },
            {
              href: "https://www.instagram.com/imanindiaofficial",
              src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
              alt: "Instagram",
            },
          ].map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src={src}
                alt={alt}
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:brightness-125 invert"
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
