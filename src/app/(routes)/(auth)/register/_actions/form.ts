'use server'

import z from 'zod'
import { APIError } from 'better-auth/api'

import { ROUTES } from '@/config'
import { auth } from '@/lib/auth'
import { normalizeName, normalizeEmail } from '@/utils/format-text'

import { formSchema } from '../_schemas/form'

export async function formAction(values: z.infer<typeof formSchema>) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success) {
      return {
        status: 'error' as const,
        message:
          'Não foi possível cadastrar a conta. Tente novamente mais tarde.',
      }
    }

    const name = normalizeName(
      `${parsed.data.firstName} ${parsed.data.lastName}`,
    )
    const email = normalizeEmail(parsed.data.email)
    const password = parsed.data.password
    const callbackURL = ROUTES.onboarding

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL,
      },
    })

    return {
      status: 'success' as const,
      message:
        'Conta criada com sucesso. Verifique seu e-mail para entrar em sua conta.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] resetPasswordFormAction:\x1b[0m', error)

    if (error instanceof APIError) {
      const status = error.status
      const statusCode = error.statusCode

      if (status === 'UNPROCESSABLE_ENTITY' || statusCode === 422) {
        return {
          status: 'warning' as const,
          message:
            'Este e-mail já está cadastrado. Tente outro ou entre em sua conta.',
        }
      }
    }

    return {
      status: 'error' as const,
      message:
        'Não foi possível cadastrar a conta. Tente novamente mais tarde.',
    }
  }
}
