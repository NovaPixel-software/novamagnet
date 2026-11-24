import { useId } from 'react';

/**
 * The NovaMagnet mark: a horseshoe magnet holding a star (the "nova"), on an indigo tile.
 * Each copy has its own gradient id: a copy inside a hidden panel would otherwise blank the others.
 */
export const BRAND_NAME = 'NovaMagnet';
export const COMPANY_NAME = 'Nova Pixel Software';

export function LogoMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  const id = `nm-tile-${useId().replace(/:/g, '')}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={BRAND_NAME} className={`shrink-0 ${className}`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b6cf5" />
          <stop offset="1" stopColor="#2b37b8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
      <path d="M20 18v15a12 12 0 0 0 24 0V18" fill="none" stroke="#fff" strokeWidth="9" />
      <rect x="15.5" y="12" width="9" height="8" rx="1.5" fill="#ff7a6b" />
      <rect x="39.5" y="12" width="9" height="8" rx="1.5" fill="#ff7a6b" />
      <path d="M32 21.5q1.1 6.4 7.5 7.5q-6.4 1.1-7.5 7.5q-1.1-6.4-7.5-7.5q6.4-1.1 7.5-7.5z" fill="#fff" />
    </svg>
  );
}

/** The mark with the name beside it, for the top bar and the sign-in page. `size` is the mark's height in px. */
export function BrandBar({ size = 34, className = '', dark = false, alwaysName = false }: { size?: number; className?: string; dark?: boolean; alwaysName?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span
        className={`${alwaysName ? 'block' : 'hidden sm:block'} whitespace-nowrap font-display text-[19px] font-extrabold leading-none tracking-[-0.02em] ${dark ? 'text-white' : 'text-navy'}`}
      >
        Nova<span className={dark ? 'text-[#aab4ff]' : 'text-primary-container'}>Magnet</span>
      </span>
    </span>
  );
}
