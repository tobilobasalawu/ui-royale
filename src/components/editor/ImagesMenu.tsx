"use client";
import { useDrag } from "react-dnd";
import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export function ImagesMenu({
    onImageUpload,
}: {
    onImageUpload: (src: string) => void;
}) {
    const [isClient, setIsClient] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: "COMPONENT",
            item: { type: "image", src: uploadedImage }, // Pass image source
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [uploadedImage]
    ); // Re-run when the image changes

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const src = reader.result as string;
                setUploadedImage(src); // Store uploaded image
                onImageUpload(src);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
            />
            <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-[#292929] rounded-md cursor-pointer">
                <div
                    ref={drag}
                    style={{ opacity: isDragging ? 0.5 : 1 }}>
                    <ImageIcon className="w-4 h-4 text-[#b8b8b8]" />
                    <span className="text-[#b8b8b8] text-sm font-satoshi mt-2">
                        Add Image
                    </span>
                </div>
            </label>
        </div>
    );
}
