import { useMessages, useTranslations } from "next-intl";
import PortfolioSkillsCard from "./PortfolioSkillsCard";
import { type SkillsList } from "./PortfolioSkillItem";
import { type SkillsCard } from "./PortfolioSkillsCard";
export default function PortfolioHero() {
  const t = useTranslations("portfolio.coreCompetencies");
  const messages = useMessages();
  const sections = messages.portfolio.coreCompetencies.sections;
  console.log(sections);
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-muted-dark dark:text-muted text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground dark:text-muted-foreground-dark mx-auto mt-3 max-w-2xl">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {sections.map((sec: { title: string; skills: SkillsList[] }) => (
            <PortfolioSkillsCard
              key={sec.title}
              title={sec.title}
              skillsList={sec.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
