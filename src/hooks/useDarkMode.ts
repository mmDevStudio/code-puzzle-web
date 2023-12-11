'use client'

import { useEffect, useState } from 'react'

const DARK_MODE_CLASS = 'dark'

export default function useDarkMode() {
  const checkDarkMode = () =>
    document.documentElement.classList.contains(DARK_MODE_CLASS)

  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined' && checkDarkMode()
  )

  useEffect(() => {
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(checkDarkMode())
        }
      })
    })

    mutationObserver.observe(document.documentElement, { attributes: true })

    return () => {
      mutationObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (document.readyState !== 'complete') return
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDarkMode)
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode] as const
}
