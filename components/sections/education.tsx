"use client";
import { GlowingCard } from "@/components/ui/glowing-card";
import { GradientText } from "@/components/ui/text-reveal";
import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { educationData, type EducationItem } from "@/lib/data/education";

const iconMap: Record<EducationItem["iconName"], React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
};

export const Education = () => {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-400">
            Background
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <GlowingCard className="flex gap-6">
                <div className="hidden shrink-0 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-cyan-500/10 to-purple-500/10 w-20 h-20 sm:flex flex-none">
                  <div className="text-cyan-400">{iconMap[edu.iconName]}</div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mb-2 text-neutral-400">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                    <span>{edu.location}</span>
                    <span className="flex items-center gap-1">
                      <span className="text-neutral-500">Score:</span>
                      <GradientText className="font-semibold">
                        {edu.percentage}
                      </GradientText>
                    </span>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
