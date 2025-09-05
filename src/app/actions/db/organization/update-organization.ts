'use server'

import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'

export async function updateOrganizationAction(
  id: string,
  data: Partial<{
    name: string
    slug: string | null
    logo: string | null
    plan: string // não aceitar null
    metadata: string | null
  }>,
) {
  try {
    const exists = await prisma.organization.findUnique({ where: { id } })
    if (!exists) {
      return {
        status: 'error',
        message: 'Organização não encontrada.',
      }
    }

    const updateData: Prisma.OrganizationUpdateInput = {
      ...(typeof data.name !== 'undefined' ? { name: data.name } : {}),
      ...(typeof data.slug !== 'undefined' ? { slug: data.slug ?? null } : {}),
      ...(typeof data.logo !== 'undefined' ? { logo: data.logo ?? null } : {}),
      ...(typeof data.metadata !== 'undefined'
        ? { metadata: data.metadata ?? null }
        : {}),
      ...(typeof data.plan !== 'undefined' ? { plan: data.plan } : {}),
    }

    const organization = await prisma.organization.update({
      where: { id },
      data: updateData,
    })

    return {
      status: 'success',
      message: 'Organização atualizada.',
      organization,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] updateOrganizationAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível atualizar a organização.',
    }
  }
}
