"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";
import Image from "next/image";
interface LetterSpacingInputProps {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export function LetterSpacingInput({
    value,
    onChange,
    className,
}: LetterSpacingInputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue)) {
            onChange(newValue);
        }
    };

    // Depth 0: Letter Spacing Frame
    return (
        <div
            className={cn(
                "flex-none flex items-center justify-center",
                "w-[60px] h-[26px] px-2",
                "bg-transparent border border-[#383838] rounded-lg",
                className
            )}>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                className="w-full h-full bg-transparent text-[#e8e8e8] text-xs font-satoshi leading-3 text-center focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <Image
                src="/letter_spacing.svg"
                alt="Font size"
                width={16}
                height={16}
            />
        </div>
    );
}
