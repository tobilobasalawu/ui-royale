"use client";
import { useDrag } from "react-dnd";
import { useEffect, useState } from "react";

export function TextMenu() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "COMPONENT",
        item: { type: "text" }, // This is the data sent on drop
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div className="flex flex-col space-y-2">
            {isClient && (
                <div
                    ref={drag}
                    className="opacity: isDragging ? 0.5 : 1, cursor: grab w-[220px] min-h-[120px] bg-[#292929] cursor-pointer hover:bg-[#333333] transition-colors p-4">
                    <span className="text-[#b8b8b8] text-base font-satoshi">
                        Click to edit text
                    </span>
                </div>
            )}
            <span className="text-[#b8b8b8] text-sm font-satoshi">
                Text Box
            </span>
        </div>
    );
}
