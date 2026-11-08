'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/content'
import { useLanguage } from '@/context/LanguageContext'

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 items-center gap-4 pe-4 animate-marquee"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="glass card-hover flex shrink-0 items-center gap-2 rounded-2xl px-6 py-4"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="whitespace-nowrap font-medium">
              <bdi dir={item.includes('+') || item.includes('#') ? 'ltr' : undefined}>
                {item.includes('+') || item.includes('#') ? `\u200E${item}\u200E` : item}
              </bdi>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Certifications() {
  const { t } = useLanguage()
  const mid = Math.ceil(certifications.length / 2)
  const first = certifications.slice(0, mid)
  const second = certifications.slice(mid)

  return (
    <section id="certifications" className="scroll-mt-24 py-24">
      <div className="section">
        <SectionHeading
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
          description={t.certifications.description}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Row items={first} />
        <Row items={second} reverse />
      </div>
    </section>
  )
}
