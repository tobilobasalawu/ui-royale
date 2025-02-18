"use client";

import { useDrag } from "react-dnd";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ButtonsMenu() {
    return (
        <>
            {/* Basic Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-manrope">
                    Basic Button
                </span>
                <Button
                    variant="default"
                    className="w-fit">
                    Button
                </Button>
            </div>
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { type: "button" }, // This is the data sent on drop
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="cursor-move">
      {/* Basic Button */}
      <div className="flex flex-col space-y-2">
        <span className="text-[#b8b8b8] text-sm font-satoshi">
          Basic Button
        </span>
        <div
          ref={drag}
          className="w-fit"
        >
          <Button variant="default">Button</Button>
        </div>
      </div>

            {/* Secondary Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-manrope">
                    Secondary Button
                </span>
                <Button
                    variant="secondary"
                    className="w-fit">
                    Button
                </Button>
            </div>

            {/* Outline Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-manrope">
                    Outline Button
                </span>
                <Button
                    variant="outline"
                    className="w-fit">
                    Button
                </Button>
            </div>

            {/* Ghost Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-manrope">
                    Ghost Button
                </span>
                <Button
                    variant="ghost"
                    className="w-fit text-white">
                    Button
                </Button>
            </div>

            {/* Link Button */}
            <div className="flex flex-col space-y-2">
                <span className="text-[#b8b8b8] text-sm font-manrope">
                    Link Button
                </span>
                <Button
                    variant="link"
                    className="w-fit text-white">
                    Button
                </Button>
            </div>
        </>
    );
}
