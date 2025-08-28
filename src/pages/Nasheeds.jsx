 import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Download } from "lucide-react";

export default function Nasheeds() {
  const nasheeds = [
    {
      title: "Nasheed 1",
      artist: "Unknown",
      src: "#", // replace with actual mp3 URL later
    },
    {
      title: "Nasheed 2",
      artist: "Unknown",
      src: "#",
    },
    {
      title: "Nasheed 3",
      artist: "Unknown",
      src: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent animate-pulse">
        <Music className="w-10 h-10 text-green-600" />
        Islamic Nasheeds
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-12 text-center max-w-2xl text-lg">
        Listen to a collection of peaceful Islamic Nasheeds to bring calmness
        and spirituality to your heart.
      </p>

      {/* Nasheed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {nasheeds.map((nasheed, index) => (
          <Card
            key={index}
            className="shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-white"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold text-green-800 mb-1">
                {nasheed.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{nasheed.artist}</p>

              {/* Audio player */}
              <audio
                controls
                className="mt-2 w-full rounded-lg shadow-sm border border-gray-200"
                src={nasheed.src}
              >
                Your browser does not support the audio tag.
              </audio>

              {/* Download Button */}
              <Button
                variant="outline"
                className="mt-5 w-full flex items-center justify-center gap-2 text-green-700 border-green-600 hover:bg-green-50 transition"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
