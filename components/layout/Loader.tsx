'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100)
    // Fail-safe: never trap the user behind the loader.
    const fallback = setTimeout(() => setDone(true), 3000)
    return () => {
      clearTimeout(t)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(var(--bg))]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex h-16 w-16 items-center justify-center"
            >
              <span className="absolute inset-0 animate-spin rounded-full border-2 border-accent/20 border-t-accent" />
              <span className="text-lg font-bold gradient-text">MJ</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs uppercase tracking-[0.3em] text-muted"
            >
              Loading
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
