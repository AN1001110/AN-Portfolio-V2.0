import { useTranslations } from "next-intl";
import Card from "../../_components/Card";
import MotionSection from "../../_components/MotionSection";

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
    <MotionSection className="bg-background dark:bg-background-dark text-card-foreground dark:text-card-foreground-dark py-20">
      <div className="container mx-auto px-6">
        <h3 className="dark:text-muted-foreground-dark text-muted-foreground relative mb-12 text-center text-3xl font-bold uppercase italic">
          {t("title")}
        </h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
