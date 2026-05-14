import FAQSection from "@/app/components/FAQSection";
import FinalCTA from "@/app/components/FinalCTA";
import GallerySection from "@/app/components/GallerySection";
import ReviewSection from "@/app/components/ReviewSection";
import SuitesHero from "@/app/components/SuitesHero";

export const metadata = {
  title: "2BHK Serviced Apartment Suites in Mysuru | Adharsh Residency",

  description:
    "Explore fully furnished 2BHK serviced apartment suites in Mysuru. Spacious, secure, and ideal for long stays, families, and professionals.",

  keywords: [
    "2bhk serviced apartments mysuru",
    "serviced apartment suites mysore",
    "premium apartments mysuru",
    "long stay suites mysore",
    "furnished apartments mysuru",
  ],

  openGraph: {
    title: "2BHK Serviced Apartment Suites in Mysuru | Adharsh Residency",
    description:
      "Browse premium 2BHK suites with modern amenities, security, and comfort in Mysuru.",
    url: "https://yourdomain.com/suites",
    siteName: "Adharsh Residency",
    images: [
      {
        url: "/images/suite-og.jpg", // create this
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Serviced Apartment Suites in Mysuru",
    description:
      "Premium furnished suites in Mysuru for long stays and families.",
    images: ["/images/suite-og.jpg"],
  },
};

const premiumImages = [
  {
    title: "Master Bedroom",
    image: "/images/bed1.webp",
  },
  {
    title: "2nd Bedroom",
    image: "/images/bed12.webp",
  },
  {
    title: "Kitchen",
    image: "/images/kitchen2.webp",
  },
  {
    title: "Living Room",
    image: "/images/living1.webp",
  },
  {
    title: "Bathroom",
    image: "/images/bath1.webp",
  },
  {
    title: "Balcony View",
    image: "/images/balcony1.webp",
  },
  {
    title: "Dining Area",
    image: "/images/dinning.webp",
  },
];

const executiveImages = [
  {
    title: "Master Bedroom",
    image: "/images/bed32.webp",
  },
  {
    title: "2nd Bedroom",
    image: "/images/bed20.webp",
  },
  {
    title: "Kitchen",
    image: "/images/kitchen4.webp",
  },
  {
    title: "Living Room",
    image: "/images/living3.webp",
  },
  {
    title: "Bathroom",
    image: "/images/bath2.webp",
  },
  {
    title: "Balcony View",
    image: "/images/balcony.webp",
  },
  {
    title: "Dining Area",
    image: "/images/dinning2.webp",
  },
];

export default function Home() {
  return (
    <div>
      <SuitesHero />
      <GallerySection
        suiteTitle="Premium Front Suite Gallery"
        description="Explore the spaces, interiors, and thoughtful details designed for elevated long stays."
        images={premiumImages}
      />
      <GallerySection
        suiteTitle="Executive Rear Suite Gallery"
        description="Quiet, private suite designed for rest and focus, ideal for professionals and families, tucked away for a peaceful stay."
        images={executiveImages}
      />
      <ReviewSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
