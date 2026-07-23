'use client'

import { cn } from '@/lib/utils'

/** Google Play brand glyph (inline SVG — Lucide has no brand marks). */
function GooglePlayIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3 13.4 12 3.6 21.7c-.35-.2-.6-.6-.6-1.1V3.4c0-.5.25-.9.6-1.1z" fill="#00D3FF" />
      <path d="M16.9 8.5 13.4 12l3.5 3.5 3.6-2.1c.9-.5.9-1.8 0-2.3l-3.6-2.6z" fill="#FFCE00" />
      <path d="M3.6 2.3c.3-.17.68-.2 1.05.02L16.9 8.5 13.4 12 3.6 2.3z" fill="#00F076" />
      <path d="M3.6 21.7 13.4 12l3.5 3.5-11.25 6.18c-.37.22-.75.19-1.05.02z" fill="#FF3A44" />
    </svg>
  )
}

/** Apple logo glyph. */
function AppleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.15-2.8.85-3.5.85-.7 0-1.8-.83-3-.8-1.55.02-2.98.9-3.77 2.28-1.6 2.8-.4 6.94 1.15 9.2.76 1.1 1.66 2.35 2.85 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2-1.12 2.76-2.23.87-1.27 1.22-2.5 1.24-2.56-.03-.01-2.38-.92-2.4-3.6zM14.2 5.6c.63-.77 1.06-1.83.94-2.9-.9.04-2 .6-2.65 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.03-.5 2.67-1.27z" />
    </svg>
  )
}

type Props = {
  playStoreUrl?: string
  appStoreUrl?: string
}

function StoreLink({
  href,
  label,
  children,
}: {
  href?: string
  label: string
  children: React.ReactNode
}) {
  const enabled = Boolean(href)
  const base =
    'flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-300'

  if (!enabled) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={cn(
          base,
          'cursor-not-allowed border border-black/5 bg-black/5 text-muted opacity-50 dark:border-white/5 dark:bg-white/5'
        )}
      >
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        base,
        'glass hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent/15'
      )}
    >
      {children}
    </a>
  )
}

export function StoreButtons({ playStoreUrl, appStoreUrl }: Props) {
  return (
    <div className="flex gap-2">
      <StoreLink href={playStoreUrl} label="Get it on Google Play">
        <GooglePlayIcon />
        <span className="flex flex-col items-start leading-none">
          <span className="text-[9px] font-normal text-muted">GET IT ON</span>
          <span>Google Play</span>
        </span>
      </StoreLink>
      <StoreLink href={appStoreUrl} label="Download on the App Store">
        <AppleIcon />
        <span className="flex flex-col items-start leading-none">
          <span className="text-[9px] font-normal text-muted">Download on</span>
          <span>App Store</span>
        </span>
      </StoreLink>
    </div>
  )
}
