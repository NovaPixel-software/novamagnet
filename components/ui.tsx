'use client';

export { BRAND_NAME, BrandBar } from './Logo';

export function Icon({ name, className = '', fill = false }: { name: string; className?: string; fill?: boolean }) {
  return (
    <span aria-hidden className={`material-symbols-outlined ${fill ? 'icon-fill' : ''} ${className}`}>
      {name}
    </span>
  );
}

export function Spinner({ className = 'h-5 w-5' }: { className?: string }) {
  return <span className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`} />;
}

export function Initials({ name, className = 'h-10 w-10' }: { name: string; className?: string }) {
  const text = name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-primary-fixed text-label-md text-primary ${className}`}>{text}</span>
  );
}
