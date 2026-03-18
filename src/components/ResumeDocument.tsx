import type { ParsedResume } from '@/types/resume'

interface ResumeDocumentProps {
  resume: ParsedResume
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

function isUrl(s: string) {
  return /^https?:\/\//.test(s) || /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(s)
}

function toHref(s: string) {
  if (isEmail(s)) return `mailto:${s}`
  if (isUrl(s)) return s.startsWith('http') ? s : `https://${s}`
  return null
}

function InfoItem({ text }: { text: string }) {
  const href = toHref(text)
  if (href) {
    return <a href={href} target={isEmail(text) ? undefined : '_blank'} rel="noopener noreferrer" className="resume-contact-link">{text}</a>
  }
  return <span>{text}</span>
}

export function ResumeDocument({ resume }: ResumeDocumentProps) {
  const { meta, bodyHtml } = resume

  return (
    <div className="resume-page" id="resume-page">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="resume-name">{meta.name}</h1>
          {meta.info.length > 0 && (
            <div className="resume-contact">
              {meta.info
                .reduce<string[][]>(
                  (groups, item) => {
                    if (item === '---') {
                      groups.push([])
                    } else {
                      groups[groups.length - 1].push(item)
                    }
                    return groups
                  },
                  [[]]
                )
                .map((group, gi) => (
                  <div key={gi}>
                    {group.map((item, i) => (
                      <span key={i}>
                        {i > 0 && '  ·  '}
                        <InfoItem text={item} />
                      </span>
                    ))}
                  </div>
                ))}
            </div>
          )}
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
