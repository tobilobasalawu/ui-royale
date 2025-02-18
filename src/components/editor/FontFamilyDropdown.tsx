"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

const fontFamilies = [
    "Inter",
    "Roboto",
    "Poppins",
    "Montserrat",
    "Open Sans",
    "Merriweather",
    "Playfair Display",
    "Lora",
    "Roboto Slab",
    "EB Garamond",
];

interface FontFamilyDropdownProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function FontFamilyDropdown({
    value,
    onChange,
    className,
}: FontFamilyDropdownProps) {
    return (
        <Listbox
            value={value}
            onChange={onChange}>
            {/* Depth 0: Font Family Frame */}
            <div className="relative">
                <Listbox.Button
                    className={cn(
                        "flex-none flex items-center w-[132px] h-[26px] px-2",
                        "bg-transparent border border-[#383838] rounded-lg",
                        className
                    )}>
                    {/* Depth 1: Container Frame */}
                    <div className="flex flex-col pb-[0.8px] w-[110px]">
                        {/* Depth 2: Font family text */}
                        <span className="text-[#e8e8e8] text-xs font-manrope leading-4 truncate">
                            {value}
                        </span>
                    </div>

                    {/* Depth 1: Dropdown icon Frame */}
                    <div className="flex items-center justify-center w-[6px] h-[22px] py-[6px]">
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
                        {fontFamilies.map((font) => (
                            <Listbox.Option
                                key={font}
                                value={font}
                                className={({ active }) =>
                                    cn(
                                        "relative cursor-pointer select-none py-2 px-3",
                                        "text-[#e8e8e8] font-manrope",
                                        active && "bg-[#282828]"
                                    )
                                }>
                                {font}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
