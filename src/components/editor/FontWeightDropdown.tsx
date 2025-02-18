"use client";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

const fontWeights = ["Regular", "Medium", "SemiBold", "Bold"];

interface FontWeightDropdownProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function FontWeightDropdown({
    value,
    onChange,
    className,
}: FontWeightDropdownProps) {
    return (
        <Listbox
            value={value}
            onChange={onChange}>
            {/* Depth 0: Font Weight Frame */}
            <div className="relative">
                <Listbox.Button
                    className={cn(
                        "flex-none flex items-center w-[80px] h-[26px] px-2",
                        "bg-transparent border border-[#383838] rounded-lg",
                        className
                    )}>
                    {/* Depth 1: Text content */}
                    <span className="w-[58px] text-[#e8e8e8] text-xs font-satoshi leading-3 truncate">
                        {value}
                    </span>

                    {/* Depth 1: Dropdown icon Frame */}
                    <div className="flex items-center justify-center w-[6px] h-[25px] py-[6px]">
                        {/* Depth 2: Dropdown icon */}
                        <span className="text-[#c8c8c8] text-[6px] font-arial leading-[13px]">
                            ▼
                        </span>
                    </div>
                </Listbox.Button>

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Listbox.Options className="absolute w-full mt-1 max-h-60 overflow-auto rounded-md bg-[#191919] border border-[#383838] py-1 text-xs shadow-lg focus:outline-none">
                        {fontWeights.map((weight) => (
                            <Listbox.Option
                                key={weight}
                                value={weight}
                                className={({ active }) =>
                                    cn(
                                        "relative cursor-pointer select-none py-2 px-3",
                                        "text-[#e8e8e8] font-satoshi",
                                        active && "bg-[#282828]"
                                    )
                                }>
                                {weight}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
