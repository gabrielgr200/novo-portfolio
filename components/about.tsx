"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Depois de me formar no{" "}
        <span className="font-medium">Senac Minas</span>, descobri minha paixão pela programação
        e aprendi desenvolvimento web full-stack. Minha parte favorita da programação é o{" "}
        <span className="font-medium">front-end;</span>.{" "}
        <span className="italic">adoro a sensação de criar sites ou apps.</span> Minha pilha principal é
        <span className="font-medium"> React, Next.js, React Native, Node.js, TypeScript e Java.</span>  Estou sempre em busca de aprender novas tecnologias.
        Atualmente, estou procurando uma posição em tempo integral como desenvolvedor de software.
        {" "}
        <span className="italic">Quando não estou programando</span>, 
        gosto de jogar videogame e assistir filmes. <span className="font-medium"> Também gosto{" "}
        de aprender coisas novas</span>.
      </p>

    </motion.section>
  );
}
