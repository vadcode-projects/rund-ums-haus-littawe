import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/[0.94] shadow-sm backdrop-blur-xl">
      <div className="section-shell grid h-24 grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-[104px]">
        <Logo />
        <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navItems.map(([label, href]) => (
            <a key={href} className="text-sm font-semibold text-navy transition hover:text-green" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden justify-end lg:flex">
          <a className="btn-primary min-w-40" href="#anfrage">
            Anfrage stellen
          </a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center justify-self-end rounded-lg border border-slate-200 text-navy lg:hidden"
          type="button"
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="Mobile Navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-fog hover:text-green"
                href={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a className="btn-primary mt-2 w-full" href="#anfrage" onClick={closeMenu}>
              Anfrage stellen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
