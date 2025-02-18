"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import

export default function ScoringPage() {
  const [scoreText, setScoreText] = useState("Scoring designs...");
  const router = useRouter(); // ✅ Works in App Router

  useEffect(() => {
    const timer = setTimeout(() => {
      setScoreText("Score 2/100😂");
    }, 3000);

    const redirectTimer = setTimeout(() => {
      router.push("/outcome"); // ✅ Navigation works now
    }, 5000);

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
