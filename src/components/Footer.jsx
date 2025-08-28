import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1d260a] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">EULA</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          Copyright © 2025 Sacred Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
