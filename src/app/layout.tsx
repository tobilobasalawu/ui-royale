"use client";
import React from "react";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";

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
        <html lang="en">
            <body
                className={`${marcellus.variable} ${manrope.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
