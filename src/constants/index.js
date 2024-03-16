import {
  mobile,
  backend,
  python,
  web,
  javascript,
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
  maze,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
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
      "Utilized JavaScript, HTML and CSS to enhance front-end functionality, adhering to best practices and spearheading effective release management.",
      "Use of strong development skills and software fundamentals when building insurance based applications.",
      "Experience working with large native code bases with significant complexity.",
      "Collaborated and worked with a team of experienced developers in a team environment to build insurance-based applications using best practices.",
      "Developed, tested, and supported products used by thousands of users daily.",
      "Effectively communicated with technical and non- technical team members to ensure a shared understanding of new products and features.",
      "Maintained confidentiality of system technologies and customer data to uphold security and protect intellectual property.",
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
    name: "Maze Solver",
    description:
      "A program that builds a maze then is able to solve it.",
    tags: [
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "dsa",
        color: "pink-text-gradient",
      },
    ],
    image: maze,
    source_code_link: "https://github.com/Markphilbert/Maze_Solver",
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
];

export { services, technologies, experiences, testimonials, projects };
