import { processSteps } from '../data';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="ablauf" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Ablauf"
          title="Von der ersten Anfrage zur regelmäßigen Betreuung."
          text="Ein klarer Prozess hilft, Bedarf, Umfang und Start schnell abzustimmen."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="relative flex h-full min-h-[220px] flex-col rounded-lg border border-slate-200 bg-fog p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
