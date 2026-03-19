export interface ResumeMeta {
  name: string
  avatar?: string
  info: string[]
}

export interface ParsedResume {
  meta: ResumeMeta
  bodyHtml: string
}

export interface ParseError {
  line: number
  message: string
}
