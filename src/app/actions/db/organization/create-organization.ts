'use server'

import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'

export async function createOrganizationAction(input: {
  id: string
  name: string
  slug?: string | null
  logo?: string | null
  plan?: string // não aceitar null; se omitido usa default do schema
  metadata?: string | null
}) {
  try {
    const data: Prisma.OrganizationCreateInput = {
      id: input.id,
      name: input.name,
      createdAt: new Date(),
      slug: input.slug ?? null,
      logo: input.logo ?? null,
      metadata: input.metadata ?? null,
      // plan é opcional porque tem default no schema; só atribui se veio
      ...(typeof input.plan !== 'undefined' ? { plan: input.plan } : {}),
      members: { create: [] },
      invitations: { create: [] },
    }

    const organization = await prisma.organization.create({ data })

    return {
      status: 'success',
      message: 'Organização criada.',
      organization,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] createOrganizationAction:\x1b[0m', error)
    return {
      status: 'error',
      message: 'Não foi possível criar a organização.',
    }
  }
}
