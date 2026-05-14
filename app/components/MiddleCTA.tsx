"use client";

type CTAProps = {
  text: String;
};

export default function MiddleCTA({ text }: CTAProps) {
  const handleScroll = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 mt-12 px-8  text-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl modernfont font-regular leading-snug">
          {text}
        </h2>

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
