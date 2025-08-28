import { z } from 'zod'

import { registerData } from '../_data'

export const registerFormSchema = z
  .object({
    firstName: z.string().min(2, registerData.form.firstName.validation),
    lastName: z.string().min(2, registerData.form.lastName.validation),
    email: z.string().email(registerData.form.email.validation),
    password: z.string().min(8, registerData.form.password.validation),
    confirmPassword: z
      .string()
      .min(8, registerData.form.confirmPassword.validation),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: registerData.form.confirmPassword.mismatch,
    path: ['confirmPassword'],
  })
