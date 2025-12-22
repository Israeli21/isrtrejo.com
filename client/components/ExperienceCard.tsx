type Experience = {
    company: string;
    startDate: string;
    endDate: string;
    role: string;
    responsibilities: string[];
}

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="bg-[#13151c] border-2 border-[#4ECDC4]/30 rounded-lg p-6 hover:border-[#4ECDC4] transition-all duration-300 w-full max-w-xl cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-2">{experience.role}</h3>
            <h4 className="text-lg text-gray-300 mb-1">{experience.company}</h4>
            <p className="text-sm text-gray-400 mb-4">
                {experience.startDate} - {experience.endDate}
            </p>
            <ul className="list-disc list-inside text-gray-300">
                {experience.responsibilities.map((responsibility, index) => (   
                    <li key={index} className="mb-1">{responsibility}</li>
                ))}
            </ul>
        </div>
    );
}