import MiddleCTA from "./MiddleCTA";
import RoomCard from "./RoomCard";
import Link from "next/link";

const rooms = [
  {
    title: "Premium Front Suite",
    eyebrow: "We Have 3 Premium Front Suites",
    description:
      "Sun-drenched suite with elegant French doors opening to a private balcony, offering airy interiors and serene views of BEML Nagar.",
    price: "Starting at just ₹4999",
    image: "/images/living1.webp",
  },
  {
    title: "Executive Rear Suite",
    eyebrow: "We Have 3 Executive Rear Suites",
    description:
      "Quiet, private suite designed for rest and focus, ideal for professionals and families, tucked away for a peaceful stay.",
    price: "Starting at just ₹4499",
    image: "/images/bed32.webp",
  },
];

export default function Rooms() {
  return (
    <section className="w-full px-4 sm:-mt-40 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
      {/* Rooms */}
      <div className="max-w-6xl mx-auto  flex flex-col gap-10 md:gap-16">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
      <MiddleCTA
        text="Choose from our 6 total Premium and Executive Suites, check
          availability and book your stay."
      />
    </section>
  );
}
