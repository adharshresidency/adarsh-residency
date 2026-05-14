import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo Section */}
        <div className="flex flex-col gap-3">
          <Image
            src={"/footer-logo.png"}
            alt="Adharsh Residency Logo"
            height={40}
            width={200}
          />
          <p className="text-sm text-neutral-400 max-w-xs">
            Premium serviced apartments in Mysuru designed for comfort, privacy,
            and long stays.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Navigation</p>
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/amenities">Amenities</Link>
            <Link href="/about">About</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Contact</p>
            <a href="tel:+919353363060">+91 9353363060</a>
            <a href="mailto:info@adharshresidency.com">
              info@adharshresidency.com
            </a>
            <p className="text-neutral-400 text-xs max-w-[180px]">
              BEML Layout, Srirampura 2nd Stage, Mysuru
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white">Legal</p>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-10 border-t border-neutral-700 pt-6 text-sm text-neutral-400 text-center">
        © {new Date().getFullYear()} Adharsh Residency. All rights reserved.
      </div>
    </footer>
  );
}
