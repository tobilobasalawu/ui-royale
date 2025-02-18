"use client";

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
        <p className="text-gray-400 text-lg">Loading...</p>
      ) : (
        <p className="text-xl text-center px-6 max-w-2xl">{instruction}</p>
      )}
      <div className="mb-4" />
      <PrimaryCta
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg"
        onClick={() => router.push("/editor")}
      >
        Start Designing
      </PrimaryCta>
    </main>
  );
}
