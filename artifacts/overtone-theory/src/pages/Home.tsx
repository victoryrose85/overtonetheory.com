import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { FadeIn } from '@/components/FadeIn';
import { CtaButton } from '@/components/CtaButton';
import { Instagram } from 'lucide-react';
import headshotUrl from '@assets/headshot_1776730011258.jpg';

export default function Home() {
  return (
    <div className="bg-clean-white overflow-x-hidden">
      <Navigation />

      {/* 1. HERO */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-abyss text-clean-white px-6 pt-20 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[40vh] bg-purple-reign/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <FadeIn>
            <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-clean-white mb-8 leading-[1.1]">
              Let's get you<br />
              <span className="text-signal-gold">back in the flow.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-clean-white/90 max-w-2xl mx-auto mb-12 font-serif leading-relaxed">
              The Overtone Theory is a creative development practice that helps musicians, writers, artists and creators of all kinds push beyond self-imposed limits so they can make work that truly resonates with who they are.
            </p>
            <p className="text-lg md:text-xl text-clean-white/90 max-w-2xl mx-auto mb-12 font-serif leading-relaxed">You just have to know where to look.</p>
          </FadeIn>
          
          <FadeIn delay={400} className="flex flex-col items-center gap-6">
            <CtaButton href="https://calendly.com/dj-overtonetheory/30min" external>Let's chat</CtaButton>
            <a href="#process" className="font-sans text-sm font-medium text-soft-violet hover:text-signal-gold transition-colors">
              How does this work?
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section id="problem" className="py-24 md:py-32 px-6 bg-clean-white text-abyss">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Sound familiar?</h2>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="space-y-6 text-lg md:text-xl font-serif">
              <p>You sit down with your instrument, your canvas, your keyboard, your tools — and nothing happens. Or something happens, but it's kinda more of the same thing that came last time. And the time before that.</p>
              <p>You've got the talent. You've put in the years. You know you're capable of making something that matters.</p>
              <p>But somewhere between the idea in your head and the thing you actually make, something gets lost. The spark fizzles. The inner critic shows up. You walk away feeling more frustrated than when you started.</p>
              <p>So you try harder. You force it. You noodle, you stare at the blank page, you hope inspiration will strike if you just sit there long enough.</p>
              <p className="font-semibold text-purple-reign">Would you believe me if I said that you're naturally equipped to do something about it?</p>
              <p>The signal is already there. It's always been there. But somewhere along the way, you let the inner voice take over. The one that edits before you create, judges before you finish, convinces you that it's not good enough.</p>
              <p>You got in your own way, and the static took over. That's not a character flaw. You're just human.</p>
              <p className="font-sans font-bold text-xl text-purple-reign pt-4">The Overtone Theory is a fundamental understanding for actively tuning back in.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. THE THEORY */}
      <section id="theory" className="py-24 md:py-32 px-6 bg-abyss text-clean-white">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-clean-white">What is The Overtone Theory?</h2>
          </FadeIn>
          
          <FadeIn delay={150}>
            <div className="space-y-6 text-lg md:text-xl font-serif text-clean-white/90">
              <p>In the physics of music and electronics, an overtone is any resonant frequency that exists naturally above the fundamental note. You don't force overtones into existence. It just happens. However, with the right conditions — specific vibrations, tuned resonance, the right materials — the overtones can be shaped and selected, intentionally formed to make a specific sound. It's what makes a piano, violin, and saxophone sound different, even though they play the same note.</p>
              <p>Your creativity works the same way.</p>
              <p>You already have everything you need to create. The influences, the experiences, the emotions, the skill. It's all there, packaged up in your unique perspective with unfathomable depth. But something is dampening the signal. Self-criticism, fear of judgement, creative habits that stopped working years ago, a disconnection between what you feel and what you make.</p>
              <p className="font-semibold text-purple-reign">Let's be real: It's hard out there in the real life. It can be real hard to feel creative.</p>
              <p>The Overtone Theory is a practice I've developed over 15+ years of working with musicians, artists, and creators of all kinds. It combines guided imaginative exercises, meditation, and compassionate conversation to help you reconnect with your creative self.</p>
              <p>I don't teach you how to make art. You already know how. I help you get out of your own way so your art can come through honestly.</p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-soft-violet">Your body is an antenna.</h3>
            <div className="space-y-6 text-lg md:text-xl font-serif text-clean-white/90">
              <p>This isn't a metaphor. Your brain and fascia are literally piezoelectric — they generate a measurable electric field through physical movement and chemical processes. Your body produces and exists within its own electromagnetic field.</p>
              <p>You — the one piloting your meat suit — you are the one making sense of the signals your body receives. Like tuning a radio, you get to choose what frequency you're paying attention to. The antenna doesn't care if it's picking up jazz, static, or silence. It just receives whatever's in the field.</p>
              <p>You are the choice-maker. You decide what to tune into.</p>
              <p>When you're creatively blocked, you're just tuned to the wrong station. The signal is still there. You've just lost the frequency.</p>
              <p className="font-sans font-bold text-xl text-signal-gold pt-4">The Overtone Theory helps you tune back in.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. THE PROCESS */}
      <section id="process" className="py-24 md:py-32 px-6 bg-clean-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-abyss text-center">The 4 Steps (because capitalism tells me y'all like it when folks turn a process into easy steps)</h2>
          </FadeIn>
          
          <div className="space-y-16">
            {[
              {
                num: "1",
                title: "Ground",
                desc: "Before you can hear anything, you need to quiet the noise. We start by settling the mind and body, reducing the static of self-doubt, overthinking, and external pressure. Through conversation and simple grounding exercises, you'll arrive at a place of stillness — not emptiness, but holding an open space for clarity. Like clearing a surface so that the art has a place to be displayed."
              },
              {
                num: "2",
                title: "Attune",
                desc: "Once you're grounded, we tune in. Through guided meditation and imaginative exercises, you'll reconnect with your own body, your emotions, and the creative energy you've been disconnected from. This is where most people have their \"oh my god\" moment — the realization that the inspiration they've been waiting for was already there. They just couldn't feel it."
              },
              {
                num: "3",
                title: "Transceive",
                desc: "This is the creative act itself. You're simultaneously receiving and transmitting — pulling from your influences, emotions, and experiences while expressing something new through your art. You're not just making something. You're in conversation with it. The art is shaped by what you're honestly feeling, and what you're feeling is shaped by what the art is becoming. This is the state that prolific artists access instinctively. The Overtone Theory makes it accessible on purpose."
              },
              {
                num: "4",
                title: "Sustain",
                desc: "The session ends, but the signal doesn't. Everything you learn in our work together is a repeatable practice — techniques you can use on your own, whenever you need them. Creative blocks are inevitable. But once you understand how to tune back in, they stop being walls and start being momentary static. You'll know exactly how to clear it."
              }
            ].map((step, idx) => (
              <FadeIn key={step.num} delay={idx * 150} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="font-sans font-bold text-[64px] leading-none text-signal-gold md:w-24 shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-reign mb-4">{step.title}</h3>
                  <p className="text-lg font-serif text-abyss leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section id="for-you" className="py-24 md:py-32 px-6 bg-gradient-to-b from-abyss to-purple-reign text-clean-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Who This Is For</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-clean-white">This is for you if...</h3>
              <ul className="space-y-4 text-lg font-serif">
                <li className="custom-bullet">You're a musician, writer, visual artist, animator, filmmaker, content creator, or any kind of creator</li>
                <li className="custom-bullet">You've got the skill and the talent, but something is blocking your creative output</li>
                <li className="custom-bullet">You've tried forcing it, waiting for inspiration, or "just doing it" — and none of it has worked</li>
                <li className="custom-bullet">You're willing to try something different, even if it feels uncomfortable at first</li>
                <li className="custom-bullet">You want a repeatable process, not a one-time fix</li>
                <li className="custom-bullet">You're more curious than skeptical</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-clean-white">This is not for you if...</h3>
              <ul className="space-y-4 text-lg font-serif opacity-80">
                <li className="custom-bullet">You're looking for someone to make the art for you</li>
                <li className="custom-bullet">You want a quick hack or shortcut</li>
                <li className="custom-bullet">You're not willing to be honest with yourself</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. STORIES */}
      <StoriesSection />

      {/* 7. TESTIMONIAL */}
      <section className="py-24 md:py-32 px-6 bg-purple-reign text-clean-white text-center">
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <div className="text-signal-gold text-[120px] leading-none absolute -top-16 left-1/2 -translate-x-1/2 opacity-30 font-serif">"</div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed relative z-10">
              "I could be nothing less than eternally grateful for my session with DJ. The meditations backed by psychological research have given me the tools to remove my blocks and reinvent my career!"
            </p>
            <p className="mt-12 font-sans font-bold text-lg tracking-wide uppercase">
              — Jdub, frontman of J_fi
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 8. ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 bg-clean-white text-abyss">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            <FadeIn className="w-full md:w-auto flex justify-center shrink-0">
              <img
                src={headshotUrl}
                alt="DJ"
                className="w-[200px] h-[200px] rounded-full object-cover object-top shadow-2xl ring-4 ring-soft-violet/30"
              />
            </FadeIn>
            
            <FadeIn delay={200} className="flex-1 max-w-[600px]">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-reign">Hey, I'm DJ.</h2>
              <div className="space-y-6 text-lg font-serif leading-relaxed">
                <p>I'm a musician, producer, both audio and electrical engineer, and the person behind MIDWID and The Overtone Theory.</p>
                <p>The name MIDWID comes from a quote I believe is attributed to Ray Charles. When asked how he makes his amazing music, he just laughed and said, "Man, I just make it do what it do."</p>
                <p className="font-semibold">MIDWID: Make It Do What It Do. That's the philosophy. Don't overthink it. Let the thing be what it wants to be.</p>
                <p>I started my career at Arlyn Studios in Austin, TX, learning from award-winning producers and engineers. Over the years, I've worked with hundreds of bands across recording studios and live venues, from blues to punk to hip-hop to jazz. I ran live sound at Maggie Mae's on 6th Street for years, including multiple SXSW festival stages. I composed music for short films, worked sound design for documentaries, performed improv, written short stories, painted, and have learned so much about the creative process.</p>
                <p>And yet, my curious mind wanted to know how audio equipment worked so badly that I went back to school and earned a Bachelor's degree in Electrical Engineering. For as much as I learned about circutry, math, and physics, that experience also taught me how to explain complex things simply, how to troubleshoot, and (most importantly) how to ask the right questions.</p>
                <p>In my persuit to create equipment that would make my art better, I quickly realized the quality of the music has absolutely nothing to do with the equipment. It has everything to do with the person making it. So, I pivoted to using my degree to get jobs just for the money.</p>
                <p>After years of losing my own creative drive in engineering jobs that didn't fit, I sought out people living the lives I wanted. I learned mental, emotional, and imaginative techniques from them. When I applied those techniques to my own creativity, it felt like breathing again. The art came freely. I end so many more sessions with satisfaction, whatever the result of the art is.</p>
                <p>Now I combine those techniques with my experience producing music to help other creatives do the same thing. The Overtone Theory is the result of 15+ years of learning how creative energy actually works. While I call it a theory, it's been developed through a wide range of personal experience through hundreds of real sessions with real people.</p>
                <p className="text-xl font-bold text-purple-reign pt-4">The world needs more of your art. And selfishly? I just want to experience it.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. WORKSHOPS */}
      <section id="workshops" className="py-24 md:py-32 px-6 bg-abyss text-clean-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Workshops</h2>
            <div className="space-y-6 text-lg md:text-xl font-serif text-clean-white/90 mb-12">
              <p>I run regular workshops in Portland, OR (and live over Zoom) where you can experience The Overtone Theory firsthand.</p>
              <p>In one hour, you'll work through a guided scenario, connect with a brief meditation, and walk away with a real shift in how you understand your own creative process. Some people come once and get what they need. Some come back regularly. Both are great.</p>
              <p>Workshops have a suggested price, and are always pay-what-you-will. I believe in making this accessible, and I trust you to value it honestly. Nobody will ever be turned away due to lack of funds.</p>
            </div>
            <CtaButton href="https://calendly.com/dj-overtonetheory/overtone-theory-workshop" external>See upcoming workshops</CtaButton>
          </FadeIn>
        </div>
      </section>

      {/* 10. GO DEEPER */}
      <section className="py-24 md:py-32 px-6 bg-clean-white text-abyss text-center border-b border-abyss/10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-reign">Go deeper</h2>
            <div className="space-y-6 text-lg md:text-xl font-serif mb-12">
              <p>If you want to go further than a workshop can take you, I work with people one-on-one, or small groups of people working on the same project. Session duration varies depending on your necessity, ranging from one to eight hours, tailored specifically to where you are and what you're trying to create.</p>
              <p>We'll talk about it on a free call first. No pitch, no pressure. Just a conversation about where you are and whether this is the right fit.</p>
            </div>
            <CtaButton href="https://calendly.com/dj-overtonetheory/30min" external>Book a free call</CtaButton>
          </FadeIn>
        </div>
      </section>

      {/* 11. FAQ */}
      <FaqSection />

      {/* 12. CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-abyss text-clean-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to tune in?</h2>
            <p className="text-lg md:text-xl font-serif mb-10 text-clean-white/90">
              Book a free call and let's talk about where you are and where you want to go. No pitch, no script. Just a real conversation.
            </p>
            <CtaButton href="https://calendly.com/dj-overtonetheory/30min" external className="mb-14">Let's chat</CtaButton>
            
            {/* Calendly Inline Embed */}
            <div className="rounded-2xl overflow-hidden mb-16 border border-soft-violet/20">
              <iframe
                src="https://calendly.com/dj-overtonetheory/30min?hide_gdpr_banner=1&background_color=0F0326&text_color=FAFAFA&primary_color=7E22CE"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a free call with DJ"
              />
            </div>

            <div className="max-w-xl mx-auto text-left bg-clean-white/5 p-8 md:p-12 rounded-2xl border border-clean-white/10">
              <h3 className="text-2xl font-bold mb-8 text-center text-signal-gold">Send a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-clean-white/80">Name</label>
                  <input type="text" id="name" className="w-full bg-abyss border border-soft-violet/30 rounded-lg px-4 py-3 text-clean-white focus:outline-none focus:border-signal-gold transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-clean-white/80">Email</label>
                  <input type="email" id="email" className="w-full bg-abyss border border-soft-violet/30 rounded-lg px-4 py-3 text-clean-white focus:outline-none focus:border-signal-gold transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="link" className="block text-sm font-medium mb-2 text-clean-white/80">Link to your work (optional)</label>
                  <input type="url" id="link" className="w-full bg-abyss border border-soft-violet/30 rounded-lg px-4 py-3 text-clean-white focus:outline-none focus:border-signal-gold transition-colors" placeholder="https://" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-clean-white/80">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-abyss border border-soft-violet/30 rounded-lg px-4 py-3 text-clean-white focus:outline-none focus:border-signal-gold transition-colors" placeholder="What's on your mind?"></textarea>
                </div>
                <button type="submit" className="w-full bg-signal-gold text-abyss font-sans font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-abyss text-clean-white/60 py-12 px-6 border-t border-clean-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-sm">© MIDWID 2026 | overtonetheory.com</p>
          <a href="#" className="text-clean-white/60 hover:text-signal-gold transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

// --- Sub-components to keep Home.tsx manageable ---

function StoriesSection() {
  const stories = [
    {
      name: "Gerschweyn",
      content: "Gerschweyn is an extraordinarily talented pianist, singer, and songwriter. They'd written a concept album and brought me in to help with a few tracks. One song — just piano and vocal — they wanted it to be \"huge.\" Epic. Over-the-top. But they couldn't explain exactly what was in their head.\n\nWe spent nearly a full day together, not working on the music itself, but exploring what was trying to be said. The emotions to be conveyed. The story to be told. The desired feelings listener should walk away with.\n\nBy creating a space where they could express without judgement — from the ego, from me, from the outside world — we found our way into making one of the most creative, moving pieces of music I've ever had the privilege to collaborate on. The energy from the art was transmitted honestly, clearly, and powerfully. It was, indeed, epic."
    },
    
    {
      name: "Jonny",
      content: "Jonny is a musician, singer, songwriter, frontman, and all around creative force. A plethora of ideas, that man's well will never run dry. His penchant to grab an idea and run with it is damn impressive.\n\nBut even to a creative guy like Jonny, life just plain gets hard sometimes. And for a person who lives and breathes through his creativity, it became difficult to wade through all of those possibilities while still trying to keep his head above water. I could feel the overwhelm in him.\n\nIt was at this time that I had just compiled my first version of what I'm now calling The Overtone Theory. Being one of my oldest, most trusted friends, he graciously allowed me to teach him what I've learned.\n\nOver a few hours on Zoom, he came to understand exactly what he wanted, exactly what he was trying to do with his art, and clearly identified the next steps he needed to take to get him there.\n\nHe's since returned to the prolific artist he's always been, unafraid to make his process his own, and is actively creating the best art I've heard from him in years."
    },
    {
      name: "Jordan",
      content: "Jordan is a talented guitarist and live sound engineer who could never find the reason to record his own music. He'd dabble in recording at home but always felt stuck — he didn't know what he wanted his songs to be.\n\nWe spent a day together. I walked him through my understanding of how we interact with creative energy, then we explored what Jordan actually feels when he thinks about his art. When I asked him how he felt about the demo he shared with me, he told me he \"doesn't feel things\" in his body, even when making the art.\n\nThrough compassionate conversation and a little bit of guided meditation, he reconnected with his body. We then listened back to the demo, independently taking notes on what we felt when we felt it. And wouldn't you know it, Jordan's capability for emotion runs deep. Reconnected, recharged, and invigorated, we sketched out the rest of the track.\n\nWithin a month, he'd recorded his first song in a professional studio."
    },
    {
      name: "Patrick",
      content: "Patrick isn't an artist. He was just a guy I met at a dive bar.\n\nWe struck up a conversation over a game of pool, and I held open space for him to talk completely free of judgement, no fear to express himself. He was at a crossroads in life, trying to decide whether to fight for something he loved or pivot to find happiness a different way.\n\nI guided him through a brief meditation where he connected with his own emotions honestly — maybe for the first time. He recognized what he wanted. He knew what he needed to do next.\n\nA month later, I ran into him at the same bar. He'd made changes. The thing he thought he was fighting for wasn't actually a fight — he just had to choose to change his perspective on how he showed up for it. A year after that, he told me point-blank that our conversation that first night changed his entire mode of thinking.\n\nHis face was rested. He carried himself with confidence. He smiled.\n\nI include this experience to show that what I have to teach isn't just for folks who consider themselves artists. It's for anyone who wants to create something meaningful."
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="stories" className="py-24 md:py-32 px-6 bg-clean-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-reign text-center">A few people I've had the privilege of working with</h2>
        </FadeIn>
        
        <FadeIn delay={200}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {stories.map((story, idx) => (
              <button
                key={story.name}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-sans font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-purple-reign text-clean-white shadow-md transform -translate-y-1' 
                    : 'bg-abyss/8 text-abyss/70 hover:bg-abyss/15'
                }`}
              >
                {story.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-clean-white rounded-3xl p-8 md:p-12 shadow-xl shadow-abyss/5 border border-abyss/8 min-h-[400px]">
            {stories.map((story, idx) => (
              <div 
                key={story.name} 
                className={`transition-opacity duration-500 ${activeTab === idx ? 'opacity-100 block' : 'opacity-0 hidden'}`}
              >
                <div className="space-y-6 text-lg font-serif text-abyss leading-relaxed">
                  {story.content.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "How much does a one-on-one session cost?",
      a: "It depends on what you need. Sessions range from a focused hour to a full workday, individual or group, and pricing reflects that range. We'll talk about it during your free consultation. No surprises, no pressure."
    },
    {
      q: "Do I need to be a musician for this to work?",
      a: "Not at all. I've worked with musicians, visual artists, writers, and people who don't consider themselves \"creative\" at all. The Overtone Theory applies to anyone who wants to access their creative energy more freely."
    },
    {
      q: "But I'm not that talented. Do I need to be really good at my chosen art?",
      a: "Talent and technical skill are useful, but they're not what's blocking you. Great art comes from expression, not expertise. The Overtone Theory works with the person, not the tools."
    },
    {
      q: "How long does it take to see results?",
      a: "Most people experience a real shift within a single session. The workshop is designed to give you something tangible in one hour. One-on-one sessions go deeper, and the full-day format is where the most lasting transformation happens. Either way, you'll walk away with repeatable techniques you can use on your own."
    },
    {
      q: "Is this therapy?",
      a: "No. I'm not a therapist, and The Overtone Theory is not therapy. It's a creative development practice. We do explore emotions and internal blocks, but always in service of your creative work. If deeper personal issues come up, I'll encourage you to work with a qualified professional."
    },
    {
      q: 'Is this "manifest your destiny" woo-woo stuff?',
      a: "Not really. Everything I teach is grounded in how your mind, body, and imagination actually work together. Your brain generates electrical signals. Your muscles operate on electrical impulse. Your fascia is piezoelectric. These are measurable, scientific facts. There are also plenty of things we just don't understand yet about what makes you YOU separate from your body. I use all of these to make sense of what's happening when you're in a creative state, and how to get there on purpose. No crystals, no vision boards, no uncomfortable practices."
    },
    {
      q: "I've tried everything. Can this really help?",
      a: "I mean, you gotta admit, there's no WAY you've tried everything. You've tried the things you could think of, and now it's time for something completely different. The Overtone Theory is a different approach entirely. It works with your internal state, not your external effort."
    },
    {
      q: "There are a lot of creative coaches out there. Why should I trust you?",
      a: "I've spent 15+ years working with a multitude of bands and artists in professional settings. My education has taught me how to explain what's happening in your body and brain when you create. And I'm not here to build a following or sell a course. I work with individuals and small groups, with honest and compassionate conversation, because that's how this actually works. You'll know within the first five minutes of talking to me whether we're a fit."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-light-violet">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-reign text-center">Questions you might have</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <FadeIn key={idx} delay={idx * 100}>
                <div 
                  className={`bg-clean-white rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-purple-reign/30 shadow-lg' : 'border-abyss/8 hover:border-purple-reign/20'}`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  >
                    <span className="font-sans font-bold text-lg md:text-xl text-purple-reign pr-8">{faq.q}</span>
                    <span className={`text-purple-reign transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div 
                    className="accordion-content"
                    data-state={isOpen ? 'open' : 'closed'}
                  >
                    <div className="accordion-inner">
                      <p className="px-6 pb-6 pt-0 font-serif text-lg text-abyss/80 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
