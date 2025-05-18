// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import VBMV from './assets/vbmv.jpg';
import RLT from './assets/rlt.jpg';
import TKV from './assets/tkv';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
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
      desc: "I have completing my Master's degree (MCA) in Computer Applications from VIDHYABHARTI MAHAVIDHYALAY, AMARAVATI. During my time at VBMV, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at VBMV has been instrumental in shaping my technical abilities and professional growth.",
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
      img: vpsLogo,
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
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/madhumitasugandhi/icp8.0-javascript-group-project-3.",
      webapp: "https://naturesbasket.netlify.app/",
    },
    {
      id: 1,
      title: "ThePetNest Website",
      description:
        "In addition to adoption services, we provide detailed information on different breeds of cats and dogs. ",
      image: csprepLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/madhumitasugandhi/icp-8.0-html-css-group-project-2 ",
      webapp: " https://pet-adoptionn.onrender.com/",
    },
    {
      id: 2,
      title: "Quick Note",
      description:
        "Quick Note is a fast, secure, and user-friendly application designed to streamline note-taking with a clean interface and seamless cloud synchronization. It enables users to efficiently add, view, and manage their notes, enhancing productivity and organization across devices.",
      image: movierecLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/madhumitasugandhi/assignment43",
      webapp: "https://assignment43-tuy4.vercel.app/",
    },
  ];  