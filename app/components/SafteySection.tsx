"use client";

import Image from "next/image";

export default function SafetySection() {
  const features = [
    {
      label: "24/7 security",
      icon: "/Icons/24.svg",
    },
    {
      label: "CCTV surveillance",
      icon: "/Icons/cctv.svg", // make sure file exists
    },
    {
      label: "Modern elevator/lift",
      icon: "/Icons/lift.svg",
    },
    {
      label: "Power Reliability",
      icon: "/Icons/power.svg",
    },
  ];

  return (
    <section className="px-6 w-full md:px-2 my-12 py-16 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl subheading text-center mb-12">
        Safety & Accessibility
      </h2>

      {/* Container */}
      <div className="flex max-w-5xl mx-auto justify-center bg-neutral-100 rounded-3xl py-10 lg:py-20 px-6 md:px-4">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-neutral-200 rounded-2xl">
                <Image
                  src={feature.icon}
                  alt={feature.label}
                  width={42}
                  height={42}
                  className="object-contain transition group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <p className="text-lg  bodyfont font-medium text-neutral-800">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
