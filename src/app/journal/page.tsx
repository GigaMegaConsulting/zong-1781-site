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
    date: "4 October 2026",
    title: "First-draft screenplay complete — all twenty-two scenes",
    body: (
      <>
        <p>
          The first draft of the full screenplay is written. All twenty-two scenes, from the
          ninety-second cold open on the open North Atlantic to the closing title cards, exist as
          scene-level screenplay drafts with shot-grammar enforcement, casting notes, and
          historical sourcing for every load-bearing claim.
        </p>
        <p className="mt-4">
          The running total of marked screen time is about fifty-eight minutes. The target feature
          run is ninety. The thirty-minute gap is deliberate: the massacre sequence across Scenes 8
          through 12 is allowed to breathe, and the slower beats of Act III — the protagonist in the
          Jamaica field in Scene 20, Equiano at his writing desk in 1789 in Scene 21 — are allowed
          the duration they ask for.
        </p>
        <p className="mt-4">
          Among the creative calls now locked:
        </p>
        <ul className="list-none space-y-3 pl-0 mt-5">
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>
              The protagonist is never named on screen. He is called{" "}
              <em>Kweku</em> — Wednesday-born, Akan day name — in production records and on the
              call sheet, but the film does not speak his name. The historical record did not
              preserve the names of the people killed on the <em>Zong</em>, and the film honors
              that.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>
              The seven day names the protagonist speaks in the Jamaica scene are earned on screen,
              given to him by Yaa across the first and second nights of the massacre in the hold.
              By the time the audience reaches that scene, every one of the seven has been placed
              into the architecture of memory by someone it belonged to.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>
              Granville Sharp&apos;s diary entry of 19 March 1783 appears as the film&apos;s only
              primary-source overlay — the Walvin transcription, in a Georgian hand, over the shot
              of Sharp writing while Equiano speaks. One overlay, used once.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>
              Sharp&apos;s defeat in the courtroom is the denouement, not the climax. The massacre
              itself was the climax; the court case is noted, then moved past. The scene ends on
              Sharp walking down the steps of Westminster Hall into a city that has not changed.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>
              The camera does not see a body meet the water. Not once, in two hours of film. The
              rules under § 7 of the shot grammar are enforced absolutely across the massacre
              scenes.
            </span>
          </li>
        </ul>
        <p className="mt-5">
          Next: shot lists for the first scenes to be built as animatics, a running-time pressure
          test on the full screenplay, and the primary-source blockers that remain — the Burney
          Collection facsimile of the <em>Morning Chronicle</em> letter above all.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "The protagonist is Akan — from the Gold Coast, not the Bight of Biafra",
    body: (
      <>
        <p>
          The earlier working assumption for the central African protagonist of the film — that he was
          taken from the Bight of Biafra, in parallel with Olaudah Equiano&apos;s own origin region —
          is now <strong className="font-normal italic text-[color:var(--color-amber)]">corrected</strong>.
          The record is more specific than we had been.
        </p>
        <p className="mt-4">
          The <em>Zong</em> departed Cape Coast Castle on 18 August 1781, having acquired enslaved
          Africans at Cape Coast and Accra on the Gold Coast — modern Ghana. The ship then called at
          São Tomé for water and left São Tomé for Jamaica on 6 September 1781. The hold therefore
          carried primarily <strong className="font-normal italic text-[color:var(--color-amber)]">Akan speakers</strong>:
          Fante on the coast, and interior Twi dialects from captives sold through Fante middlemen,
          with smaller numbers of Ga, Guan, Ewe, and Gbe speakers. Three to four distinct languages
          would have been audible aboard. The composite protagonist is Akan.
        </p>
        <p className="mt-4">
          The film&apos;s cold-open sequence — ninety seconds of darkness, breath, and a count that
          stops before sixteen — is now written in <strong className="font-normal italic text-[color:var(--color-amber)]">Twi</strong>,
          Fante dialect preferred. The specific numerals, from one to fifteen, are: baako, mmienu,
          mmiɛnsa, ɛnan, enum, nsia, nson, nwɔtwe, nkron, edu, dubaako, dumienu, dumiɛnsa, dunan,
          dunum. The structure of the count — every number from eleven onward prefixed with
          <em> du-</em>, the stem of ten — is itself an architectural act of memory on the protagonist&apos;s
          part. The regularity is audible by design.
        </p>
        <p className="mt-4">
          A later scene in Jamaica, years after the massacre, calls for the protagonist to speak
          seven names. These names will be the seven Akan day names, one per day of the week — the
          structure of the Akan naming tradition, in which every child receives a first name based on
          the day they were born: Kodwo (Monday), Abena (Tuesday), Kweku (Wednesday), Yaa (Thursday),
          Kofi (Friday), Kwame (Saturday), Esi (Sunday). Seven names. The whole community of the voyage,
          said in the structure the community itself used.
        </p>
        <p className="mt-4">
          The sources for these decisions are catalogued in the production&apos;s{" "}
          <Link href="/sources">sources list</Link> and in the full research file inside the project.
          The protagonist&apos;s name itself is not spoken on screen. The historical record did not
          preserve the names of the people killed on the <em>Zong</em>, and the film honors that.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "Treatment drafted, three structural questions resolved",
    body: (
      <>
        <p>
          The first full treatment is written — a scene-level outline, around five thousand words,
          braiding three perspectives (the ship, the deck, London) that only converge at the end of
          the film. Three questions open at the synopsis stage are now closed.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            The protagonist and Equiano do not meet on screen.
          </strong>{" "}
          Their connection is implied through the maritime Black-Atlantic network of dockworkers,
          deckhands, and freed Black sailors through whom news of the <em>Zong</em> reached London.
          The audience sees testimony being carried; the camera never names the carriers. There is
          no evidence any <em>Zong</em> survivor spoke directly to Equiano, and dramatizing a
          meeting would soften the specific horror the film is built around.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            Sharp&apos;s defeat in <em>Gregson v Gilbert</em> is the denouement, not the climax.
          </strong>{" "}
          The climax is the massacre itself. The courtroom is a stated, quiet beat near the end —
          a historical fact noted and moved past. The film is not about Sharp winning or losing. It
          is about the record forming.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            The Jamaica third act is held briefly, twice.
          </strong>{" "}
          Once at the end of the Atlantic crossing — the ship arrives, the survivors are offloaded
          into a chattel-slavery economy that does not end for decades. Once more in a coda, years
          on, the protagonist in a single scene of ordinary life. No long epilogue, no softening
          descent.
        </p>
        <p className="mt-4">
          The treatment lives in the production folder; the <Link href="/sources">sources list</Link>{" "}
          and the character sheets are the next pass.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "Primary-source pass on the claim ledger",
    body: (
      <>
        <p>
          Three load-bearing claims in the production&apos;s internal register upgraded today from
          &ldquo;pending excerpt&rdquo; to &ldquo;excerpted,&rdquo; using the Walvin monograph,
          Hoare&apos;s nineteenth-century <em>Memoirs of Granville Sharp</em>, and the standard
          scholarly consensus on the <em>Zong</em>&apos;s origin.
        </p>
        <p className="mt-4">
          The ship was not purchased at Cape Coast Castle, as an earlier draft of the ledger
          implied — it was the Dutch slaver <em>Zorg</em>, captured by the British on 10 February
          1781 during the Fourth Anglo-Dutch War and acquired by the Liverpool-based Gregson
          syndicate. <em>Zong</em> is a transcription of the Dutch name, not a formal renaming.
          Correction logged.
        </p>
        <p className="mt-4">
          Granville Sharp&apos;s diary entry of 19 March 1783 — the first contemporary record of
          Equiano&apos;s visit — is now carried in the ledger with Walvin&apos;s transcription:{" "}
          <em>
            &ldquo;Gustavas Vasa a Negro called on me with an account of 130 Negroes being thrown
            Alive into the sea from on Board an English Slave Ship.&rdquo;
          </em>{" "}
          Direct inspection at the Gloucestershire Archives is still required before any on-screen
          reproduction, but the film&apos;s dramatization is now anchored to the same number
          (&ldquo;more than one hundred and thirty&rdquo;) that Sharp himself recorded.
        </p>
        <p className="mt-4">
          Still blocking: the full text of the 18 March 1783 anonymous letter in <em>The Morning
          Chronicle and London Advertiser</em>. It lives in the Burney Collection at the British
          Library and is not yet digitally accessible. Until we have it in facsimile, nothing from
          the letter can be reproduced directly in the film or on this site.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "A first visual pass, with the caveat that it is temporary",
    body: (
      <>
        <p>
          The site now carries five images: a hero background, three triptych panels (ship, deck,
          London), and a social-share card. All were generated through text-to-image models from
          prompts written against the film&apos;s dignity rules: no human faces, no figurative
          violence, no reproduction of real historical persons, no shot of a body meeting water.
        </p>
        <p className="mt-4">
          These are not production stills. They are atmospheric placeholders — a wet oak hull, a
          rain-slick deck, a Georgian London desk under candlelight — chosen to let the project be
          visible on the public web before the first finished scene exists. When the first proper
          shot of the film is cut, these will come down.
        </p>
        <p className="mt-4">
          The decision to publish temporary visuals at all was deliberate. A site this early that
          carries only text reads as pre-production vapor. A site that carries fully rendered
          characters would overstate what has been decided. The images we chose split the
          difference: material, period, textural — surfaces, not people.
        </p>
      </>
    ),
  },
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
