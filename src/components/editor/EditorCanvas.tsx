"use client";

import { cn } from "@/lib/utils";
import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import { useDrop } from "react-dnd";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/types"; // Import Section type if needed

interface EditorCanvasProps {
  className?: string;
  imageSrc?: string;
}

export function EditorCanvas({ className, imageSrc }: EditorCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [components, setComponents] = useState<
    { type: string; src?: string; label?: string }[]
  >([]); // Add `src` and `label` for images and icons
  const [loadedImages, setLoadedImages] = useState<
    { id: number; img: HTMLImageElement }[]
  >([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["COMPONENT", "SECTION", "ICON"], // Accept ICON type
    drop: (item: { type: string; src?: string; label?: string }) => {
      // Add label for icons
      setComponents((prev) => [...prev, item]);
      if (item.type === "image" && item.src) {
        // Preload the image
        const img = new window.Image();
        img.src = item.src;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, { id: prev.length, img }]);
        };
      }
      // Handle section type
      if (item.type === "section") {
        setComponents((prev) => [...prev, { type: "section" }]);
      }
      // Handle icon type
      if (item.type === "icon") {
        setComponents((prev) => [...prev, { type: "icon", label: item.label }]); // Add icon to components
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={drop}
      className={cn(
        "w-full h-full bg-[#121212] overflow-hidden flex items-center justify-center",
        className
      )}
      style={{
        border: "1px solid black",
        minHeight: "500px",
        padding: "20px",
        background: isOver ? "#f0f0f0" : "white",
      }}
    >
      {components.map((comp, index) => (
        <div key={index}>
          {comp.type === "text" ? (
            <p>Text Component</p>
          ) : comp.type === "button" ? (
            <button>Button Component</button>
          ) : comp.type === "image" ? (
            <p>Image Component</p>
          ) : comp.type === "section" ? (
            <div className="section">Section Component</div>
          ) : comp.type === "icon" ? (
            <p>Icon Component: {comp.label}</p>
          ) : (
            "Unknown Component"
          )}
        </div>
      ))}

      <Stage
        width={dimensions.width}
        height={dimensions.height}
        style={{ backgroundColor: "#121212" }}
      >
        <Layer>
          <Rect
            x={20}
            y={20}
            width={dimensions.width - 40}
            height={dimensions.height - 40}
            fill="#222222"
            cornerRadius={8}
            shadowColor="rgba(0, 0, 0, 0.1)"
            shadowBlur={10}
            shadowOffset={{ x: 0, y: 2 }}
            shadowOpacity={0.5}
          />
        </Layer>

        <Layer>
          {loadedImages.map(({ id, img }) => (
            <KonvaImage
              key={id}
              image={img}
              x={50}
              y={50}
              width={100}
              height={100}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
