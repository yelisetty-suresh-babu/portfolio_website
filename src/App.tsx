import MyIcon from "./../public/temp.svg";
import Home from "./components/Home.component";
import TimeLine from "./components/TimeLine.component";
import { BackgroundBeams } from "./components/ui/BackgroundBeams";

// import { BackgroundBeamsWithCollision } from "./components/ui/BackgroundBeamsWithCollision";
// import { BackgroundLines } from "./components/ui/BackgroundLines";

const App = () => {
  return (
    <div className=" bg-[#111] flex flex-col  overflow-y-scroll items-center  ">
      <BackgroundBeams className="fixed top-0 left-0 w-full h-full "></BackgroundBeams>
      {/* nav bar */}
      <header className="h-fit  w-screen flex justify-between items-center px-20 py-4 z-10">
        <img src={MyIcon} alt="logo" height={80} width={80} />
        <div className="text-white flex items-center gap-x-4 text-2xl">
          <button className="cursor-pointer underline underline-offset-8 ">
            Home
          </button>
          <button className="cursor-pointer ">Work</button>
          <button className="cursor-pointer ">Projects</button>
          <button className="cursor-pointer ">Education</button>
          <button className="cursor-pointer ">Contact</button>
        </div>
      </header>

      {/* home */}
      <section className="">
        <Home />
      </section>
      <TimeLine />
    </div>
  );
};

export default App;
