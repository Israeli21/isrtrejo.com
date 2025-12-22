export type Experience = {
    company: string;
    startDate: string;
    endDate: string;
    role: string;
    responsibilities: string[];
};

export const experiences: Experience[] = [
    {
        company: "Altairium",
        role: "Software Engineering & AI-ML Intern",
        startDate: "October 2025",
        endDate: "Present",
        responsibilities: [
            "Contribute to projects as a Software Engineering & AI-ML Intern, supporting client-focused and internal initiatives",
            "Collaborate with team members to analyze problems, propose solutions, and deliver project outcomes."
        ]
    },
        {
        company: "Structures and Artificial Intelligence Lab",
        role: "Undergraduate Researcher",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Collaborating on cross-disciplinary projects with fellow assistants, through computer vision, robotics, digital twin technologies and deep learning to advance structural health monitoring solutions",
            "Delivered research presentations to peers, communicating technical findings and fostering knowledge exchange"
        ]
    }
];