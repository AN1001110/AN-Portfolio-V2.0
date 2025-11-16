import PortfolioExpertise from "../_pages/portfolio/PortfolioExpertise";
import PortfolioHero from "../_pages/portfolio/PortfolioHero";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function page() {
  return (
    <>
      <PortfolioHero />
      {/* <PortfolioExpertise /> */}
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
    </>
  );
}
