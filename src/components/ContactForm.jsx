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
    <section id="anfrage" className="bg-fog py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Anfrage"
            title="Schreiben Sie kurz, wobei wir unterstützen können."
            text="Wir melden uns schnellstmöglich zurück und stimmen auf Wunsch einen Besichtigungstermin ab."
          />
          <div id="kontakt" className="mt-8 rounded-lg bg-navy p-6 text-white shadow-soft">
            <h3 className="text-xl font-extrabold">Kontakt</h3>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/85">
              <p>
                <strong className="text-white">{contact.company}</strong>
                <br />
                Inhaber: {contact.owner}
                <br />
                {contact.street}
                <br />
                {contact.city}
                <br />
                {contact.country}
              </p>
              <p>
                Telefon & WhatsApp:{' '}
                <a className="font-bold text-green-light" href={`tel:${contact.phoneHref}`}>
                  {contact.phone}
                </a>
                <br />
                E-Mail:{' '}
                <a className="font-bold text-green-light" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            </div>
            <a className="btn-secondary mt-6 w-full" href={contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp kontaktieren
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
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
                  className="field min-h-36 resize-y"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  required
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary flex-1" type="submit">
                <Send className="h-4 w-4" />
                Anfrage per E-Mail vorbereiten
              </button>
              <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-green hover:text-green" href={contact.whatsapp} target="_blank" rel="noreferrer">
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
    </section>
  );
}
