import { ChangeEvent } from "react";

interface OpacityInputProps {
    value: number;
    onChange: (value: number) => void;
}

export const OpacityInput = ({ value, onChange }: OpacityInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        if (newValue >= 0 && newValue <= 100) {
            onChange(newValue);
        }
    };

    return (
        <div className="flex flex-col w-[220px] h-[42px] space-y-[6px]">
            {/* Depth 1: Label Text */}
            <span className="text-[#b8b8b8] text-[10px] font-satoshi font-medium leading-[10px]">
                Opacity
            </span>

            {/* Depth 1: Border position Frame */}
            <div className="flex items-center h-[26px] px-2 rounded-lg border border-[#383838]">
                {/* Depth 2: Percentage Frame */}
                <div className="flex items-center justify-center flex-1 h-3 space-x-[10px]">
                    {/* Depth 3: Input Text */}
                    <input
                        type="number"
                        value={value}
                        onChange={handleChange}
                        min={0}
                        max={100}
                        className="w-full bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>

                {/* Depth 2: Percentage symbol Frame */}
                <div className="flex items-center justify-center h-6 w-[11px]">
                    {/* Depth 3: Percentage symbol */}
                    <span className="text-[#555555] text-xs font-satoshi leading-3">
                        %
                    </span>
                </div>
            </div>
        </div>
    );
};
