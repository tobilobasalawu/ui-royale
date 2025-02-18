import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";

const borderPositions = ["All", "Top", "Right", "Bottom", "Left"] as const;
type BorderPosition = (typeof borderPositions)[number];

interface BorderCustomizationProps {
    color: string;
    width: number;
    position: BorderPosition;
    onColorChange: (color: string) => void;
    onWidthChange: (width: number) => void;
    onPositionChange: (position: BorderPosition) => void;
    className?: string;
}

export function BorderCustomization({
    color,
    width,
    position,
    onColorChange,
    onWidthChange,
    onPositionChange,
    className,
}: BorderCustomizationProps) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        // Depth 0: Border Frame
        <div
            className={cn(
                "flex flex-col w-[220px] h-[42px] space-y-[6px]",
                className
            )}>
            {/* Depth 1: Border Text */}
            <span className="w-[31px] h-[10px] text-[#b8b8b8] text-[10px] font-satoshi font-medium leading-[10px]">
                Border
            </span>

            {/* Depth 1: Color details Frame */}
            <div className="flex w-[220px] h-[26px]">
                {/* Depth 2: Width input Frame */}
                <div className="flex items-center justify-between w-[134px] h-[26px] px-[6px] py-[6px] rounded-l-lg border-y border-l border-[#383838]">
                    {/* Depth 3: Border color indicator */}
                    <div className="relative">
                        <div
                            className="h-[14px] w-[20px] rounded px-2 bg-[#e5e3c9] border border-[#adaef8] cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={() => setIsPickerOpen(!isPickerOpen)}
                        />
                        {isPickerOpen && (
                            <div className="absolute left-0 top-[calc(100%+4px)] z-20">
                                <div className="p-2 bg-[#1f1f1f] border border-[#383838] rounded-lg shadow-lg">
                                    <HexColorPicker
                                        color={color}
                                        onChange={onColorChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Depth 3: Width input */}
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => onWidthChange(Number(e.target.value))}
                        className="w-[102px] bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="0"
                    />
                </div>

                {/* Depth 2: Border position Frame */}
                <div className="relative">
                    <Listbox
                        value={position}
                        onChange={onPositionChange}>
                        <Listbox.Button className="flex items-center justify-between w-[86px] h-[26px] px-2 rounded-r-lg border-y border border-[#383838]">
                            {/* Depth 3: Position container */}
                            <div className="flex items-center justify-center w-[64px] h-[12px] space-x-[10px]">
                                {/* Depth 4: Position text */}
                                <span className="text-[#e8e8e8] text-xs font-satoshi leading-3">
                                    {position}
                                </span>
                            </div>

                            {/* Depth 3: Dropdown icon */}
                            <span className="text-[#c8c8c8] text-[6px] font-arial leading-[13px]">
                                ▼
                            </span>
                        </Listbox.Button>

                        <Listbox.Options className="absolute z-10 w-full mt-1 bg-[#1f1f1f] border border-[#383838] rounded-lg overflow-hidden">
                            {borderPositions.map((pos) => (
                                <Listbox.Option
                                    key={pos}
                                    value={pos}
                                    className={({ active }) =>
                                        cn(
                                            "px-2 py-1 text-xs font-satoshi cursor-pointer",
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
