"use client";

import Link from "next/link";
import { RippleButton } from "@/components/magicui/ripple-button";

export default function OutcomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#111111] p-4">
      <div className="flex flex-col items-center space-y-6 max-w-[400px] w-full">
        <div className="w-full bg-[#1A1A1A] rounded-xl p-6 flex flex-col items-center space-y-6">
          <h1 className="text-white text-4xl font-marcellus flex items-center gap-2">
            You Lost!
            <span
              role="img"
              aria-label="skull"
              className="text-3xl"
            >
              💀
            </span>
          </h1>

          <Link
            href="/"
            className="w-full flex justify-center"
          >
            <RippleButton
              className="font-marcellus px-6 py-3 bg-primary-gradient rounded-md uppercase text-[#111111] text-xl border border-[#9C8BF9] shadow-hero-button transition-transform hover:scale-105"
              rippleColor="#111111"
              duration=".5s"
            >
              RETURN HOME
            </RippleButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
