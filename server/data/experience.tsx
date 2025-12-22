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
            "Constructed a Grant Writing Assistant to help non-profits create grants",
            "Supporting client-focused and internal initiatives"
        ]
    },
        {
        company: "Structures and Artificial Intelligence Lab",
        role: "Undergraduate Researcher",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Research & develop solutions for infrastructure problems",
            "Collaborate on projects with fellow assistants, through computer vision, robotics, digital twin technologies and deep learning"
        ]
    }
];