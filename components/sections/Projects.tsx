'use client'

import Image from 'next/image'
import { Apple, Smartphone } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { StoreButtons } from '@/components/ui/StoreButtons'
import { projects, type Project } from '@/data/content'

const platformIcon = {
  Android: Smartphone,
  iOS: Apple,
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      {/* Feature graphic */}
      <div className={`relative aspect-[2/1] overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <Image
          src={project.image}
          alt={`${project.name} feature graphic`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* platform badges */}
        <div className="absolute right-3 top-3 flex gap-1.5">
          {project.platforms.map((p) => {
            const Icon = platformIcon[p]
            return (
              <span
                key={p}
                title={p}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white ring-1 ring-white/25 backdrop-blur"
              >
                <Icon size={15} />
              </span>
            )
          })}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-tight">{project.name}</h3>
        <p className="text-xs uppercase tracking-wider text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-2">
          <StoreButtons
            playStoreUrl={project.playStoreUrl || undefined}
            appStoreUrl={project.appStoreUrl || undefined}
          />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Apps I’ve helped bring to life"
        description="Production mobile applications shipped to the App Store and Google Play."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i % 2}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
