'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

type LanguageToggleProps = {
  className?: string
  showIcon?: boolean
}

export function LanguageToggle({
  className,
  showIcon = true,
}: LanguageToggleProps) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        'glass inline-flex items-center gap-0.5 rounded-full p-1 shadow-sm transition-colors',
        className
      )}
    >
      {showIcon && (
        <span className="ps-1.5 pe-1 text-muted" aria-hidden="true">
          <Globe size={14} className="opacity-75" />
        </span>
      )}

      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="Switch to English"
        className={cn(
          'relative rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200',
          locale === 'en'
            ? 'bg-accent text-white shadow-sm shadow-accent/25'
            : 'text-muted hover:text-[rgb(var(--fg))]'
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale('ar')}
        aria-pressed={locale === 'ar'}
        aria-label="التبديل إلى العربية"
        className={cn(
          'relative rounded-full px-2.5 py-1 font-arabic text-xs font-semibold transition-all duration-200',
          locale === 'ar'
            ? 'bg-accent text-white shadow-sm shadow-accent/25'
            : 'text-muted hover:text-[rgb(var(--fg))]'
        )}
      >
        <span className="hidden sm:inline">العربية</span>
        <span className="sm:hidden">عربي</span>
      </button>
    </div>
  )
}

