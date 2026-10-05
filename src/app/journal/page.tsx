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
    title: "The frame reset — a visceral film, not a restraint piece",
    body: (
      <>
        <p>
          A directional change, logged openly. Earlier entries in this journal committed the film
          to a particular shape of restraint — the camera does not see a body meet the water, the
          massacre is held in sound and off-screen, the register is <em>12 Years a Slave</em> and{" "}
          <em>Son of Saul</em>. That frame is now being reset.
        </p>
        <p className="mt-4">
          The film will instead depict the voyage as it was. Weeks at sea in a slaver&apos;s hold —
          overcrowding, dysentery, gaol-fever that killed roughly sixty of the enslaved before any
          water-shortage question arose, vomit, blood, filth, bodies removed through the hatch —
          are on screen. The three nights of killings are on screen. The chains the enslaved were
          thrown fettered in are visible, not only audible.
        </p>
        <p className="mt-4">
          The reason for the shift is that restraint, done the way the earlier commitment proposed
          it, risked letting the audience leave the theatre unmarked. The record of the <em>Zong</em>{" "}
          is a record of specific things done to specific people over specific days, and the court
          found a way to call those things an insurance claim. A film that refuses to look at what
          the court refused to see is honouring the court&apos;s refusal in a different form.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            What stays.
          </strong>{" "}
          The protagonist is still the emotional centre of the film. The protagonist&apos;s name is
          still never spoken on screen; the historical record did not preserve the names of those
          killed, and the film honours that. The film does not clone the face or voice of any
          identifiable real historical person. Arrival in Jamaica is not freedom. The <em>Zong</em>{" "}
          case did not end British slavery; abolition came in stages, in 1807 and 1833. All of these
          commitments remain.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            What changes.
          </strong>{" "}
          The camera looks. The shot grammar&apos;s rule against showing a body meeting water is
          retired. The rule against showing a sailor&apos;s hand on a body in the act of killing is
          retired. Children are present and seen in the hold. The hatch remains central but is no
          longer the sole visual signifier of what happens above it.
        </p>
        <p className="mt-4">
          The dignity of the people killed on the <em>Zong</em> is now carried, in this film&apos;s
          choice, by looking without stylizing and without earning cheap catharsis. The reference
          lineage shifts — toward <em>Come and See</em>, <em>Beasts of No Nation</em>, Steve
          McQueen&apos;s <em>Western Deep</em>, and the parts of <em>Son of Saul</em> that do look.
          The register is forensic. The camera is a witness.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "The Gregson syndicate, Stubbs, and the plea in the record",
    body: (
      <>
        <p>
          A second primary-source upgrade, drawing on a biographical compilation
          published by Lancaster City Council: the production now carries, in its working
          record, the full membership of the Liverpool-based Gregson syndicate (William
          Gregson, former mayor of Liverpool, and his sons John and James, with Edward
          Wilson, James Aspinall, and George Case); the specifics of Captain Luke
          Collingwood&apos;s career path (an unusual transfer from ship&apos;s surgeon to captain,
          with the <em>Zong</em> being his debut as master); and three material facts about
          the ship&apos;s officers that the current screenplay does not yet fully reflect.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            Robert Stubbs was the only passenger aboard the Zong.
          </strong>{" "}
          Not formally crew. A former slave-ship captain, a former governor of the British
          fort at Anomabu who was deposed in scandal and physically humiliated by local
          Africans, Stubbs was fleeing West Africa aboard the <em>Zong</em> when the massacre
          took place. Collingwood appointed him stand-in captain over the first mate James
          Kelsall. He was the only witness who ever testified. His account is the court
          record.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            Kelsall was suspended by Collingwood during the voyage, then reinstated.
          </strong>{" "}
          He had disputed Collingwood&apos;s appointment of Stubbs. The record is clear that by
          the time of the night of the proposal, these three men had an active bad history.
          The current screenplay understates this; the next revision will fold it in.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            One voice in the record speaks English.
          </strong>{" "}
          Kelsall&apos;s own testimony records a brief exchange with an English-speaking African
          aboard the <em>Zong</em>, who told Kelsall that rumour had spread among the enslaved
          that they were about to be killed, and begged that{" "}
          <em>
            &ldquo;they might be suffered to live and would not ask for meat or water but
            could live without either until they arrived at their determined port.&rdquo;
          </em>{" "}
          This is a specific documented sentence spoken by an unnamed enslaved African aboard
          the <em>Zong</em>. It is now in the production&apos;s working record. Whether and how to
          bring the character who spoke it into the film is an open question for the next
          screenplay revision.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "Shot lists for every scene — the writing scaffold is complete",
    body: (
      <>
        <p>
          The animatic shot-list pass is complete. All twenty-two scenes of the film now have
          shot-by-shot breakdowns — approximately two hundred and twenty-five shots in total — with
          per-shot image-generation prompts, voice-track specifications, ambient-sound notes, and
          enforced shot-grammar rules for the massacre sequence. The scaffold the shoot will build
          from is now in place.
        </p>
        <p className="mt-4">
          A quick inventory of the writing-side scaffold:
        </p>
        <ul className="list-none space-y-3 pl-0 mt-5">
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>Treatment (five thousand words), scene list (twenty-two rows), shot grammar (twelve sections including the dignity rules enforced across the massacre).</span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>Full first-draft screenplay for every scene.</span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>Full first-draft shot list for every scene.</span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>Ninety-minute pressure-test allocation across all three acts, specifying which beats cannot yield time and which scenes could cut if the running time grows.</span>
          </li>
          <li className="flex gap-4">
            <span className="serif italic text-[color:var(--color-amber)]">·</span>
            <span>Research scaffold with twenty-three claims in the ledger (each sourced), six catalogued primary sources including Sharp&apos;s own hand, five character sheets, and the committed cultural grounding (Akan / Twi / seven day names).</span>
          </li>
        </ul>
        <p className="mt-5">
          The next phase of work is production rather than writing — recording a Twi voice track,
          generating environmental plates for the first scene, assembling the opening ninety seconds
          as an animatic, and benchmarking local image generation. That work takes time of a
          different kind. The writing scaffold is what it needs to be.
        </p>
      </>
    ),
  },
  {
    date: "4 October 2026",
    title: "Sharp's own hand — a primary source now in the record",
    body: (
      <>
        <p>
          Gloucestershire Archives has published a transcript of Granville Sharp&apos;s own letter
          to William Baker, dated 23 May 1783 — written between the first trial of{" "}
          <em>Gregson v Gilbert</em> in March and the retrial in the King&apos;s Bench the
          following month. The transcript is now in the production&apos;s source register as{" "}
          <strong className="font-normal italic text-[color:var(--color-amber)]">SH3</strong>, with
          the full link on the <Link href="/sources">sources</Link> page.
        </p>
        <p className="mt-4">
          The letter — in Sharp&apos;s own hand — changes three things in the film&apos;s working
          record.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            The enslaved were thrown with their hands fettered.
          </strong>{" "}
          This detail is from Sharp&apos;s own account and is now load-bearing for the massacre
          sequence. The audience will hear the sound of iron shackle-chain accompanying the
          lifting-and-lowering through the hatch; the chain-sound is louder in the mix than the
          splash of the body itself. The people being killed could not swim, could not float, could
          not reach the surface.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            Fifty-four people were cast into the sea on the first day — before any short-water
            ration was imposed.
          </strong>{" "}
          The treatment and the first-draft screenplay had the killings paced across three nights
          roughly evenly. The record is heavier than that on the first night. Scene 6 (the proposal
          in Collingwood&apos;s cabin) and Scene 8 (the first night in the hold) are updated to
          reflect the first-day weight.
        </p>
        <p className="mt-4">
          <strong className="font-normal italic text-[color:var(--color-amber)]">
            Sixty people had already died in the hold of gaol-fever, before the water shortage was
            discovered.
          </strong>{" "}
          Sharp names this in the letter — a product of overcrowding, not of thirst. The scene in
          which a man&apos;s body is lifted up and lowered over the side (Scene 5) is now anchored
          to this specific documentary context.
        </p>
        <p className="mt-4">
          Sharp also characterizes the court action — in words the film&apos;s courtroom scene can
          now use — as{" "}
          <em>&ldquo;a mere mercenary business about the pecuniary value of the Negroes.&rdquo;</em>{" "}
          Equiano&apos;s voice is the film&apos;s access to the lower-London network that carried
          the account. Sharp&apos;s is now, through this letter, the film&apos;s access to his
          own.
        </p>
      </>
    ),
  },
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
