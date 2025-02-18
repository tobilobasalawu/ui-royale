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

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <label className="flex flex-col items-center justify-center w-[160px] h-[160px] bg-[#292929] rounded-md cursor-pointer">
        <div
          ref={drag}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          )}
          <ImageIcon className="w-4 h-4 text-[#b8b8b8]" />
          <span className="text-[#b8b8b8] text-sm font-satoshi mt-2">
            Drag Image
          </span>
        </div>
      </label>
    </div>
  );
}
