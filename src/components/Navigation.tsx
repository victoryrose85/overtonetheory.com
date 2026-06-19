import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Menu, X, Instagram, Youtube, Twitch } from 'lucide-react';

const socialLinks = [
  { label: 'Twitch', href: 'https://twitch.tv/overtonetheory', icon: Twitch },
  { label: 'Instagram', href: 'https://www.instagram.com/overtonetheory', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@overtonetheory', icon: Youtube },
];

type NavLink =
  | { label: string; route: true; href: string }
  | { label: string; route: false; section: string };

const navLinks: NavLink[] = [
  { label: 'How It Works', route: false, section: 'process' },
  { label: 'Stories', route: false, section: 'stories' },
  { label: 'Workshops', route: true, href: '/workshop-2026-06' },
  { label: 'About', route: false, section: 'about' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    setIsMobileMenuOpen(false);
    if (location !== '/') {
      e.preventDefault();
      sessionStorage.setItem('pendingScroll', section);
      setLocation('/');
    }
  };

  const sectionLinkClass = (size: 'sm' | 'xl') =>
    `font-sans text-${size} font-medium text-clean-white hover:text-signal-gold transition-colors`;

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
          <Link href="/" className="font-sans font-bold text-clean-white tracking-widest text-sm md:text-base hover:text-soft-violet transition-colors">
            THE OVERTONE THEORY
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.route ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={sectionLinkClass('sm')}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={`#${link.section}`}
                  className={sectionLinkClass('sm')}
                  onClick={(e) => handleSectionClick(e, link.section)}
                >
                  {link.label}
                </a>
              )
            )}

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
          {navLinks.map((link) =>
            link.route ? (
              <Link
                key={link.label}
                href={link.href}
                className={sectionLinkClass('xl')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={`#${link.section}`}
                className={sectionLinkClass('xl')}
                onClick={(e) => handleSectionClick(e, link.section)}
              >
                {link.label}
              </a>
            )
          )}
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
