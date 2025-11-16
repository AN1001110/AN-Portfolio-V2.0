"use client";
import HomeHero from "./_pages/home/HomeHero";
import HomeServices from "./_pages/home/HomeServices";
import HomeContact from "./_pages/home/HomeContact";
import HomeSkills from "./_pages/home/HomeSkills";
import HomeProjects from "./_pages/home/HomeProjects";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeProjects />
      <HomeSkills />
      <HomeContact />
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
    </main>
  );
}
