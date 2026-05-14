export default function ContactSection() {
  return (
    <section className="w-full bg-[#f7f6f4] py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl subheading">Get in Touch</h2>

        <p className="mt-4 text-gray-600">
          Reach out to check availability, pricing, or any queries about your
          stay.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-gray-700">
          <div>
            <p className="font-semibold">Phone</p>
            <p className="mt-1">+91 9353363060</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p className="mt-1">info@adharshresidency.com</p>
          </div>

          <div>
            <p className="font-semibold">Address</p>
            <p className="mt-1 max-w-xs mx-auto">
              No 18, Block 10, BEML Layout, Srirampura 2nd Stage, Mysuru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
