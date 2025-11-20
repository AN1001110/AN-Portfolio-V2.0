import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
export default function PortfolioPhilosophy() {
  const t = useTranslations("portfolio.philosophy");
  return (
    <section className="bg-muted dark:bg-muted-dark px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="dark:text-muted text-muted-dark mb-6 text-3xl font-bold sm:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted-foreground/80 dark:text-muted-foreground-dark/80 border-primary dark:border-primary-dark border-l-4 py-2 pl-6 text-xl leading-relaxed italic"
        >
          "{t("quote")}"
        </motion.blockquote>
      </div>
    </section>
  );
}
