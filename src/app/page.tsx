"use client";
import Hero from "./_components/home/Hero";
import HomeServices from "./_components/home/HomeServices";
import HomeContact from "./_components/home/HomeContact";
import HomeSkills from "./_components/home/HomeSkills";
import HomeProjects from "./_components/home/HomeProjects";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <HomeServices />
        <HomeProjects />
        <HomeSkills />
        <HomeContact />
      </motion.div>
    </>
  );
}
