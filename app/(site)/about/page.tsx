import AboutContent from "@/app/components/AboutContent";
import AboutHero from "@/app/components/AboutHero";
import ContactSection from "@/app/components/ContactSection";
import FinalCTA from "@/app/components/FinalCTA";
import LocationSection from "@/app/components/LocationSection";

export const metadata = {
  title: "About Adharsh Residency | Premium Serviced Apartments in Mysuru",

  description:
    "Learn about Adharsh Residency, a purpose-built serviced apartment in Mysuru offering fully furnished 2BHK stays with modern amenities, privacy, and long-term comfort in BEML Nagar.",

  keywords: [
    "about adharsh residency",
    "serviced apartments mysuru",
    "2bhk apartments mysore",
    "long stay mysuru",
    "beml nagar mysuru apartments",
  ],

  openGraph: {
    title: "About Adharsh Residency | Serviced Apartments in Mysuru",
    description:
      "Discover our philosophy, location, and what makes Adharsh Residency a premium choice for long stays in Mysuru.",
    url: "https://yourdomain.com/about",
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
    title: "About Adharsh Residency Mysuru",
    description:
      "Purpose-built serviced apartments designed for comfort, privacy, and long stays.",
    images: ["/images/image-og.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <ContactSection />
      <LocationSection />
      <FinalCTA />
    </main>
  );
}
