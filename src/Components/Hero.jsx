import assets from "../Assets";
const headingClass =
  "rounded-md !text-8xl topicHeading bg-black text-[#FFB606] py-3 px-5";
const Hero = () => {
  return (
    <div id="about">
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <img src={assets.left} alt="Left" />
        </div>
        <div className="col-span-6 flex items-center flex-col">
          <h1 className={headingClass}>WHAT&apos;S THE</h1>
          <h1 className={`${headingClass} mt-7`}>SHUSH?</h1>
          <p className="mt-8 mb-5 text-green-600 text-center font-bold text-2xl">
            Get ready to take a sneak peak of Dr. Tanaya&apos;s
            <br />
            first book on
          </p>
          <h1 className="text-[32px] text-black font-extrabold">
            24th August 2022
          </h1>
          <img src={assets.underline} alt="underline" className="w-1/2" />
        </div>
        <div className="col-span-2">
          <img src={assets.right} alt="Right" />
        </div>
      </div>
      <img src={assets.mid} alt="Mid" className="mt-5" />
    </div>
  );
};
export { Hero };
