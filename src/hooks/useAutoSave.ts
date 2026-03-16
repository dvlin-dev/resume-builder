import { useEffect, useRef } from 'react'
import { saveMarkdown } from '@/lib/storage'

export function useAutoSave(content: string, delay = 500) {
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => saveMarkdown(content), delay)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [content, delay])
}
