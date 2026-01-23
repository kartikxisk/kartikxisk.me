"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GitFork, Github as GithubIcon } from "lucide-react";

export const ForkRepoButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      window.open("https://github.com/kartikxisk/kartikxisk.me/fork", "_blank");
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <>
      {/* Fullscreen overlay animation */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GithubIcon className="h-24 w-24 text-purple-400" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg font-medium text-purple-300"
              >
                Taking you to GitHub...
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 2, ease: "linear" }}
                className="h-1 rounded-full bg-purple-500"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fork button */}
      <motion.button
        onClick={handleClick}
        disabled={isAnimating}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-50 md:bottom-8 md:right-8"
      >
        <GitFork className="h-4 w-4" />
        <span>Fork this repo</span>
      </motion.button>
    </>
  );
};
