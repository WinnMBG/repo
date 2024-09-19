// import images
import Hero_person from "./assets/images/Hero/person.jpeg";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import c from "./assets/images/Skills/c.png"
import expressjs from "./assets/images/Skills/express.png"
import java from "./assets/images/Skills/java.png"
import nestjs from "./assets/images/Skills/nestjs.png"
import nextjs from "./assets/images/Skills/nextjs.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Développeur Web",
    firstName: "Winn-Elie",
    LastName: "MBOURANGA",
    btnText: "Ready to work !",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Années d'exprience dans le développement web",
      },
      {
        count: "5",
        text: "Projets marquants menés lors de mes études",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Mes plus grandes compétences",
    skills_content: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Python",
        logo: python,
      },
      {
        name: "C",
        logo: c
      }, 
      {
        name: "Java",
        logo: java
      },
      {
        name: "NextJS",
        logo: nextjs
      },
      {
        name: "ExpressJS",
        logo: expressjs
      },
      {
        name: "NestJS",
        logo: nestjs
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Ce que je peux vous offrir",
    service_content: [
      {
        title: "Developpement web",
        para: "De par mes 2 années d'expérience au sein d'une start-up, j'ai pu acqérir des compétences dans le développement web sous méthodologie AGILE. Je suis donc disposé à vous offrir le meilleur de mon expertise et de ma connaissance.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Tailwind, SCSS, Bootstrap, tel est mon nindo !",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projets",
    subtitle: "Mes créations",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Hireme: {
    title: "Disponible immédiatement",
    subtitle: "Pour vos projets",
    btnText: "Téléchargez mon CV juste ici",
  },
  Contact: {
    title: "Contactez-moi",
    subtitle: "Restons en contact",
    social_media: [
      {
        text: "winn77.m@hotmail.com",
        icon: GrMail,
        link: "mailto:winn77.m@hotmail.com",
      },
      {
        text: "+33 7 81 97 59 44",
        icon: MdCall,
        link: "https://wa.me/0781975944",
      },
      {
        text: "Winn-Elie MBOURANGA",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/winn-elie-mbouranga/",
      },
      {
        text: "WinnMBG",
        icon: BsGithub,
        link: "https://github.com/WinnMBG/repo"
      }
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
