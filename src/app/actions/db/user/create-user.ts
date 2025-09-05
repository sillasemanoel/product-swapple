'use server'

import { prisma } from '@/lib/prisma'

export async function createUserAction(input: {
  id: string
  name: string
  email: string
  emailVerified?: boolean
  image?: string | null
  role?: string | null
}) {
  try {
    const user = await prisma.user.create({
      data: {
        id: input.id,
        name: input.name,
        email: input.email,
        emailVerified: input.emailVerified ?? false,
        image: input.image,
        role: input.role,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    return {
      status: 'success',
      message: 'Usuário criado.',
      user,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] createUserAction:\x1b[0m', error)

    return {
      status: 'error',
      message: 'Não foi possível criar o usuário.',
    }
  }
}
