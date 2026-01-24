"use client";

import { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageModalWrapperProps {
  images: string[];
  initialIndex: number;
  children: React.ReactNode;
}

export default function ImageModalWrapper({ images, initialIndex, children }: ImageModalWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <ImageModal
        images={images}
        initialIndex={initialIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
