export type Locale = 'en' | 'ar'

export type Translations = {
  nav: {
    about: string
    skills: string
    experience: string
    projects: string
    education: string
    contact: string
    letsTalk: string
  }
  langToggle: {
    current: string
    target: string
    targetShort: string
    ariaLabel: string
  }
  hero: {
    availableBadge: string
    greetingPrefix: string
    name: string
    role: string
    location: string
    description: string
    downloadResume: string
    contactMe: string
    viewProjects: string
    scrollAria: string
  }
  about: {
    eyebrow: string
    title: string
    headline: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
    stats: { value: number; suffix: string; label: string }[]
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    categories: Record<string, string>
    itemTranslations: Record<string, string>
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    currentBadge: string
    items: {
      company: string
      role: string
      period: string
      current?: boolean
      highlights: string[]
    }[]
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    storeButtons: {
      getItOn: string
      downloadOn: string
      googlePlay: string
      appStore: string
      comingSoon: string
    }
    items: {
      name: string
      tagline: string
      description: string
    }[]
  }
  education: {
    eyebrow: string
    title: string
    description: string
    items: {
      degree: string
      institution?: string
      note?: string
      current?: boolean
    }[]
  }
  certifications: {
    eyebrow: string
    title: string
    description: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    getInTouch: string
    getInTouchSub: string
    labels: {
      email: string
      phone: string
      whatsapp: string
      linkedin: string
      instagram: string
      location: string
    }
    values: {
      whatsappChat: string
      linkedinConnect: string
      locationVal: string
    }
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
      sentSuccess: string
    }
  }
  footer: {
    tagline: string
    rights: string
  }
  loader: {
    loading: string
  }
  backToTop: {
    ariaLabel: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      letsTalk: 'Let’s talk',
    },
    langToggle: {
      current: 'English',
      target: 'العربية',
      targetShort: 'عربي',
      ariaLabel: 'Switch language to Arabic',
    },
    hero: {
      availableBadge: 'Available for new opportunities',
      greetingPrefix: 'Hi, I’m',
      name: 'Mohamed Junaid',
      role: 'Flutter Mobile Application Developer',
      location: 'Dubai, UAE',
      description:
        'Flutter Developer with 3+ years of experience building high-performance Android and iOS applications. Passionate about clean architecture, scalable mobile solutions, AI-assisted development, and delivering excellent user experiences.',
      downloadResume: 'Download Resume',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
      scrollAria: 'Scroll to about section',
    },
    about: {
      eyebrow: 'About Me',
      title: 'A developer who sweats the details',
      headline: 'Building polished mobile experiences that feel effortless.',
      paragraphs: [
        'I’m a Flutter developer based in Dubai, UAE, with 3+ years of experience shipping high-performance Android and iOS applications to production.',
        'I care deeply about clean, well-structured code, thoughtful UI/UX, and scalable solutions — and I lean heavily into AI-assisted development with tools like Cursor, Claude, GitHub Copilot, Codex, Kiro and Antigravity to move fast without sacrificing quality.',
      ],
      facts: [
        { label: 'Role', value: 'Flutter Developer' },
        { label: 'Location', value: 'Dubai, UAE' },
        { label: 'Experience', value: '3+ Years' },
        { label: 'Currently', value: 'MCA — Manipal University Jaipur' },
      ],
      stats: [
        { value: 3, suffix: '+', label: 'Years Experience' },
        { value: 7, suffix: '+', label: 'Apps Shipped' },
        { value: 2, suffix: '', label: 'Platforms (iOS & Android)' },
        { value: 100, suffix: '%', label: 'Client Focused' },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools I build with every day',
      description:
        'A focused toolkit for shipping fast, reliable, and beautiful mobile apps.',
      categories: {
        'Languages': 'Languages',
        'Frameworks & UI': 'Frameworks & UI',
        'State Management': 'State Management',
        'Architecture': 'Architecture',
        'Networking & APIs': 'Networking & APIs',
        'Local Storage': 'Local Storage',
        'Firebase': 'Firebase',
        'Localization': 'Localization',
        'AI-Assisted Development': 'AI-Assisted Development',
        'Development Tools': 'Development Tools',
        'Publishing': 'Publishing',
        'Other': 'Other',
      },
      itemTranslations: {
        'Layered Structure': 'Layered Structure',
        'Feature-based Organization': 'Feature-based Organization',
        'Separation of Concerns': 'Separation of Concerns',
        'Data / Repository Layer': 'Data / Repository Layer',
        'Reusable Widgets': 'Reusable Widgets',
        'Authentication': 'Authentication',
        'Firestore': 'Firestore',
        'Push Notifications (FCM)': 'Push Notifications (FCM)',
        'Crashlytics': 'Crashlytics',
        'Analytics': 'Analytics',
        'Remote Config': 'Remote Config',
        'Internationalization (i18n)': 'Internationalization (i18n)',
        'RTL Support': 'RTL Support',
        'Arabic & English': 'Arabic & English',
        'Google Play Console': 'Google Play Console',
        'App Store Connect': 'App Store Connect',
        'Android & iOS Deployment': 'Android & iOS Deployment',
        'Responsive & Adaptive UI': 'Responsive & Adaptive UI',
        'Performance Optimization': 'Performance Optimization',
        'Animations': 'Animations',
        'OneSignal Notifications': 'OneSignal Notifications',
        'Deep Linking': 'Deep Linking',
      },
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Where I’ve made an impact',
      description:
        'From internship to shipping production apps for clients worldwide.',
      currentBadge: 'Current',
      items: [
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
      ],
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'Apps I’ve helped bring to life',
      description:
        'Production mobile applications shipped to the App Store and Google Play.',
      storeButtons: {
        getItOn: 'GET IT ON',
        downloadOn: 'Download on',
        googlePlay: 'Google Play',
        appStore: 'App Store',
        comingSoon: 'Coming soon',
      },
      items: [
        {
          name: 'MRO Cars',
          tagline: 'Vehicle services & spare parts',
          description:
            'Get offers for spare parts, garage services, tyres, and winch services. Compare quotes, chat with businesses, and track vehicle orders in one app.',
        },
        {
          name: 'Approach',
          tagline: 'Multi-service marketplace',
          description:
            'Multi-service marketplace connecting influencers, reporters, businesses and service providers.',
        },
        {
          name: 'Darzi Tailor',
          tagline: 'Tailoring workflow platform',
          description:
            'Operational platform for tailoring workflow and order management.',
        },
        {
          name: 'Your Billboard',
          tagline: 'GCC classifieds marketplace',
          description:
            'Marketplace app for GCC countries allowing users to buy, sell and promote listings.',
        },
        {
          name: 'TimTimi',
          tagline: 'Kids toys e-commerce',
          description:
            'Kuwait-based e-commerce application for kids’ toys and parenting essentials.',
        },
        {
          name: 'Rubyx Play',
          tagline: 'STEM toys e-commerce',
          description:
            'Kuwait-based e-commerce app for educational and STEM toys — science, craft, engineering and discovery kits for kids.',
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      description: 'A commerce foundation evolving into computer applications.',
      items: [
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
      ],
    },
    certifications: {
      eyebrow: 'Certifications & Technologies',
      title: 'The stack behind the work',
      description:
        'Technologies and tools I work with to ship great mobile products.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something great',
      description:
        'Have a project in mind or just want to say hi? My inbox is always open.',
      getInTouch: 'Get in touch',
      getInTouchSub:
        'Reach out through any of these channels — I usually reply within a day.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        location: 'Location',
      },
      values: {
        whatsappChat: 'Chat on WhatsApp',
        linkedinConnect: 'Connect with me',
        locationVal: 'Dubai, UAE',
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'What’s this about?',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message',
        sentSuccess: 'Message ready!',
      },
    },
    footer: {
      tagline: 'Flutter Mobile Application Developer — crafting fast, beautiful mobile experiences.',
      rights: 'All rights reserved.',
    },
    loader: {
      loading: 'Loading',
    },
    backToTop: {
      ariaLabel: 'Back to top',
    },
  },
  ar: {
    nav: {
      about: 'من أنا',
      skills: 'المهارات',
      experience: 'الخبرات',
      projects: 'المشاريع',
      education: 'التعليم',
      contact: 'تواصل معي',
      letsTalk: 'تواصل معي',
    },
    langToggle: {
      current: 'العربية',
      target: 'English',
      targetShort: 'EN',
      ariaLabel: 'التبديل إلى اللغة الإنجليزية',
    },
    hero: {
      availableBadge: 'متاح لفرص عمل جديدة ومشاريع',
      greetingPrefix: 'مرحباً، أنا',
      name: 'محمد جنيد',
      role: 'مطور تطبيقات فلاتر للهواتف المحمولة',
      location: 'دبي، الإمارات العربية المتحدة',
      description:
        'مطور تطبيقات فلاتر بخبرة تزيد عن 3 سنوات في بناء تطبيقات أندرويد و iOS عالية الأداء. شغوف بالهندسة المعمارية النظيفة، الحلول البرمجية القابلة للتوسع، التطوير المدعوم بالذكاء الاصطناعي، وتقديم تجارب مستخدم استثنائية.',
      downloadResume: 'تحميل السيرة الذاتية',
      contactMe: 'تواصل معي',
      viewProjects: 'عرض المشاريع',
      scrollAria: 'الانتقال إلى قسم نبذة عني',
    },
    about: {
      eyebrow: 'نبذة عني',
      title: 'مطور يهتم بأدق التفاصيل والنتائج',
      headline: 'بناء تجارب استثنائية ومتقنة للهواتف تبدو سلسة وبسيطة.',
      paragraphs: [
        'أنا مطور فلاتر مقيم في دبي، الإمارات العربية المتحدة، ولدي خبرة تتجاوز 3 سنوات في تطوير وإطلاق تطبيقات أندرويد و iOS عالية الأداء على أرض الواقع.',
        'أولي اهتماماً كبيراً بكتابة كود نظيف ومنظم، وتصميم واجهات وتجارب مستخدم مدروسة، وبناء حلول برمجية قابلة للنمو والتوسع — كما أعتمد بقوة على أدوات التطوير المدعومة بالذكاء الاصطناعي مثل Cursor و Claude و GitHub Copilot و Codex و Kiro و Antigravity للإنجاز السريع بأعلى معايير الجودة.',
      ],
      facts: [
        { label: 'المسمى الوظيفي', value: 'مطور تطبيقات فلاتر' },
        { label: 'الموقع', value: 'دبي، الإمارات' },
        { label: 'الخبرة', value: '+3 سنوات' },
        { label: 'حالياً', value: 'ماجستير تطبيقات الحاسوب (MCA) — جامعة مانيبال جايبور' },
      ],
      stats: [
        { value: 3, suffix: '+', label: 'سنوات خبرة' },
        { value: 7, suffix: '+', label: 'تطبيقات منشورة' },
        { value: 2, suffix: '', label: 'منصات (iOS وأندرويد)' },
        { value: 100, suffix: '%', label: 'تركيز على رضا العميل' },
      ],
    },
    skills: {
      eyebrow: 'المهارات والقدرات',
      title: 'الأدوات والتقنيات التي أستخدمها يومياً',
      description:
        'مجموعة أدوات متكاملة لإطلاق تطبيقات هواتف سريعة، موثوقة وعالية الجودة.',
      categories: {
        'Languages': 'لغات البرمجة',
        'Frameworks & UI': 'أطر العمل وواجهات المستخدم',
        'State Management': 'إدارة الحالة',
        'Architecture': 'الهندسة المعمارية البرمجية',
        'Networking & APIs': 'الشبكات والواجهات البرمجية',
        'Local Storage': 'التخزين المحلي',
        'Firebase': 'فايربيس (Firebase)',
        'Localization': 'التعريب والتدويل',
        'AI-Assisted Development': 'التطوير بالذكاء الاصطناعي',
        'Development Tools': 'أدوات وبيئات التطوير',
        'Publishing': 'النشر على المتاجر',
        'Other': 'مهارات إضافية',
      },
      itemTranslations: {
        'Layered Structure': 'هيكل متعدد الطبقات',
        'Feature-based Organization': 'تنظيم حسب الميزات',
        'Separation of Concerns': 'فصل المسؤوليات البرمجية',
        'Data / Repository Layer': 'طبقة البيانات والمستودعات',
        'Reusable Widgets': 'مكونات قابلة لإعادة الاستخدام',
        'Authentication': 'المصادقة وإدارة المستخدمين',
        'Firestore': 'قاعدة بيانات Firestore',
        'Push Notifications (FCM)': 'الإشعارات اللحظية (FCM)',
        'Crashlytics': 'تتبع الأعطال (Crashlytics)',
        'Analytics': 'التحليلات والإحصائيات',
        'Remote Config': 'التكوين الديناميكي عن بُعد',
        'Internationalization (i18n)': 'تدويل التطبيقات (i18n)',
        'RTL Support': 'دعم اتجاه اليمين لليسار (RTL)',
        'Arabic & English': 'اللغتان العربية والإنجليزية',
        'Google Play Console': 'منصة Google Play Console',
        'App Store Connect': 'منصة App Store Connect',
        'Android & iOS Deployment': 'نشر وتوزيع تطبيقات Android و iOS',
        'Responsive & Adaptive UI': 'واجهات متجاوبة ومتكيفة',
        'Performance Optimization': 'تحسين الأداء والسرعة',
        'Animations': 'المؤثرات والرسوم الحركية',
        'OneSignal Notifications': 'إشعارات OneSignal',
        'Deep Linking': 'الروابط المباشرة (Deep Linking)',
      },
    },
    experience: {
      eyebrow: 'الخبرات المهنية',
      title: 'محطات تركت فيها بصمة وأثراً',
      description:
        'من فترة التدريب العملي إلى تسليم وإطلاق تطبيقات إنتاجية لعملاء حول العالم.',
      currentBadge: 'حالي',
      items: [
        {
          company: 'Emstell Technology Consulting',
          role: 'مطور تطبيقات فلاتر',
          period: 'يناير 2024 – حتى الآن',
          current: true,
          highlights: [
            'تطوير تطبيقات أندرويد و iOS متكاملة وجاهزة للإنتاج الفعلي',
            'تحسين الأداء ورفع كفاءة وسرعة استجابة التطبيقات',
            'ربط وتكامل واجهات برمجة التطبيقات (REST APIs)',
            'دمج خدمات فايربيس (Crashlytics، التحليلات، التكوين عن بُعد، الإشعارات)',
            'تسليم المشاريع للعملاء واعتماد بنية برمجية قابلة للنمو والتوسع',
            'التعاون الفعّال مع الفرق البرمجية والتصميمية متعددة التخصصات',
          ],
        },
        {
          company: 'Rootsys International',
          role: 'متدرب مطور فلاتر',
          period: 'أكتوبر 2023 – يناير 2024',
          highlights: [
            'تطوير 3 تطبيقات هواتف محمولة بتقنية فلاتر',
            'بناء وتطوير واجهات المستخدم التفاعلية',
            'ربط وتكامل واجهات REST APIs',
            'إدارة الحالة ومزامنة البيانات في التطبيق',
            'اكتشاف وتصحيح الأخطاء البرمجية (Debugging)',
            'تحسين الأداء العام للتطبيقات',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'أبرز المشاريع',
      title: 'تطبيقات ساهمت في إطلاقها بنجاح',
      description:
        'تطبيقات هواتف حقيقية تم نشرها على متجري App Store و Google Play.',
      storeButtons: {
        getItOn: 'متوفر على',
        downloadOn: 'تنزيل من',
        googlePlay: 'Google Play',
        appStore: 'App Store',
        comingSoon: 'قريباً',
      },
      items: [
        {
          name: 'MRO Cars',
          tagline: 'خدمات المركبات وقطع الغيار',
          description:
            'احصل على عروض أسعار لقطع الغيار، خدمات الكراجات، الإطارات، وخدمات ونش الإنقاذ. قارن عروض الأسعار، تواصل مباشرة مع الورش، وتتبع طلبات مركبتك في تطبيق موحد.',
        },
        {
          name: 'Approach',
          tagline: 'منصة وسوق الخدمات المتعددة',
          description:
            'سوق خدمات متكامل يربط بين المؤثرين والإعلاميين والشركات ومزودي الخدمات في بيئة تفاعلية منظمة.',
        },
        {
          name: 'Darzi Tailor',
          tagline: 'منصة إدارة سير عمل الخياطة',
          description:
            'منصة تشغيلية ذكية لإدارة عمليات ورش الخياطة، متابعة المقاسات والطلبات وتنسيق المواعيد بكفاءة.',
        },
        {
          name: 'Your Billboard',
          tagline: 'سوق الإعلانات المبوبة في الخليج',
          description:
            'تطبيق سوق تجاري لدول مجلس التعاون الخليجي يتيح للمستخدمين البيع والشراء والترويج لإعلاناتهم بسهولة وأمان.',
        },
        {
          name: 'TimTimi',
          tagline: 'متجر إلكتروني لألعاب الأطفال',
          description:
            'تطبيق تجارة إلكترونية كويتي رائد متخصص في ألعاب الأطفال، الهدايا، ومستلزمات رعاية وتربية الصغار.',
        },
        {
          name: 'Rubyx Play',
          tagline: 'متجر ألعاب STEM التعليمية',
          description:
            'تطبيق تجارة إلكترونية كويتي لألعاب STEM والتعليم التفاعلي — حقائب العلوم، الحرف اليدوية، الهندسة والاستكشاف للأطفال.',
        },
      ],
    },
    education: {
      eyebrow: 'التعليم والمؤهلات',
      title: 'الخلفية الأكاديمية',
      description: 'أساس متين في العلوم التجارية تطور نحو التخصص في تطبيقات وعلوم الحاسوب.',
      items: [
        {
          degree: 'ماجستير في تطبيقات الحاسوب (MCA)',
          institution: 'جامعة مانيبال جايبور',
          note: 'قيد الدراسة حالياً',
          current: true,
        },
        {
          degree: 'دبلوم دراسات عليا في نظم إدارة المعلومات (PGDIMS)',
        },
        {
          degree: 'بكالوريوس التجارة (B.Com)',
        },
      ],
    },
    certifications: {
      eyebrow: 'الشهادات والتقنيات',
      title: 'التقنيات التي تقف خلف المشاريع',
      description:
        'التقنيات والأدوات الأساسية التي أعتمد عليها لتقديم منتجات رقمية استثنائية.',
    },
    contact: {
      eyebrow: 'تواصل معي',
      title: 'فلنبنِ معاً شيئاً رائعاً',
      description:
        'هل لديك فكرة مشروع أو ترغب في التعاون البرمجي؟ يسعدني دائماً تواصلك والرد على استفسارك.',
      getInTouch: 'ابقَ على تواصل',
      getInTouchSub:
        'تواصل معي عبر أي من هذه القنوات — أرد عادةً خلال 24 ساعة.',
      labels: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        linkedin: 'لينكد إن',
        instagram: 'إنستغرام',
        location: 'الموقع',
      },
      values: {
        whatsappChat: 'محادثة عبر واتساب',
        linkedinConnect: 'تواصل عبر LinkedIn',
        locationVal: 'دبي، الإمارات العربية المتحدة',
      },
      form: {
        name: 'الاسم',
        namePlaceholder: 'اسمك الكريم',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'you@email.com',
        subject: 'الموضوع',
        subjectPlaceholder: 'ما هو موضوع رسالتك؟',
        message: 'الرسالة',
        messagePlaceholder: 'حدثني عن تفاصيل مشروعك أو استفسارك...',
        submit: 'إرسال الرسالة',
        sentSuccess: 'تم تجهيز الرسالة!',
      },
    },
    footer: {
      tagline: 'مطور تطبيقات فلاتر للهواتف المحمولة — أصنع تجارب رقمية مميزة وسريعة.',
      rights: 'جميع الحقوق محفوظة.',
    },
    loader: {
      loading: 'جاري التحميل',
    },
    backToTop: {
      ariaLabel: 'العودة للأعلى',
    },
  },
}

