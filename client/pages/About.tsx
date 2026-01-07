import { PicturePile } from "../components/PicturePile";
import { pictures } from "../../server/data/pictures";

export function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 bg-black text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        About Me
      </h2>
      <div className="absolute inset-0 opacity-70">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="grid grid-cols-3">
        <div className="grid col-span-1 flex items-center justify-center">
          <PicturePile pictures={pictures} />
        </div>
        <div className="grid col-span-2 pl-20 max-w-3xl text-lg md:text-xl leading-relaxed">
          <div className="flex flex-col justify-center h-full pb-36">
            <p className="mb-4">
              I’m Israel Trejo, currently a Senior Computer Science student at the University of Houston with a passion 
              for <span className="font-bold">Data Science</span> and <span className="font-bold">Software Engineering</span>. 
              I really like working on projects that makes a great impact on the world.
              I’m a team player that enjoys working and growing with others!
            </p>
            <p>
              My hobbies outside of tech include drawing comics, animating, playing the guitar and lifting weights at home.
            </p>
          </div>
          <div className="group relative">
            <img className="absolute bottom-[-70px] right-4 w-[400px]
              filter grayscale brightness-200 contrast-100 mix-blend-screen" 
              src="/images/pulsar_map.png"/>
            <div className="absolute border border-gray-500 shadow-lg shadow-[#4ECDC4]/30 bg-black bottom-[50px] right-[430px] w-[260px] text-sm py-3 px-5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p><span className="font-bold">Pulsar Map: </span>This diagram appears on the covers of the Voyager spacecrafts. Used to locate Earth in the galaxy, using 14 pulsars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}