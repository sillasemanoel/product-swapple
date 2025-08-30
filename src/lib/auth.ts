import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'

import { app } from '@/config'
import { sendAction } from '@/app/actions/resend/send'
import { VerificationEmail } from '@/components/mail/verification-email'
import { ResetPassword } from '@/components/mail/reset-password'
import { PasswordReset } from '@/components/mail/password-reset'

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
    sendResetPassword: async ({ user, url }) => {
      await sendAction({
        to: user.email,
        subject: 'Redefina sua senha',
        react: ResetPassword({ url }),
      })
    },
    onPasswordReset: async ({ user }) => {
      await sendAction({
        to: user.email,
        subject: 'Senha redefinida com sucesso',
        react: PasswordReset({ name: user.name }),
      })
    },
  },
  emailVerification: {
    sendOnSignIn: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendAction({
        to: user.email,
        subject: 'Verifique seu endereço de e-mail',
        react: VerificationEmail({ url }),
      })
    },
  },
  plugins: [nextCookies()],
})
