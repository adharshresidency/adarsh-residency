"use client";

import { useRouter, usePathname } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => {
    // If already on homepage
    if (pathname === "/") {
      const hero = document.getElementById("hero");

      if (hero) {
        hero.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to homepage hero
      router.push("/#hero");
    }
  };

  return (
    <section className="w-full bg-[#f7f6f4] py-16 md:py-24 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold">
          Ready to Experience Comfort Like Home?
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Check availability and book your stay in just a few clicks.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScroll}
          className="mt-8 bg-[#5b4636] cursor-pointer hover:bg-[#4a392c] text-white px-8 py-4 rounded-xl font-semibold text-sm md:text-base transition"
        >
          Book Your Stay Now
        </button>
      </div>
    </section>
  );
}
