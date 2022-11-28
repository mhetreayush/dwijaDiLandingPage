import buyTickets from "../Assets/buyTicketsBg.png";
import book from "../Assets/book.png";
import { BuyTicketsButton } from "./Navbar";
const BuyTickets = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${buyTickets})`,
      }}
      className="bg-no-repeat bg-cover grid grid-cols-10 gap-x-20 my-16 rounded-lg"
    >
      <div className=" col-span-4 flex items-center justify-center">
        <img src={book} alt="book" />
      </div>
      <div className=" col-span-6 flex flex-col justify-end pb-16 text-[#704A00]">
        <p className="font-bold text-2xl w-3/4">
          The high-vibe event exclusively for teenagers will bring the best
          ideologies into realisation.
        </p>
        <p className="italic mt-4 w-3/4">
          This book beautifully breaks all the myths and helps teenagers cope up
          with the changes that they are going through in a much more healthy
          manner. So, you surely gotta take a looookkkkkkk!
        </p>
        <div className="mt-16">
          <BuyTicketsButton
            text="Buy Tickets"
            className="text-white bg-[#F25C05]"
          />
        </div>
      </div>
    </div>
  );
};
export { BuyTickets };
