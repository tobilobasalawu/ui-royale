"use client";

export function SectionsMenu() {
    const sections = [{ title: "Section", height: "120px" }];

    return (
        <>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="flex flex-col space-y-2">
                    <div
                        className="w-[220px] bg-[#292929] cursor-pointer hover:bg-[#333333] transition-colors"
                        style={{ height: section.height }}
                    />
                    <span className="text-[#b8b8b8] text-sm font-manrope">
                        {section.title}
                    </span>
                </div>
            ))}
        </>
    );
}
