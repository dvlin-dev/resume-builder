import { useMemo } from 'react'
import { parseResume } from '@/lib/parseResume'

export function useResumeParser(markdown: string) {
  return useMemo(() => parseResume(markdown), [markdown])
}
