'use client'

import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { education } from '@/data/content'

export function Education() {
  return (
    <section id="education" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="A commerce foundation evolving into computer applications."
      />

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

        <div className="space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i} as="article">
              <div className="relative pl-14">
                <span className="absolute left-5 top-3 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
                  <GraduationCap size={18} />
                </span>
                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    {item.current && (
                      <span className="chip !border-accent/30 !bg-accent/10 !text-accent">
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
