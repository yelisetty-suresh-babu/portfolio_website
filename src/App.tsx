import { useEffect, useState } from "react";
import mainLogo from "./assets/mainLogo.svg";
import Contact from "./components/contact/Contact.component";
import Home from "./components/Home/Home.component";
import TimeLine from "./components/TimeLineView.component.tsx/TimeLineView.component";
import { BackgroundBeams } from "./components/ui/BackgroundBeams";
import { SparklesText } from "./components/ui/SparkleText";
import useWindowSize from "./hooks/useWindowSize";

const sections = ["home", "timeline", "contact"];

const App = () => {
  const [, height] = useWindowSize();
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60% 0px", // important for early detection
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <div
      className=" bg-[#111] flex flex-col  overflow-y-scroll items-center  "
      style={{
        height: height,
      }}
    >
      <BackgroundBeams className="pointer-events-none fixed top-0 left-0 w-full h-full "></BackgroundBeams>
      {/* nav bar */}
      <header className="h-fit sticky top-0   w-screen flex justify-between items-center px-20 py-2  z-10 backdrop-blur-xs">
        <SparklesText sparklesCount={4}>
          <a href="#home">
            <img src={mainLogo} alt="logo" height={80} width={80} />
          </a>
        </SparklesText>
        <div className="text-white flex items-center gap-x-4 text-2xl">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`cursor-pointer ${
                activeSection === section
                  ? "underline underline-offset-8"
                  : "hover:underline hover:underline-offset-4"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </header>

      {/* home */}
      <section id="home" className="scroll-mt-6">
        <Home />
      </section>
      <section id="timeline" className="scroll-mt-5">
        <TimeLine />
      </section>
      <section id="contact" className="scroll-mt-5">
        <Contact />
      </section>
    </div>
  );
};

export default App;
