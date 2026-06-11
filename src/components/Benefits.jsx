import SectionHeading from './SectionHeading';
import { benefits } from '../data';
import { Reveal } from './Motion';

export default function Benefits() {
  return (
    <section className="bg-fog py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Ihre Vorteile"
          title="Klare Abläufe, saubere Ergebnisse und direkte Kommunikation."
          text="Rund ums Haus Littawe verbindet praktische Objektbetreuung mit persönlicher Erreichbarkeit."
          align="center"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <article className="card-hover flex h-full min-h-[220px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-green/10 text-green">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
