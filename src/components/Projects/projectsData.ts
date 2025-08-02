export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  categories: string[]; // Multiple categories for better filtering
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Safety Gear Compliance",
    description:
      "An AI-powered application that assesses safety gear compliance, reducing evaluation time from 30 minutes to 2 minutes (15x improvement). Contributed to securing 6 crore in funding.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "AI/ML",
      "Redux",
      "Chart.js",
      "React Konva",
    ],
    image: "/public/pic.jpg",
    categories: ["fullstack", "frontend", "backend"],
  },
  {
    id: 2,
    title: "XER File Analyzer",
    description:
      "React application to analyze XER files, replacing P6 Primavera and improving issue detection efficiency by over 60%.",
    technologies: ["React", "TypeScript", "Redux", "Chart.js"],
    image: "/public/pic.jpg",
    categories: ["frontend"],
  },
  {
    id: 3,
    title: "Beat-Buddy",
    description:
      "Full-stack Music platform with user authentication, Song playback , Song Download and Song recognition.",
    technologies: [
      "React",
      "Javascript",
      "Node.js",
      "MongoDB",
      "RapidAPI",
      "Redux",
    ],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/BeatBuddy",
    categories: ["fullstack", "frontend", "backend"],
  },
  {
    id: 4,
    title: "Recipe Pic",
    description:
      "Full-stack application with user authentication ,where user create and share their favorite recipes with other users.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "JWT"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/DBMS_Project",
    categories: ["fullstack", "frontend", "backend"],
  },
  {
    id: 5,
    title: "Yoom",
    description:
      "Full stack video calling platform built with NextJS , Stream Client for smooth user experience and secured with cleark authentication .",
    technologies: ["NextJS", "Stream Client", "Clerk"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/Yoom",
    categories: ["fullstack", "frontend", "backend"],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern portfolio website with interactive animations, responsive design, and smooth user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/portfolio_website",
    liveUrl: "https://suresh-yelisetty-portfolio.netlify.app/",
    categories: ["frontend"],
  },
  {
    id: 7,
    title: "Real-time Chat Application",
    description:
      "Real-time messaging application with user authentication and group chat functionality.",
    technologies: ["React Native", "Firebase", "Multer"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/Messenger-Clone",
    categories: ["mobile"],
  },
  {
    id: 8,
    title: "Quiz Application",
    description:
      "A mobile quiz app that allows users to test their knowledge across various topics. Features include real-time scoring, and a sleek, intuitive interface for an engaging learning experience.",
    technologies: ["React Native", "Firebase", "Multer"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/Messenger-Clone",
    categories: ["mobile"],
  },
  {
    id: 9,
    title: "Fund Me",
    description:
      "Created a Web3 contract where users can park their digital money and withdraw it when needed.",
    technologies: ["React", "Solidity", "Web3"],
    image: "/public/pic.jpg",
    githubUrl: "https://github.com/yelisetty-suresh-babu/fundme-solidity",
    categories: ["Web3", "frontend"],
  },
];
