"use client";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Superflex from "@/components/landing/Superflex";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push("/editor");
    }
  }, [isLoaded, userId, router]);

  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Superflex />
      <Cta />
      <Footer />
    </div>
  );
}
