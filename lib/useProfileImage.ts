'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/data/site'

/**
 * Remote on/off flag for the profile photo, backed by a single Firestore
 * document — toggled from the Firebase console, no redeploy needed.
 *
 * It reads the doc via Firestore's REST API with a plain fetch (no Firebase
 * SDK in the bundle). Expected document: `site/config` with a boolean field
 * `showProfileImage`.
 *
 * Requires two public env vars (safe to expose — Firebase web keys are not
 * secrets), in `.env.local`:
 *   NEXT_PUBLIC_FIREBASE_PROJECT_ID
 *   NEXT_PUBLIC_FIREBASE_API_KEY
 *
 * If they're missing or the fetch fails, it falls back to
 * `siteConfig.profile.defaultVisible`.
 */
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY

export function useProfileImage(): boolean {
  const [show, setShow] = useState<boolean>(siteConfig.profile.defaultVisible)

  useEffect(() => {
    if (!PROJECT_ID || !API_KEY) return // not wired up yet — keep the default

    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/site/config?key=${API_KEY}`

    let cancelled = false
    fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data) return
        const value = data?.fields?.showProfileImage?.booleanValue
        if (typeof value === 'boolean') setShow(value)
      })
      .catch(() => {
        /* network/permission error — keep whatever default we have */
      })

    return () => {
      cancelled = true
    }
  }, [])

  return show
}
