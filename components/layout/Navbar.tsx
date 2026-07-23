'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'
import { useProfileImage } from '@/lib/useProfileImage'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const showAvatar = useProfileImage()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-content items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6',
          scrolled ? 'glass-strong shadow-lg shadow-black/5' : 'bg-transparent'
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 text-base font-bold tracking-tight"
        >
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
          <span className="whitespace-nowrap">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:brightness-110 md:inline-flex"
          >
            Let’s talk
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 shadow-xl md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-accent px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Let’s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
