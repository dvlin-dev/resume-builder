import type { ParsedResume } from '@/types/resume'

interface ResumeDocumentProps {
  resume: ParsedResume
}

export function ResumeDocument({ resume }: ResumeDocumentProps) {
  const { meta, bodyHtml } = resume

  const contactParts = [meta.email, meta.phone].filter(Boolean)

  return (
    <div className="resume-page" id="resume-page">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="resume-name">{meta.name}</h1>
          <div className="resume-contact">
            {contactParts.join('  ·  ')}
          </div>
        </div>
        {meta.avatar && (
          <img
            src={meta.avatar}
            alt={meta.name}
            className="resume-avatar"
          />
        )}
      </div>

      {/* Body */}
      <div
        className="resume-body"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </div>
  )
}
