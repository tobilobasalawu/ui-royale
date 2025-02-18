"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentsMenu } from "./ComponentsMenu";

export function ComponentMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuClick = (menuName: string) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        // Depth 2: Component Menu Frame
        <div className="w-[79px] h-[636px] bg-[#111111]">
            {/* Depth 3: Menu Items Container */}
            <div className="flex flex-col">
                {/* Text Button */}
                <MenuButton
                    icon="/text.svg"
                    label="Text"
                    isActive={activeMenu === "text"}
                    onClick={() => handleMenuClick("text")}
                />

                {/* Pages Button */}
                <MenuButton
                    icon="/pages.svg"
                    label="Pages"
                    isActive={activeMenu === "pages"}
                    onClick={() => handleMenuClick("pages")}
                />

                {/* Buttons Menu Item */}
                <MenuButton
                    customIcon={
                        <div className="w-6 h-4 rounded-[2px] border border-[#555555]" />
                    }
                    label="Buttons"
                    isActive={activeMenu === "buttons"}
                    onClick={() => handleMenuClick("buttons")}
                />

                {/* Sections Button */}
                <MenuButton
                    icon="/sections.svg"
                    label="Sections"
                    isActive={activeMenu === "sections"}
                    onClick={() => handleMenuClick("sections")}
                />

                {/* Icons Button */}
                <MenuButton
                    icon="/icons.png"
                    label="Icons"
                    iconSize={18}
                    isActive={activeMenu === "icons"}
                    onClick={() => handleMenuClick("icons")}
                />

                {/* Icons Button */}
                <MenuButton
                    icon="/images.png"
                    label="Images"
                    iconSize={18}
                    isActive={activeMenu === "images"}
                    onClick={() => handleMenuClick("images")}
                />
            </div>

            {activeMenu && <ComponentsMenu activeMenu={activeMenu} />}
        </div>
    );
}

interface MenuButtonProps {
    icon?: string;
    customIcon?: React.ReactNode;
    label: string;
    isActive?: boolean;
    iconSize?: number;
    onClick?: () => void;
}

function MenuButton({
    icon,
    customIcon,
    label,
    isActive,
    iconSize = 24,
    onClick,
}: MenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center w-[79px] h-[84px] py-[7px] pb-[6.8px] border-[#181818] border",
                isActive && "bg-[#181818]"
            )}>
            {customIcon ? (
                customIcon
            ) : icon?.startsWith("/") ? (
                <Image
                    src={icon}
                    alt={label}
                    width={iconSize}
                    height={iconSize}
                />
            ) : (
                <span className="text-[#555555] font-dm-serif text-2xl leading-[10px]">
                    {icon}
                </span>
            )}
            <span className="text-[#e8e8e8] text-xs font-satoshi mt-2">
                {label}
            </span>
        </button>
    );
}
