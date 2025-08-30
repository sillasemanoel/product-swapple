'use server'

import z from 'zod'

import { auth } from '@/lib/auth'
import { normalizeEmail } from '@/utils/formatText'

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

    const email = normalizeEmail(parsed.data.email)

    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: forgotPasswordData.form.callback,
      },
    })

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
