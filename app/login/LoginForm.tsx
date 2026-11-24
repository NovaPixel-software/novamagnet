'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ApiError, api } from '@/lib/api';
import SupportLink, { withSupportLink } from '@/components/SupportLink';
import { Icon, Spinner } from '@/components/ui';

const field =
  'h-12 w-full rounded-xl border bg-white pl-11 pr-4 text-[15px] text-on-surface outline-none transition placeholder:text-outline/70 focus:border-primary-container focus:ring-4 focus:ring-primary-container/15';

export default function LoginForm({ notice }: { notice?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<{ code?: string; message: string } | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    if (!email.trim() || !password) {
      setError({ code: 'MISSING', message: 'Enter your email and password.' });
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const { redirectTo } = await api.login(email.trim(), password);
      router.replace(redirectTo);
      router.refresh();
    } catch (err) {
      if (err instanceof ApiError) setError({ code: err.code, message: err.message });
      else setError({ message: 'Cannot reach the server. Check your connection and try again.' });
      setBusy(false);
    }
  };

  // An inactive or expired account is not a typing mistake, so it gets a calmer amber box instead of red.
  const inactive = error?.code === 'INACTIVE' || error?.code === 'EXPIRED';
  const border = error && !inactive ? 'border-error/60 bg-error-container/20' : 'border-outline-variant hover:border-outline';

  return (
    <form onSubmit={submit} noValidate className="w-full max-w-[400px]">
      <h1 className="font-display text-[30px] font-extrabold tracking-[-0.025em] text-navy">Sign in</h1>
      <p className="mt-2 text-[15px] text-secondary">Welcome back. Sign in with the account your admin gave you.</p>

      <div className="mt-8 space-y-4">
        {notice && !error && (
          <div role="status" className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-body-lg text-amber-900">
            <Icon name="schedule" className="mt-px !text-[18px]" fill />
            <span>{notice}</span>
          </div>
        )}

        {error && (
          <div
            key={error.message}
            role="alert"
            className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-body-lg ${inactive ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-error/25 bg-error-container/40 text-on-error-container'}`}
          >
            <Icon name={error.code === 'EXPIRED' ? 'event_busy' : inactive ? 'block' : 'error'} className="mt-px !text-[18px]" fill />
            <span>{withSupportLink(error.message)}</span>
          </div>
        )}

        <div>
          <label htmlFor="email" className="mb-1.5 block text-label-lg text-on-surface">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              autoComplete="username"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={`${field} ${border}`}
            />
            <Icon name="mail" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 !text-[20px] text-outline" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-label-lg text-on-surface">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={show ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className={`${field} ${border} !pr-12`}
            />
            <Icon name="lock" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 !text-[20px] text-outline" />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? 'Hide password' : 'Show password'}
              className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-outline hover:bg-surface-container-low hover:text-on-surface"
            >
              <Icon name={show ? 'visibility_off' : 'visibility'} className="!text-[20px]" />
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-container text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(76,95,240,0.28)] transition hover:bg-primary active:scale-[0.99] disabled:cursor-progress disabled:opacity-80"
      >
        {busy ? (
          <>
            <Spinner className="h-5 w-5" /> Signing in…
          </>
        ) : (
          <>
            Sign in <Icon name="arrow_forward" className="!text-[20px]" />
          </>
        )}
      </button>

      <div className="mt-8 rounded-xl bg-surface-container-low px-4 py-3.5 text-body-lg text-secondary">
        <span className="flex items-start gap-2.5">
          <Icon name="support_agent" className="mt-px !text-[20px] text-primary" />
          <span>
            Forgot your password or need an account? Write to <SupportLink />
          </span>
        </span>
      </div>
    </form>
  );
}
