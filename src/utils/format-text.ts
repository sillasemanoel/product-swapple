export function getInitials(text: string, max: number) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((w) => w[0] || '')
    .join('')
    .toUpperCase()
}

export function normalizeName(name: string) {
  const trimmed = name.trim()

  if (!trimmed) return ''

  const LOWER = new Set(['de', 'do', 'da', 'dos', 'das', 'e'])
  const capitalize = (w: string) =>
    w.charAt(0).toLocaleUpperCase('pt-BR') +
    w.slice(1).toLocaleLowerCase('pt-BR')

  return trimmed
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((word, i) => {
      const lower = word.toLocaleLowerCase('pt-BR')
      if (LOWER.has(lower) && i !== 0) return lower
      return capitalize(word)
    })
    .join(' ')
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase().replace(/\s+/g, '')
}

export function normalizeSlug(value: string) {
  if (!value) return ''
  const slug = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug
}
