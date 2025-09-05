'use server'

import { prisma } from '@/lib/prisma'

export async function updateUserAction(
  id: string,
  data: Partial<{
    name: string
    image: string | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }>,
) {
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

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    })

    return {
      status: 'success',
      message: 'Usuário atualizado.',
      user,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] updateUserAction:\x1b[0m', error)

    return {
      status: 'error',
      message: 'Não foi possível atualizar o usuário.',
    }
  }
}
