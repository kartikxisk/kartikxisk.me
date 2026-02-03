"use client";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <GlowingCard className="p-8">
            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
              <p>
                I&apos;m a passionate{" "}
                <GradientText>Frontend Developer</GradientText> with over 3
                years of experience crafting modern web applications. My
                expertise lies in building{" "}
                <GradientText>scalable LMS solutions</GradientText> and
                e-learning platforms that deliver exceptional user experiences.
              </p>
              <p>
                I specialize in <GradientText>React.js</GradientText> and{" "}
                <GradientText>Next.js</GradientText> with deep knowledge of
                Server-Side Rendering (SSR), TypeScript, and performance
                optimization. I&apos;m also well-versed in{" "}
                <GradientText>WCAG accessibility standards</GradientText> and
                SCORM integration for educational technology.
              </p>
              <p>
                My approach combines technical excellence with a keen eye for
                design, ensuring that every project I work on is not just
                functional, but also visually appealing and user-friendly.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "20+" },
                { label: "Technologies", value: "15+" },
                { label: "Companies", value: "2" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">
                    <GradientText>{stat.value}</GradientText>
                  </div>
                  <div className="mt-1 text-sm text-neutral-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  );
};
