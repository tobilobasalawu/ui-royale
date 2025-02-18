"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ComponentMenu } from "./ComponentMenu";
import { EditorCanvas } from "./EditorCanvas";
import { CustomizationMenu } from "./CustomizationMenu";

interface EditorLayoutProps {
  className?: string;
}

export function EditorLayout({ className }: EditorLayoutProps) {
  return (
    // Depth 0: Main Frame
    <main
      className={cn(
        "relative flex flex-col md:flex-row justify-between w-full max-w-[1536px] h-[calc(100svh-60px)] mx-auto min-[1537px]:h-[unset] min-[1537px]:min-h-[720px]",
        className
      )}
    >
      {/* Depth 1: Left Menu */}
      <ComponentMenu />
      <div className="w-full h-full bg-[#121212]">
        <EditorCanvas />
      </div>
      <CustomizationMenu />
    </main>
  );
}
