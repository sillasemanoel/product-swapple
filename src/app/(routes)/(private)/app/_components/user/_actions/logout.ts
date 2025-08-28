'use server'

import { headers } from 'next/headers'

import { auth } from '@/lib/auth'

import { appData } from '../../../_data'

export async function logoutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    })

    return {
      success: true,
      redirectTo: appData.logout.redirectTo,
    }
  } catch (error) {
    console.error('\x1b[35m[Error] logoutAction:\x1b[0m', error)

    return {
      success: false,
      message: appData.logout.messages.genericError,
    }
  }
}
