import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const BASE_URL = "https://www.adharshresidency.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Serviced Apartments in Mysuru | Premium 2BHK Stays | Adharsh Residency",
    template: "%s | Adharsh Residency",
  },

  description:
    "Book premium 2BHK serviced apartments in Mysuru. Fully furnished, secure, and ideal for families and long stays in BEML Nagar.",

  keywords: [
    "serviced apartments mysuru",
    "2bhk serviced apartment mysore",
    "long stay apartments mysuru",
    "premium stay mysore",
    "family stay mysuru",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Serviced Apartments in Mysuru | Adharsh Residency",
    description:
      "Premium 2BHK serviced apartments in Mysuru with modern amenities and long-stay comfort.",
    url: BASE_URL,
    siteName: "Adharsh Residency",
    images: [
      {
        url: "/images/og-image.jpg",
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
      "Premium 2BHK serviced apartments in Mysuru for families and long stays.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Adharsh Residency",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              telephone: "+919353363060",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mysuru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.google.com/maps", // replace with actual map link
              ],
            }),
          }}
        />

        <Navbar />

        <main className="flex-1">{children}</main>

        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
