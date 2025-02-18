// app/editor/page.tsx (Protected Page)
"use client";
import { EditorLayout } from "@/components/editor/EditorLayout";
import { Header } from "@/components/editor/Header";
import { useState, useEffect } from "react";

export default function EditorPage() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // New effect to redirect when timeLeft reaches zero
  useEffect(() => {
    if (timeLeft === 0) {
      window.location.href = "/scoring"; // Redirect to scoring page
    }
  }, [timeLeft]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        prompt="Design Challenge"
        timeLeft={`${Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`}
        player1={"/defaultImage.png"}
        player2="/defaultImage.png"
      />
      <EditorLayout />
    </div>
  );
}
