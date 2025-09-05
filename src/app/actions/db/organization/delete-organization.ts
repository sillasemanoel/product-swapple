'use server'

import { prisma } from '@/lib/prisma'

export async function deleteOrganizationAction(id: string) {
  try {
    const exists = await prisma.organization.findUnique({ where: { id } })
    if (!exists) {
      return {
        status: 'error',
        message: 'Organização não encontrada.',
      }
    }

    await prisma.organization.delete({ where: { id } })

    return {
      status: 'success',
      message: 'Organização removida.',
    }
  } catch (error) {
    console.error('\x1b[31m[Error] deleteOrganizationAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível remover a organização.',
    }
  }
}
