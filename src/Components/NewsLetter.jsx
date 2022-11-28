import { BuyTicketsButton } from "./Navbar";

const NewsLetter = () => {
  return (
    <div className="grid grid-cols-2 gap-x-24 bg-gradient-to-t to-[#0077B6] from-[#006498] py-16 mb-16 rounded-lg px-14">
      <div className="text-white">
        <h1 className="topicHeading !text-left">CANNOT ATTEND THE EVENT?</h1>
        <p className="text-2xl">
          Subscribe for further updates and pre-booking!
          <br />
          Enjoy the best #BreakTheShush discussions soon, yay.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <input
          placeholder="Your name?"
          className="text-[#006498] rounded-md p-4 w-3/4"
        />
        <input
          placeholder="Email"
          className="text-[#006498] w-3/4 rounded-md p-4"
        />
        <div>
          <BuyTicketsButton
            text="SUBSCRIBE"
            className="bg-[#FCBF49] text-black"
          />
        </div>
      </div>
    </div>
  );
};
export { NewsLetter };
