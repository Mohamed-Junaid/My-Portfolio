'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Locale, type Translations } from '@/data/translations'

type LanguageContextValue = {
  locale: Locale
  isArabic: boolean
  isRTL: boolean
  dir: 'ltr' | 'rtl'
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'cv_locale'

function applyDocumentLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  const isRTL = locale === 'ar'
  document.documentElement.lang = locale
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  if (isRTL) {
    document.documentElement.classList.add('rtl')
  } else {
    document.documentElement.classList.remove('rtl')
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage or document
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'ar' || stored === 'en') {
        setLocaleState(stored)
        applyDocumentLocale(stored)
      } else {
        // Fallback to checking document or browser language
        const docLang = document.documentElement.lang
        if (docLang === 'ar') {
          setLocaleState('ar')
          applyDocumentLocale('ar')
        }
      }
    } catch {
      // Storage unavailable / blocked
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    applyDocumentLocale(newLocale)
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch {
      // ignore
    }
  }, [])

  const toggleLocale = useCallback(() => {
    const nextLocale = locale === 'en' ? 'ar' : 'en'
    setLocale(nextLocale)
  }, [locale, setLocale])

  const isArabic = locale === 'ar'
  const isRTL = isArabic
  const dir: 'ltr' | 'rtl' = isRTL ? 'rtl' : 'ltr'
  const t = translations[locale]

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      isArabic,
      isRTL,
      dir,
      t,
      setLocale,
      toggleLocale,
    }),
    [locale, isArabic, isRTL, dir, t, setLocale, toggleLocale]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

