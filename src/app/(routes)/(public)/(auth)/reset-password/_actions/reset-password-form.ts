'use server'

import z from 'zod'

import { resetPasswordData } from '../_data'
import { resetPasswordFormSchema } from '../_schemas/reset-password-form'

export async function resetPasswordFormAction(
  values: z.infer<typeof resetPasswordFormSchema>,
) {
  try {
    const parsed = resetPasswordFormSchema.safeParse(values)

    if (!parsed.success) {
      return {
        success: false,
        message: resetPasswordData.form.messages.genericError,
      }
    }

    return {
      success: true,
      message: resetPasswordData.form.messages.success,
      redirectTo: resetPasswordData.form.redirectTo,
    }
  } catch (error) {
    console.error('[Error] resetPasswordFormAction: ', error)

    return {
      success: false,
      message: resetPasswordData.form.messages.genericError,
    }
  }
}
