import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production journal",
  description:
    "A running log of how ZONG 1781 is being made — model choices, trade-offs, visual direction decisions, and the record forming in public.",
};

type Entry = {
  date: string;
  title: string;
  body: React.ReactNode;
};

const ENTRIES: Entry[] = [
  {
    date: "3 October 2026",
    title: "Direction locked on the London arc",
    body: (
      <>
        <p>
          The anonymous letter in the <em>Morning Chronicle</em> on 18 March 1783 — the one that first put the
          massacre into public view — is a historically contested document. Scholarship divides between three
          positions: Equiano wrote it; Granville Sharp wrote it or something close; the author is unknown and
          unknowable.
        </p>
        <p className="mt-4">
          The film&apos;s dramatization statement names a specific choice: Equiano writes the letter, calls on
          Sharp the day after publication, and Sharp carries the campaign into the Admiralty. Every event in that
          version is in the record. The ambiguity is kept visible in the production notes and in the{" "}
          <Link href="/sources">sources list</Link>, not hidden under a false certainty.
        </p>
      </>
    ),
  },
  {
    date: "3 October 2026",
    title: "The site exists before the film does",
    body: (
      <>
        <p>
          This website is up before the first scene is cut. That is deliberate. A project like this one — a
          serious historical drama made with AI assistance, about a case where the human cost was deliberately
          reduced to a count on an insurance writ — earns its place by making the record visible as it is being
          made, not after.
        </p>
        <p className="mt-4">
          Expect this journal to be modest. One or two entries a month. Decisions that matter, trade-offs we had
          to make, mistakes we had to fix. If something here looks wrong, write to{" "}
          <a href="mailto:hello@gigamega.ca">hello@gigamega.ca</a>.
        </p>
      </>
    ),
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen">
      <div className="px-6 sm:px-10 py-6 max-w-3xl mx-auto">
        <nav className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/70">
          <Link href="/">← ZONG · 1781</Link>
        </nav>
      </div>

      <article className="px-6 sm:px-10 py-10 max-w-3xl mx-auto">
        <header className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
            Production journal
          </p>
          <h1 className="serif text-5xl sm:text-6xl leading-[0.95]">In the open.</h1>
          <p className="mt-7 text-[color:var(--color-cream-soft)]/90 text-[15px] leading-relaxed">
            A short log of how the film is being made — direction choices, model trade-offs, historical questions
            that shift the script, and the public record forming alongside the production.
          </p>
        </header>

        <div className="space-y-14">
          {ENTRIES.map((e, i) => (
            <section key={i}>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-cream-soft)]/60 mb-3">
                {e.date}
              </div>
              <h2 className="serif text-3xl leading-tight text-[color:var(--color-cream)]">{e.title}</h2>
              <div className="mt-5 text-[15px] leading-relaxed text-[color:var(--color-cream-soft)]/85 space-y-4">
                {e.body}
              </div>
            </section>
          ))}
        </div>

        <footer className="pt-14 mt-14 border-t border-[color:var(--color-cream)]/10 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/60 flex items-center justify-between">
          <Link href="/">← ZONG · 1781</Link>
          <Link href="/sources">Sources</Link>
        </footer>
      </article>
    </main>
  );
}
