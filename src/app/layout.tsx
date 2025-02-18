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
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${marcellus.variable} ${manrope.variable} antialiased`}
        >
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>{/* Remove the UserButton to hide the icon */}</SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
