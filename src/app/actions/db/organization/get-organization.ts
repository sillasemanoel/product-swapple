' use server'

import { prisma } from '@/lib/prisma'

export async function getOrganizationAction(id: string) {
  try {
    const organization = await prisma.organization.findUnique({
      where: { id },
    })

    if (!organization) {
      return {
        status: 'error',
        message: 'Organização não encontrada.',
      }
    }

    return {
      status: 'success',
      message: 'Organização encontrada.',
      organization,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] getOrganizationAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível buscar a organização.',
    }
  }
}
