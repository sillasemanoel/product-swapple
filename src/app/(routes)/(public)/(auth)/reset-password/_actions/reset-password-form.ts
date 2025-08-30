'use server'

import z from 'zod'

import { auth } from '@/lib/auth'

import { resetPasswordData } from '../_data'
import { resetPasswordFormSchema } from '../_schemas/reset-password-form'

export async function resetPasswordFormAction(
  values: z.infer<typeof resetPasswordFormSchema> & { token?: string },
) {
  try {
    const parsed = resetPasswordFormSchema.safeParse(values)

    if (!parsed.success || !values.token) {
      return {
        success: false,
        message: resetPasswordData.form.messages.genericError,
      }
    }

    const newPassword = parsed.data.newPassword
    const token = values.token

    await auth.api.resetPassword({
      body: {
        newPassword,
        token,
      },
    })

    return {
      success: true,
      message: resetPasswordData.form.messages.success,
      redirectTo: resetPasswordData.form.redirectTo,
    }
  } catch (error) {
    console.error('\x1b[35m[Error] resetPasswordFormAction:\x1b[0m', error)

    return {
      success: false,
      message: resetPasswordData.form.messages.genericError,
    }
  }
}
