'use server'

import { headers } from 'next/headers'
import { APIError } from 'better-auth/api'
import z from 'zod'

import { auth } from '@/lib/auth'
import { normalizeEmail } from '@/utils/formatText'

import { loginData } from '../_data'
import { loginFormSchema } from '../_schemas/login-form'

export async function loginFormAction(values: z.infer<typeof loginFormSchema>) {
  try {
    const parsed = loginFormSchema.safeParse(values)

    if (!parsed.success) {
      return {
        success: false,
        message: loginData.form.messages.genericError,
      }
    }

    const email = normalizeEmail(parsed.data.email)
    const password = parsed.data.password

    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      headers: await headers(),
    })

    return {
      success: true,
      redirectTo: loginData.form.redirectTo,
    }
  } catch (error) {
    if (error instanceof APIError) {
      const status = error.status
      const statusCode = error.statusCode

      if (status === 'UNAUTHORIZED' || statusCode === 401) {
        return {
          success: false,
          message: loginData.form.messages.invalidCredentials,
        }
      }

      if (status === 'FORBIDDEN' || statusCode === 403) {
        return {
          success: false,
          message: loginData.form.messages.accountNotActivated,
        }
      }
    }

    return {
      success: false,
      message: loginData.form.messages.genericError,
    }
  }
}
