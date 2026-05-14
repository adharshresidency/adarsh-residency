// AmenitiesCard.tsx

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function AmenitiesCard({ title, description, image }: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className="w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-2xl md:text-4xl subheading">{title}</h2>

        <p className="mt-4 text-gray-500 bodyfont font-medium leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
