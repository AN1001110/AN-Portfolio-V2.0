"use client";

import { motion } from "motion/react";
import { useThemeStore } from "@/src/app/_lib/store/useThemeStore";
import useMounted from "../hooks/useMounted";
interface Progress {
  name: string;
  progress: number;
  color: { [key: string]: string };
}

export default function ProgressBar({ progress, name, color }: Progress) {
  const { theme } = useThemeStore();
  const { isMounted } = useMounted();

  const isDark: boolean = theme === "dark";
  const barColor = isMounted && isDark ? color.dark : color.light;
  return (
    <div className="w-full">
      <div className="dark:text-muted-foreground-dark text-muted-foreground flex items-center justify-between">
        <p>{name}</p>
        <p>{progress}%</p>
      </div>
      <div className="bg-muted-foreground/10 dark:bg-muted-foreground-dark/10 h-3.5 w-full overflow-hidden rounded-[10px]">
        <motion.div
          className={`h-full rounded-[10px]`}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 2.7, ease: "easeInOut" }}
          style={{ backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}
