"use client";

import { Calendar, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, differenceInDays } from "date-fns";

export default function HomeHero() {
  const phoneNumber = "919353363060"; // replace

  const [from, setFrom] = useState<Date | undefined>();
  const [to, setTo] = useState<Date | undefined>();
  const [activeField, setActiveField] = useState<"from" | "to" | null>(null);

  const [guests, setGuests] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showGuestError, setShowGuestError] = useState(false); // ✅ NEW

  const calendarRef = useRef<HTMLDivElement>(null);
  const nights = from && to ? differenceInDays(to, from) : 0;

  const isValid = from && to && guests;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
        setActiveField(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formattedFrom = from ? format(from, "dd MMM") : "";
  const formattedTo = to ? format(to, "dd MMM") : "";

  const message = encodeURIComponent(
    `Hi, I'm interested in booking a suite in Adharsh Residency from ${
      formattedFrom || "[check-in]"
    } to ${formattedTo || "[check-out]"} for ${
      guests || "[guests]"
    } guest(s). Please share availability and pricing.`,
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section
      id="hero"
      className="relative h-[80vh] lg:h-screen w-full text-white"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video1.webm" type="video/webm" />

        {/* MP4 fallback */}
        <source src="/videos/hero-video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />

      <div className="relative z-10">
        <div className="flex flex-col items-start xl:items-center justify-center min-h-screen xl:text-center px-10 pt-24 pb-10">
          <h1 className="text-4xl sm:text-4xl modernfont-light md:text-6xl lg:text-7xl md:max-w-2xl xl:max-w-5xl leading-[1.1]">
            The Perfect Blend of{" "}
            <span className="modernfont-bold ">Modern Design</span> &{" "}
            <span className="modernfont-bold">Residential Peace</span>
          </h1>

          <div
            ref={calendarRef}
            className="relative mt-8 w-full max-w-4xl bg-white text-black rounded-xl shadow-lg p-4 lg:p-2 flex flex-col md:flex-row gap-3 md:items-center"
          >
            {/* Check-in */}
            <button
              onClick={() => {
                setShowCalendar(true);
                setActiveField("from");
              }}
              className={`flex items-center gap-2 px-3 py-3 rounded-lg w-full text-left transition ${
                activeField === "from"
                  ? "bg-[#f5efe6] border border-[#e6d8c3]"
                  : "bg-neutral-100"
              }`}
            >
              <Calendar size={18} className="text-gray-500" />
              <span className="text-sm md:text-lg">
                {formattedFrom || "Check in"}
              </span>
            </button>

            {/* Check-out */}
            <button
              onClick={() => {
                setShowCalendar(true);
                setActiveField("to");
              }}
              className={`flex items-center gap-2 px-3 py-3 rounded-lg w-full text-left transition ${
                activeField === "to"
                  ? "bg-[#f5efe6] border border-[#e6d8c3]"
                  : "bg-neutral-100"
              }`}
            >
              <Calendar size={18} className="text-gray-500" />
              <span className="text-sm md:text-lg">
                {formattedTo || "Check out"}
              </span>
            </button>

            {/* Nights */}
            <div className="flex items-center px-4 py-3 rounded-lg bg-neutral-100 text-sm md:text-lg text-gray-700 whitespace-nowrap">
              {from && to
                ? `${nights} night${nights > 1 ? "s" : ""}`
                : "0 nights"}
            </div>

            {/* Guests */}
            <div className="flex items-center justify-between w-full px-2">
              <span className="text-lg font-medium ml-4 ">
                {guests || "No. of Guests"}
              </span>

              <div className="flex flex-row lg:flex-col gap-1">
                {/* Up Arrow */}
                <button
                  onClick={() => {
                    const current = Number(guests) || 0;
                    if (current >= 10) {
                      setShowGuestError(true);
                      setTimeout(() => setShowGuestError(false), 2000);
                      return;
                    }
                    setGuests(String(current + 1));
                  }}
                  className="bg-white px-3 py-1 rounded-md shadow text-sm leading-none"
                >
                  ▲
                </button>

                {/* Down Arrow */}
                <button
                  onClick={() => {
                    const current = Number(guests) || 1;
                    if (current <= 1) {
                      setShowGuestError(true);
                      setTimeout(() => setShowGuestError(false), 2000);
                      return;
                    }
                    setGuests(String(current - 1));
                  }}
                  className="bg-white px-3 py-1 rounded-md shadow text-sm leading-none"
                >
                  ▼
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                if (!isValid) {
                  setShowError(true);
                  setTimeout(() => setShowError(false), 2000);
                  return;
                }

                window.open(
                  "https://app.minihotelman.com/ChannelManager/booking-engine/adharsh-residency",
                  "_blank",
                );
              }}
              className="bg-[#5b4636] cursor-pointer hover:bg-stone-900 text-sm md:text-lg text-white font-semibold px-6 py-3 rounded-lg text-center whitespace-nowrap"
            >
              Book Your Sta
            </button>

            {/* Calendar */}
            {showCalendar && (
              <div className="absolute top-0 text-sm md:top-full mt-3 left-0 bg-white rounded-xl shadow-lg p-4 z-50">
                <DayPicker
                  mode="range"
                  selected={{ from, to }}
                  onSelect={(range) => {
                    if (range?.from && !range.to) {
                      setFrom(range.from);
                      setTo(undefined);
                      setActiveField("to");
                    }

                    if (range?.from && range?.to) {
                      setFrom(range.from);
                      setTo(range.to);
                      setShowCalendar(false);
                      setActiveField(null);
                    }
                  }}
                  disabled={{ before: new Date() }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Error */}
      {showError && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-6 py-3 rounded-lg shadow-lg z-50">
          Please fill the details
        </div>
      )}

      {/* Guest Limit Error */}
      {showGuestError && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-6 py-3 rounded-lg shadow-lg z-50">
          You can add 1 to 10 guests
        </div>
      )}
    </section>
  );
}
