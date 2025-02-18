"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LineHeightInputProps {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export function LineHeightInput({
    value,
    onChange,
    className,
}: LineHeightInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue)) {
            onChange(newValue);
        }
    };

    return (
        <div
            className={cn(
                "flex-none flex items-center h-[26px] w-[60px] px-[3px] py-[2px] gap-1",
                "border border-[#383838] rounded-lg bg-transparent",
                className
            )}>
            {/* Depth 1: Text Frame */}
            <div className="flex items-center justify-center w-[34px] h-3">
                {/* Depth 2: Input Text */}
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    className="w-[34px] h-3 bg-transparent text-[#e8e8e8] text-xs font-satoshi leading-3 text-center focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min="0"
                    step="0.1"
                />
            </div>

            {/* Depth 1: Line Height Icon Frame */}
            <div className="w-4 h-4">
                <Image
                    src="/line_height.png"
                    alt="Line height"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                />
            </div>
        </div>
    );
}
