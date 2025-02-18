"use client";

import { cn } from "@/lib/utils";
import { Stage, Layer, Rect } from "react-konva";
import { useDrop } from "react-dnd";
import { useEffect, useRef, useState } from "react";

interface EditorCanvasProps {
  className?: string;
}

export function EditorCanvas({ className }: EditorCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [components, setComponents] = useState<{ type: string }[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item: { type: string }) => {
      setComponents((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // Update canvas dimensions when container size changes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Initial size
    updateDimensions();

    // Add resize observer
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    // Depth 2: Canvas Frame
    <div
      ref={drop}
      className={cn(
        "w-full h-full bg-[#121212] overflow-hidden",
        "flex items-center justify-center",
        className
      )}
      style={{
        border: "1px solid black",
        minHeight: "500px",
        padding: "20px",
        background: isOver ? "#f0f0f0" : "white",
      }}
    >
      {/* Render dropped components */}
      {components.map((comp, index) => (
        <div key={index}>
          {comp.type === "text" ? <p>Text Component</p> : "Unknown Component"}
        </div>
      ))}
      {/* Depth 3: Konva Stage */}
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        style={{ backgroundColor: "#121212" }}
      >
        {/* Background Layer */}
        <Layer>
          <Rect
            x={20} // Add some left padding
            y={20} // Add some top padding
            width={dimensions.width - 40} // Full width minus padding
            height={dimensions.height - 40} // Full height minus padding
            fill="#222222"
            cornerRadius={8}
            shadowColor="rgba(0, 0, 0, 0.1)"
            shadowBlur={10}
            shadowOffset={{ x: 0, y: 2 }}
            shadowOpacity={0.5}
          />
        </Layer>

        {/* Content Layer - This is where dragged components will be added */}
        <Layer>{/* Components will be rendered here */}</Layer>
      </Stage>
    </div>
  );
}
