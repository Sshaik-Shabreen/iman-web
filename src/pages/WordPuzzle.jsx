 import { useState } from "react";

export default function WordPuzzle() {
  const puzzles = [
    { scrambled: "RQNAU", correct: "QURAN", hint: "The holy book of Islam" },
    { scrambled: "KBAAA", correct: "KAABA", hint: "The sacred cube in Makkah" },
    { scrambled: "JHAH", correct: "HAJJ", hint: "Pilgrimage to Makkah" },
    { scrambled: "LMAS", correct: "ISLAM", hint: "The religion of peace" },
    { scrambled: "HAMZNAO", correct: "RAMAZAN", hint: "Month of fasting" },
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * puzzles.length)
  );
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const currentPuzzle = puzzles[currentIndex];

  const nextPuzzle = () => {
    setAnswer("");
    setResult("");
    const newIndex = Math.floor(Math.random() * puzzles.length);
    setCurrentIndex(newIndex);
  };

  const checkAnswer = () => {
    if (answer.trim().toUpperCase() === currentPuzzle.correct) {
      setResult("✅ Correct! Moving to next puzzle...");
      setTimeout(() => {
        nextPuzzle();
      }, 1500); // wait 1.5s before switching
    } else {
      setResult("❌ Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🧩 Word Puzzle</h2>
      <p className="mb-6 text-gray-600">
        Solve Islamic word puzzles! Unscramble the word below 👇
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <p className="font-semibold">Unscramble this word:</p>
        <h3 className="text-xl font-mono my-3">{currentPuzzle.scrambled}</h3>
        <p className="text-sm text-gray-500">Hint: {currentPuzzle.hint}</p>

        {/* Input */}
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer"
          className="mt-4 px-4 py-2 border rounded-lg w-full text-center"
        />

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={checkAnswer}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Check Answer
          </button>
        </div>

        {/* Result */}
        {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
      </div>
    </div>
  );
}
