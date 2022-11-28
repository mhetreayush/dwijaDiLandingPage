import Assets from "../Assets";
import { BuyTicketsButton } from "./Navbar";

const LetsMeet = () => {
  return (
    <div id="event">
      <div className="flex items-center flex-col">
        <h1 className="topicHeading">LET&apos;S MEET IRL</h1>
        <img src={Assets.underline} alt="" className="w-1/4" />
        <h1 className="text-[#EA159E] font-bold text-4xl my-4">
          24TH AUGUST 2022
        </h1>
        <h1 className="text-[#28947F] font-bold text-3xl">
          Koramangla, Bangalore · 10AM onwards
        </h1>
        <img src={Assets.letsMeetIRL} alt="Lets Meet IRL" className="mt-8" />
        <div className="my-16">
          <BuyTicketsButton
            text="Buy Tickets"
            className="text-white bg-[#F25C05]"
          />
        </div>
      </div>
    </div>
  );
};
export { LetsMeet };
