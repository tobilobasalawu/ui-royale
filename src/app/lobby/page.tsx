"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RippleButton } from "@/components/magicui/ripple-button";

export default function LobbyPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [opponentReady, setOpponentReady] = useState(false);
  const [lobbyCode, setLobbyCode] = useState<string | null>(null);

  // Detect invite link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("lobbyCode");

    if (code) {
      setLobbyCode(code);
      // Simulate opponent joining after 1 second (for demo purposes)
      setTimeout(() => setOpponentReady(true), 1000);
    }
  }, []);

  // Redirect to /editor after 3 seconds when opponent is ready
  useEffect(() => {
    if (opponentReady) {
      setTimeout(() => {
        router.push("/instruction");
      }, 2000);
    }
  }, [opponentReady, router]);

  // Timer Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <main className="flex flex-col h-screen bg-[#111111]">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-[#282828]">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="UI Royale"
            width={120}
            height={28}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white text-sm">
            The invite link expires in 5 minutes
          </span>
          <span className="text-white font-medium">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Waiting Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Ripple Effect Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-[#1A1A1A] opacity-10 animate-ping" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#1A1A1A] opacity-20 animate-ping animation-delay-200" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#1A1A1A] opacity-30 animate-ping animation-delay-400" />
          </div>

          {/* Lobby UI */}
          <div className="relative z-10 text-center">
            <RippleButton
              className="text-white font-marcellus text-2xl bg-transparent"
              rippleColor="rgba(255, 255, 255, 0.1)"
              disabled
            >
              <div className="flex flex-col gap-2 border-none">
                {opponentReady ? (
                  <span className="text-green-500">Your opponent is ready</span>
                ) : (
                  <>
                    <span>Waiting for</span>
                    <span>opponent...</span>
                  </>
                )}
              </div>
            </RippleButton>

            {lobbyCode && (
              <p className="text-gray-500 mt-4 text-sm">
                Lobby Code: {lobbyCode}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
