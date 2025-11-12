"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useScreenDimensions } from "../hooks/useScreenDimensions";
import { useLanguageStore } from "../_lib/store/useLanguageStore";
interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  itemNumber: number;
  isLast?: boolean;
}

export default function TimelineItem({
  date,
  title,
  description,
  itemNumber,
  isLast = false,
}: TimelineItemProps) {
  const isEven = itemNumber % 2 === 0;

  const { width } = useScreenDimensions();

  const dir: number = useLanguageStore((state) => state.lang) === "ar" ? 1 : -1;
  const isMobile: boolean = width < 768;

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute start-0 top-0 flex h-full w-8 flex-col items-center sm:translate-x-0 md:right-1/2 md:translate-x-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "20px" }}
          className="bg-accent dark:bg-accent-dark dark:ring-accent-dark/30 ring-accent/30 z-10 h-4 w-4 rounded-full ring-4"
        ></motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.1, ease: "linear", delay: 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            className="bg-muted-foreground dark:bg-muted-foreground-dark w-0.5"
          ></motion.div>
        )}
      </div>
      <div
        className="flex w-full px-8"
        style={{
          justifyContent: isMobile
            ? "flex-start"
            : isEven
              ? "flex-end"
              : "flex-start",
        }}
      >
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          style={{
            textAlign: isMobile ? "start" : isEven ? "end" : "start",
            marginBottom: isLast ? "0" : "14rem",
            x: isMobile ? 50 * dir : isEven ? 50 : -50,
            opacity: 0,
          }}
          className="flex flex-col justify-center px-6 md:w-1/2"
        >
          <p className="text-secondary dark:text-secondary-dark mb-0.5 text-sm font-semibold italic">
            {date}
          </p>

          <h3 className="text-muted-dark dark:text-muted mb-2 text-lg font-semibold">
            {title}
          </h3>

          <p className="text-muted-foreground dark:text-muted-foreground-dark mt-1 text-base font-normal">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
