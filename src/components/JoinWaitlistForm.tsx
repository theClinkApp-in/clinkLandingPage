export default function JoinWaitlistForm() {
  return (
    <div className="flex flex-col">
      <h2 className="font-urbanist font-bold leading-normal text-[38px] text-[#044723] mb-3">Excited to level-up your wallet?</h2>
      <p className="font-urbanist font-semibold text-[20px] text-[#044723] mb-3">Get on the waitlist and be the first to try the app!</p>
      <form className="flex gap-2">
        <input className="width-[240px] height-[40px] py-[6px] px-[22px] bg-[#FFFFFF66] backdrop-blur-[22px] shadow-[0px_2.2px_17.6px_0px_#0000001A] rounded-[14px]" placeholder="Enter email"/>
        <button className="width-[132px] height-[40px] bg-[#EF9C0080] py-[6px] px-[22px] border-[1.1px] border-[#EF9C0033] rounded-[14px] backdrop-blur-[22px] shadow-[0px_2.2px_17.6px_0px_#EF9C004D] font-urbanist font-bold leading-normal text-[20px] text-[#1A1B3A]">Join Waitlist!</button>
      </form>
    </div>
  );
}
