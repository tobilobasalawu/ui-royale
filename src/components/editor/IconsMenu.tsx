"use client";

import { Heart, Mail, User, Settings, Bell } from "lucide-react";
import { useDrag } from "react-dnd";

export function IconsMenu() {
  const icons = [
    { icon: <Heart fill="#ADAEF8" />, label: "Heart" },
    { icon: <Mail fill="#ADAEF8" />, label: "Mail" },
    { icon: <User fill="#ADAEF8" />, label: "User" },
    { icon: <Settings fill="#ADAEF8" />, label: "Settings" },
    { icon: <Bell fill="#ADAEF8" />, label: "Bell" },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-5">
      {icons.map((icon, index) => {
        const [{ isDragging }, drag] = useDrag(() => ({
          type: "ICON",
          item: { type: "icon", label: icon.label },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
        }));

        return (
          <div
            key={index}
            ref={drag}
            className={`flex flex-col items-center space-y-2 ${
              isDragging ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#292929] rounded-lg">
              {icon.icon}
            </div>
            <span className="text-[#b8b8b8] text-sm font-manrope">
              {icon.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
