'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/content'

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-4 pr-4 animate-marquee"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="glass card-hover flex shrink-0 items-center gap-2 rounded-2xl px-6 py-4"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="whitespace-nowrap font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Certifications() {
  const mid = Math.ceil(certifications.length / 2)
  const first = certifications.slice(0, mid)
  const second = certifications.slice(mid)

  return (
    <section id="certifications" className="scroll-mt-24 py-24">
      <div className="section">
        <SectionHeading
          eyebrow="Certifications & Technologies"
          title="The stack behind the work"
          description="Technologies and tools I work with to ship great mobile products."
        />
      </div>

      <div className="flex flex-col gap-4">
        <Row items={first} />
        <Row items={second} reverse />
      </div>
    </section>
  )
}
