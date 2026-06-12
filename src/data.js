import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Home,
  Leaf,
  Mail,
  MessageCircle,
  Phone,
  Recycle,
  Scissors,
  ShieldCheck,
  Shovel,
  Snowflake,
  Sparkles,
  Sprout,
  Trash2,
  Trees,
  UserRoundCheck,
  Wrench,
} from 'lucide-react';

export const contact = {
  company: 'Rund ums Haus Littawe',
  owner: 'Kevin Littawe',
  street: 'Bramscher Str. 161',
  city: '49090 Osnabrück',
  country: 'Deutschland',
  phone: '01523 9603175',
  phoneHref: '+4915239603175',
  email: 'kontakt@rundumshaus-littawe.de',
  whatsapp: 'https://wa.me/4915239603175',
};

export const navItems = [
  ['Startseite', '#startseite'],
  ['Leistungen', '#leistungen'],
  ['Über uns', '#ueber-uns'],
  ['Bewertungen', '#bewertungen'],
  ['Kontakt', '#anfrage'],
];

export const benefits = [
  {
    title: 'Zuverlässige Ausführung',
    text: 'Regelmäßige Pflege mit Blick fürs Detail und klare Absprachen.',
    icon: ShieldCheck,
  },
  {
    title: 'Feste Ansprechpartner',
    text: 'Direkte Kommunikation mit kurzen Wegen und persönlicher Betreuung.',
    icon: UserRoundCheck,
  },
  {
    title: 'Individuelle Betreuung',
    text: 'Leistungen passend zum Objekt, zur Saison und zum tatsächlichen Bedarf.',
    icon: Building2,
  },
  {
    title: 'Schnelle Kommunikation',
    text: 'Anfragen, Termine und Rückfragen unkompliziert per Telefon, E-Mail oder WhatsApp.',
    icon: MessageCircle,
  },
];

export const services = [
  {
    title: 'Regelmäßige Objektpflege',
    text: 'Laufende Pflege von Eingängen, Wegen, Außenflächen und Gemeinschaftsbereichen.',
    icon: CalendarCheck,
  },
  {
    title: 'Hausmeisterservice',
    text: 'Praktische Unterstützung rund um Gebäude, Kontrolle und kleine Aufgaben vor Ort.',
    icon: Wrench,
  },
  {
    title: 'Garten- und Grünanlagenpflege',
    text: 'Gepflegte Außenanlagen für Wohnanlagen, Vermieter und Eigentümer.',
    icon: Trees,
  },
  {
    title: 'Rasen mähen und Rasenkanten schneiden',
    text: 'Saubere Rasenflächen und präzise Kanten für ein ordentliches Gesamtbild.',
    icon: Scissors,
  },
  {
    title: 'Hecken- und Strauchschnitt',
    text: 'Saisonale Schnittarbeiten für strukturierte, gepflegte Grünflächen.',
    icon: Leaf,
  },
  {
    title: 'Unkrautentfernung',
    text: 'Gründliche Entfernung auf Wegen, Beeten und befestigten Flächen.',
    icon: Sprout,
  },
  {
    title: 'Beetpflege',
    text: 'Pflege von Beeten, Pflanzenbereichen und repräsentativen Außenflächen.',
    icon: Sparkles,
  },
  {
    title: 'Laubentfernung',
    text: 'Sichere und saubere Wege, Zufahrten und Grünflächen in der Laubsaison.',
    icon: Recycle,
  },
  {
    title: 'Mülltonnenservice',
    text: 'Bereitstellen, Zurückstellen und Ordnung rund um Mülltonnenplätze.',
    icon: Trash2,
  },
  {
    title: 'Winterdienst',
    text: 'Räumen und Streuen für bessere Sicherheit in der kalten Jahreszeit.',
    icon: Snowflake,
  },
  {
    title: 'Dachrinnenreinigung',
    text: 'Entfernung von Laub und Schmutz zur Unterstützung eines freien Wasserablaufs.',
    icon: Home,
  },
];

export const processSteps = [
  ['Anfrage senden', 'Sie beschreiben kurz Objekt, Bedarf und gewünschte Leistungen.'],
  ['Objekt besichtigen', 'Vor Ort werden Umfang, Besonderheiten und Rhythmus geklärt.'],
  ['Angebot erhalten', 'Sie bekommen ein verständliches Angebot ohne unnötige Umwege.'],
  ['Regelmäßige Betreuung starten', 'Nach Abstimmung beginnt die zuverlässige Pflege Ihrer Immobilie.'],
];

export const contactLinks = [
  { label: contact.phone, href: `tel:${contact.phoneHref}`, icon: Phone },
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: 'WhatsApp schreiben', href: contact.whatsapp, icon: MessageCircle },
  { label: 'Qualitätsorientierte Objektpflege', href: '#leistungen', icon: BadgeCheck },
];
