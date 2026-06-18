import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, Instagram, Youtube, Twitch } from 'lucide-react';

const socialLinks = [
  { label: 'Twitch', href: 'https://twitch.tv/overtonetheory', icon: Twitch },
  { label: 'Instagram', href: 'https://www.instagram.com/overtonetheory', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@overtonetheory', icon: Youtube },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === '/';
  const prefix = isHome ? '' : '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: `${prefix}#process` },
    { label: 'Stories', href: `${prefix}#stories` },
    { label: 'Workshops', href: '/workshop-2026-06' },
    { label: 'About', href: `${prefix}#about` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-abyss/90 backdrop-blur-md py-4 shadow-lg'
            : 'bg-abyss/50 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="/" className="font-sans font-bold text-clean-white tracking-widest text-sm md:text-base hover:text-soft-violet transition-colors">
            THE OVERTONE THEORY
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-clean-white hover:text-signal-gold transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-4 border-l border-clean-white/20 pl-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-clean-white/60 hover:text-signal-gold transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <a
              href="https://calendly.com/dj-overtonetheory/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-signal-gold text-abyss font-sans font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Let's Chat
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-clean-white hover:text-signal-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-abyss z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xl font-medium text-clean-white hover:text-signal-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/dj-overtonetheory/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signal-gold text-abyss font-sans font-bold text-lg px-8 py-3 rounded-full mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Chat
          </a>
          {/* Mobile social icons */}
          <div className="flex items-center gap-6 mt-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-clean-white/60 hover:text-signal-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
