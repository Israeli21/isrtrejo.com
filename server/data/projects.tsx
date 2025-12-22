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
        title: "Coogs for Energy Hachathon Winner",
        description: "Designed a biomass-to-RNG conversion model that improved energy yield by 25% using lifecycle analysis, leading to judges’ recommendation to pursue commercialization of the concept. Worked in a diverse team of 6, which includes chemical engineers, business, and computer science majors",
        startDate: "Jan 2025",
        endDate: "Feb 2025",
        link: "https://example.com",
        skills: ["Figma"],
    },
    {
        title: "UH Student Campus Website",
        description: "Helped develop the frontend design for a marketplace/tutoring website exclusively for students. Constructed features for tutoring information and student marketplace listings.",
        startDate: "Feb 2025",
        endDate: "Aug 2025",
        link: "https://example.com",
        skills: ["TypeScript", "React", "Tailwind"],
    },
    {
        title: "Shell AI Hackathon 2025",
        description: "Researched and developed models capable of predicting the final properties of complex fuel blends based on their constituent components and proportions.Models are used to engineer predictive tools that can formulate sustainable and innovative fuels",
        startDate: "July 2025",
        endDate: "Aug 2025",
        link: "https://example.com",
        skills: ["Python", "Sklearn", "Pytorch"],
    },
    {
        title: "CodeRED Hackathon",
        description: "Led a team of 4 in developing an AI-powered web app that identified optimal U.S. locations for renewable energyfacilities, integrating geospatial & climate datasets for model training, improving decision efficiency by 35%",
        startDate: "Oct 2025",
        endDate: "Nov 2025",
        link: "https://example.com",
        skills: ["Python", "Pandas", "Streamlit"],
    },
    {
        title: "Altairium Grant Writing Assistant",
        description: "Developed an AI-driven tool to assist researchers in writing grant proposals by generating tailored content based on specific research objectives and funding agency requirements, enhancing proposal quality and submission efficiency",
        startDate: "Oct 2025",
        endDate: "Dec 2025",
        link: "https://example.com",
        skills: ["TypeScript", "Python", "React", "Tailwind"],
    }
];