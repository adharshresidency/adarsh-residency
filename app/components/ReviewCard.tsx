/* eslint-disable @next/next/no-img-element */
import { ExternalLink, Star } from "lucide-react";
import type { GuestReview } from "@/app/lib/google-reviews";

export default function ReviewCard({
  name,
  image,
  authorUrl,
  review,
  rating,
  relativeTime,
  sourceUrl,
}: GuestReview) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const author = (
    <>
      {image ? (
        <img
          src={image}
          alt=""
          referrerPolicy="no-referrer"
          className="h-11 w-11 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6d8c3] text-sm font-semibold text-[#5b4636]"
        >
          {initials}
        </span>
      )}
      <span>
        <span className="block font-semibold text-[#2f251e]">{name}</span>
        <span className="mt-0.5 block text-sm text-[#74695f]">
          {relativeTime || "Google review"}
        </span>
      </span>
    </>
  );

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(69,51,37,0.09)] md:p-8">
      <div className="flex items-center justify-between gap-4">
        {authorUrl ? (
          <a
            href={authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#5b4636] focus-visible:ring-offset-4"
          >
            {author}
          </a>
        ) : (
          <div className="flex min-w-0 items-center gap-3">{author}</div>
        )}

        <div
          className="flex shrink-0 items-center gap-0.5 text-[#b17b39]"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={15}
              fill={index < Math.round(rating) ? "currentColor" : "none"}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <blockquote className="mt-6 flex-1 text-base leading-7 text-[#574b42]">
        “{review}”
      </blockquote>

      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#5b4636] underline decoration-[#9f846d]/50 underline-offset-4 transition-colors hover:text-[#2f251e] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4636]"
      >
        View on Google Maps
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </article>
  );
}
