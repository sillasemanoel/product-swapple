'use server'

import { prisma } from '@/lib/prisma'

export async function listUsersAction(
  params: { skip?: number; take?: number } = {},
) {
  try {
    const { skip = 0, take = 50 } = params

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count(),
    ])

    return {
      status: 'success',
      message: 'Usuários listados.',
      users,
      total,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] listUsersAction:\x1b[0m', error)

    return {
      status: 'error',
      message: 'Não foi possível listar usuários.',
    }
  }
}
