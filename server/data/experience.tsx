export type Experience = {
    company: string;
    startDate: string;
    endDate: string;
    role: string;
    responsibilities: string[];
    image: string;
};

export const experiences: Experience[] = [
    {
        company: "Altairium",
        role: "Software Engineer Intern",
        startDate: "October 2025",
        endDate: "Present",
        responsibilities: [
            "Constructed a Grant Writing Assistant to help non-profits create grants",
            "Supporting client-focused and internal initiatives"
        ],
        image: "/client/images/Altairium-Logo.png"
    },
        {
        company: "Structures & Artificial Intelligence Lab",
        role: "Undergraduate Researcher",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Research & develop solutions for infrastructure problems",
            "Collaborate on projects with fellow assistants, through computer vision, robotics, digital twin technologies and deep learning"
        ],
        image: "/client/images/SAIL-Logo.png"
    },
    {
        company: "CougarCS Tutoring",
        role: "CS Tutor Workshop Officer",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Tutored 100+ students in computer science courses",
            "Led 10 tutors in creating organized workshops for students"
        ],
        image: "/client/images/CougarCSTutoring-Logo.png"
    }
];