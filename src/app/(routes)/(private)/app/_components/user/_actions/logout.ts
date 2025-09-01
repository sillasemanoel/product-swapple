'use server'

import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

export async function logoutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error('\x1b[35m[Error] logoutAction:\x1b[0m', error)

    return {
      success: false,
      message: 'Não foi possível sair da conta. Tente novamente mais tarde.',
    }
  }
}
