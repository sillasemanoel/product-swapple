'use server'

import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

export async function getSessionAction() {
  try {
    const data = await auth.api.getSession({
      headers: await headers(),
    })

    if (!data?.session || !data?.user) {
      return {
        status: 'error' as const,
      }
    }

    return {
      status: 'success' as const,
      data,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] getSessionAction:\x1b[0m', error)

    return {
      status: 'error' as const,
    }
  }
}
