import { RippleButton } from "@/components/magicui/ripple-button";

export function PrimaryCta() {
    return (
        <RippleButton
            className="font-marcellus px-6 py-3 bg-primary-gradient rounded-md uppercase text-[#111111] text-xl border border-[#9C8BF9] shadow-hero-button transition-transform hover:scale-105"
            rippleColor="#111111"
            duration=".5s">
            Start
        </RippleButton>
    );
}
