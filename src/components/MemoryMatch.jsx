import React from "react";

export default function MemoryMatch() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">🧠 Memory Match</h1>
      <p className="text-gray-700 mb-6">
        Match cards with Islamic terms and their meanings!
      </p>

      {/* Example game board placeholder */}
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        <div className="p-6 bg-green-200 rounded-lg shadow-md">📖 Quran</div>
        <div className="p-6 bg-green-200 rounded-lg shadow-md">Prayer</div>
        <div className="p-6 bg-green-200 rounded-lg shadow-md">Fasting</div>
        <div className="p-6 bg-green-200 rounded-lg shadow-md">Hajj</div>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        (Game logic for flipping & matching can be added here)
      </p>
    </div>
  );
}
