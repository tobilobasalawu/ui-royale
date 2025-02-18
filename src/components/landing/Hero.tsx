"use client";
import { PrimaryCta } from "@/components/landing/primary_cta";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { GenerateLinkOverlay } from "./GenerateLinkOverlay";
import {
    LandingPageContext,
    LandingPageContextType,
} from "@/contexts/LandingPageContext";
import { useContext } from "react";

export const Hero = () => {
    const { isOverlayOpen, setIsOverlayOpen } = useContext(
        LandingPageContext
    ) as LandingPageContextType;
    return (
        <>
            <div className="relative grid place-content-center w-full min-h-[calc(100svh-78px)] px-10 overflow-hidden max-w-[1536px] mx-auto min-[1537px]:min-h-[720px]">
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                    <div className="flex flex-col items-center max-w-[923px] space-y-10">
                        <div className="flex flex-col items-center space-y-4">
                            <h1 className="font-marcellus text-center text-[64px] leading-[75px] max-w-[923px] bg-fade-white bg-clip-text text-transparent bg-fixed">
                                Think you have what it takes to build the{" "}
                                <span className="bg-fade-purple bg-clip-text text-transparent">
                                    best UI?
                                </span>
                            </h1>
                            <p className="font-manrope text-center text-white text-lg max-w-[656px] leading-[27px] tracking-[0.02em]">
                                Prove it by competing in real-time and
                                customizing stunning interfaces. Enter the arena
                                and let the battle begin!
                            </p>
                        </div>
                        <PrimaryCta onClick={() => setIsOverlayOpen(true)} />
                    </div>
                </div>

                <RetroGrid />
            </div>
            <GenerateLinkOverlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
            />
        </>
    );
};
