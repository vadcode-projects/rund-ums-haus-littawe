import { contact } from '../data';
import { Reveal } from './Motion';

export default function Legal() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article id="impressum" className="rounded-lg border border-slate-200 bg-fog p-6 shadow-card sm:p-8">
            <p className="eyebrow">Impressum</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink">Angaben gemäß § 5 TMG</h2>
            <p className="mt-5 leading-7 text-slate-700">
              {contact.company}
              <br />
              Inhaber: {contact.owner}
              <br />
              {contact.street}
              <br />
              {contact.city}
              <br />
              {contact.country}
            </p>
            <p className="mt-5 leading-7 text-slate-700">
              Telefon: {contact.phone}
              <br />
              E-Mail: {contact.email}
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">Umsatzsteuer-Nr.: DE322729175</p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article id="datenschutz" className="rounded-lg border border-slate-200 bg-fog p-6 shadow-card sm:p-8">
            <p className="eyebrow">Datenschutz</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink">Hinweise zum Datenschutz</h2>
            <p className="mt-5 leading-7 text-slate-700">
              Diese Website verarbeitet personenbezogene Daten nur, wenn Sie diese über die Anfragefunktion, per E-Mail,
              Telefon oder WhatsApp freiwillig übermitteln. Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer
              Anfrage verwendet.
            </p>
            <p className="mt-5 leading-7 text-slate-700">
              Beim Klick auf WhatsApp verlassen Sie diese Website und nutzen den Dienst der WhatsApp Ireland Limited.
              Für die dortige Datenverarbeitung gelten die Datenschutzbestimmungen von WhatsApp.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
