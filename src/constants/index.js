import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2024 - Present",
    points: [
      "Designed & developed full-stack web applications using React.js, Node.js, Express, & MySQL.",
      "Built responsive, mobile-friendly interfaces with modern tools like Tailwind CSS & Material UI.",
      "Practiced problem-solving & optimized code through regular DSA & coding challenges.",
      "Collaborated on team & academic projects, focusing on clean code & scalable architecture."
    ],
  },
  {
    title: "Competitive Programmer | Problem Solver",
    company_name: "Self-driven Practice",
    icon: sheryians,
    iconBg: "#ffff",
    date: "2024 - Present",
    points: [
      "Solved 400+ Data Structures & Algorithms problems on platforms like LeetCode, GeeksforGeeks, HackerRank & CodeChef.",
      "Focused on optimizing algorithms & improving time & space complexity.",
      "Practiced problem-solving regularly to strengthen logical thinking & coding skills.",
      "Participated in online contests & coding challenges to improve competitive programming experience."
      ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PrepBridge-AI Powered Mock Interviews",
    description:
      "Engineered a platform that simulates technical interviews using Google Generative AI for dynamic question generation & evaluation. Integrated speech-to-text & webcam features to provide a realistic interview experience with real-time feedback.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Drizzle",
        color: "yellow-text-gradient",
      }
    ],
    image: macbookpro,
    source_code_link: "https://github.com/shelkeaditya01/PrepBridge-AI-Interview",
    live_website_link: "https://prep-bridge-ai-interview.vercel.app",
  },
  {
  name: "Financial Management System",
  description:
    "Built a full-stack personal finance app using React, Next.js, Tailwind CSS, Shadcn UI, Supabase, Prisma, & Clerk. Features include AI-powered receipt scanning, real-time tracking, automated recurring transactions, & secure deployment on Vercel with event-driven workflows.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "yellow-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com",
    live_website_link: "https://netlify.app/",
  },
  {
    name: "Foodie-A Food Ordering Website",
  description:
    "Designed a responsive web app for menu browsing, order customization, & cart management using React.js, Tailwind CSS, Express.js, MySQL & Shadcn. Optimized User Interface & User Experience to provide a seamless & user-friendly ordering experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "Chakra",
        color: "yellow-text-gradient",
      }
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/shelkeaditya01/React_Food-as-",
    // project link ⬇️
    live_website_link: "https://app.netlify.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
