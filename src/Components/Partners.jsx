import Assets from "../Assets";
const Partners = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="topicHeading">OUR PARTNERS</h1>
      <img src={Assets.underline} alt="" className="w-1/4" />
      <div className="flex w-full justify-evenly items-center py-20">
        <img src={Assets.toi} alt="Times Of India" className="h-full" />
        <img src={Assets.penguin} alt="Penguin" className="h-full" />
        <img src={Assets.tedx} alt="TedX" className="h-full" />
      </div>
    </div>
  );
};
export { Partners };
