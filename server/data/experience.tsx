export type Experience = {
    company: string;
    startDate: string;
    endDate: string;
    role: string;
    responsibilities: string[];
    image: string;
    link: string;
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
        image: "/images/Altairium-Logo.png",
        link: "https://www.linkedin.com/company/altairium/posts/?feedView=all"
    },
        {
        company: "Structures & Artificial Intelligence Lab",
        role: "Undergraduate Researcher",
        startDate: "August 2025",
        endDate: "January 2026",
        responsibilities: [
            "Research & develop solutions for infrastructure problems through cross-disciplinary projects",
            "Collaborated on projects with fellow assistants, through computer vision, robotics, digital twin technologies, AI and deep learning"
        ],
        image: "/images/SAIL-Logo.png",
        link: "https://sail.cive.uh.edu/"
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
        image: "/images/CougarCSTutoring-Logo.png",
        link: "https://cougarcs.com/"
    },
    // {
    //     company: "Energy AI Solutions",
    //     role: "Software Engineer Intern",
    //     startDate: "Jan 2026",
    //     endDate: "Present",
    //     responsibilities: [
    //         "Tutored 100+ students in computer science courses through 1:1 sessions and workshops",
    //         "Led a team of 10 tutors in creating organized preparations for students to prepare for exams, and deepen understanding of course material"
    //     ],
    //     image: "https://media.licdn.com/dms/image/v2/D560BAQH19ltvviaYZQ/company-logo_200_200/company-logo_200_200/0/1709233092071/energyaisolutions_logo?e=2147483647&v=beta&t=gjzgPbwXbRAoXJUfr93d_V4_vkTT3BIWak67zHRYyBI",
    //     link: "https://energyaisolutions.com/"
    // },
    // {
    //     company: "NASA",
    //     role: "Software Engineer Intern",
    //     startDate: "Feb 2026",
    //     endDate: "Present",
    //     responsibilities: [
    //         "Tutored 100+ students in computer science courses through 1:1 sessions and workshops",
    //         "Led a team of 10 tutors in creating organized preparations for students to prepare for exams, and deepen understanding of course material"
    //     ],
    //     image: "/images/NASA-logo.png",
    //     link: "https://www.nasa.gov/"
    // }
];