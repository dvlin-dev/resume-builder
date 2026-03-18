import fm from 'front-matter'
import { Marked, type Token, type Tokens } from 'marked'
import type { ParsedResume, ResumeMeta } from '@/types/resume'

const marked = new Marked({
  renderer: {
    heading(this: { parser: { parseInline: (tokens: Token[]) => string } }, token: Tokens.Heading) {
      const text = this.parser.parseInline(token.tokens)
      if (token.depth === 2) {
        return `
          <div class="resume-section-title">${text}</div>
          <div class="resume-divider"></div>
        `
      }
      if (token.depth === 3) {
        const parts = text.split('|').map((s) => s.trim())
        const left = parts[0] || ''
        const right = parts[1] || ''
        return `
          <div class="resume-entry-header">
            <span class="resume-entry-left">${left}</span>
            <span class="resume-entry-right">${right}</span>
          </div>
        `
      }
      return `<h${token.depth}>${text}</h${token.depth}>`
    },
    list(this: { parser: { parse: (tokens: Token[]) => string } }, token: Tokens.List) {
      let body = ''
      for (const item of token.items) {
        body += `<li>${this.parser.parse(item.tokens)}</li>`
      }
      return `<ul class="resume-list">${body}</ul>`
    },
    paragraph(this: { parser: { parseInline: (tokens: Token[]) => string } }, token: Tokens.Paragraph) {
      const text = this.parser.parseInline(token.tokens)
      return `<p class="resume-paragraph">${text}</p>`
    },
  },
})

export function parseResume(raw: string): ParsedResume {
  const { attributes, body } = fm<Record<string, unknown>>(raw)

  const rawInfo = attributes.info
  const info = Array.isArray(rawInfo)
    ? rawInfo.map(String)
    : []

  const meta: ResumeMeta = {
    name: String(attributes.name || ''),
    avatar: attributes.avatar ? String(attributes.avatar) : undefined,
    info,
  }

  const bodyHtml = marked.parse(body) as string

  return { meta, bodyHtml }
}
