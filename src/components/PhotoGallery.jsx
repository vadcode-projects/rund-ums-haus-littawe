import SectionHeading from './SectionHeading';
import { Reveal } from './Motion';

const photos = [
  {
    src: 'photo-property.jpg',
    title: 'Gepflegte Immobilien',
    text: 'Außenbereiche, Eingänge und Wohnanlagen mit einem ordentlichen Gesamtbild.',
  },
  {
    src: 'photo-garden.jpg',
    title: 'Grünanlagenpflege',
    text: 'Rasenflächen, Beete und Wege werden regelmäßig sauber gehalten.',
  },
  {
    src: 'hero-real.jpg',
    title: 'Objektbetreuung',
    text: 'Zuverlässige Pflege für Eigentümer, Vermieter und Hausverwaltungen.',
  },
];

export default function PhotoGallery() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Einblicke"
          title="Reale Eindrücke für gepflegte Häuser und Außenanlagen."
          text="Saubere Grundstücke, gepflegte Grünflächen und ein hochwertiger erster Eindruck."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.05}>
              <article className="card-hover h-full overflow-hidden rounded-lg border border-slate-200 bg-fog shadow-card">
                <img
                  src={`${assetBase}${photo.src}`}
                  alt={photo.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-ink">{photo.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{photo.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
