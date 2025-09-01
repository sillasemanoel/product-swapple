import { z } from 'zod'

export const formSchema = z
  .object({
    newPassword: z.string().min(8, 'Insira 8 ou mais caracteres'),
    confirmPassword: z.string().min(8, 'Insira 8 ou mais caracteres'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
