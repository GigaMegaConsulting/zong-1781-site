import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Primary and secondary sources behind ZONG 1781 — archives, court records, abolitionist letters, and the modern scholarship we rely on.",
};

type Source = {
  id: string;
  type: "primary" | "legal" | "secondary" | "archive" | "tertiary";
  authorOrBody: string;
  title: string;
  date: string;
  href?: string;
  note: string;
};

const SOURCES: Source[] = [
  {
    id: "MC1",
    type: "primary",
    authorOrBody: "anonymous",
    title: "Letter in The Morning Chronicle and London Advertiser",
    date: "18 March 1783",
    note:
      "The first public disclosure of the Zong massacre. Published in London the day before Olaudah Equiano called on Granville Sharp. Authorship is historically contested; the film's dramatization statement names the choice we have made.",
  },
  {
    id: "SH1",
    type: "primary",
    authorOrBody: "Granville Sharp",
    title: "Diary — 19 March 1783 entry",
    date: "1783",
    note:
      "Records that Gustavus Vassa (Olaudah Equiano) called on Sharp with an account of the Zong. Held in the Granville Sharp papers at Gloucestershire Archives.",
  },
  {
    id: "SH2",
    type: "primary",
    authorOrBody: "Granville Sharp",
    title: "Manuscript letter to the Lords Commissioners of the Admiralty",
    date: "1783",
    note:
      "Sharp's demand for murder charges against the Zong crew. The 'uncovered letter' central to Michelle Faubert's 2022 monograph.",
  },
  {
    id: "SH3",
    type: "primary",
    authorOrBody: "Granville Sharp",
    title: "Letter to William Baker, 23 May 1783",
    date: "23 May 1783",
    href:
      "https://www.gloucestershire.gov.uk/media/chvhqn35/appendix_o_granville_sharp_transcipts-25462.pdf",
    note:
      "Sharp's own account of the Zong, written between the first trial and the retrial. Contains the detail that the enslaved were thrown with their hands fettered; that 54 were cast overboard on the first day before short-water rationing was imposed; and Sharp's characterization of the court case as 'a mere mercenary business about the pecuniary value of the Negroes.' Transcript published online by Gloucestershire Archives.",
  },
  {
    id: "GG1",
    type: "legal",
    authorOrBody: "King's Bench",
    title: "Gregson v Gilbert — court record (the Zong insurance case)",
    date: "1783",
    note:
      "An insurance claim, not a criminal prosecution. The owners sought to recover the value of the people they had killed, treated as jettisoned cargo. No one was ever criminally tried for the deaths.",
  },
  {
    id: "EQ1",
    type: "primary",
    authorOrBody: "Olaudah Equiano / Gustavus Vassa",
    title:
      "The Interesting Narrative of the Life of Olaudah Equiano, or Gustavus Vassa, the African. Written by Himself.",
    date: "1789",
    href: "https://docsouth.unc.edu/neh/equiano1/equiano1.html",
    note:
      "The first widely-read British autobiography by a formerly-enslaved African. Full text is public domain and freely available at UNC Docsouth.",
  },
  {
    id: "WA1",
    type: "secondary",
    authorOrBody: "James Walvin",
    title: "The Zong: A Massacre, the Law and the End of Slavery",
    date: "2011 (Yale University Press)",
    note:
      "The standard narrative account of the voyage, the ship, the people, and the litigation.",
  },
  {
    id: "CA1",
    type: "secondary",
    authorOrBody: "Vincent Carretta",
    title: "Equiano, the African: Biography of a Self-Made Man",
    date: "2005 (University of Georgia Press)",
    note:
      "The standard modern biography of Olaudah Equiano. Carretta also edited the authoritative modern edition of Equiano's letters.",
  },
  {
    id: "FA1",
    type: "secondary",
    authorOrBody: "Michelle Faubert",
    title: "Granville Sharp's Uncovered Letter and the Zong Massacre",
    date: "2022 (Edinburgh University Press)",
    href: "https://www.euppublishing.com/doi/10.3366/cult.2022.0259",
    note:
      "Recent scholarly reconsideration of Sharp's role in the early public campaign, built around a manuscript letter identified in the British Library.",
  },
  {
    id: "LOC1",
    type: "archive",
    authorOrBody: "Library of Congress",
    title: "Born in Slavery: Slave Narratives from the Federal Writers' Project, 1936–1938",
    date: "1936–1938 (collection)",
    href:
      "https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/",
    note:
      "More than 2,300 first-person narratives of formerly-enslaved people. Later than the Zong by well over a century; foundational for the texture of African American voice we read against our own composite characters.",
  },
  {
    id: "DPLA1",
    type: "archive",
    authorOrBody: "Digital Public Library of America",
    title: "The Transatlantic Slave Trade — primary source set",
    date: "ongoing",
    href: "https://dp.la/primary-source-sets/the-transatlantic-slave-trade",
    note: "Curated primary documents and teaching materials.",
  },
  {
    id: "NA1",
    type: "archive",
    authorOrBody: "The National Archives (UK), Kew",
    title: "High Court of Admiralty and related 18th-century records",
    date: "ongoing",
    href: "https://www.nationalarchives.gov.uk",
    note: "The home of English maritime court records of the period.",
  },
  {
    id: "GA1",
    type: "archive",
    authorOrBody: "Gloucestershire Archives",
    title: "Granville Sharp papers",
    date: "ongoing",
    href: "https://www.gloucestershire.gov.uk/archives/",
    note: "Sharp's papers, including the diary referenced above.",
  },
  {
    id: "AN1",
    type: "secondary",
    authorOrBody: "Wikipedia (community)",
    title: "Akan names — the day-naming tradition",
    date: "ongoing",
    href: "https://en.wikipedia.org/wiki/Akan_names",
    note:
      "Reference for the Akan day-naming system used in the film. The protagonist's region (Gold Coast / Akan) and the seven names spoken in the Jamaica scene are drawn from this tradition.",
  },
  {
    id: "MI1",
    type: "secondary",
    authorOrBody: "Cambridge History in Africa",
    title: "Ethnicities of Enslaved Africans in the Diaspora: On the Meanings of 'Mina' Again",
    date: "modern scholarship",
    href:
      "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B19B462581852D91BE63F59180DAAB7B/S0361541300003788a.pdf/ethnicities-of-enslaved-africans-in-the-diaspora-on-the-meanings-of-mina-again.pdf",
    note:
      "Load-bearing for the film's commitment to Akan-speaking majority among Gold Coast cargoes in this period, and for the term 'Mina' in diaspora records.",
  },
  {
    id: "TW1",
    type: "secondary",
    authorOrBody: "Harvard — Twi Online",
    title: "Nkanee — Counting in Twi",
    date: "ongoing",
    href: "https://elias.unix.fas.harvard.edu/index.php/languages/twi/Beginning/6/Counting",
    note:
      "Reference for the Twi numerals used in the film's opening sequence (baako, mmienu, mmiɛnsa, ɛnan, enum, nsia, nson, nwɔtwe, nkron, edu, dubaako, dumienu, dumiɛnsa, dunan, dunum).",
  },
  {
    id: "CC1",
    type: "secondary",
    authorOrBody: "Wikipedia (community)",
    title: "Cape Coast Castle",
    date: "ongoing",
    href: "https://en.wikipedia.org/wiki/Cape_Coast_Castle",
    note:
      "Background on the embarkation point for the Zong's enslaved cargo. The Zong left Cape Coast on 18 August 1781.",
  },
];

