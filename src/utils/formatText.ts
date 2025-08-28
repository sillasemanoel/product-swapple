// Ex: "Granja Poente" -> "GP" | "João da Silva" -> "JS" | "ACME" -> "A"
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

// Ex: "silLas emAnoel" -> "Sillas Emanoel" | "mAria cLara de soUza" -> "Maria Clara De Souza"
export function normalizePersonName(name: string) {
  const trimmed = name.trim()
  if (!trimmed) return ''
  const capitalizeWord = (w: string) =>
    w.charAt(0).toLocaleUpperCase('pt-BR') +
    w.slice(1).toLocaleLowerCase('pt-BR')
  return trimmed.replace(/\s+/g, ' ').split(' ').map(capitalizeWord).join(' ')
}

// Ex: "  Foo  Bar @Example.COM \n" -> "foobar@example.com"
export function normalizeEmail(email: string) {
  return email.trim().toLowerCase().replace(/\s+/g, '')
}
