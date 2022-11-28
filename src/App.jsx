import pages from "./Components";
const App = () => {
  return (
    // <div>
    <div className="h-screen grid grid-rows-[10] bg-[#FEF7E6]">
      <div className="row-span-[1] ">
        <pages.Navbar />
      </div>
      <div className="row-span-[9] overflow-y-auto mt-4">
        <pages.Hero />
        <div className="mx-7">
          <pages.BuyTickets />
          <pages.LetsMeet />
          <pages.MeetTheAuthor />
          <pages.EventsMilestone />
          <pages.ExpertsAndSpeakers />
          <pages.Partners />
          <pages.NewsLetter />
        </div>
        <pages.Footer />
      </div>
    </div>
  );
};

export default App;
