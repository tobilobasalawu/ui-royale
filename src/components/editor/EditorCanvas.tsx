"use client";

import { cn } from "@/lib/utils";
import { Stage, Layer, Rect } from "react-konva";
import { useEffect, useRef, useState } from "react";

interface EditorCanvasProps {
    className?: string;
}

export function EditorCanvas({ className }: EditorCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
            ref={containerRef}
            className={cn(
                "w-full h-full bg-[#121212] overflow-hidden",
                "flex items-center justify-center",
                className
            )}>
            {/* Depth 3: Konva Stage */}
            <Stage
                width={dimensions.width}
                height={dimensions.height}
                style={{ backgroundColor: "#121212" }}>
                {/* Background Layer */}
                <Layer>
                    <Rect
                        x={dimensions.width / 2 - 512} // Center horizontally
                        y={20} // Add some top padding
                        width={1024}
                        height={Math.max(dimensions.height - 40, 600)} // Min height of 600px
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
