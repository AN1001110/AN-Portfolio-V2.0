import Card from "../../_components/Card";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import MotionSection from "../../_components/MotionSection";
export default function AboutCertificates() {
  type Certificate = {
    title: string;
    desc: string;
    imageUrl: string;
    link: string;
  };
  const t = useTranslations("about.certificates");
  const certificates: Certificate[] = [
    {
      title: t("cert2.title"),
      desc: t("cert2.issuer"),
      imageUrl: "/certificates/cert1.jpeg",
      link: "https://www.linkedin.com/in/an0x1/details/certifications/1758985338604/single-media-viewer/?profileId=ACoAAFZrbaQB3mOBy8wbaolUwIC4XqUj_Nk88oE",
    },
    {
      title: t("cert1.title"),
      desc: t("cert1.issuer"),
      imageUrl: "/certificates/cert2.jpeg",
      link: "https://www.linkedin.com/in/an0x1/details/certifications/1759065953817/single-media-viewer/?profileId=ACoAAFZrbaQB3mOBy8wbaolUwIC4XqUj_Nk88oE",
    },
    {
      title: t("cert3.title"),
      desc: t("cert3.issuer"),
      imageUrl: "/certificates/cert3.jpeg",
      link: "https://www.linkedin.com/in/an0x1/details/certifications/1758924819319/single-media-viewer/?profileId=ACoAAFZrbaQB3mOBy8wbaolUwIC4XqUj_Nk88oE",
    },
  ];
  return (
    <MotionSection className="bg-background dark:bg-background-dark text-card-foreground dark:text-card-foreground-dark py-20">
      <div className="container mx-auto px-6">
        <h3 className="dark:text-muted-foreground-dark text-muted-foreground relative mb-12 text-center text-3xl font-bold uppercase italic">
          {t("title")}
        </h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
