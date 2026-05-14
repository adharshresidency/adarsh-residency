// app/amenities/page.tsx

import AllAmenities from "@/app/components/AllAmenities";
import AmenitiesHero from "@/app/components/AmenitiesHero";

export const metadata = {
  title:
    "Amenities at Adharsh Residency | Fully Furnished Serviced Apartments in Mysuru",

  description:
    "Explore modern amenities at Adharsh Residency including fully equipped kitchens, high-speed WiFi, workspace, security, and power backup. Designed for comfortable long stays in Mysuru.",

  keywords: [
    "serviced apartment amenities mysuru",
    "furnished apartments mysore amenities",
    "2bhk amenities mysuru",
    "long stay facilities mysore",
    "apartment with kitchen mysuru",
  ],

  openGraph: {
    title: "Modern Amenities for Comfortable Living | Adharsh Residency Mysuru",
    description:
      "From fully equipped kitchens to high-speed WiFi and 24/7 security, explore amenities designed for real living.",
    url: "https://yourdomain.com/amenities",
    siteName: "Adharsh Residency",
    images: [
      {
        url: "/images/suite-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amenities at Adharsh Residency Mysuru",
    description:
      "Fully furnished serviced apartments with modern amenities for long stays.",
    images: ["/images/suite-og.jpg"],
  },
};

export default function AmenitiesPage() {
  return (
    <main>
      <AmenitiesHero />
      <AllAmenities />
    </main>
  );
}
