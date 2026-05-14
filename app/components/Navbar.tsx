"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneNumber = "919353363060";

  const message = encodeURIComponent(
    "Hi, I want to check availability for Adharsh Residency from [date] to [date].",
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Amenities", href: "/amenities" },
    { name: "About", href: "/about" },
  ];

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.4;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="px-4 xl:max-w-7xl mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              isScrolled
                ? "/logo-horizontal-dark.svg"
                : "/logo-horizontal-header.svg"
            }
            alt="logo"
            height={10}
            width={200}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden subheading md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-md transition ${
                isScrolled
                  ? "text-gray-700 font-bold hover:text-black"
                  : "text-white/90 font-medium hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* WhatsApp CTA (external, keep <a>) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center bg-[#5b4636] hover:bg-stone-900 text-white px-4 py-2 rounded-md text-sm"
          >
            <Image
              src={"/wa-icon.png"}
              alt="Whatsapp Icon"
              height={10}
              width={30}
            />
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-black" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 subheading text-white border-t">
          <div className="flex flex-col px-4 py-4 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl px-4 py-4 border-b-1 border-stone-700"
              >
                {link.name}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 justify-center items-center bg-[#5b4636] text-white px-4 py-2 rounded-md text-xl text-center"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={"/wa-icon.png"}
                alt="Whatsapp Icon"
                height={10}
                width={30}
              />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
