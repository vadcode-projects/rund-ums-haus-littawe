import { Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { contact } from '../data';
import { Reveal } from './Motion';
import SectionHeading from './SectionHeading';

const requestTypes = ['Hausmeisterservice', 'Gartenpflege', 'Winterdienst', 'Objektpflege', 'Sonstiges'];

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: requestTypes[0],
    message: '',
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Anfrage: ${form.type} - ${form.name || 'Website'}`;
    const body = [
      'Neue Anfrage über die Website',
      '',
      `Name: ${form.name}`,
      `Telefonnummer: ${form.phone}`,
      `E-Mail: ${form.email}`,
      `Art der Anfrage: ${form.type}`,
      '',
      'Nachricht:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Vielen Dank! Ihre Anfrage wurde vorbereitet.');
  };

  return (
    <section id="anfrage" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Kontakt"
          title="Anfrage stellen."
          text="Kurz ausfüllen oder direkt per WhatsApp schreiben."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-stretch">
          <Reveal>
            <aside className="flex h-full flex-col rounded-lg bg-navy p-6 text-white shadow-soft sm:p-7">
              <h3 className="text-xl font-extrabold">{contact.company}</h3>
              <p className="mt-4 text-sm leading-7 text-white/85">
                Inhaber: {contact.owner}
                <br />
                {contact.street}
                <br />
                {contact.city}
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <a className="block font-bold text-green-light" href={`tel:${contact.phoneHref}`}>
                  Telefon & WhatsApp: {contact.phone}
                </a>
                <a className="block font-bold text-green-light" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
              <a className="btn-secondary mt-6 w-full lg:mt-auto" href={contact.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp kontaktieren
              </a>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="h-full rounded-lg bg-fog p-6 shadow-soft sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">Name</span>
                  <input className="field" name="name" value={form.name} onChange={updateField} required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">Telefonnummer</span>
                  <input className="field" name="phone" type="tel" value={form.phone} onChange={updateField} required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">E-Mail</span>
                  <input className="field" name="email" type="email" value={form.email} onChange={updateField} required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-ink">Art der Anfrage</span>
                  <select className="field" name="type" value={form.type} onChange={updateField}>
                    {requestTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-ink">Nachricht</span>
                  <textarea
                    className="field min-h-32 resize-y"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    required
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button className="btn-primary min-h-12" type="submit">
                  <Send className="h-4 w-4" />
                  Anfrage vorbereiten
                </button>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-green hover:text-green"
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {status && (
                <p className="mt-5 flex items-center gap-2 rounded-lg bg-green/10 px-4 py-3 text-sm font-bold text-green">
                  <Mail className="h-4 w-4" />
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
