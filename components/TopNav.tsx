'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import ProfileMenu from './ProfileMenu';
import { BrandBar, Icon } from './ui';

interface Props {
  user: { name: string; email: string };
}

export default function TopNav({ user }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await api.logout().catch(() => {});
    router.replace('/login');
    router.refresh();
  };

  const onEvents = pathname === '/events' || (pathname.startsWith('/events/') && pathname !== '/events/new');

  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1360px] items-center gap-3 px-gutter-mobile md:h-16 md:gap-6 md:px-margin">
        <Link href="/events" className="shrink-0" aria-label="NovaMagnet home">
          <BrandBar size={32} />
        </Link>

        <span aria-hidden className="hidden h-6 w-px bg-outline-variant md:block" />

        <nav className="flex items-center gap-1">
          <Link
            href="/events"
            aria-current={onEvents ? 'page' : undefined}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-label-lg transition-colors ${onEvents ? 'bg-primary-fixed text-primary' : 'text-secondary hover:bg-surface-container-low hover:text-on-surface'}`}
          >
            <Icon name="event" className="!text-[18px]" fill={onEvents} /> My Events
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ProfileMenu
            name={user.name}
            email={user.email}
            items={[
              { label: 'Settings', icon: 'settings', href: '/settings' },
              { label: 'Log out', icon: 'logout', onClick: logout, danger: true },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
