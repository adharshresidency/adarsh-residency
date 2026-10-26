export const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/7RYcL4Us36QJmxUv7";

export const GOOGLE_PLACE_ID = "ChIJkwDzZ6VlrzsRwy74Mqtwesg";

export type GuestReview = {
  id: string;
  name: string;
  review: string;
  rating: number;
  relativeTime: string;
  authorUrl?: string;
  image?: string;
  sourceUrl: string;
};

export type GoogleReviewFeed = {
  placeName: string;
  rating: number;
  reviewCount: number;
  sourceUrl: string;
  reviews: GuestReview[];
  live: boolean;
};

export const fallbackGoogleReviews: GoogleReviewFeed = {
  placeName: "Adharsh Residency – Serviced Apartments Mysore",
  rating: 4.9,
  reviewCount: 49,
  sourceUrl: GOOGLE_MAPS_URL,
  live: false,
  reviews: [
    {
      id: "prateek-ap",
      name: "Prateek ap",
      rating: 5,
      relativeTime: "2 months ago",
      review:
        "Our stay at Adarsh Residency - Service Apartment exceeded our expectations. The check-in was smooth and hassle-free, and both the host and co-host were friendly, responsive, and ensured we had a comfortable stay.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "bharath-bh",
      name: "Bharath Bh",
      rating: 5,
      relativeTime: "5 months ago",
      review:
        "Had a really comfortable and pleasant stay at this apartment. The rooms were spacious, clean, and well-maintained with all the necessary amenities for both short and long stays. The staff was very courteous and responsive.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "shashank-spike",
      name: "shashank spike",
      rating: 5,
      relativeTime: "4 months ago",
      review:
        "Had a wonderful stay at Adarsh Residency Service Apartment. The rooms were clean, spacious and well-maintained. The location was convenient, and all the necessary amenities were available. We had a comfortable and pleasant experience. Highly recommended for families, friends, and business travelers. Thank you for the great hospitality.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "muhammad-nihal",
      name: "Muhammad Nihal",
      rating: 5,
      relativeTime: "2 weeks ago",
      review:
        "I stayed at Adarsh Residency in Mysore and had a really great experience. The room was very clean and comfortable, and everything was well maintained. The staff were just as good, especially Abdul at the reception, who was very polite and helpful.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "nadeem-nadeem",
      name: "Nadeem nadeem",
      rating: 5,
      relativeTime: "4 months ago",
      review:
        "Had a very pleasant stay at Adharsh Residency during my Mysuru trip. The property was clean, well-maintained, and had all the essential amenities for a comfortable stay. There was ample parking space, which was very convenient for us.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "brindha-ramanathan",
      name: "Brindha Ramanathan",
      rating: 5,
      relativeTime: "2 months ago",
      review:
        "I booked Adharsh Residency via Airbnb. It was a wonderful experience. House was neat and clean. It was well maintained. Housekeeping was very friendly with absolutely no complaint. House was equipped with basic amenities. Overall it was great experience with good terrace to enjoy.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "dwarakanath-k",
      name: "Dwarakanath K",
      rating: 5,
      relativeTime: "4 months ago",
      review:
        "I had a comfortable stay here for a night, recently. The place is well maintained, clean and in a quiet residential area. Has ample parking and lift facility. Used a 2 BHK which has all necessary amenities for a comfortable stay.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "swa-ham",
      name: "Swa Ham",
      rating: 5,
      relativeTime: "2 months ago",
      review:
        "Adharsh serviced apartments are well maintained, comfortable and well equipped. The two bedroom apartments have a functional kitchen, rooms have AC, bathrooms equipped with geysers for hot water. You will have a comfortable stay here when in Mysore. Abdul made sure our stay was good.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "adarsh-sr",
      name: "adarsh sr",
      rating: 5,
      relativeTime: "3 months ago",
      review:
        "We did stay at this property on 26th hosted by Mr Deepesh, experience was flawless. We all loved this property very neat and clean wonderful friendly host and the maintenance crew. I strongly recommend this property in Mysore. Thank you.",
      sourceUrl: GOOGLE_MAPS_URL,
    },
    {
      id: "rachana-ts",
      name: "Rachana T S",
      rating: 5,
      relativeTime: "5 months ago",
      review:
        "I had a very comfortable stay here in Mysore. The clean rooms and convenient location made everything easy and hassle-free. This well-maintained serviced apartment offers great value for money. Highly recommended!",
      sourceUrl: GOOGLE_MAPS_URL,
    },
  ],
};

export function mergeGoogleReviews(
  liveReviews: GuestReview[],
  fallbackReviews = fallbackGoogleReviews.reviews,
) {
  const merged = [...liveReviews];
  const names = new Set(
    liveReviews.map((review) => review.name.trim().toLocaleLowerCase()),
  );

  for (const review of fallbackReviews) {
    const normalizedName = review.name.trim().toLocaleLowerCase();
    if (!names.has(normalizedName)) {
      merged.push(review);
      names.add(normalizedName);
    }
    if (merged.length === 10) break;
  }

  return merged.slice(0, 10);
}
