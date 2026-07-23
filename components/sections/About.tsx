'use client'

import {
  Briefcase,
  GraduationCap,
  MapPin,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'
import { about, stats } from '@/data/content'

const factIcons: Record<string, LucideIcon> = {
  Role: UserRound,
  Location: MapPin,
  Experience: Briefcase,
  Currently: GraduationCap,
}

export function About() {
  return (
    <section id="about" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="A developer who sweats the details"
        description={about.headline}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Story card */}
        <Reveal className="lg:col-span-3">
          <div className="glass card-hover h-full rounded-3xl p-8 sm:p-10">
            <div className="space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-black/5 pt-8 dark:border-white/5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold gradient-text sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Facts */}
        <Reveal delay={1} className="lg:col-span-2">
          <div className="grid h-full gap-4">
            {about.facts.map((fact) => {
              const Icon = factIcons[fact.label] ?? UserRound
              return (
                <div
                  key={fact.label}
                  className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted">
                      {fact.label}
                    </div>
                    <div className="font-semibold">{fact.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
