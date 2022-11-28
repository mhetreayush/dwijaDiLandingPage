import { AiOutlineArrowRight } from "react-icons/ai";

const BuyTicketsButton = (props) => {
  return (
    <button
      className={`flex ${props.className} gap-x-1 items-center !font-extrabold text-2xl  py-4 px-5 rounded-lg border-black border-4 sh shadow-black  shadow-md `}
    >
      {props.text} <AiOutlineArrowRight size={20} className="bg-transparent" />
    </button>
  );
};

const Navbar = () => {
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  return (
    <div className="grid grid-cols-8 items-center p-6 w-screen ">
      <div className="col-span-2 flex w-full justify-start">
        <h1 className="topicHeading text-4xl"> DR. CUTERUS</h1>
      </div>
      <div className="col-span-4 flex justify-center gap-x-16">
        {["about", "author", "event", "timeline"].map((event) => (
          <a className="text-2xl font-bold" href={`#${event}`}>
            {capitalize(event)}
          </a>
        ))}
      </div>
      <div className="col-span-2 flex w-full justify-end">
        <BuyTicketsButton
          text="Buy Tickets"
          className="text-white bg-[#F25C05]"
        />
      </div>
    </div>
  );
};
export { Navbar, BuyTicketsButton };
