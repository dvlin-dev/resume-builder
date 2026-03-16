import { useState, useCallback, useRef } from 'react'
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
  const [leftWidth, setLeftWidth] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useAutoSave(markdown)

  const onMouseDown = useCallback(() => {
    setDragging(true)

    const onMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const pct = ((e.clientX - rect.left) / rect.width) * 100
      setLeftWidth(Math.min(Math.max(pct, 20), 80))
    }

    const onMouseUp = () => {
      setDragging(false)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [])

  return (
    <div className="flex h-full flex-col print:!block print:!h-auto">
      <Header markdown={markdown} />
      <div
        ref={containerRef}
        className="relative flex min-h-0 flex-1 print:!block print:!h-auto print:!min-h-0"
        style={dragging ? { userSelect: 'none', cursor: 'col-resize' } : undefined}
      >
        <div className="overflow-hidden print:hidden" style={{ width: `${leftWidth}%` }}>
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        </div>

        <div
          onMouseDown={onMouseDown}
          className="divider-line print:hidden"
        />

        <div className="overflow-hidden print:!block print:!w-full print:!h-auto" style={{ width: `${100 - leftWidth}%` }}>
          <ResumePreview resume={resume} />
        </div>
      </div>
    </div>
  )
}

export default App
