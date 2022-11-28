import Assets from "../Assets";
const EventsMilestone = () => {
  return (
    <div>
      <div className="flex items-center flex-col mt-20">
        <h1 className="topicHeading">EVENT MILESTONES</h1>
        <img src={Assets.underline} alt="" className="w-1/4" />
        <img className="mt-24" src={Assets.eventMilestones} />
      </div>
    </div>
  );
};
export { EventsMilestone };
