'use client'

import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()
  const { t } = useLanguage()

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 600))

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t.backToTop.ariaLabel}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          className="glass-strong fixed bottom-6 end-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-accent shadow-lg shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
