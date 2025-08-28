import { z } from 'zod'

import { forgotPasswordData } from '../_data'

export const forgotPasswordFormSchema = z.object({
  email: z.string().email(forgotPasswordData.form.email.validation),
})
