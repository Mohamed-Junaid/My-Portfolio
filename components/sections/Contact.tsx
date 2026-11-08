'use client'

import { useState, type FormEvent } from 'react'
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { WhatsAppIcon } from '@/components/ui/icons/WhatsAppIcon'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'
import { useLanguage } from '@/context/LanguageContext'

type Detail = {
  Icon: ComponentType<{ size?: string | number; className?: string }>
  label: string
  value: string
  href: string
  external?: boolean
  dir?: 'ltr'
}

const fieldClass =
  'w-full rounded-xl border border-black/10 bg-white/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/5'

export function Contact() {
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

  const details: Detail[] = [
    {
      Icon: Mail,
      label: t.contact.labels.email,
      value: siteConfig.email,
      href: siteConfig.socials.email,
      dir: 'ltr',
    },
    {
      Icon: Phone,
      label: t.contact.labels.phone,
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
      dir: 'ltr',
    },
    {
      Icon: WhatsAppIcon,
      label: t.contact.labels.whatsapp,
      value: t.contact.values.whatsappChat,
      href: siteConfig.socials.whatsapp,
      external: true,
    },
    {
      Icon: Linkedin,
      label: t.contact.labels.linkedin,
      value: t.contact.values.linkedinConnect,
      href: siteConfig.socials.linkedin,
      external: true,
    },
    {
      Icon: Instagram,
      label: t.contact.labels.instagram,
      value: '@junu__14',
      href: siteConfig.socials.instagram,
      external: true,
      dir: 'ltr',
    },
    {
      Icon: MapPin,
      label: t.contact.labels.location,
      value: t.contact.values.locationVal,
      href: '#',
    },
  ]

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')

    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    // Open the user's mail client pre-filled — no backend required.
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 4000)
    form.reset()
  }

  return (
    <section id="contact" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Details */}
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col gap-3 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold">{t.contact.getInTouch}</h3>
            <p className="text-sm text-muted">
              {t.contact.getInTouchSub}
            </p>
            <div className="mt-3 space-y-3">
              {details.map(({ Icon, label, value, href, external, dir }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-accent/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="block truncate font-medium">
                      <bdi
                        dir={dir}
                        style={
                          dir === 'ltr'
                            ? { direction: 'ltr', unicodeBidi: 'isolate' }
                            : undefined
                        }
                      >
                        {dir === 'ltr' ? `\u200E${value}\u200E` : value}
                      </bdi>
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass flex h-full flex-col gap-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={t.contact.form.namePlaceholder}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.subject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder={t.contact.form.subjectPlaceholder}
                className={fieldClass}
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                className={`${fieldClass} min-h-[120px] flex-1 resize-y`}
              />
            </div>

            <Button type="submit" className="mt-2 w-full sm:w-auto sm:self-start">
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> {t.contact.form.sentSuccess}
                </>
              ) : (
                <>
                  <Send size={18} /> {t.contact.form.submit}
                </>
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
