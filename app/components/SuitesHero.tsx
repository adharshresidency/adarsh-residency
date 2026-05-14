"use client";

export default function SuitesHero() {
  return (
    <section className="relative w-full min-h-[70vh] text-white">
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
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10">
        <div className="flex flex-col justify-center min-h-[70vh] px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl max-w-3xl modernfont-regular leading-tight">
            Find the Perfect Suite for Your Stay
          </h1>

          <p className="mt-4 text-sm md:text-lg  bodyfont  text-white/80 max-w-xl">
            Spacious, fully-furnished 2BHK suites designed for comfort, privacy,
            and long stays.
          </p>

          {/* Reuse booking component here */}
        </div>
      </div>
    </section>
  );
}
