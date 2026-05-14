"use client";

export default function AboutHero() {
  return (
    <section className="relative w-full lg:h-screen h-[80vh] text-white">
      {/* Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video1.webm" type="video/webm" />

        {/* MP4 fallback */}
        <source src="/videos/hero-video1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />

      <div className="relative z-10">
        <div className="flex flex-col justify-center min-h-[60vh] px-6 md:px-16">
          <h1 className="text-3xl md:text-6xl max-w-3xl modernfont-regular leading-tight">
            Exceptional Stays in the Heart of Mysuru
          </h1>

          <p className="mt-4 text-sm md:text-lg bodyfont text-white/80 max-w-xl">
            A purpose-built serviced apartment experience designed for comfort,
            privacy, and long-term living.
          </p>
        </div>
      </div>
    </section>
  );
}
