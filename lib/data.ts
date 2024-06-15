import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiências",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senac Minas",
    location: "Divinópolis, MG",
    description:
      "Me formei após 1 ano de estudo. Meses depois, encontrei um emprego como designer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "Divinópolis, MG",
    description:
      "No Senac Minas, juntamente com dois colegas, desenvolvemos um aplicativo que listava informações de medicamentos, com o objetivo de auxiliar os técnicos em enfermagem. Minha função nesse projeto foi desenvolver o aplicativo.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Desenvolvedor Full Stack",
    location: "Divinópolis, MG",
    description:
      "Durante o curso, desenvolvi um projeto de ecommerce onde os usuários podem explorar um catálogo de jogos, selecionar o que desejam comprar e efetuar a compra. Estou agora em busca de oportunidades de emprego em tempo integral.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Clone - Xbox",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "JavaScript", "Styled Component"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Mentimeter",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "FireBase", "Sass", "Framer Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Clone - GitHub",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Tailwind", "Next.js", "TypeScript", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "React Native",
  "Express",
  "Python",
  "Vite",
  "MySQL",
  "Figma",
  "Canva",
  "Three.js",
  "Framer Motion",
] as const;
