import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { cn } from "@/lib/utils";

const radiusPositions = [
    "All",
    "TopLeft",
    "TopRight",
    "BottomRight",
    "BottomLeft",
] as const;
type RadiusPosition = (typeof radiusPositions)[number];

interface BorderRadiusCustomizationProps {
    radius: number;
    position: RadiusPosition;
    onRadiusChange: (radius: number) => void;
    onPositionChange: (position: RadiusPosition) => void;
    className?: string;
}

export function BorderRadiusCustomization({
    radius,
    position,
    onRadiusChange,
    onPositionChange,
    className,
}: BorderRadiusCustomizationProps) {
    return (
        // Depth 0: Border Frame
        <div
            className={cn(
                "flex flex-col w-[220px] h-[42px] space-y-[6px]",
                className
            )}>
            {/* Depth 1: Border Radius Text */}
            <span className="text-[#b8b8b8] text-[10px] font-manrope font-medium leading-[10px]">
                Border Radius
            </span>

            {/* Depth 1: Input and Dropdown Frame */}
            <div className="flex items-center w-[220px] h-[26px]">
                {/* Depth 2: Radius input Frame */}
                <div className="flex items-center justify-center w-full h-[26px] px-[3px] py-[2px] rounded-l-lg border-y border-l border-[#383838]">
                    {/* Depth 3: Radius value */}
                    <input
                        type="number"
                        value={radius}
                        onChange={(e) => onRadiusChange(Number(e.target.value))}
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-manrope leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>

                {/* Depth 2: Position dropdown Frame */}
                <div className="relative">
                    <Listbox
                        value={position}
                        onChange={onPositionChange}>
                        <Listbox.Button className="flex items-center justify-between w-[86px] h-[26px] px-2 rounded-r-lg border border-[#383838]">
                            {/* Depth 3: Position text */}
                            <span className="w-[64px] text-[#e8e8e8] text-xs font-manrope leading-3">
                                {position}
                            </span>

                            {/* Depth 3: Dropdown icon Frame */}
                            <div className="flex items-center justify-center py-[6px] w-[6px] h-[25px]">
                                {/* Depth 4: Dropdown icon */}
                                <span className="text-[#c8c8c8] text-[6px] font-arial leading-[13px]">
                                    ▼
                                </span>
                            </div>
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-10 w-full mt-1 bg-[#1f1f1f] border border-[#383838] rounded-lg overflow-hidden">
                            {radiusPositions.map((pos) => (
                                <Listbox.Option
                                    key={pos}
                                    value={pos}
                                    className={({ active }) =>
                                        cn(
                                            "px-2 py-1 text-xs font-manrope cursor-pointer",
                                            active ? "bg-[#383838]" : "",
                                            "text-[#e8e8e8]"
                                        )
                                    }>
                                    {pos}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Listbox>
                </div>
            </div>
        </div>
    );
}
