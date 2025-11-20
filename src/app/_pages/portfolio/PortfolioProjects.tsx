import { useMessages, useTranslations } from "next-intl";
import PortfolioProjectsCard, { ProjectCard } from "./PortfolioProjectsCard";
import * as motion from "motion/react-client";
export default function PortfolioProjects() {
  const t = useTranslations("portfolio.projects");
  const messages = useMessages();
  const projects = messages.portfolio.projects.projects;

  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="dark:text-muted text-muted-dark text-4xl font-bold md:text-5xl">
          {t("title")}
        </h2>
      </motion.div>
      <main className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: ProjectCard) => (
          <PortfolioProjectsCard key={project.title} {...project} />
        ))}
      </main>
    </section>
  );
}
