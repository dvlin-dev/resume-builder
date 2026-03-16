export interface ResumeMeta {
  name: string
  email?: string
  phone?: string
  avatar?: string
}

export interface ParsedResume {
  meta: ResumeMeta
  bodyHtml: string
}
