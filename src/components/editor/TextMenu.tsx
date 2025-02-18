"use client";

export function TextMenu() {
    return (
        <div className="flex flex-col space-y-2">
            <div className="w-[220px] min-h-[120px] bg-[#292929] cursor-pointer hover:bg-[#333333] transition-colors p-4">
                <span className="text-[#b8b8b8] text-base font-satoshi">
                    Click to edit text
                </span>
            </div>
            <span className="text-[#b8b8b8] text-sm font-satoshi">
                Text Box
            </span>
        </div>
    );
}
