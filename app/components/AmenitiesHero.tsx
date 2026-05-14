// AmenitiesHero.tsx

"use client";

export default function AmenitiesHero() {
  return (
    <section className="relative w-full min-h-[60vh] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/living1.webp')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <div className="flex flex-col justify-center min-h-[60vh] px-6 md:px-16">
          <h1 className="text-3xl md:text-6xl max-w-3xl modernfont-regular leading-tight">
            Everything You Need for a Comfortable Stay
          </h1>

          <p className="mt-4 text-sm md:text-lg bodyfont text-white/80 max-w-xl">
            Thoughtfully designed amenities to make your stay seamless, whether
            short or long-term.
          </p>
        </div>
      </div>
    </section>
  );
}
