'use client'

import Image from 'next/image'
import { useProfileImage } from '@/lib/useProfileImage'
import { siteConfig } from '@/data/site'

/**
 * Hero portrait: a moderately-sized figure on the right that dissolves into
 * whatever is behind it. The radial `mask-image` fades the photo to fully
 * TRANSPARENT well before the box edge, so the real (animated, gradient)
 * page background shows through — no flat-colour overlay that could mismatch
 * the background and read as a rectangle. Hidden on narrow screens;
 * visibility follows the remote flag.
 */
// Big fully-opaque core keeps the face/torso crisp; only the outer ring
// (hair, shoulders, studio backdrop) feathers out to transparent.
const FEATHER_MASK =
  'radial-gradient(ellipse 54% 62% at 53% 40%, #000 46%, rgba(0,0,0,0.55) 66%, transparent 84%)'

export function HeroPhoto() {
  const show = useProfileImage()
  if (!show) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[3%] top-1/2 z-0 hidden h-[80%] w-[42%] max-w-[560px] -translate-y-1/2 md:block"
    >
      {/* soft violet glow behind the figure */}
      <div className="absolute bottom-[6%] right-[2%] h-[60%] w-[68%] rounded-full bg-[#6d28d9]/20 blur-[130px]" />

      <Image
        src={siteConfig.profile.image}
        alt=""
        fill
        priority
        quality={95}
        sizes="(max-width: 768px) 0px, 42vw"
        className="object-cover object-[center_12%]"
        style={{ maskImage: FEATHER_MASK, WebkitMaskImage: FEATHER_MASK }}
      />
    </div>
  )
}
