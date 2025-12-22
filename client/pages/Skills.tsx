import SkillCard from "../components/SkillsCard";
import { skills } from "../../server/data/skills";

export function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">My Skills</h2>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}