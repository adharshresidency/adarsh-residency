"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What type of accommodation do you offer?",
    answer:
      "We offer fully furnished premium 2BHK serviced apartments designed for families, professionals, and long stays. Each unit includes a living room, kitchen, two bedrooms, and modern amenities.",
  },
  {
    question: "Where is Adharsh Residency located?",
    answer:
      "We are located in BEML Nagar, Srirampura, Mysuru, a quiet and well-connected residential area just a few blocks from the BSNL Telephone Exchange.",
  },
  {
    question: "What amenities are included in the apartments?",
    answer:
      "Each apartment includes air conditioning, high-speed Wi-Fi, a smart TV, RO+UV purified water, refrigerator, washing machine access, modular kitchen, work desk, and blackout curtains.",
  },
  {
    question: "Is this suitable for long stays or workations?",
    answer:
      "Yes. Our apartments are designed for long stays with dedicated workspaces, fast internet, full kitchens, and a peaceful environment ideal for remote work.",
  },
  {
    question: "How many guests can stay in one apartment?",
    answer:
      "Each 2BHK apartment comfortably accommodates families or small groups. Guest capacity depends on your requirement, you can confirm availability via WhatsApp.",
  },
  {
    question: "Is the property safe and secure?",
    answer:
      "Yes. The building has 24/7 security, CCTV surveillance in common areas, gated entry, and full power backup for uninterrupted stay.",
  },
  {
    question: "How can I check availability and pricing?",
    answer:
      "You can check availability instantly by selecting your dates and contacting us via WhatsApp. We will respond quickly with availability and pricing.",
  },
  {
    question: "Do you offer parking and lift access?",
    answer:
      "Yes. The building includes elevator access for all floors and convenient parking facilities for guests.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Everything you need to know before booking your stay
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between cursor-pointer text-left px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="text-sm md:text-base font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 py-4 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
