import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(200,144,96,0.08), transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(168,97,95,0.06), transparent 55%)",
        }}
      />

      <div className="relative">
        {/* top meta bar */}
        <nav className="flex items-center justify-between px-6 py-6 sm:px-10 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/70">
          <div className="serif text-[13px] tracking-[0.3em] text-[color:var(--color-cream)]">ZONG · 1781</div>
          <div className="hidden sm:flex gap-7">
            <Link href="/about">About</Link>
            <Link href="/sources">Sources</Link>
            <Link href="/journal">Journal</Link>
            <a href="mailto:hello@gigamega.ca">Contact</a>
          </div>
        </nav>

        {/* hero */}
        <section className="relative px-6 sm:px-10 pt-24 pb-28 sm:pt-32 sm:pb-40 overflow-hidden isolate">
          <div aria-hidden className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-ink)]/50 via-transparent to-[color:var(--color-ink)]/50" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-10">
            In production · a serious historical drama
          </p>
          <h1 className="serif text-[18vw] sm:text-[160px] lg:text-[192px] leading-[0.95] text-[color:var(--color-cream)]">
            ZONG
          </h1>
          <div className="mt-6 flex items-baseline gap-5">
            <span className="serif italic text-[color:var(--color-cream-soft)] text-2xl sm:text-3xl">1781</span>
            <span className="h-px flex-1 bg-[color:var(--color-cream)]/15" />
          </div>
          <p className="serif italic mt-10 text-xl sm:text-2xl text-[color:var(--color-cream)] max-w-2xl leading-snug">
            They counted cargo. History remembers people.
          </p>
          <p className="mt-10 text-[15px] leading-relaxed text-[color:var(--color-cream-soft)]/90 max-w-2xl">
            From 29 November into December 1781, the crew of an English slave ship called the <em>Zong</em> killed
            132 enslaved Africans: 122 thrown alive into the sea, and ten who leapt rather than have their hands
            fettered. Its owners then claimed their value from the underwriters as lost cargo, and on 6 March 1783
            a jury at Guildhall found for the owners at £30 a head. On 18 March an anonymous letter about the
            killings appeared in <em>The Morning Chronicle</em>. Its author is not known. The next day, Olaudah
            Equiano brought Granville Sharp an account of the killings, and Sharp&apos;s diary records it. In May
            the Court of King&apos;s Bench granted the underwriters a new trial. None is recorded, and no one was
            ever tried for the killings.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--color-cream-soft)]/90 max-w-2xl">
            This film tells that story through three lives — the African protagonist on the ship, the ordinary
            English sailor on the deck, and Olaudah Equiano, a formerly-enslaved man living in London who brought
            the account to Sharp. It is a serious historical drama made with AI assistance and historical care.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-[color:var(--color-cream)]/25 px-5 py-2.5 hover:bg-[color:var(--color-cream)]/5 transition"
            >
              <span>About the project</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/sources"
              className="inline-flex items-center gap-2 text-[color:var(--color-cream-soft)] hover:text-[color:var(--color-amber)]"
            >
              <span>Primary sources</span>
              <span aria-hidden>↗</span>
            </Link>
          </div>
          </div>
        </section>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="rule" />
        </div>

        {/* the three perspectives */}
        <section className="px-6 sm:px-10 py-24 max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">Three lives</p>
          <h2 className="serif text-4xl sm:text-5xl max-w-3xl">
            The massacre at sea, the deck above it, and the account in London.
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <Perspective
              roman="I"
              title="On the ship"
              image="/perspective-ship.png"
              body="A young Fante-speaking man from the Gold Coast, months into the crossing. No captive's name on the Zong was preserved, and the film does not invent one for him. Below decks he counts and remembers. The dignity the ship is designed to strip from him is what the film is built around."
            />
            <Perspective
              roman="II"
              title="On the deck"
              image="/perspective-deck.png"
              body="An ordinary English sailor, two or three voyages into this work. He is not the man who orders the killings. He is aboard the ship where they happen, and the film holds him to the weight of that complicity — not a monster, not a hero."
            />
            <Perspective
              roman="III"
              title="In London"
              body="Olaudah Equiano, a formerly-enslaved man living in London in March 1783. Who wrote the anonymous letter in the Morning Chronicle is not known, and the film does not say. What the record holds is his visit: on 19 March he brought Granville Sharp an account of the killings. Sharp, who pressed the Admiralty to prosecute the crew for murder, enters as a crucial supporting character."
            />
          </div>
        </section>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="rule" />
        </div>

        {/* frame */}
        <section className="px-6 sm:px-10 py-24 max-w-5xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-5 items-start">
            <div className="sm:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
                The frame
              </p>
              <h2 className="serif text-3xl sm:text-4xl leading-tight">What this film refuses to do.</h2>
            </div>
            <div className="sm:col-span-3 space-y-5 text-[15px] leading-relaxed text-[color:var(--color-cream-soft)]/90">
              <p>
                The enslaved African is the emotional centre of the film. He is not a device for a European
                character&apos;s moral arc.
              </p>
              <p>
                The Zong did not end British slavery. Abolition came in stages — the slave trade in 1807, slavery in
                the British Caribbean in 1834, with apprenticeship ending only in 1838. The Zong case contributed to
                abolitionist mobilisation; it was neither its trigger nor its cause. The film will not narrate the
                massacre as a turning point it was not.
              </p>
              <p>
                For the Zong&apos;s survivors, arrival in Jamaica was not freedom. They were landed into chattel
                slavery that did not end for decades.
              </p>
              <p>
                The names of the people killed on the Zong were not preserved. The record keeps them only as a
                count. The absence of those names is itself a thematic hinge of the film and is treated as such in
                the dramatization statement.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="rule" />
        </div>

        {/* status strip */}
        <section className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
            Where we are
          </p>
          <h2 className="serif text-3xl sm:text-4xl max-w-3xl">
            The record forming in public — before the film is finished.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--color-cream-soft)]/90 max-w-2xl">
            Writing, research and visual direction are in progress. There is no trailer yet. There are no stills we
            are prepared to publish. This website exists to make the project visible as it is being made — to
            explain the frame, cite the record, and open the production notes to anyone who finds the story.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3 text-[14px]">
            <StatusCell label="Phase" value="D — research + character + animatic" />
            <StatusCell label="Visual direction" value="Serious, intimate historical drama" />
            <StatusCell label="Access price (planned)" value="$1 minimum, pay-what-you-can" />
          </div>
        </section>

        <div className="px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="rule" />
        </div>

        {/* dramatization + pledge */}
        <section className="px-6 sm:px-10 py-24 max-w-5xl mx-auto grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
              Dramatization statement
            </p>
            <h3 className="serif text-2xl sm:text-3xl leading-tight">A film built from the historical record.</h3>
            <p className="mt-5 text-[14px] leading-relaxed text-[color:var(--color-cream-soft)]/85">
              The African protagonist is a composite, and the film gives him no name. Every captive&apos;s name
              spoken in it is invented, following the Akan day-name calendar. The crew member is a composite.
              Olaudah Equiano, Granville Sharp, Captain Luke Collingwood, the mate James Kelsall, Robert Stubbs,
              Lord Mansfield and counsel in the case are real people. Where the record gives their words, the film
              keeps them; their other dialogue is invented. Invented scenes and lines are disclosed in the
              film&apos;s closing cards and in its dramatization statement. The film is made with AI assistance in
              a documented workflow.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-amber)]/80 mb-5">
              Pledge
            </p>
            <h3 className="serif text-2xl sm:text-3xl leading-tight">Five percent of revenue to the Breakfast Club of Canada.</h3>
            <p className="mt-5 text-[14px] leading-relaxed text-[color:var(--color-cream-soft)]/85">
              Every purchase of the film contributes to the{" "}
              <a href="https://www.clubdejeuner.org/" target="_blank" rel="noopener noreferrer">
                Breakfast Club of Canada
              </a>
              , which serves nutritious breakfasts to children across the country.
            </p>
          </div>
        </section>

        <footer className="px-6 sm:px-10 py-14 text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-cream-soft)]/60 border-t border-[color:var(--color-cream)]/10">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="serif tracking-[0.3em] text-[13px] text-[color:var(--color-cream)]/80">
              ZONG · 1781
            </div>
            <div className="flex gap-6">
              <Link href="/about">About</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/journal">Journal</Link>
              <a href="mailto:hello@gigamega.ca">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Perspective({
  roman,
  title,
  body,
  image,
}: {
  roman: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <div>
      {image ? (
        <div className="relative mb-5 aspect-[4/5] overflow-hidden border border-[color:var(--color-cream)]/10">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="relative mb-5 aspect-[4/5] overflow-hidden border border-dashed border-[color:var(--color-cream)]/15 bg-[color:var(--color-ink)]/40 flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-cream-soft)]/40">
            In production
          </span>
        </div>
      )}
      <div className="serif italic text-[color:var(--color-amber)] text-sm tracking-widest">{roman}</div>
      <h3 className="serif text-2xl mt-2">{title}</h3>
      <p className="mt-4 text-[14px] leading-relaxed text-[color:var(--color-cream-soft)]/85">{body}</p>
    </div>
  );
}

function StatusCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-cream-soft)]/60 mb-2">
        {label}
      </div>
      <div className="serif text-[color:var(--color-cream)] leading-snug text-[16px]">{value}</div>
    </div>
  );
}
