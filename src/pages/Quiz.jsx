 import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "Who was the first prophet in Islam?",
      options: ["Prophet Muhammad (ﷺ)", "Prophet Adam (AS)", "Prophet Ibrahim (AS)", "Prophet Nuh (AS)"],
      answer: "Prophet Adam (AS)",
    },
    {
      question: "Which Surah is known as the 'Heart of the Qur’an'?",
      options: ["Surah Yaseen", "Surah Fatiha", "Surah Ikhlas", "Surah Rahman"],
      answer: "Surah Yaseen",
    },
    {
      question: "How many daily prayers (Salah) are there in Islam?",
      options: ["3", "4", "5", "6"],
      answer: "5",
    },
    {
      question: "In which city was Prophet Muhammad (ﷺ) born?",
      options: ["Madinah", "Jerusalem", "Makkah", "Ta’if"],
      answer: "Makkah",
    },
    {
      question: "What is the holy book of Islam?",
      options: ["Torah", "Bible", "Qur’an", "Injil"],
      answer: "Qur’an",
    },
    {
      question: "Which angel brought revelations to the prophets?",
      options: ["Angel Israfeel", "Angel Jibreel", "Angel Mikail", "Angel Azrael"],
      answer: "Angel Jibreel",
    },
    {
      question: "How many Surahs are in the Qur’an?",
      options: ["100", "110", "114", "120"],
      answer: "114",
    },
    {
      question: "What is the second pillar of Islam?",
      options: ["Salah (Prayer)", "Zakat (Charity)", "Hajj (Pilgrimage)", "Shahadah (Faith)"],
      answer: "Salah (Prayer)",
    },
    {
      question: "Which month do Muslims fast in?",
      options: ["Shawwal", "Muharram", "Ramadan", "Rajab"],
      answer: "Ramadan",
    },
    {
      question: "Where is the Kaaba located?",
      options: ["Jerusalem", "Madinah", "Makkah", "Baghdad"],
      answer: "Makkah",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // ✅ track selected
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    const isCorrect = option === questions[currentQuestion].answer;
    if (isCorrect) setScore(score + 1);

    // Save answer
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentQuestion].question,
        selected: option,
        correct: questions[currentQuestion].answer,
        isCorrect,
      },
    ]);

    // Delay to show colors before moving
    setTimeout(() => {
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
        setSelectedAnswer(null); // reset for next
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📖 Islamic Quiz</h1>

        {showResult ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              🎉 You scored {score} out of {questions.length}
            </h2>

            {/* Wrong answers review */}
            <div className="text-left mt-6">
              <h3 className="text-xl font-bold mb-2">Your Answers:</h3>
              <ul className="space-y-3">
                {userAnswers.map((ans, index) => (
                  <li key={index} className="p-3 border rounded-xl">
                    <p className="font-semibold">{ans.question}</p>
                    <p>
                      Your Answer:{" "}
                      <span className={ans.isCorrect ? "text-green-600" : "text-red-600"}>
                        {ans.selected}
                      </span>
                    </p>
                    {!ans.isCorrect && (
                      <p className="text-green-600">
                        Correct Answer: {ans.correct}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={resetQuiz}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {questions[currentQuestion].question}
            </h2>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonClass = "px-4 py-2 border rounded-xl transition";

                if (selectedAnswer) {
                  if (option === questions[currentQuestion].answer) {
                    buttonClass += " bg-green-200 border-green-500"; // ✅ correct
                  } else if (option === selectedAnswer) {
                    buttonClass += " bg-red-200 border-red-500"; // ❌ wrong
                  } else {
                    buttonClass += " opacity-50"; // dim others
                  }
                } else {
                  buttonClass += " hover:bg-green-100";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedAnswer}
                    className={buttonClass}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
