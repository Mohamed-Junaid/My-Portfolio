'use client'

import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-14 max-w-2xl text-center'
          : 'mb-14 max-w-2xl'
      }
    >
      <Reveal>
        <span className="chip mb-4 uppercase tracking-widest">{eyebrow}</span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
