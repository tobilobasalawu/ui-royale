"use client";

import { useDrag } from "react-dnd";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ButtonsMenu() {
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
        <span className="text-[#b8b8b8] text-sm font-satoshi">
          Secondary Button
        </span>
        <div
          ref={drag}
          className="w-fit"
        >
          <Button variant="secondary">Button</Button>
        </div>
      </div>

      {/* Outline Button */}
      <div className="flex flex-col space-y-2">
        <span className="text-[#b8b8b8] text-sm font-satoshi">
          Outline Button
        </span>
        <div
          ref={drag}
          className="w-fit"
        >
          <Button variant="outline">Button</Button>
        </div>
      </div>

      {/* Ghost Button */}
      <div className="flex flex-col space-y-2">
        <span className="text-[#b8b8b8] text-sm font-satoshi">
          Ghost Button
        </span>
        <div
          ref={drag}
          className="w-fit"
        >
          <Button
            variant="ghost"
            className="text-white"
          >
            Button
          </Button>
        </div>
      </div>

      {/* Link Button */}
      <div className="flex flex-col space-y-2">
        <span className="text-[#b8b8b8] text-sm font-satoshi">Link Button</span>
        <div
          ref={drag}
          className="w-fit"
        >
          <Button
            variant="link"
            className="text-white"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
