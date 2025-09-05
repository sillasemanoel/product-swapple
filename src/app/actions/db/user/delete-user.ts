'use server'

import { prisma } from '@/lib/prisma'

export async function deleteUserAction(id: string) {
  try {
    const exists = await prisma.user.findUnique({
      where: { id },
    })

    if (!exists) {
      return {
        status: 'error',
        message: 'Usuário não encontrado.',
      }
    }

    await prisma.user.delete({
      where: { id },
    })

    return {
      status: 'success',
      message: 'Usuário removido.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] deleteUserAction:\x1b[0m', error)

    return {
      status: 'error',
      message: 'Não foi possível remover o usuário.',
    }
  }
}
