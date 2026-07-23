'use client'

import Image from 'next/image'
import { Heart } from 'lucide-react'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { useProfileImage } from '@/lib/useProfileImage'
import { navLinks, siteConfig } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  const showAvatar = useProfileImage()

  return (
    <footer className="section scroll-mt-24 pb-10 pt-16">
      <div className="glass-strong rounded-3xl p-8 sm:p-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#home" className="flex items-center justify-center gap-2.5 md:justify-start">
              {showAvatar && (
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30">
                  <Image
                    src={siteConfig.profile.image}
                    alt={siteConfig.name}
                    fill
                    quality={95}
                    sizes="72px"
                    className="object-cover object-[center_15%]"
                  />
                </span>
              )}
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted">
              {siteConfig.role} — crafting fast, beautiful mobile experiences.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-black/5 pt-8 dark:border-white/5 md:flex-row md:justify-between">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            © {year} {siteConfig.name}. Built with
            <Heart size={14} className="fill-accent text-accent" />
            using Next.js.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
