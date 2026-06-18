import { Navigation } from "@/components/Navigation";
import { FadeIn } from "@/components/FadeIn";
import { Instagram, Youtube, Twitch } from 'lucide-react';

const UTM_SOURCE = "overtonetheory-website";

interface WorkshopSession {
  date: string;
  dayLabel: string;
  time: string;
  venue: string;
  address: string;
  inPersonEventId: string;
  virtualEventId: string;
}

const sessions: WorkshopSession[] = [
  {
    date: "Saturday, June 20",
    dayLabel: "Session 1",
    time: "11am – 12pm",
    venue: "Sellwood Community House",
    address: "Portland, OR",
    inPersonEventId: "evt-vWsQVSbBenIN0pP",
    virtualEventId: "evt-gyivA4GLmtMKLnC",
  },
  {
    date: "Sunday, June 28",
    dayLabel: "Session 2",
    time: "11am – 12pm",
    venue: "SMILE Station",
    address: "Sellwood, Portland OR",
    inPersonEventId: "evt-N2INBQMjTjewQTS",
    virtualEventId: "evt-NJjH4ExjeLfyNqg",
  },
];

export default function Workshop() {
  return (
    <div className="bg-clean-white overflow-x-hidden">
      <Navigation />

      {/* HERO + SIGNUP */}
      <section className="relative bg-abyss text-clean-white px-6 pt-36 pb-20 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40vh] bg-purple-reign/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Headline */}
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-sm font-sans font-bold uppercase tracking-widest text-signal-gold mb-6">
                The Overtone Theory Workshop · June 2026
              </p>
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-clean-white mb-8 leading-[1.1]">
                Come take an hour to
                <br />
                <span className="text-signal-gold">reconnect to your own signal.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-clean-white/80 max-w-2xl mx-auto font-serif leading-relaxed">
                A guided experience for musicians, artists, writers, and creators
                of all kinds who feel stuck, blocked, or disconnected from their work.
              </p>
            </FadeIn>
          </div>

          {/* Session cards */}
          <div className="space-y-6">
            {sessions.map((session, i) => (
              <FadeIn key={session.date} delay={300 + i * 150}>
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

                  {/* In-person / Virtual row */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-clean-white/10">
                    <div className="px-8 py-8 flex flex-col justify-between gap-6 min-h-[160px]">
                      <div>
                        <h3 className="text-lg font-bold text-clean-white mb-1">Join in person</h3>
                        <p className="text-sm font-serif text-clean-white/60">{session.venue}, {session.address}</p>
                        <p className="text-xs font-sans text-signal-gold mt-2">Seats are limited.</p>
                      </div>
                      <a
                        href={`https://luma.com/event/${session.inPersonEventId}`}
                        className="luma-checkout--button"
                        data-luma-action="checkout"
                        data-luma-event-id={session.inPersonEventId}
                        data-luma-utm-source={UTM_SOURCE}
                      >
                        Reserve my seat
                      </a>
                    </div>
                    <div className="px-8 py-8 flex flex-col justify-between gap-6 min-h-[160px]">
                      <div>
                        <h3 className="text-lg font-bold text-clean-white mb-1">Join virtually</h3>
                        <p className="text-sm font-serif text-clean-white/60">Stream live from anywhere.</p>
                      </div>
                      <a
                        href={`https://luma.com/event/${session.virtualEventId}`}
                        className="luma-checkout--button"
                        data-luma-action="checkout"
                        data-luma-event-id={session.virtualEventId}
                        data-luma-utm-source={UTM_SOURCE}
                      >
                        Sign up — Virtual
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <p className="text-center text-sm font-sans text-signal-gold mt-10">Pay what you will · No one turned away</p>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-sans text-sm">© MIDWID 2026 | overtonetheory.com</p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://twitch.tv/overtonetheory" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-clean-white/60 hover:text-signal-gold transition-colors">
              <Twitch size={16} /> twitch.tv/overtonetheory
            </a>
            <a href="https://www.instagram.com/overtonetheory" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-clean-white/60 hover:text-signal-gold transition-colors">
              <Instagram size={16} /> @overtonetheory
            </a>
            <a href="https://www.youtube.com/@overtonetheory" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-clean-white/60 hover:text-signal-gold transition-colors">
              <Youtube size={16} /> @overtonetheory
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
