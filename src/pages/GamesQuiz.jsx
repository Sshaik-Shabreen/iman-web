 import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function GamesQuiz() {
  return (
    <div className="relative min-h-screen py-12 bg-gradient-to-tr from-blue-50 via-white to-green-50">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%239ca3af' stroke-width='1'%3E%3Cpath d='M100 0L120 40H80zM100 200L120 160H80zM0 100L40 80v40zM200 100L160 80v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          🎮 Games & Quiz
        </h1>

        {/* Game Options */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Memory Match */}
          <Link to="/games-quiz/memory-match">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  🧩 Memory Match
                </h2>
                <p className="text-gray-500 mt-2">
                  Test your memory with pairs of emojis!
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Word Puzzle */}
          <Link to="/games-quiz/word-puzzle">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  ✍️ Word Puzzle
                </h2>
                <p className="text-gray-500 mt-2">
                  Solve puzzles and find hidden words.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Quiz */}
          <Link to="/games-quiz/quiz">
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  📖 Quiz
                </h2>
                <p className="text-gray-500 mt-2">
                  Challenge yourself with fun quizzes!
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
