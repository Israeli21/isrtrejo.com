import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../server/data/experience";

type ExperienceProps = {
  language: 'en' | 'es';
}

export function Experience({ language }: ExperienceProps) {
  return (
    <section id="experience" className="min-h-screen bg-black w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        {language === 'en' ? 'My Experience' : 'Mi Experiencia'}
      </h2>

      <div className="flex">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {experiences.map((experience) => (
                <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}