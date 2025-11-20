import PortfolioExpertise from "../_pages/portfolio/PortfolioExpertise";
import PortfolioHero from "../_pages/portfolio/PortfolioHero";
import { GoogleAnalytics } from "@next/third-parties/google";
import PortfolioPhilosophy from "../_pages/portfolio/PortfolioPhilosophy";
import PortfolioProjects from "../_pages/portfolio/PortfolioProjects";
export default function page() {
  return (
    <>
      <PortfolioHero />
      <PortfolioExpertise />
      <PortfolioProjects/>
      <PortfolioPhilosophy/>
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
    </>
  );
}
