"use client";
import { motion } from "motion/react";
import { GitFork } from "lucide-react";

export const ForkRepoButton = () => {
  return (
    <motion.a
      href="https://github.com/kartikxisk/kartikxisk.me/fork"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300 md:bottom-8 md:right-8"
    >
      <GitFork className="h-4 w-4" />
      <span>Fork this repo</span>
    </motion.a>
  );
};
