import { skills as allSkills } from "../../server/data/skills";

type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  skills: string[];
};

type ProjectFolderProps = {
  project: Project[];
}

export default function ProjectFolder ({ project }: ProjectFolderProps) {
  const projectSkills = project.skills.map(skillName => 
    allSkills.find(s => s.name === skillName)
  ).filter(Boolean);

  return (
      <div className="block columns-4">
        <div className="flex flex-wrapcol-span-1">
          {projectSkills.map((skill) => skill && (
            <div key={skill.name} className="flex items-center gap-2 bg-[#1a1d28] px-3 py-2 rounded-lg group hover:bg-[#4ECDC4]/10 transition-colors mb-2">
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
        <div className="col-span-3">
          <img className="w-full h-auto z-100" src="/client/images/portfolio-pic-backend.png" alt="Project Folder"/>
          <div className="flex flex-wrap gap-3 mt-4 z-200">
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
          <img className="w-full h-auto z-300 absolute bottom-0" src="/client/images/portfolio-pic-frontend.png"/>
        </div>
      </div>
  )
};