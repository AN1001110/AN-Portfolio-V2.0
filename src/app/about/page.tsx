import AboutCertificates from "../_pages/about/AboutCertificates";
import AboutHero from "../_pages/about/AboutHero";
import TimeLine from "../_components/TimeLine";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function page() {
  return (
    <main>
      <AboutHero />
      <TimeLine />
      <AboutCertificates />
      <GoogleAnalytics gaId="G-2Z643GT8EF" />
    </main>
  );
}
