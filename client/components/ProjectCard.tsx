import { useEffect, useState } from "react";
import { GithubIcon } from "lucide-react";

import { skills as allSkills } from "../../server/data/skills";

type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  skills: string[];
};

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectSkills = project.skills.map(skillName => 
    allSkills.find(s => s.name === skillName)
  ).filter(Boolean);

  return (
    <div className="bg-[#13151c] border-2 relative border-[#4682B4]/50 rounded-lg p-6 hover:border-[#4682B4] transition-all duration-300 w-full max-w-xl cursor-pointer">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <div className="absolute top-6 right-6 flex flex-col items-center gap-1">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6 text-gray-400 hover:text-[#4682B4] transition-colors" />
        </a><p className="text-sm">Code</p>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        {project.startDate} - {project.endDate}
      </p>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-3 mt-4">
        {projectSkills.map((skill) => skill && (
          <div key={skill.name} className="flex items-center gap-2 bg-[#1a1d28] px-3 py-2 rounded-lg group hover:bg-[#4ECDC4]/10 transition-colors">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
              }}
            />
            <span className="text-sm text-gray-300 group-hover:text-[#4ECDC4] transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}