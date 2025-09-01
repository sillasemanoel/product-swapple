'use server'

import { headers } from 'next/headers'
import { APIError } from 'better-auth/api'
import z from 'zod'

import { routes } from '@/config'
import { auth } from '@/lib/auth'
import { normalizeEmail } from '@/utils/formatText'

import { formSchema } from '../_schemas/login-form'

export async function formAction(values: z.infer<typeof formSchema>) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success) {
      return {
        status: 'error',
        message:
          'Não foi possível entrar na conta. Tente novamente mais tarde.',
      }
    }

    const email = normalizeEmail(parsed.data.email)
    const password = parsed.data.password

    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
        callbackURL: routes.onboarding,
      },
      headers: await headers(),
    })

    return {
      status: 'success',
    }
  } catch (error) {
    console.error('\x1b[35m[Error] formAction:\x1b[0m', error)

    if (error instanceof APIError) {
      const status = error.status
      const statusCode = error.statusCode

      if (status === 'UNAUTHORIZED' || statusCode === 401) {
        return {
          status: 'warning',
          message: 'E-mail ou senha incorretos. Tente novamente.',
        }
      }

      if (status === 'FORBIDDEN' || statusCode === 403) {
        return {
          status: 'warning',
          message:
            'Sua conta ainda não foi verificada. Verifique seu e-mail para entrar em sua conta.',
        }
      }
    }

    return {
      status: 'error',
      message: 'Não foi possível entrar na conta. Tente novamente mais tarde.',
    }
  }
}
