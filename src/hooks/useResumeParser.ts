import { useMemo, useRef } from 'react'
import { parseResume } from '@/lib/parseResume'
import type { ParsedResume, ParseError } from '@/types/resume'

export function useResumeParser(markdown: string): { resume: ParsedResume; error?: ParseError } {
  const lastGoodRef = useRef<ParsedResume | null>(null)

  return useMemo(() => {
    const { resume, error } = parseResume(markdown)

    if (!error) {
      lastGoodRef.current = resume
      return { resume }
    }

    return { resume: lastGoodRef.current ?? resume, error }
  }, [markdown])
}
