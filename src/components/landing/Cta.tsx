"use client";

import { PrimaryCta } from "@/components/landing/primary_cta";
import Image from "next/image";
import { useContext } from "react";
import {
    LandingPageContext,
    LandingPageContextType,
} from "@/contexts/LandingPageContext";
import { GenerateLinkOverlay } from "./GenerateLinkOverlay";

export const Cta = () => {
    const { isOverlayOpen, setIsOverlayOpen } = useContext(
        LandingPageContext
    ) as LandingPageContextType;

    return (
        // Depth 0: CTA Section
        <section className="relative flex flex-col items-center justify-center w-full py-40 px-10 max-w-[1536px] mx-auto">
            {/* Depth 1: CTA Card */}
            <div className="flex flex-col items-center max-w-[840px] space-y-4 mb-10">
                {/* Depth 3: Heading */}
                <h2 className="font-marcellus text-[48px] leading-[64px] text-[#ececec] text-center max-w-[573px]">
                    Ready to prove your skills?
                </h2>
                {/* Depth 3: Subheading */}
                <p className="font-manrope text-2xl leading-8 text-[#ececec] text-center max-w-[840px]">
                    Jump into the arena and start your first UI battle now!
                </p>
            </div>

            {/* Depth 2: Button - Using existing PrimaryCta component */}
            <PrimaryCta onClick={() => setIsOverlayOpen(true)} />

            {/* Depth 1: Gradient Image */}
            <Image
                src="/cta_gradient.png"
                alt=""
                width={700}
                height={662}
                className="absolute pointer-events-none"
                aria-hidden="true"
            />

            <GenerateLinkOverlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
            />
        </section>
    );
};
