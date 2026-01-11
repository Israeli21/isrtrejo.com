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
        endDate: "December 2025",
        responsibilities: [
            "Developed a Grant Writing Tool that automates key proposal sections, reducing draft creation time by 40% to help non-profits write grants",
            "Strong collaboration with 10 team members to research techniques"
        ],
        image: "/images/Altairium-Logo.png"
    },
        {
        company: "Structures & Artificial Intelligence Lab",
        role: "Undergraduate Researcher",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Research & develop solutions for infrastructure problems through cross-disciplinary projects",
            "Collaborated on projects with fellow assistants, through computer vision, robotics, digital twin technologies, AI and deep learning"
        ],
        image: "/images/SAIL-Logo.png"
    },
    {
        company: "CougarCS Tutoring",
        role: "CS Tutor Workshops Officer",
        startDate: "August 2025",
        endDate: "Present",
        responsibilities: [
            "Tutored 100+ students in computer science courses through 1:1 sessions and workshops",
            "Led a team of 10 tutors in creating organized preparations for students to prepare for exams, and deepen understanding of course material"
        ],
        image: "/images/CougarCSTutoring-Logo.png"
    }
];