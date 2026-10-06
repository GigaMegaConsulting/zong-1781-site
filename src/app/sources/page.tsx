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
    authorOrBody: "author not known",
    title: "Letter in The Morning Chronicle and London Advertiser",
    date: "18 March 1783",
    note:
      "An anonymous letter, generally taken to be the first to put the killings before the London newspaper public, printed twelve days after the first trial at Guildhall. The letter's author is not known, and the film attributes it to no one. The next day, 19 March, Olaudah Equiano brought Granville Sharp an account of the killings, which Sharp's diary records (SH1). The full text has not yet been retrieved from the newspaper archive, and the film does not quote it.",
  },
  {
    id: "SH1",
    type: "primary",
    authorOrBody: "Granville Sharp",
    title: "Diary — 19 March 1783 entry",
    date: "19 March 1783",
    note:
      "Records that Gustavus Vasa (Olaudah Equiano) called on Sharp with an account of one hundred and thirty people thrown alive into the sea from an English slave ship. Printed in Hoare's Memoirs (HO1); the original is in the Granville Sharp papers at Gloucestershire Archives.",
  },
  {
    id: "SH2",
    type: "primary",
    authorOrBody: "Granville Sharp",
    title: "Manuscript letter to the Lords Commissioners of the Admiralty",
    date: "2 July 1783",
    note:
      "Sharp's demand for murder charges against the Zong crew, sent with his account of the killings and his shorthand minutes of the King's Bench hearing. The 'uncovered letter' central to Michelle Faubert's 2018 study (FA1); a printed copy appears in Hoare's Memoirs (HO1).",
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
      "Sharp's own account of the Zong, written on 23 May 1783, at the close of the King's Bench hearing on the rule for a new trial. Contains his statement that the enslaved were thrown with their hands fettered; that 54 were cast overboard on the first day; and his characterization of the court case as 'a mere mercenary business about the pecuniary value of the Negroes.' Transcript published online by Gloucestershire Archives.",
  },
  {
    id: "HO1",
    type: "primary",
    authorOrBody: "Prince Hoare",
    title:
      "Memoirs of Granville Sharp, Esq., composed from his own manuscripts and other authentic documents",
    date: "1820 (London: Henry Colburn)",
    href: "https://archive.org/details/memoirsofgranvil00hoar",
    note:
      "Public-domain biography that prints Sharp's own Zong papers: his diary for 19–22 March 1783, his notes of the King's Bench hearing, his letter to the Admiralty of 2 July 1783, and, in Appendix VIII, his account of the killings. The source for the sequence the film follows: 54 thrown overboard on 29 November 1781, 42 more on 1 December, and after the rain 26 thrown with their hands fettered and 10 who leapt into the sea — 132 in all; and for Jamaica sighted on 27 November, with the captain's claim that he took it for Hispaniola. Hoare's own 1820 commentary is not used.",
  },
  {
    id: "NM1",
    type: "primary",
    authorOrBody: "National Maritime Museum, Greenwich",
    title: "REC/19 — Granville Sharp's documents on the Zong",
    date: "1783",
    href: "https://www.rmg.co.uk/collections/archive/rmgc-object-500960",
    note:
      "Sharp's collected papers on the case, including the shorthand minutes of the King's Bench hearing and Robert Stubbs's evidence. Known to the production so far through Trevor Burnard's quotations (BU1); the manuscript images are still to be checked before anything drawn from them goes on screen.",
  },
  {
    id: "LC1",
    type: "secondary",
    authorOrBody: "Lancaster City Council (compiled)",
    title: "Biographies of individuals involved in the Zong",
    date: "ongoing (PDF)",
    href: "https://www.lancaster.gov.uk/assets/attach/13394/Biographies-of-individuals-involved-in-the-Zong.pdf",
    note:
      "Compiled biographies of the Gregson syndicate owners and the ship's officers. Draws on Walvin 2011, Baucom 2005, Krikler 2012. The source for the full Gregson syndicate membership, Collingwood's background as a ship's surgeon, Kelsall's suspension and reinstatement, and Stubbs's role as the only passenger and the only testifying witness.",
  },
  {
    id: "GG1",
    type: "legal",
    authorOrBody: "Court of King's Bench (Guildhall sittings; Westminster Hall)",
    title: "Gregson v Gilbert — the Zong insurance case",
    date: "March–May 1783",
    note:
      "An insurance claim, not a criminal prosecution. The owners sought to recover the value of the people their crew had thrown into the sea, treated as jettisoned cargo. First tried at Guildhall on 6 March 1783 before Lord Mansfield and a jury, who found for the owners at £30 a head. At King's Bench on 21–22 May 1783 the court heard argument by counsel and granted a new trial; no retrial is recorded in the sources we have consulted. No one was ever criminally tried for the deaths.",
  },
  {
    id: "DO1",
    type: "legal",
    authorOrBody: "Sylvester Douglas (law report)",
    title: "Gregson v Gilbert (1783) 3 Doug. 232; 99 ER 629",
    date: "22 May 1783",
    href: "https://archive.org/details/reportscasesarg04glengoog",
    note:
      "The printed report of the King's Bench hearing, and the standard citation for the case. It records argument by counsel on the rule for a new trial, with no witnesses examined, and Lord Mansfield's ruling that the case deserved reconsideration and a new trial.",
  },
  {
    id: "KA1",
    type: "legal",
    authorOrBody: "James Kelsall",
    title: "Answer in the Court of Exchequer — The National Archives, E112/1528",
    date: "12 November 1783",
    note:
      "The first mate's sworn answer in the Exchequer proceedings over the Zong. Not digitised; known to the production so far through Trevor Burnard's quotations (BU1). It dates the rain to 6–9 December, against Sharp's and Stubbs's 1 December; the film follows Sharp and Stubbs and records the dispute.",
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
      "Equiano's autobiography, published in London in 1789. Full text is public domain and freely available at UNC Docsouth.",
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
      "The standard modern biography of Olaudah Equiano. Carretta also edited a modern edition of Equiano's writings.",
  },
  {
    id: "FA1",
    type: "secondary",
    authorOrBody: "Michelle Faubert",
    title: "Granville Sharp's Uncovered Letter and the Zong Massacre",
    date: "2018 (Palgrave Macmillan)",
    href: "https://doi.org/10.1007/978-3-319-92786-2",
    note:
      "Scholarly reconsideration of Sharp's role in the early public campaign, built around a manuscript letter identified in the British Library.",
  },
  {
    id: "BU1",
    type: "secondary",
    authorOrBody: "Trevor Burnard",
    title: "A New Look at the Zong Case of 1783",
    date: "2019 (XVII-XVIII, no. 76)",
    href: "https://journals.openedition.org/1718/1808",
    note:
      "Open-access article that reexamines the case from the manuscript record, quoting Kelsall's Exchequer Answer (KA1) and Sharp's transcript of Stubbs's evidence (NM1). The production's route to both until the originals are checked, and the source for women and children being among the first killed and for the dispute over the date of the rain.",
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
      "Reference for the Akan day-name calendar. The names of the people killed on the Zong were not preserved; every name the film gives a captive is invented and follows this calendar, including the seven names spoken near its end. The film's protagonist, a Fante-speaking man from the Gold Coast, is never named.",
  },
  {
    id: "MI1",
    type: "secondary",
    authorOrBody: "Robin Law, History in Africa 32, pp. 247–267 (Cambridge University Press)",
    title: "Ethnicities of Enslaved Africans in the Diaspora: On the Meanings of 'Mina' (Again)",
    date: "2005",
    href:
      "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B19B462581852D91BE63F59180DAAB7B/S0361541300003788a.pdf/ethnicities-of-enslaved-africans-in-the-diaspora-on-the-meanings-of-mina-again.pdf",
    note:
      "Background on the term 'Mina' in diaspora records, and on what such labels can and cannot tell us about the origins of people shipped from the Gold Coast.",
  },
  {
    id: "FN1",
    type: "secondary",
    authorOrBody: "Wikivoyage (community)",
    title: "Fante phrasebook",
    date: "ongoing",
    href: "https://en.wikivoyage.org/wiki/Fante_phrasebook",
    note:
      "One of three independent public listings of Fante (Mfantse) numerals behind the count heard in the film's opening, which is in Fante: kor, ebien, ebaasa, anan, enum, esia, esuon, awɔtwe, akrɔn, du, dubiako, duebien, duebaasa, duanan, duenum. This one lists 1–10. These are modern phrasebook forms — no Fante numeral list from 1781 has been identified — and a native Fante performer's own forms will be used at recording.",
  },
  {
    id: "FN2",
    type: "secondary",
    authorOrBody: "Yen.com.gh",
    title: "Fante: basic phrases and interesting facts",
    date: "ongoing",
    href: "https://yen.com.gh/133611-fante-basic-phrases-interesting-facts.html",
    note:
      "Lists Fante numerals 1–20. Agrees with the Wikivoyage forms for 1–10 and supplies the teens the film's count uses.",
  },
  {
    id: "FN3",
    type: "secondary",
    authorOrBody: "MasterAnyLanguage",
    title: "Fante Language (Fanti) Numbers Quick List",
    date: "ongoing",
    href: "https://www.masteranylanguage.com/c/r/en/Fante/Numbers/o/ql001",
    note:
      "Lists Fante numerals 1–19. Agrees with the other listings apart from spelling at 3, 9 and 13 (ebiasa, akron, duebiasa); the film uses ebaasa, akrɔn and duebaasa, and the performer's own forms win at recording.",
  },
  {
    id: "CC1",
    type: "secondary",
    authorOrBody: "Wikipedia (community)",
    title: "Cape Coast Castle",
    date: "ongoing",
    href: "https://en.wikipedia.org/wiki/Cape_Coast_Castle",
    note:
      "Background on the principal British fort on the Gold Coast, where captives were embarked onto the Zong, with others at Accra. The ship left the coast on 18 August 1781; secondary sources differ on whether its last port was Cape Coast or Accra.",
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
            Every load-bearing historical claim in the film is being traced to a primary source where one exists,
            and to serious modern scholarship otherwise. Where a claim still rests on a secondary quotation, or where
            neither exists, as for the Fante count, the entry says so. This list is partial — the full research register inside the
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
