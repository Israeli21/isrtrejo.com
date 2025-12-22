export type Project = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    link: string;
    skills: string[];
};

export const projects: Project[] = [
    {
        title: "Shell AI Hackathon 2025",
        description: "Researched and developed models capable of predicting the final properties of complex fuel blends based on their constituent components and proportions.Models are used to engineer predictive tools that can formulate sustainable and innovative fuels",
        startDate: "January 2025",
        endDate: "February 2025",
        link: "https://example.com",
        skills: ["Python"],
    },
    {
        title: "UH Student Campus Website",
        description: "Designed a biomass-to-RNG conversion model that improved energy yield by 25% using lifecycle analysis, leading to judges’ recommendation to pursue commercialization of the concept. Worked in a diverse team of 6, which includes chemical engineers, business, and computer science majors",
        startDate: "Febuary 2025",
        endDate: "May 2025",
        link: "https://example.com",
        skills: ["TypeScript", "React", "Tailwind"],
    },
    {
        title: "Coogs for Energy Hachathon Winner",
        description: "Designed a biomass-to-RNG conversion model that improved energy yield by 25% using lifecycle analysis, leading to judges’ recommendation to pursue commercialization of the concept. Worked in a diverse team of 6, which includes chemical engineers, business, and computer science majors",
        startDate: "July 2025",
        endDate: "August 2025",
        link: "https://example.com",
        skills: ["React", "TypeScript", "Tailwind"],
    }
];