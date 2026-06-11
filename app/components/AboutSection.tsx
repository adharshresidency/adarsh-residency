import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f7f6f4] py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Optional background pattern */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <div className="w-72 h-72 bg-gray-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid portrait:grid-cols-1 landscape:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl subheading mb-10">About Us</h2>

          <p className="text-gray-700 bodyfont leading-relaxed text-sm md:text-base">
            <span className="text-2xl md:text-3xl  modernfont-bold  text-gray-900">
              Adharsh Residency
            </span>{" "}
            is a purpose-built, independent serviced apartment building in BEML
            Nagar, Srirampura.
          </p>

          <p className="mt-4 text-gray-700 bodyfont leading-relaxed text-sm md:text-base max-w-xl">
            We focus on providing high-end, &quot;ready-to-live&quot;
            experiences for guests who refuse to compromise on quality. Every
            detail, from our contemporary architecture to our choice of global
            brand-name appliances, is curated to ensure your stay is seamless,
            whether you are here for a family getaway or a long-term
            &quot;workation.&quot;
          </p>
        </div>

        {/* RIGHT VISUAL */}
        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center md:justify-end w-full portrait:h-[40vh] landscape:h-[60vh]">
          <Image
            src={"/images/building1.webp"}
            alt="Building Image"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
