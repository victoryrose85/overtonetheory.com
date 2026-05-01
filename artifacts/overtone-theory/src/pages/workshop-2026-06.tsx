import { Navigation } from "@/components/Navigation";
import { FadeIn } from "@/components/FadeIn";
import { CtaButton } from "@/components/CtaButton";

interface WorkshopSession {
  date: string;
  dayLabel: string;
  time: string;
  venue: string;
  address: string;
  inPersonLink: string;
  zoomLink: string;
}

const sessions: WorkshopSession[] = [
  {
    date: "Saturday, June 20",
    dayLabel: "Session 1",
    time: "11am – 12pm",
    venue: "Sellwood Community House",
    address: "Portland, OR",
    inPersonLink: "#register",
    zoomLink: "#register",
  },
  {
    date: "Sunday, June 28",
    dayLabel: "Session 2",
    time: "11am – 12pm",
    venue: "SMILE Station",
    address: "Sellwood, Portland OR",
    inPersonLink: "#register",
    zoomLink: "#register",
  },
];

export default function Workshop() {
  return (
    <div className="bg-clean-white overflow-x-hidden">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[60svh] flex flex-col items-center justify-center bg-abyss text-clean-white px-6 pt-36 pb-16 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40vh] bg-purple-reign/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="text-sm font-sans font-bold uppercase tracking-widest text-signal-gold mb-6">
              The Overtone Theory Workshop · June 2026
            </p>
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-clean-white mb-8 leading-[1.1]">
              Come take an hour to
              <br />
              <span className="text-signal-gold">
                reconnect to your own signal.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-clean-white/90 max-w-2xl mx-auto mb-12 font-serif leading-relaxed">
              A guided experience for musicians, artists, writers, and creators
              of all kinds who feel stuck, blocked, or disconnected from their
              work.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-0 bg-clean-white/5 border border-clean-white/10 rounded-2xl overflow-hidden">
              <div className="text-center px-8 py-6 sm:border-r border-clean-white/10">
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-soft-violet mb-2">Session 1</p>
                <p className="text-base font-sans font-bold text-clean-white">Sat · June 20</p>
                <p className="text-sm font-serif text-clean-white/70 mt-1">Sellwood Community House</p>
                <p className="text-sm font-sans text-clean-white/50 mt-1">11am – 12pm</p>
              </div>
              <div className="text-center px-8 py-6">
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-soft-violet mb-2">Session 2</p>
                <p className="text-base font-sans font-bold text-clean-white">Sun · June 28</p>
                <p className="text-sm font-serif text-clean-white/70 mt-1">SMILE Station, Sellwood</p>
                <p className="text-sm font-sans text-clean-white/50 mt-1">11am – 12pm</p>
              </div>
            </div>
            <p className="text-sm font-sans text-clean-white/50 mt-4">In person · Live on Zoom</p>
          </FadeIn>

          <FadeIn delay={500} className="mt-8">
            <p className="text-sm font-sans text-signal-gold">Pay what you will · No one turned away</p>
            <a
              href="#signup"
              className="block mt-4 font-sans text-sm font-medium text-soft-violet hover:text-signal-gold transition-colors"
            >
              ↓ Sign up below
            </a>
          </FadeIn>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="py-24 md:py-32 px-6 bg-clean-white text-abyss">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Here's what happens in the room.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="space-y-6 text-lg md:text-xl font-serif">
              <p>
                You'll spend an hour working through a guided creative scenario
                built on The Overtone Theory — the same practice I've developed
                over 15+ years of working with musicians and artists.
              </p>
              <p>
                We start by settling the noise. Then we tune in to what's
                already there through a short meditation and imaginative
                exercise. By the end of the hour, you'll have connected with
                your creative energy in a way that most people describe as{" "}
                <span className="font-semibold text-purple-reign">
                  "oh my god, it was right there the whole time."
                </span>
              </p>
              <p>
                No lectures. No pitching. No homework. Just a real experience
                that gives you something tangible to walk away with.
              </p>
              <p>
                Some people come once and get what they need. Some come back
                regularly. Both are great.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-24 md:py-32 px-6 bg-abyss">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-clean-white text-center">
              Sign up
            </h2>
            <p className="text-center font-serif text-clean-white/60 mb-16">Choose your session and how you'd like to join.</p>
          </FadeIn>

          <div className="space-y-10">
            {sessions.map((session, i) => (
              <FadeIn key={session.date} delay={i * 150}>
                <div className="rounded-2xl border border-clean-white/10 overflow-hidden">
                  {/* Session header */}
                  <div className="bg-clean-white/5 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="text-xs font-sans font-bold uppercase tracking-widest text-soft-violet mr-3">{session.dayLabel}</span>
                      <span className="text-xl font-bold text-clean-white">{session.date}</span>
                    </div>
                    <div className="text-sm font-serif text-clean-white/60">
                      {session.time} · {session.venue} · {session.address}
                    </div>
                  </div>

                  {/* In-person / Zoom row */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-clean-white/10">
                    <div className="px-8 py-8 flex flex-col justify-between gap-6 min-h-[160px]">
                      <div>
                        <h3 className="text-lg font-bold text-clean-white mb-1">Join in person</h3>
                        <p className="text-sm font-serif text-clean-white/60">{session.venue}, {session.address}</p>
                        <p className="text-xs font-sans text-signal-gold mt-2">Seats are limited.</p>
                      </div>
                      <CtaButton href={session.inPersonLink} external>
                        Reserve my seat
                      </CtaButton>
                    </div>

                    <div className="px-8 py-8 flex flex-col justify-between gap-6 min-h-[160px]">
                      <div>
                        <h3 className="text-lg font-bold text-clean-white mb-1">Join on Zoom</h3>
                        <p className="text-sm font-serif text-clean-white/60">Stream live from anywhere.</p>
                      </div>
                      <CtaButton href={session.zoomLink} external>
                        Sign up for Zoom
                      </CtaButton>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PAY WHAT YOU WILL */}
      <section className="py-24 md:py-32 px-6 bg-clean-white text-abyss">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-reign">
              Pay what you will.
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="space-y-6 text-lg md:text-xl font-serif text-abyss/80">
              <p>
                This workshop has a suggested contribution of $200 so that I can
                keep doing this work. But the real price is whatever feels right
                to you. I trust you to value it honestly.
              </p>
              <p>
                No one will ever be turned away due to lack of funds. If you
                can't pay, come anyway. The work matters more than the money.
              </p>
              <p className="text-base text-abyss/50">
                Payment via Venmo (@djpenn) or CashApp before or after the
                workshop.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="py-16 px-6 bg-abyss text-clean-white text-center border-t border-clean-white/10">
        <FadeIn>
          <p className="font-serif text-lg text-clean-white/70 mb-4">
            Questions?{" "}
            <a
              href="https://calendly.com/dj-overtonetheory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-violet hover:text-signal-gold transition-colors underline"
            >
              Book a free call
            </a>{" "}
            or visit{" "}
            <a
              href="/"
              className="text-soft-violet hover:text-signal-gold transition-colors underline"
            >
              overtonetheory.com
            </a>{" "}
            to learn more.
          </p>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="bg-abyss text-clean-white/60 py-12 px-6 border-t border-clean-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-sm">
            © MIDWID 2026 | overtonetheory.com
          </p>
        </div>
      </footer>
    </div>
  );
}
