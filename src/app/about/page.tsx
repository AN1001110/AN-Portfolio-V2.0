import AboutCertificates from "../_pages/about/AboutCertificates";
import AboutHero from "../_pages/about/AboutHero";
import TimeLine from "../_components/TimeLine";

import { desc } from "motion/react-client";

export default function page() {
  return (
    <main>
      <AboutHero />
      <TimeLine />
      <AboutCertificates />
    </main>
  );
}
