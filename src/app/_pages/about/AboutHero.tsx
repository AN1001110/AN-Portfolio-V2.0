import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto flex flex-col items-center gap-8 px-6 py-20 md:flex-row lg:gap-12 lg:py-32"
    >
      <div className="order-2 mb-4 flex flex-1 flex-col gap-4 text-center md:order-1 md:text-start lg:mb-0 lg:flex-3">
        <h1 className="text-primary dark:text-primary-dark text-2xl font-bold md:text-3xl lg:text-5xl">
          {t("title")}
        </h1>
        <p className="text-muted-dark dark:text-muted text-lg md:text-xl lg:text-2xl">
          {t("subtitle")}
        </p>
        <p className="text-muted-foreground dark:text-muted-foreground-dark text-base leading-relaxed md:text-lg lg:text-xl">
          {t("summary")}
        </p>
      </div>
      <div className="bg-muted/60 dark:bg-muted-dark/60 ring-primary/10 dark:ring-primary-dark/10 relative order-1 aspect-square w-7/10 flex-1 overflow-hidden rounded-3xl ring-2 sm:w-6/10 md:order-2 lg:w-full lg:flex-2">
        <Image
          fill
          src={"/about.png"}
          className="inset-0"
          alt="AN Personal Image"
        />
      </div>
    </motion.section>
  );
}
