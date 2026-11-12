/**
 * Central site configuration.
 * Edit personal details, links, and content here — components read from this file.
 */

export const siteConfig = {
  name: 'Mohamed Junaid',
  role: 'Mobile Application Developer (Flutter)',
  shortRole: 'Mobile Developer',
  location: 'Dubai, UAE',
  email: 'junaidkarimbil14@gmail.com',
  phone: '+971 56 295 1800',
  whatsapp: '+971 56 295 1800', // digits only, used in wa.me link
  resumeUrl: 'https://drive.google.com/file/d/1TAmw_3DRHo49aClKYkp9Rhn78pXyIZv7/view?usp=sharing',
  resumeDownloadName: 'Mohamed Junaid - Mobile Application Developer Resume.pdf',
  url: 'https://junaidkarimbil.in',
  description:
    'Specializing in high-performance Android and iOS applications with 3+ years of production experience. Passionate about clean architecture, scalable mobile solutions, AI-assisted development, and delivering seamless user experiences.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/mohamedjunaid-5a39362a2',
    instagram: 'https://www.instagram.com/junu__14',
    email: 'mailto:junaidkarimbil14@gmail.com',
    whatsapp: 'https://wa.me/971562951800',
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
