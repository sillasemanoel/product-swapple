import { z } from 'zod'

import { loginData } from '../_data'

export const loginFormSchema = z.object({
  email: z.string().email(loginData.form.email.validation),
  password: z.string().min(8, loginData.form.password.validation),
})
