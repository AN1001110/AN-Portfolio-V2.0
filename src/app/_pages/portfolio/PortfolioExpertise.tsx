import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useMessages, useTranslations } from "next-intl";
import PortfolioExpertiseItem from "./PortfolioExpertiseItem";
import * as motion from "motion/react-client";
export default function PortfolioExpertise(): React.ReactNode {
  const t = useTranslations("portfolio.additionalExpertise");
  const messages = useMessages();

  const agricultureSkills =
    messages.portfolio.additionalExpertise.sections.agriculture.skills;
  const softSkillsSkills =
    messages.portfolio.additionalExpertise.sections.softSkills.skills;
  return (
    <section className="bg-muted dark:bg-muted-dark px- mx-auto w-full px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="dark:text-muted text-muted-dark text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="text-text-color/70 text-muted-foreground dark:text-muted-foreground-dark mx-auto mt-3 max-w-2xl">
          {t("description")}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-primary dark:text-primary-dark mb-6 flex items-center gap-3 text-2xl font-semibold"
          >
            <FontAwesomeIcon icon={faLeaf} className="size-6" />
            <span>{t("sections.agriculture.title")}</span>
          </motion.h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {agricultureSkills.map((skill: string) => (
              <PortfolioExpertiseItem key={skill} skill={skill} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-primary dark:text-primary-dark mb-6 flex items-center gap-3 text-2xl font-semibold">
            <FontAwesomeIcon icon={faUsers} className="size-7" />
            {t("sections.softSkills.title")}
          </h3>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {softSkillsSkills.map((skill: string) => (
              <PortfolioExpertiseItem key={skill} skill={skill} />
            ))}
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
