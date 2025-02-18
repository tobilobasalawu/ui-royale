"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface SizeCustomizationProps {
    className?: string;
    onWidthChange?: (value: number) => void;
    onHeightChange?: (value: number) => void;
    onPaddingChange?: (value: number) => void;
    onMarginChange?: (value: number) => void;
    initialWidth?: number;
    initialHeight?: number;
    initialPadding?: number;
    initialMargin?: number;
}

interface SizeInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export function SizeCustomization({
    className,
    onWidthChange,
    onHeightChange,
    onPaddingChange,
    onMarginChange,
    initialWidth = 200,
    initialHeight = 200,
    initialPadding = 12,
    initialMargin = 12,
}: SizeCustomizationProps) {
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);
    const [padding, setPadding] = useState(initialPadding);
    const [margin, setMargin] = useState(initialMargin);

    const handleWidthChange = (value: number) => {
        setWidth(value);
        onWidthChange?.(value);
    };

    const handleHeightChange = (value: number) => {
        setHeight(value);
        onHeightChange?.(value);
    };

    const handlePaddingChange = (value: number) => {
        setPadding(value);
        onPaddingChange?.(value);
    };

    const handleMarginChange = (value: number) => {
        setMargin(value);
        onMarginChange?.(value);
    };

    return (
        <div className="flex flex-wrap items-center gap-2 px-5 py-10 w-full border-[#282828] border-b">
            {/* Depth 2: Width input group */}
            <div className="flex items-center px-2 w-[106px] h-[26px] rounded-lg border border-[#383838]">
                {/* Depth 3: W label container */}
                <div className="pb-[0.8px]">
                    {/* Depth 4: W label */}
                    <span className="text-[#e8e8e8] text-xs font-satoshi leading-4">
                        W
                    </span>
                </div>
                {/* Depth 3: Width value container */}
                <div className="flex items-center justify-center pb-[0.8px] w-[78px]">
                    {/* Depth 4: Width value */}
                    <input
                        type="number"
                        value={width}
                        onChange={(e) =>
                            handleWidthChange(parseInt(e.target.value))
                        }
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-4 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>
            </div>

            {/* Depth 2: Height input group */}
            <div className="flex items-center px-2 w-[106px] h-[26px] rounded-lg border border-[#383838]">
                {/* Depth 3: H label container */}
                <div className="pb-[0.8px]">
                    {/* Depth 4: H label */}
                    <span className="text-[#e8e8e8] text-xs font-satoshi leading-4">
                        H
                    </span>
                </div>
                {/* Depth 3: Height value container */}
                <div className="flex items-center justify-center pb-[0.8px] w-[81px]">
                    {/* Depth 4: Height value */}
                    <input
                        type="number"
                        value={height}
                        onChange={(e) =>
                            handleHeightChange(parseInt(e.target.value))
                        }
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-4 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>
            </div>

            {/* Depth 2: Padding group */}
            <div className="flex flex-col w-[106px] space-y-1.5">
                {/* Depth 3: Padding label */}
                <span className="text-[#b8b8b8] text-[10px] font-satoshi font-medium leading-[10px]">
                    Padding
                </span>
                {/* Depth 3: Padding input */}
                <div className="flex items-center justify-center px-[3px] py-0.5 h-[26px] rounded-lg border border-[#383838]">
                    {/* Depth 4: Padding value */}
                    <input
                        type="number"
                        value={padding}
                        onChange={(e) =>
                            handlePaddingChange(parseInt(e.target.value))
                        }
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>
            </div>

            {/* Depth 2: Margin group */}
            <div className="flex flex-col w-[106px] space-y-1.5">
                {/* Depth 3: Margin label */}
                <span className="text-[#b8b8b8] text-[10px] font-satoshi font-medium leading-[10px]">
                    Margin
                </span>
                {/* Depth 3: Margin input */}
                <div className="flex items-center justify-center px-[3px] py-0.5 h-[26px] rounded-lg border border-[#383838]">
                    {/* Depth 4: Margin value */}
                    <input
                        type="number"
                        value={margin}
                        onChange={(e) =>
                            handleMarginChange(parseInt(e.target.value))
                        }
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>
            </div>
        </div>
    );
}
