"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import { useDrag } from "react-dnd"; // Import useDrag

// Define the Section type
type Section = {
  title: string;
  height: string;
};

export function SectionsMenu() {
  const sections: Section[] = [{ title: "Section", height: "120px" }];

  const [isClient, setIsClient] = useState(false); // Fixed the syntax for useState

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { type: "Section" }, // This is the data sent on drop
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      {sections.map(
        (
          section,
          index // Added missing map function
        ) => (
          <div
            key={index}
            className="flex flex-col space-y-2"
          >
            <div
              ref={drag} // Attach the drag ref
              className={`w-[220px] bg-[#292929] cursor-pointer hover:bg-[#333333] transition-colors ${
                isDragging ? "opacity-50" : "opacity-100"
              }`} // Adjust opacity based on dragging state
              style={{ height: section.height }}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", index.toString()); // Ensure index is a string
              }}
            />
            <span className="text-[#b8b8b8] text-sm font-manrope">
              {section.title}
            </span>
          </div>
        )
      )}
    </>
  );
}
