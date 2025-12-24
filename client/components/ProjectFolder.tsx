import { useState } from "react";

type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  skills: string[];
};

type ProjectFolderProps = {
  projects: Project[];
}

export default function ProjectFolder({ projects }: ProjectFolderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get 3 visible projects for the folder stack
  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
      {/* Left side - Project list */}
      <div className="col-span-1 flex flex-col gap-4">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        {projects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setCurrentIndex(index)}
            className={`text-left p-3 rounded-lg transition-all ${
              index === currentIndex
                ? 'bg-[#4ECDC4] text-black font-semibold'
                : 'bg-[#1a1d28] text-gray-300 hover:bg-[#4ECDC4]/20'
            }`}
          >
            <div className="text-sm font-bold">{project.title}</div>
            <div className="text-xs mt-1">{project.startDate} - {project.endDate}</div>
          </button>
        ))}
      </div>

      {/* Right side - Folder stack */}
      <div className="col-span-3 relative h-[600px]">
        {/* Background image */}
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" 
          src="/client/images/portfolio-pic-backend.png" 
          alt="Background"
        />

        {/* Folder stack - 3 projects layered */}
        <div className="relative h-full flex items-center justify-center">
          {visibleProjects.map((project, stackIndex) => {
            const scale = 0.7 + (stackIndex * 0.15); // 0.7, 0.85, 1.0
            const offsetY = (2 - stackIndex) * 40; // Back card higher, front card lower
            const offsetX = (2 - stackIndex) * 20; // Slight horizontal offset
            const zIndex = stackIndex + 1;

            return (
              <div
                key={`${project.title}-${stackIndex}`}
                className="absolute bg-[#1a1d28] border-4 border-gray-700 rounded-lg p-6 shadow-2xl transition-all duration-500"
                style={{
                  transform: `scale(${scale}) translateY(${offsetY}px) translateX(${offsetX}px)`,
                  zIndex: zIndex,
                  width: '80%',
                  maxWidth: '500px',
                }}
              >
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-4">
                  {project.startDate} - {project.endDate}
                </p>
                {stackIndex === 2 && ( // Only show full details on the front card
                  <>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4ECDC4] hover:underline"
                    >
                      View Project →
                    </a>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
          <button
            onClick={handlePrev}
            className="bg-[#4ECDC4] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#3db8af] transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#4ECDC4] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#3db8af] transition-colors"
          >
            Next →
          </button>
        </div>

        {/* Front image at bottom */}
        <img 
          className="absolute bottom-0 left-0 w-full h-32 object-cover z-40" 
          src="/client/images/portfolio-pic-frontend.png" 
          alt="Foreground"
        />
      </div>
    </div>
  );
}