export default function AboutContent() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-5xl subheading">
            Designed for Real Living
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Adharsh Residency is a purpose-built, independent serviced apartment
            building located in BEML Nagar, Srirampura, Mysuru. We focus on
            delivering high-end, ready-to-live experiences for guests who value
            comfort, privacy, and quality.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Every detail, from our contemporary architecture to globally trusted
            appliances, is curated to ensure your stay feels seamless, whether
            you are visiting for a family getaway or a long-term workation.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden">
          <img
            src="/images/living1.webp"
            alt="Adharsh Residency Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
