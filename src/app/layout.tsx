"use client";
import React from "react";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Assuming you have a way to check if the user is signed in
    const isSignedIn = true; // Replace with actual sign-in check

    if (isSignedIn) {
      router.push("/editor");
    }
  }, [router]);

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${marcellus.variable} ${manrope.variable} antialiased`}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
