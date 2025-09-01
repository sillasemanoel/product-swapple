'use server'

import z from 'zod'

import { routes } from '@/config'
import { auth } from '@/lib/auth'
import { normalizeEmail } from '@/utils/formatText'

import { formSchema } from '../_schemas/form'

export async function formAction(values: z.infer<typeof formSchema>) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success) {
      return {
        status: 'error',
        message:
          'Não foi possível enviar o link de redefinição. Tente novamente mais tarde.',
      }
    }

    const email = normalizeEmail(parsed.data.email)

    await auth.api.requestPasswordReset({
      body: {
        email,
        redirectTo: routes.resetPassword,
      },
    })

    return {
      status: 'success',
      message:
        'Enviamos um link para redefinir sua senha. Verifique seu e-mail.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] formAction:\x1b[0m', error)

    return {
      status: 'error',
      message:
        'Não foi possível enviar o link de redefinição. Tente novamente mais tarde.',
    }
  }
}
