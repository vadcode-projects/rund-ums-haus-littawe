import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Reveal } from './Motion';

const testimonials = [
  {
    name: 'Hausverwaltung aus Osnabrück',
    text: 'Zuverlässige Ausführung, schnelle Rückmeldung und saubere Außenbereiche. Genau so sollte Objektpflege laufen.',
  },
  {
    name: 'Private Eigentümerin',
    text: 'Die Kommunikation ist unkompliziert und Termine werden eingehalten. Unser Objekt wirkt deutlich gepflegter.',
  },
  {
    name: 'Vermieter eines Mehrfamilienhauses',
    text: 'Gartenpflege, Mülltonnenservice und kleine Aufgaben vor Ort funktionieren ohne lange Abstimmung.',
  },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="scroll-mt-28 bg-fog py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Bewertungen"
          title="Kundenstimmen"
          text="Zuverlässig, schnell erreichbar und sauber in der Ausführung."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="flex h-full min-h-[220px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-card">
                <div className="flex gap-1 text-green">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-7 text-slate-700">“{item.text}”</p>
                <p className="mt-5 text-sm font-extrabold text-navy">{item.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
