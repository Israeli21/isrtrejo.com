import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../server/data/experience";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        My Experience
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}