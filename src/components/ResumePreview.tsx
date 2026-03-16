import { ResumeDocument } from './ResumeDocument'
import type { ParsedResume } from '@/types/resume'

interface ResumePreviewProps {
  resume: ParsedResume
}

export function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <div className="flex h-full items-start justify-center overflow-auto bg-gray-100 p-8 print:!block print:!h-auto print:!overflow-visible print:bg-white print:p-0">
      <ResumeDocument resume={resume} />
    </div>
  )
}
