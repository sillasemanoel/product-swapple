'use server'

import z from 'zod'
import { APIError } from 'better-auth/api'

import { auth } from '@/lib/auth'
import { normalizePersonName, normalizeEmail } from '@/utils/formatText'

import { registerData } from '../_data'
import { registerFormSchema } from '../_schemas/register-form'

export async function registerFormAction(
  values: z.infer<typeof registerFormSchema>,
) {
  try {
    const parsed = registerFormSchema.safeParse(values)

    if (!parsed.success) {
      return {
        success: false,
        message: registerData.form.messages.genericError,
      }
    }

    const nameRaw = `${parsed.data.firstName} ${parsed.data.lastName}`
    const name = normalizePersonName(nameRaw)
    const email = normalizeEmail(parsed.data.email)
    const password = parsed.data.password

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: registerData.form.callback,
      },
    })

    return {
      success: true,
      message: registerData.form.messages.success,
      redirectTo: registerData.form.redirectTo,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] resetPasswordFormAction:\x1b[0m', error)

    if (error instanceof APIError) {
      const status = error.status
      const statusCode = error.statusCode

      if (status === 'UNPROCESSABLE_ENTITY' || statusCode === 422) {
        return {
          success: false,
          message: registerData.form.messages.emailInUse,
        }
      }
    }

    return {
      success: false,
      message: registerData.form.messages.genericError,
    }
  }
}
