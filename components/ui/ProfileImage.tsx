'use client'

import Image from 'next/image'
import { useProfileImage } from '@/lib/useProfileImage'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

/**
 * Profile photo that renders only when the remote Firestore flag is on.
 * Returns null when hidden, so it leaves no gap in the layout.
 * Pass sizing/shape via `className` (it fills its box with object-cover).
 */
export function ProfileImage({
  className,
  sizes = '100vw',
  priority = false,
  objectPosition = 'center',
}: {
  className?: string
  sizes?: string
  priority?: boolean
  objectPosition?: string
}) {
  const show = useProfileImage()
  if (!show) return null

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={siteConfig.profile.image}
        alt={siteConfig.name}
        fill
        sizes={sizes}
        style={{ objectPosition }}
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
