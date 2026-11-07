/**
 * Central site configuration.
 * Edit personal details, links, and content here — components read from this file.
 */

export const siteConfig = {
  name: 'Mohamed Junaid',
  role: 'Flutter Mobile Application Developer',
  shortRole: 'Flutter Developer',
  location: 'Dubai, UAE',
  email: 'junaid3314@gmail.com',
  phone: '+971 56 295 1800',
  whatsapp: '919048779057', // digits only, used in wa.me link
  resumeUrl: 'https://drive.google.com/file/d/13tsMrFWYv6htvC1rzgg8cOPk5cAZvPmS/view?usp=drive_link',
  resumeDownloadName: 'Mohamed Junaid - Flutter Developer Resume.pdf',
  url: 'https://junaid3314.vercel.app',
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
    // Show the profile photo across the site (hero, navbar, footer).
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
