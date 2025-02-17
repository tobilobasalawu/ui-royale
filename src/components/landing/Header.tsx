import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="px-10 py-5 max-w-[1536px] mx-auto">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="UI Royale"
                    width={160}
                    height={37.33}
                />
            </Link>
        </header>
    );
}
