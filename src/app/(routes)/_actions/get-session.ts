'use server'

import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

export async function getSessionAction() {
  try {
    return await auth.api.getSession({
      headers: await headers(),
    })
  } catch (error) {
    console.error('\x1b[31m[Error] getSessionAction:\x1b[0m', error)

    return null
  }
}
