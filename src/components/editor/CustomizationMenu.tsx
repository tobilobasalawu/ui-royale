"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FontFamilyDropdown } from "./FontFamilyDropdown";
import { FontWeightDropdown } from "./FontWeightDropdown";
import { FontSizeInput } from "./FontSizeInput";
import { LineHeightInput } from "./LineHeightInput";
import { LetterSpacingInput } from "./LetterSpacingInput";
import { SizeCustomization } from "./SizeCustomization";
import { ColorPicker } from "./ColorPicker";
import { OpacityInput } from "./OpacityInput";
import { BorderCustomization } from "./BorderCustomization";
import { BorderRadiusCustomization } from "./BorderRadiusCustomization";

interface CustomizationMenuProps {
    className?: string;
}

type BorderPosition = "All" | "Top" | "Right" | "Bottom" | "Left";
type RadiusPosition =
    | "All"
    | "TopLeft"
    | "TopRight"
    | "BottomRight"
    | "BottomLeft";

export function CustomizationMenu({ className }: CustomizationMenuProps) {
    const [selectedFont, setSelectedFont] = useState("Inter");
    const [selectedWeight, setSelectedWeight] = useState("Regular");
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(1.5);
    const [letterSpacing, setLetterSpacing] = useState(12);
    const [color, setColor] = useState("#E5E3C9");
    const [borderColor, setBorderColor] = useState("#ADAEF8");
    const [opacity, setOpacity] = useState(100);
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderPosition, setBorderPosition] = useState("All");
    const [borderRadius, setBorderRadius] = useState(0);
    const [radiusPosition, setRadiusPosition] = useState("All");

    return (
        <aside
            className={cn(
                "flex flex-col items-center min-w-[293px] max-w-[310px] h-full overflow-auto",
                "bg-[#191919]",
                className
            )}>
            {/* Depth 1: Frame 1 - Text Properties */}
            <div className="flex flex-wrap items-center gap-2 px-5 py-10 w-full border-[#282828] border-b">
                <FontFamilyDropdown
                    value={selectedFont}
                    onChange={setSelectedFont}
                />
                <FontWeightDropdown
                    value={selectedWeight}
                    onChange={setSelectedWeight}
                />
                <FontSizeInput
                    value={fontSize}
                    onChange={setFontSize}
                />
                <LineHeightInput
                    value={lineHeight}
                    onChange={setLineHeight}
                />
                <LetterSpacingInput
                    value={letterSpacing}
                    onChange={setLetterSpacing}
                />
            </div>

            <SizeCustomization
                onWidthChange={(value) => console.log("Width:", value)}
                onHeightChange={(value) => console.log("Height:", value)}
                onPaddingChange={(value) => console.log("Padding:", value)}
                onMarginChange={(value) => console.log("Margin:", value)}
                initialWidth={200}
                initialHeight={200}
                initialPadding={12}
                initialMargin={12}
            />

            <div className="flex flex-wrap items-center gap-2 px-5 py-10 w-full border-[#282828] border-b">
                <ColorPicker
                    value={color}
                    onChange={setColor}
                />
                <OpacityInput
                    value={opacity}
                    onChange={setOpacity}
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 px-5 py-10 w-full border-[#282828] border-b">
                <BorderCustomization
                    color={borderColor}
                    width={borderWidth}
                    position={borderPosition as BorderPosition}
                    onColorChange={setBorderColor}
                    onWidthChange={setBorderWidth}
                    onPositionChange={setBorderPosition}
                />
                <BorderRadiusCustomization
                    radius={borderRadius}
                    position={radiusPosition as RadiusPosition}
                    onRadiusChange={setBorderRadius}
                    onPositionChange={setRadiusPosition}
                />
            </div>
        </aside>
    );
}
