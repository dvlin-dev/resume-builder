import { useState } from 'react'
import { Header } from '@/components/Header'
import { MarkdownEditor } from '@/components/MarkdownEditor'
import { ResumePreview } from '@/components/ResumePreview'
import { useAutoSave } from '@/hooks/useAutoSave'
import { useResumeParser } from '@/hooks/useResumeParser'
import { loadMarkdown } from '@/lib/storage'
import { defaultMarkdown } from '@/constants/defaultMarkdown'

function App() {
  const [markdown, setMarkdown] = useState(() => loadMarkdown() || defaultMarkdown)
  const resume = useResumeParser(markdown)

  useAutoSave(markdown)

  return (
    <div className="flex h-full flex-col print:!block print:!h-auto">
      <Header markdown={markdown} />
      <div className="flex min-h-0 flex-1 print:!block print:!h-auto print:!min-h-0">
        <div className="w-1/2 border-r border-gray-200 print:hidden">
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="w-1/2 print:!block print:!w-full print:!h-auto">
          <ResumePreview resume={resume} />
        </div>
      </div>
    </div>
  )
}

export default App
