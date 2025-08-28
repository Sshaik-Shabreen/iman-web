 import { useState, useEffect } from "react";

// ✅ Emoji cards
const cardEmojis = [
  { text: "🌙", matched: false },
  { text: "⭐", matched: false },
  { text: "☪️", matched: false },
  { text: "📖", matched: false },
  { text: "❤️", matched: false },
  { text: "🕌", matched: false },
];

export default function MemoryMatch() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // ✅ Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardEmojis, ...cardEmojis]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
    setGameWon(false);
  };

  // ✅ Handle choice
  const handleChoice = (card) => {
    if (!disabled && !card.matched) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  // ✅ Compare choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.text === choiceTwo.text) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.text === choiceOne.text ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // ✅ Check win
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // ✅ Start new game on load
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 drop-shadow-lg">
        🧠 Memory Match Game
      </h1>

      {gameWon ? (
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4 animate-bounce">
            🎉 You Won in {turns} turns!
          </h2>
          <button
            onClick={shuffleCards}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            Play Again 🔄
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={shuffleCards}
            className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            New Game
          </button>

          {/* ✅ Cards grid */}
          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
            {cards.map((card) => {
              const isFlipped =
                card === choiceOne || card === choiceTwo || card.matched;
              return (
                <div
                  key={card.id}
                  onClick={() => handleChoice(card)}
                  className={`cursor-pointer rounded-2xl shadow-md p-6 flex items-center justify-center text-4xl font-bold transform transition duration-500 ${
                    isFlipped
                      ? "bg-white text-indigo-700 scale-105"
                      : "bg-gradient-to-r from-indigo-400 to-purple-500 text-white hover:scale-105"
                  }`}
                >
                  {isFlipped ? card.text : "❓"}
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-lg font-semibold text-gray-800">
            Turns: <span className="text-indigo-600">{turns}</span>
          </p>
        </>
      )}
    </div>
  );
}
