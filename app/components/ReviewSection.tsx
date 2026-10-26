"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import ReviewCard from "./ReviewCard";
import {
  fallbackGoogleReviews,
  mergeGoogleReviews,
  type GoogleReviewFeed,
} from "@/app/lib/google-reviews";

const REFRESH_INTERVAL = 5 * 60 * 1000;
const CAROUSEL_INTERVAL = 7000;

export default function ReviewSection() {
  const [feed, setFeed] = useState<GoogleReviewFeed>(fallbackGoogleReviews);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const loadReviews = useCallback(async () => {
    try {
      const response = await fetch("/api/google-reviews", { cache: "no-store" });
      if (!response.ok) return;

      const liveFeed = (await response.json()) as GoogleReviewFeed;
      if (liveFeed.reviews?.length) setFeed(liveFeed);
    } catch {
      // Keep the verified ten-review snapshot visible if Google is unavailable.
    }
  }, []);

  useEffect(() => {
    const initialRefresh = window.setTimeout(loadReviews, 0);
    const interval = window.setInterval(loadReviews, REFRESH_INTERVAL);

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void loadReviews();
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      window.clearTimeout(initialRefresh);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [loadReviews]);

  const reviews = useMemo(
    () => mergeGoogleReviews(feed.reviews),
    [feed.reviews],
  );

  const goToReview = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      if (!carousel || reviews.length === 0) return;

      const nextIndex = (index + reviews.length) % reviews.length;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      carousel.scrollTo({
        left: carousel.clientWidth * nextIndex,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(nextIndex);
    },
    [reviews.length],
  );

  useEffect(() => {
    if (isPaused || reviews.length < 2) return;

    const interval = window.setInterval(
      () => goToReview(activeIndex + 1),
      CAROUSEL_INTERVAL,
    );

    return () => window.clearInterval(interval);
  }, [activeIndex, goToReview, isPaused, reviews.length]);

  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.clientWidth === 0) return;

    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    setActiveIndex(Math.min(nextIndex, reviews.length - 1));
  }, [reviews.length]);

  return (
    <section className="relative overflow-hidden bg-[#f7f6f4] px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="subheading text-3xl leading-tight text-[#2f251e] md:text-5xl">
              Guests remember the details
            </h2>
            <p className="bodyfont mt-4 max-w-2xl text-base leading-7 text-[#665b52]">
              Ten recent reviews from guests of Adharsh Residency, with every
              review linked back to our official Google listing.
            </p>
          </div>

          <a
            href={feed.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-4 rounded-xl bg-[#5b4636] px-5 py-4 text-white shadow-[0_14px_34px_rgba(69,51,37,0.20)] outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#5b4636] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f4]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#b17b39]">
              <Star size={19} fill="currentColor" aria-hidden="true" />
            </span>
            <span>
              <span className="flex items-baseline gap-2">
                <strong className="text-2xl tabular-nums">{feed.rating}</strong>
                <span className="text-sm text-white/80">
                  {feed.reviewCount} Google reviews
                </span>
              </span>
              <span className="mt-0.5 block text-xs text-white/70">
                {feed.live ? "Synced from Google" : "Verified Google listing"}
              </span>
            </span>
          </a>
        </div>

        <div
          className="mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
            aria-label="Guest reviews"
            aria-live="polite"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full shrink-0 snap-center px-1"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
            <p className="bodyfont text-sm text-[#665b52]" aria-live="polite">
              Review <span className="font-semibold">{activeIndex + 1}</span> of{" "}
              {reviews.length}
            </p>

            <div className="flex items-center gap-2" aria-label="Choose a review">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => goToReview(index)}
                  className={`h-2 rounded-full outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#5b4636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f6f4] ${
                    activeIndex === index
                      ? "w-7 bg-[#5b4636]"
                      : "w-2 bg-[#c9beb4] hover:bg-[#9d8c7e]"
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToReview(activeIndex - 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cec5] bg-white text-[#5b4636] outline-none transition-colors hover:bg-[#eee9e4] focus-visible:ring-2 focus-visible:ring-[#5b4636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f6f4]"
                aria-label="Show previous review"
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goToReview(activeIndex + 1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5b4636] text-white shadow-[0_10px_24px_rgba(69,51,37,0.18)] outline-none transition-colors hover:bg-[#46362b] focus-visible:ring-2 focus-visible:ring-[#5b4636] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f6f4]"
                aria-label="Show next review"
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
