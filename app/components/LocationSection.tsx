export default function LocationSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl subheading text-center mb-10">
          Our Location
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Adharsh+Residency+Mysuru&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-center text-gray-600 mt-6">
          Located near BSNL Telephone Exchange, Srirampura, Mysuru
        </p>
      </div>
    </section>
  );
}
