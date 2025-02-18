import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    className?: string;
}

export function ColorPicker({ value, onChange, className }: ColorPickerProps) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    return (
        // Depth 0: Color Frame
        <div
            className={cn(
                "flex flex-col w-[220px] h-[42px] space-y-[6px]",
                className
            )}>
            {/* Depth 1: Color Text */}
            <span className="w-[26px] h-[10px] text-[#b8b8b8] text-[10px] font-satoshi font-medium leading-[10px]">
                Color
            </span>

            {/* Depth 1: Color details Frame */}
            <div className="w-[220px] h-[26px] flex">
                {/* Depth 2: Font Size Frame */}
                <div className="relative flex items-center justify-between w-[220px] h-[26px] px-[6px] py-[6px] space-x-1 rounded-lg border border-[#383838]">
                    {/* Depth 3: Border position Frame */}
                    <div
                        className="flex items-center h-[14px] px-2 rounded bg-[#e5e3c9] border border-[#adaef8] cursor-pointer"
                        onClick={() => setIsPickerOpen(!isPickerOpen)}
                        style={{ backgroundColor: value }}
                    />

                    {/* Depth 3: Hex Text */}
                    <input
                        type="text"
                        value={value.toUpperCase()}
                        onChange={(e) => {
                            const newColor = e.target.value;
                            if (/^#[0-9A-F]{0,6}$/i.test(newColor)) {
                                onChange(newColor);
                            }
                        }}
                        className="flex-1 bg-transparent text-[#e8e8e8] text-center text-xs font-satoshi leading-3 focus:outline-none uppercase"
                    />

                    {isPickerOpen && (
                        <div className="absolute left-0 top-[calc(100%+4px)] z-10">
                            <HexColorPicker
                                color={value}
                                onChange={onChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
