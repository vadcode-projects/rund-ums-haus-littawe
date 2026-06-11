import { BadgeCheck, MapPin } from 'lucide-react';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="ueber-uns" className="bg-fog py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="rounded-lg bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3 text-green">
              <MapPin className="h-6 w-6" />
              <span className="text-sm font-bold uppercase tracking-[0.14em]">Osnabrück und Umgebung</span>
            </div>
            <p className="mt-6 text-2xl font-extrabold leading-snug text-navy">
              Ihr zuverlässiger Partner für die Betreuung und Pflege von Immobilien.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-slate-700">
              {['Hausverwaltungen', 'Eigentümergemeinschaften', 'Wohnungsbaugesellschaften', 'Private Vermieter'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-green" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Über uns"
            title="Persönliche Objektbetreuung mit lokalem Anspruch."
            text="Rund ums Haus Littawe unterstützt Hausverwaltungen, Eigentümergemeinschaften, Wohnungsbaugesellschaften und private Vermieter bei der laufenden Pflege ihrer Objekte in Osnabrück und Umgebung."
          />
          <p className="mt-6 text-base leading-8 text-slate-600">
            Wir bieten zuverlässige Ausführung, feste Ansprechpartner und individuelle Betreuung, von einzelnen
            Mehrfamilienhäusern bis hin zu größeren Wohnanlagen. Gerne besichtigen wir Ihr Objekt unverbindlich und
            erstellen ein passendes Angebot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
