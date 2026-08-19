import type { Metadata } from "next";
import Link from "next/link";
import { Sheet, Rule } from "@/components/ui/blueprint";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = { title: "Sheet not found" };

export default function NotFound() {
  return (
    <Sheet className="flex items-center">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-32 md:px-10">
        <p className="u-label text-[var(--accent)]">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(3rem,11vw,8rem)] font-semibold leading-[0.86] tracking-[-0.05em] text-[var(--fg)]">
          Sheet missing
        </h1>
        <p className="u-measure mt-6 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
          This drawing was never filed, or the link has changed. The main sheet
          has everything: the work, the stack and how to reach me.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="u-label bg-[var(--accent)] px-5 py-3 text-[var(--ink-900)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Back to the index
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="u-label border border-[var(--line-strong)] px-5 py-3 text-[var(--fg)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--accent)]"
          >
            Report a broken link
          </a>
        </div>
        <Rule note={`${siteConfig.sheet.drawing} · ${siteConfig.sheet.revision}`} className="mt-20" />
      </div>
    </Sheet>
  );
}
