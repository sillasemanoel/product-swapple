import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2, 'Insira um nome válido'),
  slug: z.string().min(2, 'Insira um slug válido'),
})
