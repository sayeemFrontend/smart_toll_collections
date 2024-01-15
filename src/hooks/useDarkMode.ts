import { useCallback, useEffect, useState } from 'react'

export function useDarkMode() {
  const theme: string = 'light' || 'dark'
  const [dark, setDark] = useState(theme)

  const darkToggle = useCallback(() => {
    setDark(() => (theme === 'dark' ? 'light' : 'dark'))
  }, [theme])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])
  return [dark, darkToggle]
}
