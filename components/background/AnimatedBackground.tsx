'use client'

/**
 * Fixed, subtle animated background: a modern dot grid over soft, slowly
 * drifting gradient glows. Purely decorative — hidden from assistive tech.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base tint */}
      <div className="absolute inset-0 bg-[rgb(var(--bg))]" />

      {/* modern dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgb(140_150_175/0.16)_1px,transparent_1.4px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />

      {/* soft gradient glows */}
      <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] animate-gradient-move rounded-full bg-accent/25 blur-[130px]" />
      <div className="absolute right-[-15%] top-[18%] h-[34rem] w-[34rem] animate-gradient-move rounded-full bg-fuchsia-500/20 blur-[130px] [animation-delay:-6s]" />
      <div className="absolute bottom-[-22%] left-[22%] h-[34rem] w-[34rem] animate-gradient-move rounded-full bg-emerald-400/12 blur-[130px] [animation-delay:-12s]" />
    </div>
  )
}
