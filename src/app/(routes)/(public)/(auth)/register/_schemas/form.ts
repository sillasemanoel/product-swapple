import { z } from 'zod'

export const formSchema = z
  .object({
    firstName: z.string().min(2, 'Insira um nome válido'),
    lastName: z.string().min(2, 'Insira um sobrenome válido'),
    email: z.string().email('Insira um endereço de e-mail válido'),
    password: z.string().min(8, 'Insira 8 ou mais caracteres'),
    confirmPassword: z.string().min(8, 'Insira 8 ou mais caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
