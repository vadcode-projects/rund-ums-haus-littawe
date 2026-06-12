import { BadgeCheck } from 'lucide-react';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';

const points = ['Hausverwaltungen', 'Wohnanlagen', 'Vermieter', 'Private Eigentümer'];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-fog py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Über uns"
              title="Lokaler Partner für gepflegte Immobilien."
              text="Rund ums Haus Littawe betreut Objekte in Osnabrück und Umgebung zuverlässig, persönlich und mit klaren Absprachen."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-3 rounded-lg bg-white p-6 shadow-card sm:grid-cols-2 sm:p-7">
              {points.map((item) => (
                <span key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-green" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
