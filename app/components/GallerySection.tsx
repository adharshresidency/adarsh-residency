// GallerySection.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  title: string;
  image: string;
};

type GallerySectionProps = {
  suiteTitle: string;
  description?: string;
  images: GalleryImage[];
};

export default function GallerySection({
  suiteTitle,
  description,
  images,
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="w-full bg-[#f7f6f4] py-20 px-6 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl modernfont-bold">{suiteTitle}</h2>

          {description && (
            <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-md text-left cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-white text-xl md:text-2xl modernfont-light">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center px-4">
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 transition p-3 rounded-full"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] rounded-3xl overflow-hidden">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Title */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <p className="text-white text-xl md:text-2xl modernfont-light text-center">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
