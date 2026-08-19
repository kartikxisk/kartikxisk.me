"use client";
import { certifications, educationData } from "@/lib/data/education";
import { ArrowUpRight } from "lucide-react";
import { Rule, SectionHead } from "@/components/ui/blueprint";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const Education = () => {
  return (
    <section id="education" aria-labelledby="education-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead
          id="education-title"
          index="06"
          path="lib/data/education.ts"
          title="Certification"
          note="Degrees first, then the credentials — every certificate below links to its public verification page."
        />

        <div className="border-t border-[var(--line-strong)]">
          {educationData.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.06}>
              <article className="grid gap-x-12 gap-y-4 border-b border-[var(--line)] py-8 md:grid-cols-[9rem_minmax(0,1fr)_7rem] md:py-10">
                <p className="u-mono text-[0.75rem] tracking-[0.08em] text-[var(--accent)]">
                  {edu.period}
                </p>

                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-[var(--fg)] md:text-2xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--fg-muted)]">{edu.institution}</p>
                  <p className="u-label mt-2 text-faint">{edu.location}</p>
                </div>

                <div className="md:text-right">
                  <p className="u-label text-faint">Score</p>
                  <p className="mt-1 font-display text-3xl font-medium tracking-[-0.03em] text-[var(--fg)] u-num">
                    {edu.percentage}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* licenses & certifications */}
        <div className="mt-20 md:mt-28">
          <Rule note="verified credentials" />
          <Stagger as="ul" className="mt-10 border-t border-[var(--line-strong)]" step={0.06}>
            {certifications.map((cert) => (
              <StaggerItem as="li" key={cert.credentialId} className="border-b border-[var(--line)]">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-x-12 gap-y-3 py-7 md:grid-cols-[9rem_minmax(0,1fr)_auto]"
                >
                  <span className="u-mono text-[0.75rem] tracking-[0.08em] text-[var(--accent)]">
                    {cert.issued}
                  </span>

                  <span>
                    <span className="block font-display text-lg font-medium tracking-[-0.02em] text-[var(--fg)] transition-colors group-hover:text-[var(--accent)] md:text-xl">
                      {cert.name}
                      <span className="sr-only">— verify credential, opens in a new tab</span>
                    </span>
                    <span className="u-label mt-2 block text-faint">{cert.issuer}</span>
                    <span className="u-mono mt-2 block text-[0.6875rem] text-[var(--fg-muted)]">
                      ID {cert.credentialId}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="u-mono text-[0.6875rem] text-[var(--fg-muted)]">
                          {skill}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span className="u-label tap-44 flex items-center gap-2 text-[var(--fg-muted)] transition-colors group-hover:text-[var(--accent)] md:justify-self-end">
                    Verify
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};
