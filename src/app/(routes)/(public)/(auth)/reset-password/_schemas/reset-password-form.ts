import { z } from 'zod'

import { resetPasswordData } from '../_data'

export const resetPasswordFormSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, resetPasswordData.form.newPassword.validation),
    confirmPassword: z
      .string()
      .min(8, resetPasswordData.form.confirmPassword.validation),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: resetPasswordData.form.confirmPassword.mismatch,
    path: ['confirmPassword'],
  })
