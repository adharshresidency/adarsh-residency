// components/PolicyLayout.tsx

import Navbar from "./Navbar";
import Footer from "./Footer";

type PolicyLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function PolicyLayout({
  title,
  subtitle,
  children,
}: PolicyLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f7f6f4] text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/living1.webp"
            alt="Policy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 xl:px-16 pt-40 pb-24">
          <h1 className="text-4xl md:text-6xl modernfont font-regular">
            {title}
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl text-lg">{subtitle}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-8 md:p-14">
          <div className="prose prose-neutral max-w-none">{children}</div>
        </div>
      </section>
    </main>
  );
}
