import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderProps {
  prompt: string;
  timeLeft: string;
  player1: string;
  player2: string;
  className?: string;
}

export function Header({
  prompt,
  timeLeft,
  player1,
  player2,
  className,
}: HeaderProps) {
  return (
    // Depth 0: Main Header Frame
    <header
      className={cn(
        "flex justify-between items-center px-10 py-5 w-full max-w-[1536px] h-[60px] mx-auto",
        "bg-[#111111] border-[#181818] border",
        className
      )}
    >
      {/* Depth 1: Logo */}
      <Image
        src="/logo.svg"
        alt="UI Royale"
        width={160}
        height={37}
        className="text-white"
      />

      {/* Depth 1: Prompt Frame */}
      <div className="flex items-center justify-center px-2 py-2 w-[514px] h-[36px] bg-[#222222] border border-[#383838] rounded-lg">
        {/* Depth 2: Prompt Text */}
        <p className="text-[#fffeec] text-[20px] leading-[20px] font-normal font-manrope uppercase">
          {prompt}
        </p>
      </div>

      {/* Depth 1: Match Details Frame */}
      <div className="flex justify-between items-center w-[248px]">
        {/* Depth 2: Timer Frame */}
        <div className="flex justify-center items-center w-[88px]">
          {/* Depth 3: Timer Text */}
          <span className="text-white font-manrope font-medium text-[28px] leading-[28px]">
            {timeLeft}
          </span>
        </div>

        {/* Depth 2: Players Frame */}
        <div className="flex items-center space-x-2 w-[108px]">
          {/* Depth 3: Player 1 Frame */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#adaef8]">
            {/* Use player1 as an image */}
            <img
              src={player1}
              alt="Player 1"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Depth 3: VS Text */}
          <span className="text-[#e8e8e8] font-marcellus text-2xl leading-6">
            vs
          </span>

          {/* Depth 3: Player 2 Frame */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#e5e3c9]">
            {/* Depth 4: Player 2 Initial */}
            <span className="text-[#111111] font-manrope font-medium text-base leading-4">
              <img
                src={player2}
                alt="Player 2"
                className="w-full h-full rounded-full object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
