interface HeaderProps {
  markdown: string
}

export function Header({ markdown }: HeaderProps) {
  function exportMarkdown() {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  function exportPDF() {
    window.print()
  }

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 print:hidden">
      <div className="flex items-center gap-2.5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-600">
          <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M7 10l3 2.5L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-lg font-semibold text-gray-900">Resume Builder</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={exportMarkdown}
          className="rounded-lg border border-gray-300 px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          导出 Markdown
        </button>
        <button
          onClick={exportPDF}
          className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          导出 PDF
        </button>
      </div>
    </header>
  )
}
