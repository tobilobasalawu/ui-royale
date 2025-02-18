"use client";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Superflex from "@/components/landing/Superflex";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";
import { LandingPageContextProvider } from "@/contexts/LandingPageContext";

export default function Home() {
    return (
        <LandingPageContextProvider>
            <div>
                <Header />
                <Hero />
                <Features />
                <Superflex />
                <Cta />
                <Footer />
            </div>
        </LandingPageContextProvider>
    );
}
