/**
 * Portfolio content — skills, experience, projects, education, certifications.
 * Update store URLs and project images here.
 */

export type SkillGroup = {
  category: string
  icon: string // lucide icon name
  items: string[]
}

export const about = {
  headline: 'Building polished mobile experiences that feel effortless.',
  paragraphs: [
    'I’m a Flutter developer based in Kerala, India, with 3+ years of experience shipping high-performance Android and iOS applications to production.',
    'I care deeply about clean, well-structured code, thoughtful UI/UX, and scalable solutions — and I lean heavily into AI-assisted development with tools like Cursor, Claude, GitHub Copilot, Codex, Kiro and Antigravity to move fast without sacrificing quality.',
  ],
  facts: [
    { label: 'Role', value: 'Flutter Developer' },
    { label: 'Location', value: 'Kerala, India' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Currently', value: 'MCA — Manipal University Jaipur' },
  ],
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 7, suffix: '+', label: 'Apps Shipped' },
  { value: 2, suffix: '', label: 'Platforms (iOS & Android)' },
  { value: 100, suffix: '%', label: 'Client Focused' },
]

export const skills: SkillGroup[] = [
  { category: 'Languages', icon: 'Code2', items: ['Dart'] },
  {
    category: 'Frameworks & UI',
    icon: 'Layers',
    items: ['Flutter', 'Material Design', 'Cupertino'],
  },
  {
    category: 'State Management',
    icon: 'Workflow',
    items: ['BLoC', 'Provider'],
  },
  {
    category: 'Architecture',
    icon: 'Boxes',
    items: [
      'Layered Structure',
      'Feature-based Organization',
      'Separation of Concerns',
      'Data / Repository Layer',
      'Reusable Widgets',
    ],
  },
  {
    category: 'Networking & APIs',
    icon: 'Globe',
    items: ['REST APIs', 'Dio', 'HTTP', 'JSON Serialization'],
  },
  {
    category: 'Local Storage',
    icon: 'Database',
    items: ['SharedPreferences', 'Hive', 'SQLite'],
  },
  {
    category: 'Firebase',
    icon: 'Flame',
    items: [
      'Authentication',
      'Firestore',
      'Push Notifications (FCM)',
      'Crashlytics',
      'Analytics',
      'Remote Config',
    ],
  },
  {
    category: 'Localization',
    icon: 'Languages',
    items: ['Internationalization (i18n)', 'RTL Support', 'Arabic & English'],
  },
  {
    category: 'AI-Assisted Development',
    icon: 'Bot',
    items: [
      'Cursor',
      'Claude',
      'GitHub Copilot',
      'ChatGPT',
      'Codex',
      'Kiro',
      'Antigravity',
    ],
  },
  {
    category: 'Development Tools',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman', 'Figma'],
  },
  {
    category: 'Publishing',
    icon: 'Rocket',
    items: [
      'Google Play Console',
      'App Store Connect',
      'Android & iOS Deployment',
    ],
  },
  {
    category: 'Other',
    icon: 'Sparkles',
    items: [
      'Responsive & Adaptive UI',
      'Performance Optimization',
      'Animations',
      'OneSignal Notifications',
      'Deep Linking',
    ],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Emstell Technology Consulting',
    role: 'Flutter Developer',
    period: 'Jan 2024 – Present',
    current: true,
    highlights: [
      'Developed production-ready Android and iOS apps',
      'Performance optimization',
      'API integrations',
      'Firebase (Crashlytics, Analytics, Remote Config, Push)',
      'Client delivery & scalable architecture',
      'Cross-functional collaboration',
    ],
  },
  {
    company: 'Rootsys International',
    role: 'Flutter Developer Intern',
    period: 'Oct 2023 – Jan 2024',
    highlights: [
      'Developed 3 Flutter mobile applications',
      'UI development',
      'REST API integration',
      'State management',
      'Debugging',
      'Performance optimization',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  image: string
  logo?: string
  tech: string[]
  platforms: ('Android' | 'iOS')[]
  playStoreUrl?: string
  appStoreUrl?: string
  accent: string // tailwind gradient classes
}

export const projects: Project[] = [
  {
    name: 'Approach',
    tagline: 'Multi-service marketplace',
    description:
      'Multi-service marketplace connecting influencers, reporters, businesses and service providers.',
    image: '/projects/approach.jpg',
    tech: [
      'Flutter',
      'Provider',
      'REST API',
      'Firebase',
      'Crashlytics',
      'Analytics',
      'Remote Config',
      'OneSignal',
    ],
    platforms: ['Android', 'iOS'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.emstell.approach',
    appStoreUrl:
      'https://apps.apple.com/us/app/approach-%D8%A7%D8%A8%D8%B1%D9%88%DA%86/id6745253849',
    accent: 'from-sky-500/20 to-blue-600/20',
  },
  {
    name: 'Darzi Tailor',
    tagline: 'Tailoring workflow platform',
    description:
      'Operational platform for tailoring workflow and order management.',
    image: '/projects/darzi.jpg',
    tech: ['Flutter', 'BLoC', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.darzi.darziTailor',
    appStoreUrl: 'https://apps.apple.com/in/app/darzi-tailor/id6483362337',
    accent: 'from-violet-500/20 to-fuchsia-600/20',
  },
  {
    name: 'Your Billboard',
    tagline: 'GCC classifieds marketplace',
    description:
      'Marketplace app for GCC countries allowing users to buy, sell and promote listings.',
    image: '/projects/billboard.jpg',
    tech: ['Flutter', 'REST APIs', 'Firebase', 'Facebook SDK', 'TikTok SDK'],
    platforms: ['Android', 'iOS'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.ems.your_billboard',
    appStoreUrl: 'https://apps.apple.com/us/app/your-billboard/id6752612105',
    accent: 'from-emerald-500/20 to-teal-600/20',
  },
  {
    name: 'TimTimi',
    tagline: 'Kids toys e-commerce',
    description:
      'Kuwait-based e-commerce application for kids’ toys and parenting essentials.',
    image: '/projects/timtimi.jpg',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.timTimi.app',
    appStoreUrl: 'https://apps.apple.com/in/app/timtimi/id6723896613',
    accent: 'from-amber-500/20 to-orange-600/20',
  },
  {
    name: 'Rubyx Play',
    tagline: 'STEM toys e-commerce',
    description:
      'Kuwait-based e-commerce app for educational and STEM toys — science, craft, engineering and discovery kits for kids.',
    image: '/projects/rubyx.jpg',
    tech: ['Flutter', 'Firebase', 'REST APIs'],
    platforms: ['Android', 'iOS'],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.ems.rubyxPlay',
    appStoreUrl:
      'https://apps.apple.com/us/app/rubyx-play-play-learn/id6761515858',
    accent: 'from-blue-500/20 to-cyan-600/20',
  },
]

export type EducationItem = {
  degree: string
  institution?: string
  note?: string
  current?: boolean
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Manipal University Jaipur',
    note: 'Currently Pursuing',
    current: true,
  },
  {
    degree: 'PG Diploma in Information Management Systems (PGDIMS)',
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
  },
]

export const certifications = [
  'Flutter',
  'Firebase',
  'Git',
  'GitHub',
  'Android',
  'Apple',
  'REST API',
  'BLoC',
  'Provider',
  'Cursor',
  'Claude',
  'GitHub Copilot',
  'ChatGPT',
  'Codex',
  'Kiro',
  'Antigravity',
]
