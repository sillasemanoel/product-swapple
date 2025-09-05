'use server'

import { prisma } from '@/lib/prisma'

export async function listOrganizationsAction(
  params: { skip?: number; take?: number } = {},
) {
  try {
    const { skip = 0, take = 50 } = params

    const [organizations, total] = await Promise.all([
      prisma.organization.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.organization.count(),
    ])

    return {
      status: 'success',
      message: 'Organizações listadas.',
      organizations,
      total,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] listOrganizationsAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível listar organizações.',
    }
  }
}
