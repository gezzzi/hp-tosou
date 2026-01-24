"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ images, initialIndex, isOpen, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-[120] p-2 bg-black/40 rounded-full md:bg-transparent md:rounded-none"
        aria-label="閉じる"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110] p-2 bg-black/40 rounded-full"
        aria-label="前へ"
      >
        <ChevronLeft size={32} className="md:w-10 md:h-10" />
      </button>

      <div 
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full max-w-5xl max-h-[80vh] pointer-events-auto">
          <Image
            src={images[currentIndex]}
            alt={`画像 ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-white text-sm pb-4 pointer-events-none">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-[110] p-2 bg-black/40 rounded-full"
        aria-label="次へ"
      >
        <ChevronRight size={32} className="md:w-10 md:h-10" />
      </button>
    </div>
  );
}
