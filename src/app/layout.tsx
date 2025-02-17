import type { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "UI Royal",
    description:
        "Compete in real-time and customize stunning interfaces. Enter the arena and let the battle begin!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${marcellus.variable} ${manrope.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
