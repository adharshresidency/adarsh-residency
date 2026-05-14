// AllAmenities.tsx

import AmenitiesCard from "./AmenitiesCard";

const amenities = [
  {
    title: "Fully Equipped Kitchen",
    description:
      "Cook your meals with ease using a modern kitchen setup including refrigerator, stove, and essential utensils. Designed for long stays and everyday comfort.",
    image: "/images/kitchen4.webp",
  },
  {
    title: "High-Speed WiFi & Workspace",
    description:
      "Stay connected with reliable high-speed internet and a dedicated workspace, ideal for professionals and remote work.",
    image: "/images/wifi1.webp",
  },
  {
    title: "Comfortable Living Spaces",
    description:
      "Spacious living areas with modern interiors, designed to give you a home-like experience rather than a typical hotel stay.",
    image: "/images/living1.webp",
  },
  {
    title: "Private Parking Facility",
    description:
      "Dedicated on-site parking ensures convenient and secure vehicle access for residents and guests throughout their stay.",
    image: "/images/parking.webp",
  },
  {
    title: "Modern Elevator Access",
    description:
      "Smooth and reliable lift access across all floors, designed for convenience, accessibility, and effortless movement within the property.",
    image: "/images/lift.webp",
  },
  {
    title: "24/7 Security & Power Backup",
    description:
      "Enjoy peace of mind with round-the-clock security, CCTV surveillance, and uninterrupted power supply.",
    image: "/images/security.webp",
  },
];

export default function AllAmenities() {
  return (
    <section className="w-full bg-[#f7f6f4] py-16 md:py-24 px-6 md:px-16">
      <div className="flex flex-col gap-20">
        {amenities.map((item, index) => (
          <AmenitiesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
