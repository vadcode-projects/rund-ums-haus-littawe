export default function Logo({ compact = false, inverse = false }) {
  const assetBase = import.meta.env.BASE_URL;
  const sizeClass = compact ? 'h-12 w-[96px]' : 'h-[58px] w-[158px] sm:h-[66px] sm:w-[182px]';
  const surfaceClass = inverse
    ? 'bg-white shadow-card ring-1 ring-white/20'
    : 'bg-white/95 shadow-card ring-1 ring-slate-200';

  return (
    <a href="#startseite" className="inline-flex shrink-0 items-center" aria-label="Rund ums Haus Littawe Startseite">
      <span className={`inline-flex items-center justify-center rounded-lg p-1.5 ${surfaceClass}`}>
        <img
          src={`${assetBase}logo-littawe-cropped.png`}
          alt="Rund ums Haus Littawe"
          className={`${sizeClass} object-contain`}
          loading="eager"
        />
      </span>
    </a>
  );
}
