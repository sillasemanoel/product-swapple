import { z } from 'zod'

export const formSchema = z.object({
  email: z.string().email('Insira um endereço de e-mail válido'),
})
