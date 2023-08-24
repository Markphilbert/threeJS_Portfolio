import {
  mobile,
  backend,
  python,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  sass,
  githubtwo,
  figma,
  vue,
  forward,
  shoes,
  numinex,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React / Vue Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS CSS",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: githubtwo,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Software Developer - Configuration Analyst",
    company_name: "Forward Insurance Managers Ltd.",
    icon: forward,
    iconBg: "#383E56",
    date: "November 2021 - Present",
    points: [
      "Design and built insurance packages from concept to completion.",
      "Collaborated with teams of experienced developers to build and maintain provided services using best practices.",
      "Worked to troubleshoot and bring ideas to life through limitations due to third-party services.",
      "Resolved complex problems and coding challenges.",
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
    name: "ShoesOverflow",
    description:
      "A subscription based shoe store created using Vue3 and Vue Router.",
    tags: [
      {
        name: "vuerouter",
        color: "yellow-text-gradient",
      },
      {
        name: "vue3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: shoes,
    source_code_link: "https://github.com/Markphilbert/ShoesOverflow",
  },
  {
    name: "Numinex App",
    description:
      "A Project built for Numinix used to interview my skills.",
    tags: [
      {
        name: "vuerouter",
        color: "yellow-text-gradient",
      },
      {
        name: "vue3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: numinex,
    source_code_link: "https://github.com/Markphilbert/numinix",
  },
];

export { services, technologies, experiences, testimonials, projects };
