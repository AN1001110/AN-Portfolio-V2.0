import React from "react";
import * as motion from "motion/react-client";
export default function PortfolioExpertiseItem({ skill }: { skill: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="dark:bg-background-dark/30 bg-background/30 border-border dark:border-border-dark text-muted-foreground dark:text-muted-foreground-dark flex items-center gap-3 rounded-lg border p-4"
    >
      {skill}
    </motion.div>
  );
}
