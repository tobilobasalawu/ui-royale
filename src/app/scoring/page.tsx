"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import

export default function ScoringPage() {
  const [scoreText, setScoreText] = useState("Scoring designs...");
  const router = useRouter(); // ✅ Works in App Router

  const SCORE_TIMEOUT_DURATION = 5000; // Define timeout duration for score
  const REDIRECT_TIMEOUT_DURATION = 10000; // Define timeout duration for redirect

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 20) + 1; // Generate random score between 1 and 20
      setScoreText(`Your Score (By AI): ${randomScore}/100😂`); // Update score text with random score
    }, SCORE_TIMEOUT_DURATION);

    const redirectTimer = setTimeout(() => {
      router.push("/outcome"); // ✅ Navigation works now
    }, REDIRECT_TIMEOUT_DURATION);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <main className="flex items-center justify-center h-screen bg-[#111111]">
      <div className="relative">
        {/* Ripple Effect Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-[#1A1A1A] opacity-10 animate-ping" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#1A1A1A] opacity-15 animate-ping animation-delay-200" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#1A1A1A] opacity-20 animate-ping animation-delay-400" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[#1A1A1A] opacity-25 animate-ping animation-delay-600" />
        </div>

        {/* Scoring Text */}
        <div className="relative z-10 text-center">
          <span className="text-white font-marcellus text-3xl">
            {scoreText}
          </span>
        </div>
      </div>
    </main>
  );
}
