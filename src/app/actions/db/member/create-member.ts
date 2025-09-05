'use server'

import { prisma } from '@/lib/prisma'

export async function createMemberAction(input: {
  id: string
  organizationId: string
  userId: string
  role?: string // não aceitar null
}) {
  try {
    const [org, user] = await Promise.all([
      prisma.organization.findUnique({ where: { id: input.organizationId } }),
      prisma.user.findUnique({ where: { id: input.userId } }),
    ])

    if (!org) {
      return { status: 'error', message: 'Organização inválida.' }
    }
    if (!user) {
      return { status: 'error', message: 'Usuário inválido.' }
    }

    const member = await prisma.member.create({
      data: {
        id: input.id,
        organizationId: input.organizationId,
        userId: input.userId,
        role: input.role ?? undefined,
        createdAt: new Date(),
      },
      include: { user: true, organization: true },
    })

    return {
      status: 'success',
      message: 'Membro criado.',
      member,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] createMemberAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível criar o membro.',
    }
  }
}
