//skills
import htmlLogo from './assets/html-logo.png';
import cssLogo from './assets/css-logo.png';
import javascriptLogo from './assets/js-logo.png';
import reactjsLogo from './assets/reactjs-logo.jpg';
import tailwindcssLogo from './assets/tailwind-logo.png';
import bootstrapLogo from './assets/bootstrap-logo.png';
import nodejsLogo from './assets/nodejs-logo.png';
import expressjsLogo from './assets/expressjs-logo.png';
import mongodbLogo from './assets/mongodb-logo.png';
import javaLogo from './assets/java-logo.png';
import gitLogo from './assets/git-logo.png';
import githubLogo from './assets/github-logo.png';
import vscodeLogo from './assets/vscode-logo.jpeg';
import postmanLogo from './assets/postman-logo.png';
import netlifyLogo from './/assets/netlify-logo.png';
import vercelLogo from './assets/vercel-logo.jpeg';
import cLogo from './assets/c-logo.png'
import cppLogo from './assets/cpp-logo.jpeg'
//project
import natureBasket from './assets/nature-basket.png'
import petnestLogo from './assets/petnest.png'
import quickNote from './assets/quick-note.png'
//education
import VBMV from './assets/vbmv.jpg';
import RLT from './assets/rlt.jpeg';
import TKV from './assets/tkv.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML'},
      { name: 'CSS'},
      { name: 'JavaScript'},
      { name: 'React JS'},
      { name: 'Tailwind CSS'},
      { name: 'Bootstrap'},
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS'},
      { name: 'Express JS'},
      { name: 'MongoDB'},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C'},
      { name: 'C++'},
      { name: 'Java'},
      { name: 'JavaScript'},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git'},
      { name: 'GitHub'},
      { name: 'VS Code'},
      { name: 'Postman'},
      { name: 'Vercel'},
      { name: 'Netlify'},
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: VBMV,
      school: "VIDHYABHARTI MAHAVIDHYALAY, AMARAVATI",
      date: "Sept 2023 - July 2025",
      status:"Currently Pursuing",
      desc: "I am currently pursuing my Master's degree (MCA) in Computer Applications from Vidhyabharti Mahavidyalaya, Amravati. Throughout my time at VBMV, I have developed a strong foundation in programming, software development, and core computer science principles. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have actively participated in workshops and technical events, which have further enriched my skills and practical knowledge. My experience at VBMV continues to play a vital role in shaping my technical abilities and supporting my professional development.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: RLT,
      school: "SHRI R.L.T COLLAGE OF SCIENCE, AKOLA",
      date: "August 2020 - July 2023",
      grade: "82.29%",
      desc: "I completed my Bachelor’s degree in Mathematics and Electronics (B.Sc.) from Shri R.L.T College of Science, Akola. This program strengthened my analytical and problem-solving abilities while giving me hands-on experience with core concepts in both mathematics and electronics. It also introduced me to basic electronic hardware, including circuit design and component-level understanding, which sparked my interest in how technology works at both the hardware and software levels.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: TKV,
      school: "TULSABAI KAWAL Junior College, PATUR (AKOLA)",
      date: "Apr 2018 - March 2020",
      grade: "74.77%",
      desc: "I completed my Higher Secondary education (12th grade) from Tulsabai Kawal Vidyalaya, Patur (Akola), under the Maharashtra State Board with a focus on the PCMB group (Physics, Chemistry, Mathematics, and Biology). This diverse academic background helped me build a strong foundation in scientific reasoning.",
      degree: "STATEBOARD(XII)",
    },
    {
      id: 3,
      img: TKV,
      school: "TULSABAI KAWAL VIDYALAY, PATUR (AKOLA)",
      date: "Apr 2016 - March 2018",
      grade: "86.60%",
      desc: "I completed my Secondary Education (10th grade) from Tulsabai Kawal Vidyalaya, Patur (Akola), under the Maharashtra State Board. This phase laid the groundwork for my academic journey and strengthened my interest in science and mathematics.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Nature's Basket Grocery Site",
      description:
        "Nature's Basket is an online grocery shopping website designed to provide users with a seamless and efficient shopping experience. The site includes a variety of pages and features to enhance usability and functionality.",
      image:natureBasket,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/madhumitasugandhi/icp8.0-javascript-group-project-3",
      webapp: "https://naturesbasket.netlify.app/",
    },
    {
      id: 1,
      title: "ThePetNest Website",
      description:
        "In addition to adoption services, we provide detailed information on different breeds of cats and dogs. ",
      image: petnestLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/madhumitasugandhi/icp-8.0-html-css-group-project-2 ",
      webapp: " https://pet-adoptionn.onrender.com/",
    },
    {
      id: 2,
      title: "Quick Note",
      description:
        "Quick Note is a fast, secure, and user-friendly application designed to streamline note-taking with a clean interface and seamless cloud synchronization. It enables users to efficiently add, view, and manage their notes, enhancing productivity and organization across devices.",
      image: quickNote,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/madhumitasugandhi/assignment43",
      webapp: "https://assignment43-tuy4.vercel.app/",
    },
  ];  