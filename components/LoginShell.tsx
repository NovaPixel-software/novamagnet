import LoginForm from '@/app/login/LoginForm';
import { BrandBar, COMPANY_NAME } from '@/components/Logo';

const FEATURES = [
  { icon: 'grid_view', title: 'Every template, ready', text: 'Round, square and rectangle magnets on A4, A3 or 4×6 paper.' },
  { icon: 'badge', title: 'Names and designs', text: 'Ribbons, frames and fonts on each photo, or on all at once.' },
  { icon: 'print', title: 'Print-ready files', text: 'PDF, PNG or JPEG at 600 DPI, with cut marks in the right place.' },
];

/** A small drawn sheet of round magnets for the brand panel. Decoration only. */
function SheetArt() {
  const fills = ['#ff7a6b', '#8b98ff', '#ffd27a', '#6fd3c1', '#c79bff', '#ff9fc3', '#7cc4ff', '#ffb38a', '#9ae6a0'];
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[340px] rotate-[-4deg] rounded-2xl bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="grid grid-cols-3 gap-3">
        {fills.map((c, i) => (
          <div key={i} className="relative aspect-square rounded-full" style={{ background: `radial-gradient(circle at 35% 30%, #ffffffaa, ${c} 60%)` }}>
            <span className="absolute inset-x-[18%] bottom-[14%] h-[14%] rounded-full bg-white/85" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] font-semibold text-[#7a859c]">
        <span>A4 · 9 photos</span>
        <span className="rounded-full bg-[#e6e9ff] px-2 py-0.5 text-[#3346d3]">600 DPI</span>
      </div>
    </div>
  );
}

/** The sign-in page: the brand panel on the left on large screens, the form on the right. */
export default function LoginShell({ notice }: { notice?: string }) {
  return (
    // The page is exactly one screen tall: nothing scrolls unless the screen is too small for the form itself.
    <div className="grid min-h-[100dvh] bg-white lg:h-[100dvh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:overflow-hidden">
      <aside className="relative hidden overflow-hidden bg-[#0e1a33] text-white lg:flex lg:flex-col lg:justify-between lg:p-10 xl:p-14 lg:[@media(max-height:760px)]:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '44px 44px' }}
        />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#4c5ff0] opacity-40 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-[#f05a4f] opacity-20 blur-[120px]" />

        <BrandBar dark size={38} alwaysName className="relative" />

        <div className="relative my-6 min-h-0">
          <h1 className="max-w-[560px] font-display text-[36px] font-extrabold leading-[1.12] tracking-[-0.03em] xl:text-[44px] 2xl:max-w-[640px] 2xl:text-[54px] [@media(max-height:760px)]:text-[32px]">
            Photo magnet sheets, <span className="text-[#aab4ff]">print-ready</span> in minutes.
          </h1>
          <p className="mt-4 max-w-[500px] text-[16px] leading-6 text-white/65 2xl:max-w-[580px] 2xl:text-[18px] 2xl:leading-7 [@media(max-height:760px)]:mt-3 [@media(max-height:760px)]:text-[15px]">
            Built for print shops and event stalls. Lay out the photos, add names, and print a perfect sheet every time.
          </p>
          <div className="mt-10 grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_230px] 2xl:grid-cols-[minmax(0,1fr)_290px] [@media(max-height:760px)]:mt-6">
            <ul className="space-y-5 [@media(max-height:760px)]:space-y-3">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <span className="material-symbols-outlined !text-[20px] text-[#aab4ff]">{f.icon}</span>
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold">{f.title}</span>
                    <span className="mt-0.5 block text-[14px] leading-5 text-white/65">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            {/* the drawn sheet only where there is room for it */}
            <div className="hidden xl:[@media(min-height:700px)]:block">
              <SheetArt />
            </div>
          </div>
        </div>

        <p className="relative text-[13px] text-white/50">© {new Date().getFullYear()} {COMPANY_NAME}</p>
      </aside>

      {/* the form in the middle of its side; on a phone or tablet the logo sits right above it */}
      <main className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 pb-12 pt-6 sm:px-10 lg:min-h-0 lg:overflow-y-auto lg:py-8">
        <div className="w-full max-w-[400px]">
          <div className="mb-8 lg:hidden [@media(max-height:700px)]:mb-5">
            <BrandBar size={34} alwaysName />
          </div>
          <LoginForm notice={notice} />
        </div>
        <p className="absolute inset-x-0 bottom-4 text-center text-[12px] text-outline lg:hidden">
          © {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </main>
    </div>
  );
}
