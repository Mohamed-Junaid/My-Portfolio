'use client'

import { forwardRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Ripple = { id: number; x: number; y: number }

type BaseProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const styles: Record<NonNullable<BaseProps['variant']>, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110',
  secondary:
    'glass text-[rgb(var(--fg))] hover:border-accent/40 hover:text-accent',
  ghost: 'text-muted hover:text-accent',
}

function useRipples() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const add = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now() + Math.floor(Math.random() * 1000)
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ])
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 600)
  }
  return { ripples, add }
}

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.97]'

function RippleLayer({ ripples }: { ripples: Ripple[] }) {
  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-[ripple_0.6s_ease-out] rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
        />
      ))}
      <style>{`@keyframes ripple{to{transform:translate(-50%,-50%) scale(28);opacity:0}}`}</style>
    </>
  )
}

export const Button = forwardRef<
  HTMLButtonElement,
  BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ children, variant = 'primary', className, onClick, ...props }, ref) {
  const { ripples, add } = useRipples()
  return (
    <button
      ref={ref}
      className={cn(base, styles[variant], className)}
      onClick={(e) => {
        add(e)
        onClick?.(e)
      }}
      {...props}
    >
      <RippleLayer ripples={ripples} />
      {children}
    </button>
  )
})

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function ButtonLink({ children, variant = 'primary', className, onClick, ...props }, ref) {
  const { ripples, add } = useRipples()
  return (
    <a
      ref={ref}
      className={cn(base, styles[variant], className)}
      onClick={(e) => {
        add(e)
        onClick?.(e)
      }}
      {...props}
    >
      <RippleLayer ripples={ripples} />
      {children}
    </a>
  )
})
