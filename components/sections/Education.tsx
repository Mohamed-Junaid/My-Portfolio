'use client'

import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        description={t.education.description}
      />

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute start-5 top-2 h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

        <div className="space-y-6">
          {t.education.items.map((item, i) => (
            <Reveal key={item.degree} delay={i} as="article">
              <div className="relative ps-14">
                <span className="absolute start-5 top-3 flex h-10 w-10 -translate-x-1/2 rtl:translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
                  <GraduationCap size={18} />
                </span>
                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    {item.note && (
                      <span
                        className={cn(
                          'chip',
                          item.current
                            ? '!border-accent/30 !bg-accent/10 !text-accent'
                            : '!border-emerald-500/30 !bg-emerald-500/10 !text-emerald-400'
                        )}
                      >
                        {item.note}
                      </span>
                    )}
                  </div>
                  {item.institution && (
                    <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
