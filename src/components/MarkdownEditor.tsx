import CodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import type { ParseError } from '@/types/resume'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  error?: ParseError
}

export function MarkdownEditor({ value, onChange, error }: MarkdownEditorProps) {
  return (
    <div className="relative h-full overflow-hidden print:hidden">
      {error && (
        <div className="absolute top-0 right-0 left-0 z-10 flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 text-xs text-amber-700 border-b border-amber-200">
          <span>第 {error.line} 行：{error.message}</span>
        </div>
      )}
      <CodeMirror
        value={value}
        onChange={onChange}
        extensions={[markdown({ codeLanguages: languages })]}
        height="100%"
        style={{ height: '100%' }}
        basicSetup={{
          lineNumbers: true,
          foldGutter: false,
          highlightActiveLine: true,
        }}
      />
    </div>
  )
}
