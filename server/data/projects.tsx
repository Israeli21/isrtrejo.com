export type Project = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    link: string;
    skills: string[];
    liveLink: string;
};

export const projects: Project[] = [
    // {
    //     title: "Coogs for Energy Hachathon Winner",
    //     description: "Designed a biomass-to-RNG conversion model that improved energy yield by 25% using lifecycle analysis, leading to judges’ recommendation to pursue commercialization of the concept. Worked in a diverse team of 6, which includes chemical engineers, business, and computer science majors",
    //     startDate: "Jan 2025",
    //     endDate: "Feb 2025",
    //     link: "https://github.com/DavidAOdim/digestate-market",
    //     skills: ["Figma"],
    // },
    // {
    //     title: "UH Student Campus Website",
    //     description: "Helped develop the frontend design for a marketplace/tutoring website exclusively for students. Constructed features for tutoring information and student marketplace listings.",
    //     startDate: "Feb 2025",
    //     endDate: "Aug 2025",
    //     link: "https://github.com/alakram01/UH_Market_Place",
    //     skills: ["TypeScript", "React", "Next.js", "Tailwind", "MySQL", "Express", "Git"],
    // },
    {
        title: "Volentra",
        description: "Volentra is a full-stack volunteer matching platform, that connects volunteers to events that best match their skills and location through a custom matching algorithm.",
        startDate: "July 2025",
        endDate: "Aug 2025",
        link: "https://github.com/Sthiber/COSC-4353-Project",
        skills: ["JavaScript", "React", "Tailwind", "Node.js", "Docker", "MySQL", "Git", "Vercel"],
        liveLink: "https://cosc-4353-project.vercel.app/"
    },
    {
        title: "Shell AI Hackathon 2025",
        description: "Researched and developed models capable of predicting the final properties of complex fuel blends based on their constituent components and proportions.Models are used to engineer predictive tools that can formulate sustainable and innovative fuels",
        startDate: "July 2025",
        endDate: "Aug 2025",
        link: "https://github.com/LD-Shell/shell_hackathon_2025",
        skills: ["Python", "Sklearn", "Pytorch", "Flask", "Pandas", "Jupyter"],
        liveLink: ""
    },
    {
        title: "CodeRED Hackathon",
        description: "Led a team of 4 in developing an AI-powered web app that identified optimal U.S. locations for renewable energyfacilities, integrating geospatial & climate datasets for model training, improving decision efficiency by 35%",
        startDate: "Oct 2025",
        endDate: "Nov 2025",
        link: "https://github.com/Israeli21/CodeRED",
        skills: ["Jupyter", "Python", "Pandas", "Streamlit", "Git", "Sklearn"],
        liveLink: ""
    },
    {
        title: "Altairium Grant Writing Assistant",
        description: "Developed an AI-driven tool to assist researchers in writing grant proposals by generating tailored content based on specific research objectives and funding agency requirements, enhancing proposal quality and submission efficiency",
        startDate: "Oct 2025",
        endDate: "Dec 2025",
        link: "https://github.com/Israeli21/altairium-grant-writing-tool",
        skills: ["TypeScript", "Python", "React", "Tailwind", "Supabase", "Git"],
        liveLink: ""
    },
    {
        title: "360 Image Viewer",
        description: "Created an interactive 360-degree image viewer, allowing users to upload and explore panoramic images within a web application. Implementation of a point cloud effect to enhance user immersion and engagement.",
        startDate: "Oct 2025",
        endDate: "Present",
        link: "https://github.com/Israeli21/360-image-viewer",
        skills: ["TypeScript", "React", "Three.js", "Python", "Colab", "Git"],
        liveLink: ""
    }
];