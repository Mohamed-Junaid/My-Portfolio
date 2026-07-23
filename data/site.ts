/**
 * Central site configuration.
 * Edit personal details, links, and content here — components read from this file.
 */

export const siteConfig = {
  name: 'Mohamed Junaid',
  role: 'Flutter Mobile Application Developer',
  shortRole: 'Flutter Developer',
  location: 'Kerala, India',
  email: 'junaid3314@gmail.com',
  phone: '+91 90487 79057',
  whatsapp: '919048779057', // digits only, used in wa.me link
  resumeUrl: '/resume.pdf',
  url: 'https://mohamedjunaid.dev',
  description:
    'Flutter Developer with 3+ years of experience building high-performance Android and iOS applications. Passionate about clean architecture, scalable mobile solutions, AI-assisted development, and delivering excellent user experiences.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mohamedjunaid-5a39362a2',
    instagram: 'https://www.instagram.com/junu__14',
    email: 'mailto:junaid3314@gmail.com',
    whatsapp: 'https://wa.me/919048779057',
  },
  profile: {
    // Drop your photo at public/profile.png (or change this path).
    image: '/profile.png',
    // Fallback shown when the remote Firestore flag can't be read
    // (e.g. env vars not set yet). Currently visible by default; the
    // Firestore `showProfileImage` flag overrides this once wired up.
    defaultVisible: true,
  },
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const
