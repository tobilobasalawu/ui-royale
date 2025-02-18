"use client";
import React from "react";
import { Manrope, Marcellus } from "next/font/google";
import "./globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    const onDragEnd = (result: any) => {
        // Handle the drag end event
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <html lang="en">
                <body
                    className={`${marcellus.variable} ${manrope.variable} antialiased`}>
                    {children}
                </body>
            </html>
        </DndProvider>
    );
}
