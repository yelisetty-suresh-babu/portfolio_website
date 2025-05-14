import MyIcon from "./../public/temp.svg";
import Contact from "./components/contact/Contact.component";
import Home from "./components/Home/Home.component";
import TimeLine from "./components/TimeLineView.component.tsx/TimeLineView.component";
import { BackgroundBeams } from "./components/ui/BackgroundBeams";
import { SparklesText } from "./components/ui/SparkleText";

const App = () => {
  return (
    <div className=" bg-[#111] flex flex-col  overflow-y-scroll items-center  ">
      <BackgroundBeams className="fixed top-0 left-0 w-full h-full "></BackgroundBeams>
      {/* nav bar */}
      <header className="h-fit  w-screen flex justify-between items-center px-20 py-4 z-10">
        <SparklesText sparklesCount={5}>
          <img src={MyIcon} alt="logo" height={80} width={80} />
        </SparklesText>
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
      <section>
        <TimeLine />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
