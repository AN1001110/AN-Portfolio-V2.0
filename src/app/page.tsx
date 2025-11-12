"use client";
import HomeHero from "./_pages/home/HomeHero";
import HomeServices from "./_pages/home/HomeServices";
import HomeContact from "./_pages/home/HomeContact";
import HomeSkills from "./_pages/home/HomeSkills";
import HomeProjects from "./_pages/home/HomeProjects";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeProjects />
      <HomeSkills />
      <HomeContact />
    </main>
  );
}
