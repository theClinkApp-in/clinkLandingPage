import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean; // optional prop
}

export default function Card({
  title,
  description,
  image,
  reverse = false,
}: CardProps) {
  return (
    <div
      className={`flex max-w-3xl bg-white overflow-hidden ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-1/2 h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="font-urbanist font-bold leading-normal text-[40px] text-[#044723] mb-3">
          {title}
        </h2>
        <p className="font-urbanist font-semibold text-[22px] text-[#044723]">
          {description}
        </p>
      </div>
    </div>
  );
}
