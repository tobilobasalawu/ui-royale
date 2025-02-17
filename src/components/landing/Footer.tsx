import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col items-center px-10 pt-20 pb-0 w-full max-w-[1536px] mx-auto">
            {/* Footer Inner */}
            <div className="flex justify-between items-center w-full max-w-[1432px] h-8 mb-10">
                {/* GitHub Logo */}
                <Link
                    href="https://github.com/tobilobasalawu/ui-royale"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src="/github_logo.svg"
                        alt="GitHub"
                        width={32}
                        height={32}
                        className="text-white"
                    />
                </Link>

                {/* Credit Section */}
                <div className="flex items-center space-x-1">
                    <span className="text-[#e8e8e8] text-[15px] leading-5 font-medium">
                        Made with
                    </span>
                    <Image
                        src="/heart.svg"
                        alt="heart"
                        width={20}
                        height={17}
                    />
                    <span className="text-[#e8e8e8] text-[15px] leading-5 font-medium">
                        by Oyelola Victoria & Oluwatobi Salawu
                    </span>
                </div>
            </div>

            {/* Footer Logo */}
            <div className="relative w-full max-w-[1440px] h-[239px]">
                <Image
                    src="/footer_logo.svg"
                    alt="UI Royale"
                    fill
                    className="object-contain"
                    style={{
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                />
            </div>
        </footer>
    );
}
