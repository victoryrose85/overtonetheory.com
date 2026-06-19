import { ReactNode } from 'react';
import { Link } from 'wouter';

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const btnClass = (extra: string) => `
  inline-flex items-center justify-center
  bg-signal-gold text-abyss font-sans font-bold
  px-8 py-4 rounded-full
  hover:brightness-110 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]
  transition-all duration-300 transform hover:-translate-y-1
  ${extra}
`.trim();

export function CtaButton({ href, children, className = '', onClick, external = false }: CtaButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass(className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={btnClass(className)}>
      {children}
    </Link>
  );
}
