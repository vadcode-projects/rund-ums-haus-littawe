import { ArrowRight } from 'lucide-react';
import { services } from '../data';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Leistungen"
          title="Objektpflege und Außenanlagenbetreuung für Immobilien in Osnabrück."
          text="Alle Leistungen können einzeln, saisonal oder als regelmäßige Betreuung vereinbart werden."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.05}>
                <article className="card-hover h-full min-h-[164px] rounded-lg border border-slate-200 bg-fog/70 p-6">
                  <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-navy shadow-card">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-14">
          <div className="grid items-center gap-6 overflow-hidden rounded-lg bg-navy p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green-light">Unverbindlich starten</p>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Suchen Sie einen zuverlässigen Dienstleister für Ihre Immobilie?
              </h3>
            </div>
            <a className="btn-primary min-h-12 shrink-0 lg:min-w-[250px]" href="#anfrage">
              Jetzt unverbindlich anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
