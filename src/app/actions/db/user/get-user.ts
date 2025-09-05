'use server'

import { prisma } from '@/lib/prisma'

export async function getUserAction(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      return {
        status: 'error',
        message: 'Usuário não encontrado.',
      }
    }

    return {
      status: 'success',
      message: 'Usuário encontrado.',
      user,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] getUserAction:\x1b[0m', error)

    return {
      status: 'error',
      message: 'Não foi possível encontrar o usuário.',
    }
  }
}
