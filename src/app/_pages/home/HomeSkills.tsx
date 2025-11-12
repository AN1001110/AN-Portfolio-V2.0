import { useTranslations } from "next-intl";
import ProgressBar from "../../_components/ProgressBar";

export default function HomeSkills() {
  const t = useTranslations("home.skills");

  const skills = [
    {
      name: "Javascript",
      progress: 85,
      color: { dark: "#fde047", light: "#eab308" },
    },
    {
      name: "Typescript",
      progress: 75,
      color: { dark: "#569cd6", light: "#3178C6" },
    },
    {
      name: "Tailwind",
      progress: 80,
      color: { dark: "#2dd4bf", light: "#0d9488" },
    },
    {
      name: "React",
      progress: 85,
      color: { dark: "#38bdf8", light: "#2563eb" },
    },
    {
      name: "NextJs",
      progress: 75,
      color: { dark: "#d1d5db", light: "#4b5563" },
    },
    {
      name: "AgriTech",
      progress: 65,
      color: { dark: "#68d391", light: "#228b22" },
    },
  ];

  return (
    <section className="bg-muted dark:bg-muted-dark text-card-foreground dark:text-card-foreground-dark py-20">
      <div className="container mx-auto px-6">
        <h3 className="bg-muted dark:bg-muted-dark text-card-foreground dark:text-card-foreground-dark relative mb-12 text-center text-3xl font-bold uppercase italic">
          {t("title")}
        </h3>
        <div className="flex flex-col items-center justify-center space-y-4">
          {skills.map((skill) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              progress={skill.progress}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
