import { siteConfig } from '@/data/site'

/**
 * Whether to display the profile photo across the site (hero, navbar, footer).
 * Static flag read from site config — flip `profile.defaultVisible` in
 * data/site.ts to show/hide the photo everywhere.
 */
export function useProfileImage(): boolean {
  return siteConfig.profile.defaultVisible
}
