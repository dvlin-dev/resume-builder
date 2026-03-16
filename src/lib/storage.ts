const STORAGE_KEY = 'resume-builder-markdown'

export function loadMarkdown(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function saveMarkdown(content: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, content)
  } catch {
    // localStorage might be full or unavailable
  }
}
