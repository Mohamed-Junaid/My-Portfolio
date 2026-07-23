'use client'

import { Instagram, Linkedin, Mail } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/icons/WhatsAppIcon'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

const links = [
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, Icon: Linkedin, external: true },
  { label: 'Instagram', href: siteConfig.socials.instagram, Icon: Instagram, external: true },
  { label: 'Email', href: siteConfig.socials.email, Icon: Mail, external: false },
  { label: 'WhatsApp', href: siteConfig.socials.whatsapp, Icon: WhatsAppIcon, external: true },
]

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent hover:shadow-lg hover:shadow-accent/20"
        >
          <Icon size={19} />
        </a>
      ))}
    </div>
  )
}
