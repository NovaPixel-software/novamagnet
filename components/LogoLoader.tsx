import { LogoMark } from './Logo';

/**
 * The loader: the NovaMagnet mark with a ring turning round it.
 * No hooks, so server pages and `loading.tsx` files can use it. `onDark` is for a dark background (white text).
 */
export default function LogoLoader({
  size = 72,
  label = 'Loading…',
  onDark = false,
  className = '',
}: {
  size?: number;
  label?: string;
  onDark?: boolean;
  className?: string;
}) {
  const ring = Math.max(3, Math.round(size / 24));
  const gap = ring * 2.5;
  return (
    <div role="status" aria-live="polite" className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <span className={`absolute inset-0 rounded-full border-solid ${onDark ? 'border-white/20' : 'border-primary-fixed'}`} style={{ borderWidth: ring }} />
        <span
          className="absolute inset-0 animate-spin rounded-full border-solid border-transparent border-t-primary-container motion-reduce:animate-none"
          style={{ borderWidth: ring, animationDuration: '0.9s' }}
        />
        <span className="absolute grid place-items-center" style={{ inset: gap }}>
          <LogoMark size={size - gap * 2} />
        </span>
      </div>
      <p className={`text-label-lg ${onDark ? 'text-white' : 'text-secondary'}`}>{label}</p>
    </div>
  );
}
