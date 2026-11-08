'use client'

import { CheckCircle2, Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/context/LanguageContext'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute start-4 sm:start-1/2 top-2 h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

        <div className="space-y-10">
          {t.experience.items.map((exp, i) => (
            <Reveal key={exp.company} delay={i} as="article">
              <div
                className={`relative flex flex-col gap-4 ps-12 sm:ps-0 sm:w-1/2 ${
                  i % 2 === 0
                    ? 'sm:ms-auto sm:ps-10'
                    : 'sm:me-auto sm:pe-10 sm:text-start'
                }`}
              >
                {/* node */}
                <span
                  className={`absolute start-4 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 rtl:translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 sm:start-auto ${
                    i % 2 === 0
                      ? 'sm:-start-10'
                      : 'sm:-end-10 sm:start-auto sm:translate-x-1/2 rtl:sm:-translate-x-1/2'
                  }`}
                >
                  <Briefcase size={15} />
                </span>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    {exp.current && (
                      <span className="chip !border-emerald-500/30 !bg-emerald-500/10 !text-emerald-500">
                        {t.experience.currentBadge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 font-medium text-accent">{exp.role}</p>
                  <p className="mt-1 text-sm text-muted">{exp.period}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
