'use server'

import z from 'zod'

import { forgotPasswordData } from '../_data'
import { forgotPasswordFormSchema } from '../_schemas/forgot-password-form'

export async function forgotPasswordFormAction(
  values: z.infer<typeof forgotPasswordFormSchema>,
) {
  try {
    const parsed = forgotPasswordFormSchema.safeParse(values)

    if (!parsed.success) {
      return {
        success: false,
        message: forgotPasswordData.form.messages.genericError,
      }
    }

    return {
      success: true,
      message: forgotPasswordData.form.messages.success,
      redirectTo: forgotPasswordData.form.redirectTo,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] forgotPasswordFormAction:\x1b[0m', error)

    return {
      success: false,
      message: forgotPasswordData.form.messages.genericError,
    }
  }
}
