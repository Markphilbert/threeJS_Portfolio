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
  scale,
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
    title: "JavaScript, HTML, CSS",
    icon: web,
  },
  {
    title: "Python, SQL",
    icon: mobile,
  },
  {
    title: "React, Vue",
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
      "Build and enhance insurance applications using JavaScript, HTML and CSS, applying strong development fundamentals and best practices in a large, complex native codebase.",
      "Develop, test and support products used by thousands of users daily, collaborating with a team of experienced developers.",
      "Code-review the majority of all JavaScript pull requests.",
      "Develop and maintain complex Excel formulas to replicate website policy calculations for offline use; provide manual Excel calculation methods during system downtimes to ensure continuity of operations.",
      "Implement improvements promptly, directly boosting sales and smoothing work processes for colleagues; communicate with technical and non-technical team members on new products and features.",
      "Maintain confidentiality of system technologies and customer data; excel in a fast-paced, rapidly growing startup, meeting tight deadlines through adaptability, creativity and problem-solving.",
    ],
  },
  {
    title: "Python Developer",
    company_name: "Scale AI",
    icon: scale,
    iconBg: "#383E56",
    date: "February 2024 - November 2024",
    points: [
      "Developed and evaluated prompts for large language models (LLMs), assessing response accuracy and SQL query execution to ensure correct database interactions and data retrieval.",
      "Analyzed LLM performance and refined prompts to improve response accuracy and data access efficiency; organized information from Excel spreadsheets and data tables for model training.",
      "Reviewed, debugged and corrected Python code to improve functionality, efficiency and adherence to programming best practices and coding standards.",
      "Created Python exercises and technical prompts to assess programming proficiency, evaluating generated solutions and providing feedback to improve code quality and problem-solving.",
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
    name: "Numinix App",
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
