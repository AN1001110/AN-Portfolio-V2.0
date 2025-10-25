import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

export default function HomeProjects() {
  const t = useTranslations("home.projects");
  const projects = [
    {
      title: t("project1.title"),
      desc: t("project1.desc"),
      imageUrl: "/projects/p1.png",
      link: "/projects/project-1",
    },
    {
      title: t("project2.title"),
      desc: t("project2.desc"),
      imageUrl: "/projects/p2.png",
      link: "/projects/project-2",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-background dark:bg-background-dark text-card-foreground dark:text-card-foreground-dark py-20"
    >
      <div className="container mx-auto px-6">
        <h3 className="dark:text-muted-foreground-dark text-muted-foreground relative mb-12 text-center text-3xl font-bold uppercase italic">
          {t("title")}
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
