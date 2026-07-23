'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Download, FolderGit2, Mail, MapPin } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { HeroPhoto } from '@/components/ui/HeroPhoto'
import { siteConfig } from '@/data/site'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* floating decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[22%] h-3 w-3 animate-float rounded-full bg-accent/50 [animation-delay:-2s]" />
        <span className="absolute bottom-[24%] left-[18%] h-2.5 w-2.5 animate-float rounded-full bg-emerald-400/50" />
      </div>

      {/* Portrait bleeding in from the right (remote-toggle controlled) */}
      <HeroPhoto />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="section relative z-10 flex flex-col items-center text-center md:items-start md:pr-[36%] md:text-left"
      >
        <motion.span
          variants={item}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </motion.span>

        <motion.p
          variants={item}
          className="mb-3 flex items-center gap-2 text-sm font-medium text-muted"
        >
          <MapPin size={15} className="text-accent" />
          {siteConfig.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="whitespace-nowrap text-[clamp(1.9rem,4.4vw,3.5rem)] font-bold leading-[1.08] tracking-tight"
        >
          Hi, I’m <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-medium text-muted sm:text-2xl"
        >
          {siteConfig.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:justify-start"
        >
          <ButtonLink
            href={siteConfig.resumeUrl}
            download
            variant="primary"
            className="w-full whitespace-nowrap sm:w-auto"
          >
            <Download size={18} />
            Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" className="w-full whitespace-nowrap sm:w-auto">
            <Mail size={18} />
            Contact Me
          </ButtonLink>
          <ButtonLink href="#projects" variant="secondary" className="w-full whitespace-nowrap sm:w-auto">
            <FolderGit2 size={18} />
            View Projects
          </ButtonLink>
        </motion.div>

        <motion.div variants={item} className="mt-10">
          <SocialLinks />
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-xs"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
