import { cn } from "@/lib/utils";
import Image from "next/image";

interface FontSizeInputProps {
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export function FontSizeInput({
    value,
    onChange,
    className,
}: FontSizeInputProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue > 0) {
            onChange(newValue);
        }
    };

    return (
        <div
            className={cn(
                "flex-none flex items-center w-[80px] h-[26px] px-[3px] py-[2px]",
                "bg-transparent border border-[#383838] rounded-lg gap-1",
                className
            )}>
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="w-full h-3 bg-transparent text-[#e8e8e8] text-xs text-center font-satoshi leading-3 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min="1"
            />
            <Image
                src="/font_size.svg"
                alt="Font size"
                width={16}
                height={16}
            />
        </div>
    );
}
