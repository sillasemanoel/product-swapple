'use server'

import z from 'zod'

import { auth } from '@/lib/auth'

import { formSchema } from '../_schemas/form'

export async function formAction(
  values: z.infer<typeof formSchema> & { token?: string },
) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success || !values.token) {
      return {
        status: 'error' as const,
        message:
          'Não foi possível redefinir a senha. Tente novamente mais tarde.',
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
      status: 'success' as const,
      message:
        'Senha redefinida com sucesso. Agora você pode entrar em sua conta com a nova senha.',
    }
  } catch (error) {
    console.error('\x1b[35m[Error] formAction:\x1b[0m', error)

    return {
      status: 'error' as const,
      message:
        'Não foi possível redefinir a senha. Tente novamente mais tarde.',
    }
  }
}
