import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'

import { app } from '@/config'

const prisma = new PrismaClient()
export const auth = betterAuth({
  appName: app.name,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      console.log('Send verification email to:', user.email)
      console.log('Click the link to verify your email::', url)
    },
  },
  plugins: [nextCookies()],
})
