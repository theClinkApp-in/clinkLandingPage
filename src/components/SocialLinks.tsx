import Image from "next/image";

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

interface SocialLinksProps {
  title?: string;
  links: SocialLink[];
}

export default function SocialLinks({ title = "Reach out to us", links }: SocialLinksProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="font-urbanist font-semibold text-[20px] text-[#044723]">{title}</p>
      <div className="flex gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={35}
              height={35}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
