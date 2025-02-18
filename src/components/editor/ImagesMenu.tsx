"use client";

import { Image as ImageIcon } from "lucide-react";
export function ImagesMenu() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-[#292929] rounded-md">
                {/* <Image
                    src="/icons/image-icon.svg" // Ensure this path is correct
                    alt="Add Image"
                    width={48}
                    height={48}
                /> */}
                <ImageIcon className="w-4 h-4 text-[#b8b8b8]" />
                <span className="text-[#b8b8b8] text-sm font-satoshi mt-2">
                    Add Image
                </span>
            </div>
        </div>
    );
}
