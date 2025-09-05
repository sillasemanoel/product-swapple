'use server'

import { prisma } from '@/lib/prisma'

export async function getMemberAction(id: string) {
  try {
    const member = await prisma.member.findUnique({
      where: { id },
      include: { user: true, organization: true },
    })

    if (!member) {
      return {
        status: 'error',
        message: 'Membro não encontrado.',
      }
    }

    return {
      status: 'success',
      message: 'Membro encontrado.',
      member,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] getMemberAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível buscar o membro.',
    }
  }
}
