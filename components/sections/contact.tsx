"use client";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { workTotals } from "@/lib/data/work";
import { services } from "@/lib/data/services";
import { Rule, SectionHead, StatusStamp } from "@/components/ui/blueprint";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const lines = [
  { k: "Email", v: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { k: "Phone", v: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
  { k: "Located", v: `${siteConfig.location} · ${siteConfig.timezone}`, href: null },
  { k: "GitHub", v: "github.com/kartikxisk", href: siteConfig.github },
  { k: "LinkedIn", v: "linkedin.com/in/kartikxisk", href: siteConfig.linkedin },
];

export const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative px-5 pb-28 pt-28 md:px-10 md:pb-24 md:pt-40">
      <div className="mx-auto w-full max-w-[1440px] lg:pl-36">
        <SectionHead id="contact-title" index="07" path="lib/data/site.ts" title="Start a conversation" />

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            {siteConfig.availability.open && (
              <Reveal>
                <div className="flex flex-wrap items-center gap-4">
                  <StatusStamp label={siteConfig.availability.label} />
                  <span className="u-mono text-[0.75rem] text-[var(--fg-muted)]">
                    {siteConfig.availability.detail}
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.08}>
              <a
                href={`mailto:${siteConfig.email}?subject=Work%20enquiry`}
                className="group mt-8 block font-display text-[clamp(1.9rem,6.4vw,2.85rem)] [overflow-wrap:normal] [word-break:keep-all] font-medium leading-[1.05] tracking-[-0.045em] text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
              >
                {siteConfig.email}
                <span
                  aria-hidden
                  className="mt-3 block h-px w-full max-w-0 bg-[var(--accent)] transition-[max-width] duration-500 ease-out group-hover:max-w-full"
                />
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="u-measure mt-8 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                Hiring for a frontend or full-stack role, or need something
                built — a platform, a portal, a store with B2B quoting? Send the
                context and I will reply with what it takes and how long.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.email}?subject=Work%20enquiry`}
                  className="group u-label tap-44 flex items-center justify-center gap-2 bg-[var(--accent)] px-5 py-3 text-[var(--ink-900)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Email me
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-label tap-44 flex items-center gap-2 border border-[var(--line-interactive)] px-5 py-3 text-[var(--fg)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
                >
                  <Linkedin aria-hidden className="h-3.5 w-3.5" />
                  Message on LinkedIn
                  <span className="sr-only">— opens in a new tab</span>
                </a>
                {siteConfig.resumeUrl && (
                  <a
                    href={siteConfig.resumeUrl}
                    className="u-label tap-44 flex items-center gap-2 border border-[var(--line-interactive)] px-5 py-3 text-[var(--fg)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
                  >
                    Download résumé
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <dl className="border-t border-[var(--line-strong)]">
              {lines.map((line) => (
                <div
                  key={line.k}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 border-b border-[var(--line)] py-1.5"
                >
                  <dt className="u-label text-faint">{line.k}</dt>
                  <dd className="u-mono truncate text-[0.8125rem] text-[var(--fg)]">
                    {line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--accent)]"
                      >
                        {line.v}
                      </a>
                    ) : (
                      line.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* what I take on */}
      <div className="mx-auto mt-24 w-full max-w-[1440px] md:mt-32 lg:pl-36">
        <Rule note="scope of work" />
        <Reveal>
          <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.03em] text-[var(--fg)] md:text-3xl">
            What I take on
          </h3>
        </Reveal>
        <Stagger as="ul" className="mt-10 grid gap-px border-t border-[var(--line-strong)] md:grid-cols-2" step={0.05}>
          {services.map((service, i) => (
            <StaggerItem
              as="li"
              key={service.name}
              className="border-b border-[var(--line)] py-6 md:pr-10 md:[&:nth-child(even)]:pl-10"
            >
              <div className="flex items-baseline gap-4">
                <span aria-hidden className="u-mono u-num text-[0.625rem] tracking-[0.2em] text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium text-[var(--fg)]">
                    {service.name}
                  </h4>
                  <p className="u-measure mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {service.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* sheet footer */}
      <footer className="mx-auto mt-24 w-full max-w-[1440px] md:mt-32 lg:pl-36">
        <Rule note={`${siteConfig.sheet.drawing} · ${siteConfig.sheet.revision}`} />
        <div className="flex flex-wrap items-center justify-between gap-4 pb-16 pt-6 md:pb-6">
          <p className="u-mono text-[0.6875rem] text-[var(--fg-faint)]">
            © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js,
            Tailwind CSS and Motion · {workTotals.commits.toLocaleString("en-IN")} commits
            behind this résumé
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="u-label tap-44 flex items-center gap-2 text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Github className="h-3.5 w-3.5" />
              Source of this site
            </a>
            <a
              href="#home"
              className="u-label tap-44 flex items-center text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
