'use server'

import z from 'zod'

import { ROUTES } from '@/config'
import { auth } from '@/lib/auth'
import { normalizeEmail } from '@/utils/format-text'

import { formSchema } from '../_schemas/form'

export async function formAction(values: z.infer<typeof formSchema>) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success) {
      return {
        status: 'error' as const,
        message:
          'Não foi possível enviar o link de redefinição. Tente novamente mais tarde.',
      }
    }

    const email = normalizeEmail(parsed.data.email)
    const redirectTo = ROUTES.resetPassword

    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo,
      },
    })

    return {
      status: 'success' as const,
      message:
        'Enviamos um link para redefinir sua senha. Verifique seu e-mail.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] formAction:\x1b[0m', error)

    return {
      status: 'error' as const,
      message:
        'Não foi possível enviar o link de redefinição. Tente novamente mais tarde.',
    }
  }
}
