'use client'

import { CheckCircle2, Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { experiences } from '@/data/content'

export function Experience() {
  return (
    <section id="experience" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I’ve made an impact"
        description="From internship to shipping production apps for clients worldwide."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i} as="article">
              <div
                className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? 'sm:ml-auto sm:pl-10'
                    : 'sm:mr-auto sm:pr-10 sm:text-right'
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-4 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 sm:left-auto ${
                    i % 2 === 0 ? 'sm:-left-10' : 'sm:-right-10 sm:left-auto sm:translate-x-1/2'
                  }`}
                >
                  <Briefcase size={15} />
                </span>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    {exp.current && (
                      <span className="chip !border-emerald-500/30 !bg-emerald-500/10 !text-emerald-500">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 font-medium text-accent">{exp.role}</p>
                  <p className="mt-1 text-sm text-muted">{exp.period}</p>

                  <ul
                    className={`mt-4 space-y-2 ${
                      i % 2 !== 0 ? 'sm:text-left' : ''
                    }`}
                  >
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
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
