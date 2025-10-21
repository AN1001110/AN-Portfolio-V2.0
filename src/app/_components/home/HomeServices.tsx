import { useTranslations } from "next-intl";
import React from "react";

export default function HomeServices() {
  const t = useTranslations("homeServices");

  return (
    <section
      className="bg-muted dark:bg-muted-dark text-card-foreground dark:text-card-foreground-dark py-20"
      id="services"
    >
      <div className="container mx-auto px-6">
        <h3 className="bg-muted dark:bg-muted-dark text-card-foreground dark:text-card-foreground-dark relative mb-12 text-center text-3xl font-bold uppercase italic">
          {t("title")}
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-muted dark:bg-muted-dark dark:hover:shadow-primary-shadow-dark/30 hover:shadow-primary-shadow/30 ring-primary/50 dark:ring-primary-dark/50 rounded-lg border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_15px_5px] hover:ring-2">
            <h4 className="mb-4 text-xl font-bold">
              {t("services.service1.title")}
            </h4>
            <p className="dark:text-muted-foreground-dark text-muted-foreground">
              {t("services.service1.description")}
            </p>
          </div>
          <div className="bg-muted dark:bg-muted-dark dark:hover:shadow-primary-shadow-dark/30 hover:shadow-primary-shadow/30 ring-primary/50 dark:ring-primary-dark/50 rounded-lg border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_15px_5px] hover:ring-2">
            <h4 className="mb-4 text-xl font-bold">
              {t("services.service2.title")}
            </h4>
            <p className="dark:text-muted-foreground-dark text-muted-foreground">
              {t("services.service2.description")}
            </p>
          </div>
          <div className="bg-muted dark:bg-muted-dark dark:hover:shadow-primary-shadow-dark/30 hover:shadow-primary-shadow/30 ring-primary/50 dark:ring-primary-dark/50 rounded-lg border border-transparent p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_15px_5px] hover:ring-2">
            <h4 className="mb-4 text-xl font-bold">
              {t("services.service3.title")}
            </h4>
            <p className="dark:text-muted-foreground-dark text-muted-foreground">
              {t("services.service3.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