const TYPE_LABEL: Record<Source["type"], string> = {
  primary: "Primary",
  legal: "Legal record",
  secondary: "Secondary",
  archive: "Archive",
  tertiary: "Tertiary",
};

export default function SourcesPage() {
  return (
    <main className="min-h-screen">
      <div className="px-6 sm:px-10 py-6 max-w-4xl mx-auto">
        <nav className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/70">
          <Link href="/">← ZONG · 1781</Link>
        </nav>
      </div>

      <article className="px-6 sm:px-10 py-10 max-w-4xl mx-auto">
        <header className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
            Sources
          </p>
          <h1 className="serif text-5xl sm:text-6xl leading-[0.95]">The record.</h1>
          <p className="mt-7 text-[color:var(--color-cream-soft)]/90 max-w-2xl text-[15px] leading-relaxed">
            Every load-bearing historical claim in the film is traced to a primary source where one exists, and
            to serious modern scholarship otherwise. This list is partial — the full research register inside the
            production is longer — and will grow as the project does. If a line you&apos;ve read on this site is
            not sourced to your satisfaction, write to{" "}
            <a href="mailto:hello@gigamega.ca">hello@gigamega.ca</a> and we will tighten it.
          </p>
        </header>

        <div className="space-y-10">
          {(["primary", "legal", "secondary", "archive"] as Source["type"][]).map((t) => {
            const items = SOURCES.filter((s) => s.type === t);
            if (items.length === 0) return null;
            return (
              <section key={t}>
                <h2 className="serif text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5 border-b border-[color:var(--color-cream)]/10 pb-3">
                  {TYPE_LABEL[t]}
                </h2>
                <ul className="divide-y divide-[color:var(--color-cream)]/10">
                  {items.map((s) => (
                    <li key={s.id} className="py-5">
                      <div className="flex items-baseline gap-3">
                        <span className="serif italic text-[color:var(--color-amber)] text-xs tracking-widest">
                          {s.id}
                        </span>
                        <h3 className="serif text-xl leading-snug text-[color:var(--color-cream)]">
                          {s.href ? (
                            <a href={s.href} target="_blank" rel="noopener noreferrer">
                              {s.title}
                            </a>
                          ) : (
                            s.title
                          )}
                        </h3>
                      </div>
                      <div className="mt-1 text-[13px] text-[color:var(--color-cream-soft)]/70">
                        {s.authorOrBody} · {s.date}
                      </div>
                      <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-cream-soft)]/85">
                        {s.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <footer className="pt-14 mt-10 border-t border-[color:var(--color-cream)]/10 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/60 flex items-center justify-between">
          <Link href="/">← ZONG · 1781</Link>
          <Link href="/about">About</Link>
        </footer>
      </article>
    </main>
  );
}
