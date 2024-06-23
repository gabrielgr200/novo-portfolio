import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import netflix from "@/public/netflix.png";
import spotify from "@/public/spotify.png";

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
      "Criei este projeto como desenvolvedor front-end, com o objetivo de estudar programação criando uma réplica do site da Xbox.",
    tags: ["React", "JavaScript", "Styled Component"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Mentimeter",
    description:
      "Esse projeto foi desenvolvido numa aula da Rocketseat, com o objetivo de criar salas e responder perguntas.",
    tags: ["React", "TypeScript", "FireBase", "Sass", "Framer Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Clone - GitHub",
    description:
      "Esse projeto é um clone do GitHub na sua versão antiga, um projeto feito para aprimorar minhas habilidades no front-end.",
    tags: ["Tailwind", "Next.js", "TypeScript", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Clone - Netflix",
    description:
      "Esse projeto é um clone da Netflix, um projeto feito para aprimorar minhas habilidades no front-end e back-end.",
    tags: ["Css", "Vite.js", "JavaScript", "Firebase"],
    imageUrl: netflix,
  },
  {
    title: "Clone - Spotify",
    description:
      "Criei este projeto como desenvolvedor front-end, com o objetivo de estudar programação criando uma réplica do site do Spotify.",
    tags: ["Tailwind", "Vite.js", "JavaScript"],
    imageUrl: spotify,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Firebase",
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
