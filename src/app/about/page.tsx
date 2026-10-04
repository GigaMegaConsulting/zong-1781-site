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
            ZONG 1781 is a serious historical drama in production about the Zong voyage of 1781, the massacre of
            more than one hundred and thirty enslaved Africans by its English crew, and the London response the
            following spring. It is made with AI assistance in a documented workflow, and with the historical care
            the subject requires.
          </p>
        </header>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">What this film is</h2>
          <p>
            Three lives, held together across sixteen months and an ocean: an enslaved African man aboard the ship,
            an ordinary English sailor on the deck, and Olaudah Equiano, a formerly-enslaved African in London
            whose anonymous letter to the <em>Morning Chronicle</em> on 18 March 1783 first put the massacre into
            public view. Granville Sharp, the English abolitionist lawyer who carried the case into the Admiralty
            and the courts, enters as a supporting character.
          </p>
          <p>
            The film&apos;s moral centre is the African protagonist. He is not a device for a European character&apos;s
            arc. His survival into Jamaica is not framed as freedom. His name is not preserved in the historical
            record; neither are the names of any of the people killed on the Zong. The absence of those names is
            itself a thematic hinge of the film.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">What this film refuses to do</h2>
          <ul className="list-none space-y-3 pl-0">
            <li className="flex gap-4">
              <span className="serif italic text-[color:var(--color-amber)]">·</span>
              <span>
                It will not narrate the Zong as the cause of abolition. The Slave Trade Act (1807) and the Slavery
                Abolition Act (1833) came decades later. The case contributed to a mobilisation already underway;
                it did not end slavery.
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
                It will not treat the massacre as entertainment. Violence is held carefully — in sound, in
                aftermath, in refusal to linger — and attention to the dignity of the people being killed is a
                non-negotiable of every scene.
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
            The African protagonist is a named composite. The ordinary sailor is a composite drawn from documented
            Liverpool slaver crews of the period. Olaudah Equiano and Granville Sharp are real historical persons,
            portrayed within the limits of what their own writings and papers support. Captain Luke Collingwood and
            First Mate James Kelsall are named historical persons, used only where the court record supports.
            Specific scenes, dialogue and relationships between characters are invented and are labelled as such
            in production records.
          </p>
          <p>
            The anonymous authorship of the 18 March 1783 Morning Chronicle letter is historically contested. The
            film dramatizes a specific choice — that Equiano wrote the letter, called on Sharp the next day, and
            that Sharp then carried the campaign into the Admiralty — because every event in that version is in
            the record and together they form the strongest dramatic reading. The uncertainty is named rather than
            hidden.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">Made with AI</h2>
          <p>
            The film is made with AI assistance across writing, image, animation and audio work. The pipeline is
            local-first where possible, documented, and gated by human review at every creative and historical
            decision. The{" "}
            <Link href="/journal">production journal</Link> records how the film is being built, which models are
            used, and what the trade-offs are. AI is the invisible engine of the project, not its pitch.
          </p>
        </section>

        <section className="space-y-5 text-[color:var(--color-cream-soft)]/85">
          <h2 className="serif text-2xl text-[color:var(--color-cream)]">How to find the film</h2>
          <p>
            There is no trailer yet. When the first scene is finished, it will appear here. The planned access
            model for the finished film is a $1 minimum, pay-what-you-can — with stream and download — and five
            percent of revenue to the Breakfast Club of Canada.
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
