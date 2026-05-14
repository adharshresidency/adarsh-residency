"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

type Review = {
  name: string;
  image: string;
  review: string;
};

export default function ReviewSection() {
  const reviews: Review[] = [
    {
      name: "Ram Krishna Iyer",
      image: "/images/user1.jpg",
      review:
        "From the moment we arrived, everything was flawless. The staff went above and beyond to make us feel comfortable. Truly one of the best hotel experiences I’ve had.",
    },
    {
      name: "Ankit Sharma",
      image: "/images/user2.jpg",
      review:
        "Spacious rooms, great ambiance, and seamless check-in. Felt like home but better.",
    },
    {
      name: "Priya Menon",
      image: "/images/user3.jpg",
      review:
        "Clean, secure, and extremely comfortable stay. Highly recommended for families.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // delay

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="px-6 md:px-16 py-20 bg-white relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl subheading text-center mb-16">
        See what our Guests Say
      </h2>

      {/* Card Wrapper */}
      <div className="relative flex justify-center items-center min-h-[300px]">
        {/* Animated card */}
        <div
          key={activeIndex}
          className="transition-all duration-500 ease-in-out"
        >
          <ReviewCard {...reviews[activeIndex]} />
        </div>
      </div>
    </section>
  );
}
