import { BuyTicketsButton } from "./Navbar";

const socials = [
  {
    name: "INSTAGRAM",
    link: "#",
  },
  {
    name: "TWITTER",
    link: "#",
  },
  {
    name: "YOUTUBE",
    link: "#",
  },
  {
    name: "LINKEDIN",
    link: "#",
  },
];
const Footer = () => {
  return (
    <div className="px-20 flex justify-between gap-x-28 bg-gradient-to-t to-[#FCBF49] from-[#F4A304] py-16">
      <div>
        <h1 className="topicHeading !text-left">
          LOVING YOURSELF
          <br />
          STARTS HERE
        </h1>
      </div>
      <div className="text-xl text-[#582F0E]">
        <h1 className="font-bold">FOLLOW DR. CUTERUS</h1>
        <ul className="flex flex-col gap-y-4 mt-4">
          {socials.map((social) => {
            return (
              <li>
                <a className="font-medium" href={social.link}>
                  {social.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-[#582F0E] font-bold">
          JOIN US IN THE STORY
        </h1>
        <h1 className="text-lg text-[#B05E1C]">Subscribe to our news letter</h1>
        <input
          placeholder="you@arethebest.com"
          className="text-[#FCBF49] rounded-md p-4 my-5 w-full"
        />
        <BuyTicketsButton
          text="JOIN THE COMMUNITY"
          className="text-white bg-[#479C4C]"
        />
      </div>
    </div>
  );
};
export { Footer };
