import SocialLinks from "@/components/SocialLinks";

const links = [
  {
    href: "https://instagram.com",
    icon: "/social/InstagramLogo.png",
    alt: "Instagram",
  },
  {
    href: "https://wa.me/1234567890",
    icon: "/social/WhatsappLogo.png",
    alt: "WhatsApp",
  },
  {
    href: "https://facebook.com",
    icon: "/social/FacebookLogo.png",
    alt: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="flex gap-[24px] flex-wrap items-center justify-between mt-4 mb-8">
      <div>
        <a
          href=""
          className="font-urbanist font-extrabold text-[40px] text-[#044723]"
        >
          Clink.co
        </a>
        <SocialLinks links={links} />
      </div>
      <div className="flex flex-col">
        <a
          href=""
          className="font-urbanist font-semibold text-[20px] text-[#044723]"
        >
          Terms and Condition
        </a>
        <a
          href=""
          className="font-urbanist font-semibold text-[20px] text-[#044723]"
        >
          Private Policy
        </a>
      </div>
    </footer>
  );
}
