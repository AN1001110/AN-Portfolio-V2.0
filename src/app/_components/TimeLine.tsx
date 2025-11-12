"use client";

import { useTranslations } from "next-intl";
import TimelineItem from "./TimeLineItem";

export default function TimeLine(): React.ReactNode {
  const t = useTranslations("about.timeline");

  const timelineItems: any = [];
  for (let i = 1; i <= 6; i++) {
    const stepKey = `step${i}`;
    const title = t(stepKey + ".title");
    const description = t(stepKey + ".description");
    const date = t(stepKey + ".date");
    timelineItems.push(
      <TimelineItem
        itemNumber={timelineItems.length + 1}
        key={stepKey}
        title={title}
        description={description}
        date={date}
        isLast={i === 6}
      />,
    );
  }

  return (
    <section className="bg-muted dark:bg-muted-dark mx-auto px-6 py-20 lg:gap-12 lg:py-32">
      <h1 className="dark:text-muted-foreground-dark text-muted-foreground relative mb-20 text-center text-3xl font-bold uppercase italic">
        {t("title")}
      </h1>
      {timelineItems}
    </section>
  );
}
