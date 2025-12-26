import { PicturePile } from "../components/PicturePile";
import { pictures } from "../../server/data/pictures";

export function About() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 bg-black text-white">
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
          <div className="flex flex-col justify-center h-full">
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
        </div>
      </div>
    </section>
  );
}