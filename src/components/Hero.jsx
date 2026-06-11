import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { contact } from '../data';

export default function Hero() {
  return (
    <section id="startseite" className="relative overflow-hidden bg-navy pt-24 text-white lg:pt-[104px]">
      <img
        src="/hero-objektpflege.png"
        alt="Gepflegte Wohnanlage mit Grünflächen"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.54]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/80 to-navy/30" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-fog to-transparent" />
      <div className="section-shell relative grid min-h-[calc(86vh-6rem)] items-center gap-10 py-12 sm:py-14 lg:min-h-[calc(84vh-6.5rem)] lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.68fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.12] px-4 py-2 text-sm font-semibold backdrop-blur">
            <CheckCircle2 className="h-4 w-4 text-green-light" />
            Lokal in Osnabrück und Umgebung
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Objektpflege & Hausmeisterservice in Osnabrück und Umgebung
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Zuverlässige Betreuung für Hausverwaltungen, Vermieter, Wohnanlagen und private Eigentümer.
          </p>
          <div className="mt-9 grid gap-3 sm:flex sm:flex-row sm:items-center">
            <a className="btn-primary min-h-12 sm:min-w-[240px]" href="#anfrage">
              Kostenlose Anfrage stellen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a className="btn-secondary min-h-12 sm:min-w-[224px]" href={contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp kontaktieren
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="hidden w-full max-w-[420px] justify-self-end rounded-lg border border-white/20 bg-white/[0.13] p-6 shadow-soft backdrop-blur-md lg:block"
        >
          <div className="max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-green-light">Direkt anfragen</p>
            <p className="mt-3 text-2xl font-extrabold">Pflege, Ordnung und Verlässlichkeit aus einer Hand.</p>
            <p className="mt-4 leading-7 text-white/80">
              Für einzelne Mehrfamilienhäuser, größere Wohnanlagen und Außenflächen mit regelmäßigem Betreuungsbedarf.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
