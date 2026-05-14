"use client";

import Image from "next/image";

export default function WhatsAppFloat() {
  const phoneNumber = "919353363060"; // replace

  const message = encodeURIComponent(
    "Hi, I’m interested in booking a stay at Adharsh Residency. Please share availability and pricing.",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute w-14 h-14 rounded-full bg-green-500 opacity-40 animate-ping"></span>

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition">
        <Image
          src="/Icons/wa-icon.webp"
          alt="WhatsApp"
          width={28}
          height={28}
          priority
        />
      </span>
    </a>
  );
}
