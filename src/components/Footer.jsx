import { contact } from '../data';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-shell grid items-start gap-10 py-14 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75">
            Objektpflege, Hausmeisterservice, Gartenpflege und Winterdienst für Osnabrück und Umgebung.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-green-light">Kontakt</h3>
          <p className="mt-4 text-sm leading-7 text-white/80">
            {contact.company}
            <br />
            {contact.street}
            <br />
            {contact.city}
            <br />
            <a className="transition hover:text-green-light" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
            <br />
            <a className="transition hover:text-green-light" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-green-light">Rechtliches</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/80">
            <a className="transition hover:text-green-light" href="#impressum">
              Impressum
            </a>
            <a className="transition hover:text-green-light" href="#datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell py-5 text-sm text-white/60">
          © {new Date().getFullYear()} Rund ums Haus Littawe. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
