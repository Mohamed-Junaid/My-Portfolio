'use client'

import {
  Bot,
  Boxes,
  Code2,
  Database,
  Flame,
  Globe,
  Languages,
  Layers,
  Rocket,
  Server,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { skills } from '@/data/content'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Workflow,
  Server,
  Flame,
  Wrench,
  Rocket,
  Sparkles,
  Bot,
  Boxes,
  Database,
  Globe,
  Languages,
}

export function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with every day"
        description="A focused toolkit for shipping fast, reliable, and beautiful mobile apps."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Sparkles
          return (
            <Reveal key={group.category} delay={i % 4} as="article">
              <div className="glass card-hover group h-full rounded-3xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
