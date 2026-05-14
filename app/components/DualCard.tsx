type DualCardProps = {
  title?: string;
  points?: string[];
  image: string;
};

export default function DualCard({ title, points, image }: DualCardProps) {
  return (
    <div className="bg-neutral-100 rounded-3xl p-2 md:p-4 grid grid-cols-1 portrait:grid-cols-1 landscape:grid-cols-2 gap-3 h-full">
      {/* Image */}
      <div>
        <img
          src={image}
          className="w-full h-auto w-full object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      {(title || points) && (
        <div className=" p-3 lg:p-10">
          {title && (
            <h3 className="text-lg md:text-4xl modernfont-bold mb-6">
              {title}
            </h3>
          )}

          {points && (
            <ul className="space-y-4 text-sm md:text-base bodyfont font-medium text-neutral-700">
              {points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  • {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
