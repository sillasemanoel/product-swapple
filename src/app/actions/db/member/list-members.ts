'use server'

import { prisma } from '@/lib/prisma'

export async function listMembersAction(
  params: {
    skip?: number
    take?: number
    organizationId?: string
    userId?: string
  } = {},
) {
  try {
    const { skip = 0, take = 50, organizationId, userId } = params

    const where = {
      ...(organizationId ? { organizationId } : {}),
      ...(userId ? { userId } : {}),
    }

    const [members, total] = await Promise.all([
      prisma.member.findMany({
        skip,
        take,
        where,
        orderBy: { createdAt: 'desc' },
        include: { user: true, organization: true },
      }),
      prisma.member.count({ where }),
    ])

    return {
      status: 'success',
      message: 'Membros listados.',
      members,
      total,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] listMembersAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível listar membros.',
    }
  }
}
