"use client";

import { cn } from "@/lib/utils";
import { ButtonsMenu } from "./ButtonsMenu";
import { IconsMenu } from "./IconsMenu";
import { SectionsMenu } from "./SectionsMenu";
import { TextMenu } from "./TextMenu";
import { ImagesMenu } from "./ImagesMenu";

interface ComponentsMenuProps {
  activeMenu: string;
}

export function ComponentsMenu({ activeMenu }: ComponentsMenuProps) {
  return (
    <div
      className={cn(
        "absolute top-0 left-[79px] w-[420px] h-full p-5 bg-[#191919] border border-[#282828] z-10"
      )}
    >
      <div className="flex flex-wrap gap-10">
        {activeMenu === "buttons" ? (
          <ButtonsMenu />
        ) : activeMenu === "icons" ? (
          <IconsMenu />
        ) : activeMenu === "sections" ? (
          <SectionsMenu />
        ) : activeMenu === "text" ? (
          <TextMenu />
        ) : activeMenu === "images" ? (
          <ImagesMenu />
        ) : (
          <div className="flex flex-col p-5 w-[160px] h-[228px] space-y-2">
            {/* Depth 3: Blank page Vector */}
            <div className="w-[120px] h-[160px] bg-[#292929]" />

            {/* Depth 3: Text */}
            <span className="w-[120px] h-5 text-white font-satoshi text-base font-medium leading-4">
              Blank page
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
