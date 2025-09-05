'use server'

import { headers } from 'next/headers'
import z from 'zod'

import { auth } from '@/lib/auth'
import { normalizeName, normalizeSlug } from '@/utils/format-text'

import { formSchema } from '../_schemas/form'

export async function formAction(values: z.infer<typeof formSchema>) {
  try {
    const parsed = formSchema.safeParse(values)

    if (!parsed.success) {
      return {
        status: 'error' as const,
        message:
          'Não foi possível cadastrar a organização. Tente novamente mais tarde.',
      }
    }

    const resultSession = await auth.api.getSession({
      headers: await headers(),
    })

    if (!resultSession?.session || !resultSession?.user) {
      return {
        status: 'error' as const,
        message:
          'Não foi possível cadastrar a organização. Tente novamente mais tarde.',
      }
    }

    const name = normalizeName(parsed.data.name)
    const slug = normalizeSlug(parsed.data.slug)
    const userId = resultSession?.user.id
    const keepCurrentActiveOrganization = false

    await auth.api.createOrganization({
      body: {
        name,
        slug,
        userId,
        keepCurrentActiveOrganization,
      },
      headers: await headers(),
    })

    return {
      status: 'success' as const,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] resetPasswordFormAction:\x1b[0m', error)

    return {
      status: 'error' as const,
      message:
        'Não foi possível cadastrar a organização. Tente novamente mais tarde.',
    }
  }
}
