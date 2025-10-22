import { useTranslations } from "next-intl";
import React from "react";
import HomeSkill from "@/src/app/_components/home/HomeSkill";

export default function HomeServices() {
  const t = useTranslations("home.homeServices");

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
          <HomeSkill
            title={t("services.service1.title")}
            desc={t("services.service1.description")}
          />
          <HomeSkill
            title={t("services.service2.title")}
            desc={t("services.service2.description")}
          />
          <HomeSkill
            title={t("services.service3.title")}
            desc={t("services.service3.description")}
          />
        </div>
      </div>
    </section>
  );
}
