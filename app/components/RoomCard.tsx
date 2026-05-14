"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type RoomCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  price: string;
  image: string;
};

export default function RoomCard({
  title,
  eyebrow,
  description,
  price,
  image,
}: RoomCardProps) {
  const phoneNumber = "919353363060"; // replace

  const message = encodeURIComponent(
    `Hi, I'm interested in the ${title} at Adharsh Residency. Please share availability and pricing.`,
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="w-full relative rounded-2xl md:rounded-4xl overflow-hidden  shadow-[0_-10px_10px_rgba(0,0,0,0.22)] md:shadow-[0_-15px_20px_rgba(0,0,0,0.30)]">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[55vh] lg:h-[70vh] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
        <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-4">
          {/* Left */}
          <div className="max-w-3xl">
            <h3 className="inline-flex border border-white px-4 py-2 rounded-full text-xs md:text-sm mb-3 md:mb-2">
              {eyebrow}
            </h3>
            <Link
              href={"/gallery"}
              className="ml-2 md:ml-4 inline-flex  bg-white hover:bg-gray-300 duration-300 px-4 py-2 font-bold rounded-full text-xs md:text-sm text-black"
            >
              View Gallery
            </Link>

            <h2 className="text-3xl md:text-6xl xl:text-7xl modernfont-regular md:modernfont-light leading-tight">
              {title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base opacity-90 mt-2 text-neutral-200 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <Link
              href={whatsappLink}
              target="_blank"
              className="bg-white text-black px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2"
            >
              Check Availability
              <ArrowUpRight size={18} />
            </Link>

            <span className="text-xs sm:text-sm opacity-90">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
