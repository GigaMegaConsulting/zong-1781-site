import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the project",
  description:
    "ZONG 1781 is a serious historical drama about the Zong voyage, massacre and aftermath, made with AI assistance and historical care.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="px-6 sm:px-10 py-6 max-w-3xl mx-auto">
        <nav className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/70">
          <Link href="/">← ZONG · 1781</Link>
        </nav>
      </div>

      <article className="px-6 sm:px-10 py-10 max-w-3xl mx-auto space-y-10 text-[15px] leading-relaxed">
        <header>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">About</p>
          <h1 className="serif text-5xl sm:text-6xl leading-[0.95]">A film built from the record.</h1>
          <p className="mt-7 text-[color:var(--color-cream-soft)]/90">
            ZONG 1781 is a serious historical drama in production about the Zong voyage of 1781, the killing of
            more than one hundred and thirty enslaved Africans by its crew, from 29 November into December 1781,
            in the Caribbean Sea leeward of Jamaica, and the London response in the spring of 1783. It is made with
            AI assistance in a documented workflow, and with the historical care the subject requires.
          </p>
        </header>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">What this film is</h2>
          <p>
            Three lives, held together across an ocean and the years from 1781 to 1789: an enslaved African man
            aboard the ship, an ordinary English sailor on the deck, and Olaudah Equiano, a formerly enslaved
            African in London. On 18 March 1783 an anonymous letter about the case appeared in the{" "}
            <em>Morning Chronicle</em>; its author is not known. The next day, 19 March, Equiano brought Granville
            Sharp an account of the killings, and Sharp&apos;s diary records it. Sharp, the English abolitionist who
            attended the Court of King&apos;s Bench in May 1783 with his own shorthand writer and wrote to the
            Admiralty asking that the killers be prosecuted for murder, enters as a supporting character.
          </p>
          <p>
            The film&apos;s moral centre is the African protagonist. He is not a device for a European character&apos;s
            arc. He is a composite, and the film never gives him a name: no captive&apos;s name survives in the
            record, and the names of the people killed on the Zong were not preserved. The absence of those names is itself a thematic hinge of the film.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">What this film commits to</h2>
          <ul className="list-none space-y-3 pl-0">
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                It will not narrate the Zong as the cause of abolition. Abolition came in stages, decades later:
                the British slave trade ended in 1807; slavery in the British Caribbean was abolished in 1834, and
                the apprenticeship that followed ended only in 1838. The case contributed to abolitionist
                mobilisation; it did not end slavery.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                It will not frame the arrival in Jamaica as freedom. The people who survived were offloaded into
                chattel slavery.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                It depicts the Middle Passage and the massacre as what they were — overcrowding, fever, filth,
                visible violence, bodies, chains, water. The film is a visceral, forensic record. The dignity of
                the people killed on the ship is held by looking at what was done to them, without stylizing,
                without spectacle, and without earning the audience cheap catharsis.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                It will not clone the face or voice of any identifiable real person without permission.
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">Dramatization statement</h2>
          <p>
            This film is a dramatization built from the historical record. How it handles that record, plainly:
          </p>
          <ul className="list-none space-y-3 pl-0">
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                The protagonist is a composite, and he is never named — not on screen, in the credits, or in
                anything written about the film. He is credited by description.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                Every captive&apos;s name spoken in the film is invented, and the names follow the Akan day-name
                calendar, because the names of the people killed on the Zong were not preserved.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                The killings, the trials and the dates follow the record; many scenes, and the people in the
                hold, are invented. Words drawn from the court records, letters and diary keep the record&apos;s
                wording; the rest of the dialogue is invented. Where the record disagrees with itself, as on the
                date of the rain, the film follows one account and logs the dispute.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                The authorship of the anonymous <em>Morning Chronicle</em> letter of 18 March 1783 is left open,
                because the record leaves it open. The film commits only to what is recorded: the next day,
                Equiano brought Sharp an account, and Sharp&apos;s diary records it.
              </span>
            </li>
          </ul>
          <p>
            The seamen, the ordinary sailor among them, are composites; the crew&apos;s individual conduct is not
            recorded beyond the master, the mate and the passenger. Olaudah Equiano, Granville Sharp, Captain Luke
            Collingwood, First Mate James Kelsall, the passenger Robert Stubbs, Lord Mansfield and the counsel in
            the case are real historical persons, played by actors without any likeness or voice cloning.
            Specific scenes and relationships between characters are invented and are labelled as such in
            production records.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">Made with AI</h2>
          <p>
            The film is made with AI assistance across writing, image, animation and audio work. The pipeline is
            local-first where possible and documented. A human director sets the frame and can overrule any
            decision, but not every decision gets an individual human ruling: some creative and historical calls
            are delegated to AI review and reconciled by AI, against the source record. The{" "}
            <Link href="/journal">production journal</Link> records how the film is being built, which models are
            used, and what the trade-offs are. AI is the invisible engine of the project, not its pitch.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">How to find the film</h2>
          <p>
            There is no trailer yet. When the first scene is finished, it will appear here. The finished film is
            planned at about seventy-eight minutes. The planned access model is a $1 minimum, pay-what-you-can
            — with stream and download — and five percent of revenue to the Breakfast Club of Canada.
          </p>
          <p>
            For questions, source corrections, or interest in collaborating:{" "}
            <a href="mailto:hello@gigamega.ca">hello@gigamega.ca</a>.
          </p>
        </section>

        <footer className="pt-10 border-t border-[color:var(--color-cream)]/10 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/60">
          <Link href="/">← ZONG · 1781</Link>
        </footer>
      </article>
    </main>
  );
}
