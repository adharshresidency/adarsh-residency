import {
  GOOGLE_MAPS_URL,
  GOOGLE_PLACE_ID,
  type GoogleReviewFeed,
} from "@/app/lib/google-reviews";

type GooglePlaceResponse = {
  displayName?: { text?: string };
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    name?: string;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    rating?: number;
    googleMapsUri?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Google Places API key is not configured." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,googleMapsUri,rating,userRatingCount,reviews",
        },
        next: { revalidate: 300 },
      },
    );

    if (!response.ok) {
      return Response.json(
        { error: "Google reviews are temporarily unavailable." },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    const place = (await response.json()) as GooglePlaceResponse;
    const sourceUrl = place.googleMapsUri || GOOGLE_MAPS_URL;
    const reviews = (place.reviews ?? [])
      .filter((review) => review.text?.text && review.authorAttribution?.displayName)
      .map((review, index) => ({
        id: review.name || `google-review-${index}`,
        name: review.authorAttribution?.displayName || "Google reviewer",
        review: review.text?.text || "",
        rating: review.rating || 5,
        relativeTime: review.relativePublishTimeDescription || "",
        authorUrl: review.authorAttribution?.uri,
        image: review.authorAttribution?.photoUri,
        sourceUrl: review.googleMapsUri || sourceUrl,
      }));

    if (!reviews.length) {
      return Response.json(
        { error: "No Google reviews were returned." },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    const feed: GoogleReviewFeed = {
      placeName:
        place.displayName?.text ||
        "Adharsh Residency – Serviced Apartments Mysore",
      rating: place.rating || 4.9,
      reviewCount: place.userRatingCount || reviews.length,
      sourceUrl,
      reviews,
      live: true,
    };

    return Response.json(feed, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
      },
    });
  } catch {
    return Response.json(
      { error: "Google reviews are temporarily unavailable." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
