import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";

import { TopBar } from "./components/TopBar";
import { About } from "./components/About";

export function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  }, []);

  return (
    <><TopBar />
      <section className="relative min-h-screen w-full flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Space Background with Gradient */}
      <div className="absolute inset-0 bg-black">
        {/* Animated Stars */}
        <div className="absolute inset-0 opacity-70">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Galaxy Image */}
        <img 
          src="/client/images/galaxy.png" 
          alt="Galaxy"
          className = "float-right pt-40 w-[780px] pr-4"
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-2xl pl-8 transition-all duration-700 ${
            animationComplete
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}>

        <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
          Hello, I'm</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight pb-4">
          Israel Trejo</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-10 font-normal">
          Exploring the universe of tech</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="px-8 py-4 text-base font-medium rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
            Download CV
          </button>
          <button className="px-8 py-4 text-base font-medium rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
            Contact Info
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/israel-trejo-2863a8226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={32} />
          </a>
          <a
            href="https://github.com/Israeli21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
            aria-label="GitHub"
          >
            <GithubIcon size={32} />
          </a>
        </div>
      </div>
    </section>
    <About />
    </>
  );
}