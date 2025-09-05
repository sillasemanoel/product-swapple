'use server'

import { prisma } from '@/lib/prisma'

export async function deleteMemberAction(id: string) {
  try {
    const exists = await prisma.member.findUnique({ where: { id } })
    if (!exists) {
      return { status: 'error', message: 'Membro não encontrado.' }
    }

    await prisma.member.delete({ where: { id } })

    return {
      status: 'success',
      message: 'Membro removido.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] deleteMemberAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível remover o membro.',
    }
  }
}
