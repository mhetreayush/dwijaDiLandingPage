import author from "../Assets/meetTheAuthor.png";
import { BuyTicketsButton } from "./Navbar";
const MeetTheAuthor = () => {
  return (
    <div className="rounded-lg grid py-28 grid-cols-2 bg-gradient-to-t to-[#B54E78] from-[#8D3B5C]">
      <div className="col-span-1  px-20 text-white">
        <div className="flex flex-col gap-y-12">
          <h1 className="topicHeading !text-left">MEET THE AUTHOR</h1>
          <p className="text-3xl">
            &ldquo;Join in as we do some fun mythbusting, talk about taboo
            topics, learn in fun and #ScrewTheShush!&rdquo;
          </p>
          <p className="italic text-xl">
            ~Dr. Tanaya is an award winning, internationally trained medical
            doctor, embryologist, and scientist who is passionate about medical
            education.
          </p>
        </div>
        <div className="mt-16">
          <BuyTicketsButton
            text="CHECK HER PODCASTS"
            className="bg-[#FEF7E6] text-[#B54E78]"
          />
        </div>
      </div>
      <div className="col-span-1">
        <img src={author} alt="The Author" className="-mt-24" />
      </div>
    </div>
  );
};
export { MeetTheAuthor };
