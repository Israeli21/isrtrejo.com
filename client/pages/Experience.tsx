import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../server/data/experience";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        My Experience
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}