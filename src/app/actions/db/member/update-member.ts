'use server'

import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'

export async function updateMemberAction(
  id: string,
  data: Partial<{
    role: string
  }>,
) {
  try {
    const exists = await prisma.member.findUnique({ where: { id } })
    if (!exists) {
      return { status: 'error', message: 'Membro não encontrado.' }
    }

    const updateData: Prisma.MemberUpdateInput = {
      ...(typeof data.role !== 'undefined' ? { role: data.role } : {}),
    }

    const member = await prisma.member.update({
      where: { id },
      data: updateData,
      include: { user: true, organization: true },
    })

    return {
      status: 'success',
      message: 'Membro atualizado.',
      member,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] updateMemberAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível atualizar o membro.',
    }
  }
}
