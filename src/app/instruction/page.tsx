"use client";
import { RippleButton } from "@/components/magicui/ripple-button";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateInstruction } from "@/lib/openai";
import { PrimaryCta } from "@/components/landing/primary_cta";

export default function InstructionPage() {
  const router = useRouter();
  const [instruction, setInstruction] = useState<string>(
    "Generating instructions..."
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInstruction() {
      setLoading(true);
      const generatedText = await generateInstruction();
      setInstruction(generatedText);
      setLoading(false);
    }

    fetchInstruction();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">AI - your Design Challenge</h1>
      {loading ? (
        <p className="text-gray-400 text-lg">
          Chill out, Generating Instruction...
        </p>
      ) : (
        <p className="text-xl text-center px-6 max-w-2xl">{instruction}</p>
      )}
      <div className="mb-4" />
      <RippleButton
        className="font-marcellus px-6 py-3 bg-primary-gradient rounded-md uppercase text-[#111111] text-xl border border-[#9C8BF9] shadow-hero-button transition-transform hover:scale-105"
        rippleColor="#111111"
        duration=".5s"
      >
        Start Designing
      </RippleButton>
    </main>
  );
}
