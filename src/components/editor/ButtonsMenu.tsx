"use client";

import { Button } from "@/components/ui/button";

export function ButtonsMenu() {
    return (
        <>
            {/* Basic Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-satoshi">
                    Basic Button
                </span>
                <Button
                    variant="default"
                    className="w-fit">
                    Button
                </Button>
            </div>

            {/* Secondary Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-satoshi">
                    Secondary Button
                </span>
                <Button
                    variant="secondary"
                    className="w-fit">
                    Button
                </Button>
            </div>

            {/* Outline Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-satoshi">
                    Outline Button
                </span>
                <Button
                    variant="outline"
                    className="w-fit">
                    Button
                </Button>
            </div>

            {/* Ghost Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-satoshi">
                    Ghost Button
                </span>
                <Button
                    variant="ghost"
                    className="w-fit text-white">
                    Button
                </Button>
            </div>

            {/* Link Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-satoshi">
                    Link Button
                </span>
                <Button
                    variant="link"
                    className="w-fit text-white">
                    Button
                </Button>
            </div>
        </>
    );
}
