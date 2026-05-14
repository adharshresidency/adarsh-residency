import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import HomeHero from "./components/HomeHero";
import HospitalitySection from "./components/HospitalitySection";
import ReviewSection from "./components/ReviewSection";
import Rooms from "./components/Rooms";
import SafetySection from "./components/SafteySection";

export const metadata = {
  title:
    "Serviced Apartments in Mysuru | Premium 2BHK Stays | Adharsh Residency",

  description:
    "Book premium 2BHK serviced apartments in Mysuru. Fully furnished, secure, and ideal for families and long stays. Located in BEML Nagar.",

  keywords: [
    "serviced apartments mysuru",
    "2bhk serviced apartment mysore",
    "long stay apartments mysuru",
    "premium stay mysore",
    "family stay mysuru",
  ],

  openGraph: {
    title: "Serviced Apartments in Mysuru | Adharsh Residency",
    description:
      "Premium 2BHK serviced apartments in Mysuru with modern amenities, security, and comfort for long stays.",
    url: "https://yourdomain.com",
    siteName: "Adharsh Residency",
    images: [
      {
        url: "/images/image-og.jpg", // create this
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviced Apartments in Mysuru | Adharsh Residency",
    description:
      "Premium 2BHK serviced apartments in Mysuru. Ideal for long stays and families.",
    images: ["/images/image-og.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Rooms />
      <AboutSection />
      <HospitalitySection
        cards={[
          {
            title: "Gold Standard Appliances",
            points: [
              "Daikin A/C, quiet cooling",
              "Samsung 43” Smart TV",
              "AquaGuard RO+UV water",
              "BlueStar refrigerator",
              "Samsung 12kg washer",
            ],
            image: "/images/appliances1.webp",
          },
          {
            title: "Living & Connectivity",
            points: [
              "High-Speed Wi-Fi, Seamless access",
              "Designer Living, Modern furnishings",
              "Work Spaces, Private master desks",
              "Deep Sleep, Premium blackout curtains ",
              "Dual Baths, Private geysers included ",
            ],
            image: "/images/appliances2.webp",
          },
        ]}
      />
      <SafetySection />
      <ReviewSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
