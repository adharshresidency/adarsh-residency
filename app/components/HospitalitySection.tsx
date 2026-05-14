"use client";

import { useEffect, useRef, useState } from "react";
import DualCard from "./DualCard";

type CardType = {
  title?: string;
  points?: string[];
  image: string;
};

type HospitalitySectionProps = {
  cards: CardType[];
};

export default function HospitalitySection({ cards }: HospitalitySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;

        const container = containerRef.current;
        const child = container?.children[next] as HTMLElement;

        if (child && container) {
          const containerWidth = container.offsetWidth;
          const childWidth = child.offsetWidth;

          const scrollLeft =
            child.offsetLeft - containerWidth / 2 + childWidth / 2;

          container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }

        return next;
      });
    }, 6000); // slightly slower = more premium

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="my-8 lg:my-24 px-10 md:px-26 py-6 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl subheading text-center mb-4">
        Experience the Hospitality of Lifetime
      </h2>

      <h3 className="text-sm md:text-lg bodyfont text-neutral-500 text-center mb-12">
        Stay with comfort, convenience, and complete peace of mind all without
        any compromise.
      </h3>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex gap-10 lg:gap-20 overflow-x-auto snap-x snap-mandatory no-scrollbar
                   scroll-smooth"
      >
        {cards.map((card, index) => (
          <div key={index} className="max-w-[80vw] flex-shrink-0 snap-center">
            <DualCard
              title={card.title}
              points={card.points}
              image={card.image}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex ? "w-10 bg-gray-400" : "w-4 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
