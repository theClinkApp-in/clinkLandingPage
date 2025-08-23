import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row items-center gap-1">
      <Image src="/logo.png" alt="Logo" height={120} width={120} />
      <div className="font-barlow font-bold text-center text-[#EF9C00] text-[102px]">
        Clink
      </div>
    </div>
  );
}
