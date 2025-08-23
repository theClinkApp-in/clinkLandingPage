import Image from "next/image";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="w-full max-w-full xl:max-w-[1191px] mx-auto">
      <main className="px-8 py-16">
        <div className="grid grid-cols-[1fr_726px] gap-4">
          <div>
            <div className="sticky top-16">
              <Logo />
              <JoinWaitlistForm />
            </div>
          </div>
          <div className="flex flex-col gap-48">
            <Image
              src="/marketing.png"
              alt="Marketing"
              width={726}
              height={692}
              priority
            />
            <div>
              {/* Normal */}
              <Card
                title="Want extra benefits from your card rewards?"
                description="Redeem your points for exclusive coupons right in the app"
                image="/card/1.png"
                reverse
              />

              {/* Reversed */}
              <Card
                title="Feeling overwhelmed by too many offers?"
                description="Clink filters the chaos and shows only the most valuable deals."
                image="/card/2.png"
              />
            </div>
            <div>
              {/* Normal */}
              <Card
                title="Unsure which card actually gives the best deal?"
                description="We tell you the best—every time for all card wins big or small."
                image="/card/3.png"
                reverse
              />

              {/* Reversed */}
              <Card
                title="Don’t know which card to use for your shopping?"
                description="Instantly see which of your cards unlocks the best fashion discounts."
                image="/card/4.png"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
