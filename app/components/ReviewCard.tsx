type ReviewCardProps = {
  name: string;
  image: string;
  review: string;
};

export default function ReviewCard({ name, image, review }: ReviewCardProps) {
  return (
    <div className="relative bg-neutral-100 rounded-3xl px-6 md:px-16 py-10 text-center max-w-3xl mx-auto">
      {/* Avatar */}
      <div className="flex justify-center -mt-20 mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg md:text-xl font-medium mb-4">- {name}</h3>

      {/* Review */}
      <p className="text-sm md:text-base text-neutral-600 italic leading-relaxed">
        “ {review} ”
      </p>
    </div>
  );
}
